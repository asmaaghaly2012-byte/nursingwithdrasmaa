// Weekly posts ("The Weekly Round"). Newest post goes at the TOP of the list.
//
// To add a post, copy this block, paste it right after "const POSTS = [", and fill it in:
//
//   {
//     date: "2026-11-07",
//     type: "memory",          // memory | student | publication | research
//     en: { title: "English title", body: `First paragraph.
//
// Second paragraph.` },
//     ar: { title: "العنوان بالعربية", body: `الفقرة الأولى.
//
// الفقرة الثانية.` }
//   },
//
// You can leave out "en" or "ar" if the post is in one language only.
const POSTS = [
];

const POST_TYPES = {
  en: { memory: "Memories", student: "Student stories", publication: "Publications", research: "Research" },
  ar: { memory: "ذكريات", student: "قصص الطلاب", publication: "منشورات", research: "أبحاث" }
};

function postId(p) { return "post-" + p.date; }

function postText(p, lang) {
  const own = p[lang];
  const other = p[lang === "ar" ? "en" : "ar"];
  return own ? { ...own, lang } : { ...other, lang: lang === "ar" ? "en" : "ar" };
}

function formatDate(d, lang) {
  return new Date(d + "T00:00:00").toLocaleDateString(lang === "ar" ? "ar-EG" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
}

const escHtml = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Home page: the three newest posts as cards linking to the full post.
function initLatestPosts(lang, postsPage, labels) {
  const box = document.getElementById("latest-posts");
  if (!POSTS.length) { box.innerHTML = `<p class="intro">${labels.soon}</p>`; return; }
  box.innerHTML = POSTS.slice(0, 3).map(p => {
    const t = postText(p, lang);
    const excerpt = t.body.replace(/\s+/g, " ").slice(0, 180);
    return `<a class="card post-card" href="${postsPage}#${postId(p)}">
      <span class="tag post-type">${POST_TYPES[lang][p.type] || ""}</span>
      <h3 lang="${t.lang}" dir="${t.lang === "ar" ? "rtl" : "ltr"}">${escHtml(t.title)}</h3>
      <p lang="${t.lang}" dir="${t.lang === "ar" ? "rtl" : "ltr"}">${escHtml(excerpt)}${t.body.length > 180 ? "…" : ""}</p>
      <span class="post-date">${formatDate(p.date, lang)} · ${labels.more}</span>
    </a>`;
  }).join("");
}

// Posts page: every post in full, with a filter by type.
function initAllPosts(lang, labels) {
  const list = document.getElementById("all-posts");
  const buttons = document.querySelectorAll(".post-filter");
  function render(type) {
    buttons.forEach(b => b.setAttribute("aria-pressed", b.dataset.type === type ? "true" : "false"));
    const items = POSTS.filter(p => type === "all" || p.type === type);
    list.innerHTML = items.length ? items.map(p => {
      const t = postText(p, lang);
      const paras = t.body.split(/\n\s*\n/).map(x => `<p>${escHtml(x.trim())}</p>`).join("");
      return `<article class="card post" id="${postId(p)}">
        <span class="tag post-type">${POST_TYPES[lang][p.type] || ""}</span>
        <span class="post-date">${formatDate(p.date, lang)}</span>
        <div lang="${t.lang}" dir="${t.lang === "ar" ? "rtl" : "ltr"}"><h3>${escHtml(t.title)}</h3>${paras}</div>
      </article>`;
    }).join("") : `<p class="intro">${POSTS.length ? labels.none : labels.soon}</p>`;
  }
  buttons.forEach(b => b.addEventListener("click", () => render(b.dataset.type)));
  render("all");
  if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
}
