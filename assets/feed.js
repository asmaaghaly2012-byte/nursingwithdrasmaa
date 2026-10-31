// Live list of the newest PubMed articles on a few nursing topics.
// Uses NCBI's free E-utilities API straight from the browser; results are cached
// per visitor for an hour so repeat visits stay fast and polite to PubMed.
const FEED_TOPICS = {
  W: '(nurs*[tiab] OR midwi*[tiab]) AND (pregnan*[tiab] OR maternal[tiab] OR postpartum[tiab] OR labour[tiab] OR labor[tiab] OR "women\'s health"[tiab] OR menopaus*[tiab] OR breastfeed*[tiab])',
  E: '("nursing students"[tiab] OR "nursing education"[tiab] OR "nurse educators"[tiab] OR (simulation[tiab] AND nurs*[tiab]))',
  S: '("patient safety"[tiab] OR "infection prevention"[tiab] OR "medication error*"[tiab] OR "infection control"[tiab]) AND nurs*[tiab]',
  M: 'nurs*[tiab] AND ("Saudi Arabia"[tiab] OR Saudi[tiab] OR Egypt*[tiab] OR "Middle East"[tiab] OR "Gulf"[tiab] OR "Arab"[tiab])'
};
const EUTILS = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/";

async function fetchTopic(key) {
  const cacheKey = "feed-" + key;
  try {
    const hit = JSON.parse(sessionStorage.getItem(cacheKey) || "null");
    if (hit && Date.now() - hit.t < 3600e3) return hit.items;
  } catch (e) {}

  const term = `(${FEED_TOPICS[key]}) AND hasabstract AND ("last 60 days"[edat])`;
  // Default sort is "most recent": newest added to PubMed first.
  const search = await fetch(`${EUTILS}esearch.fcgi?db=pubmed&retmode=json&retmax=12&term=${encodeURIComponent(term)}`).then(r => r.json());
  const ids = search.esearchresult.idlist;
  if (!ids.length) return [];
  const sum = await fetch(`${EUTILS}esummary.fcgi?db=pubmed&retmode=json&id=${ids.join(",")}`).then(r => r.json());
  const items = ids.map(id => sum.result[id]).filter(Boolean).map(d => ({
    id: d.uid,
    title: d.title,
    journal: d.fulljournalname || d.source,
    date: d.pubdate,
    authors: (d.authors || []).slice(0, 3).map(a => a.name).join(", ") + ((d.authors || []).length > 3 ? ", et al." : "")
  }));
  try { sessionStorage.setItem(cacheKey, JSON.stringify({ t: Date.now(), items })); } catch (e) {}
  return items;
}

function initFeed(labels) {
  const list = document.getElementById("feed");
  const status = document.getElementById("feed-status");
  const buttons = document.querySelectorAll(".feed-filter");
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  async function show(key) {
    buttons.forEach(b => b.setAttribute("aria-pressed", b.dataset.topic === key ? "true" : "false"));
    status.textContent = labels.loading;
    list.innerHTML = "";
    try {
      const items = await fetchTopic(key);
      status.textContent = items.length ? labels.source : labels.empty;
      list.innerHTML = items.map(p => `
        <li class="feed-item">
          <a class="ft" href="https://pubmed.ncbi.nlm.nih.gov/${p.id}/" target="_blank" rel="noopener">${esc(p.title)}</a>
          <p class="fm">${esc(p.authors)}</p>
          <p class="fm"><i>${esc(p.journal)}</i> · ${esc(p.date)}</p>
        </li>`).join("");
    } catch (e) {
      status.innerHTML = labels.error;
    }
  }

  buttons.forEach(b => b.addEventListener("click", () => show(b.dataset.topic)));
  show("W");
}
