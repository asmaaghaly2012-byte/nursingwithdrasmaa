// Publications list shared by the English and Arabic pages.
// topic: W = women's & maternal health, E = nursing education, S = patient safety & community health
// type: article | conference | preprint | chapter
const PUBLICATIONS = [
  { y: 2026, topic: "E", type: "article", authors: "<b>Ghaly, A. S.</b>, Roma, N. Z. H., Abunab, H. Y., & Alam, T. H. M.", title: "Impact of virtual simulation on nursing students’ preeclampsia knowledge, satisfaction, and self-confidence", venue: "Teaching and Learning in Nursing (Elsevier)" },
  { y: 2026, topic: "W", type: "article", authors: "Almefarfish, A., Alomar, N., Salameh, B., Huwaikem, M., <b>Ghaly, A. S.</b>, Ali, A. S., Alsoqae, A. M., & Mousa, O.", title: "Quality of life among women with disabilities and associated factors: A cross-sectional study", venue: "Women’s Health, 22 (SAGE)" },
  { y: 2026, topic: "W", type: "article", authors: "El-Kurdy, R., El-Ashry, A. M., Hassan, S. I., Samir, K., & <b>Ghaly, A. S.</b>", title: "Efficacy of virtual reality glasses on anxiety, physiologic parameters, and satisfaction among high-risk pregnant women undergoing nonstress testing: A quasi-experimental study", venue: "Nursing for Women’s Health (Elsevier)" },
  { y: 2026, topic: "W", type: "article", authors: "Belal, S., Abobaker, R. M., <b>Ghaly, A. S.</b>, et al.", title: "Effect of planned nursing educational program on female adolescents’ knowledge and perception regarding early marriage", venue: "International Journal of Drug Delivery Technology, 16", doi: "10.25258/ijddt.16.43s.101" },
  { y: 2025, topic: "W", type: "article", authors: "El-Kurdy, R., <b>Ghaly, A. S.</b>, Shiba, H. A. A., Awad, N. M., & Mohammed, S. F.", title: "Effect of applying emotional freedom technique on fear and anxiety among women undergoing hysterectomy", venue: "Egyptian Journal of Health Care, 16(4), 1031–1041", doi: "10.21608/ejhc.2025.476962" },
  { y: 2025, topic: "E", type: "article", authors: "<b>Ghaly, A. S.</b>, Altharman, H. A., Alduhailan, D. M., Alanzi, R. F., Alhumud, Z. H., Alhadari, A. J., Alhamoud, M. H., & Elcokany, N. M.", title: "The effect of virtual simulation on nursing students’ achievements, satisfaction, and self-confidence: A single group pretest–posttest study", venue: "Nursing Forum", doi: "10.1155/nuf/9944693" },
  { y: 2025, topic: "E", type: "article", authors: "Dogham, R. S., Elcokany, N. M., <b>Ghaly, A. S.</b>, et al.", title: "Emotional intelligence and reflective thinking: A synergistic approach in nursing education", venue: "BMC Nursing, 24, 548", doi: "10.1186/s12912-025-03175-w" },
  { y: 2025, topic: "S", type: "article", authors: "Alanazi, R. S., <b>Ghaly, A. S.</b>, & Belal, S.", title: "Bridging the gap: Exploring ergonomic knowledge and practices for preventing work-related musculoskeletal disorders among nurses in Riyadh City", venue: "Journal of International Crisis and Risk Communication Research, 150–167", doi: "10.63278/jicrcr.vi.2966" },
  { y: 2024, topic: "S", type: "article", authors: "Mousa, O., Salameh, B., <b>Ghaly, A. S.</b>, Hasan, M. G., Almefarfesh, A. A., & Kumari, S.", title: "Examining nursing students’ awareness of various medical errors during clinical internships to enhance patient safety: A multi-center cross-sectional study", venue: "PLoS ONE, 19(12), e0311681", doi: "10.1371/journal.pone.0311681" },
  { y: 2024, topic: "E", type: "article", authors: "Dogham, R. S., Ali, H. F. M., <b>Ghaly, A. S.</b>, Elcokany, N. M., Seweid, M. M., & El-Ashry, A. M.", title: "Deciphering the influence: Academic stress and its role in shaping learning approaches among nursing students: A cross-sectional study", venue: "BMC Nursing, 23(1), 249", doi: "10.1186/s12912-024-01885-1" },
  { y: 2024, topic: "E", type: "article", authors: "Elsayed, S. M., Dogham, R. S., <b>Ghaly, A. S.</b>, & Elcokany, N. M.", title: "The effect of mnemonic learning strategy on critical care nursing students’ tracheal suction skill acquisition", venue: "Nursing Forum, 2024, 1–8", doi: "10.1155/2024/7482877" },
  { y: 2024, topic: "W", type: "article", authors: "Mousa, O., Salameh, B., Alqahtani, M., David, M., Almefarfesh, A. A., Al Duhilan, D., <b>Ghaly, A. S.</b>, Alsadaan, N., Reshia, F. A. A., & Alsandal, Z. M. A.", title: "Women’s attitudes, prevalence, related factors, and perceived barriers of birth companionship in Saudi Arabia", venue: "Women’s Health (London), 20", doi: "10.1177/17455057231224553" },
  { y: 2024, topic: "E", type: "preprint", authors: "Aljanabi, H. M., Belal, S., Breboneria, B. J., et al.", title: "Using digital technologies to promote nursing students’ learning in the connected classroom", venue: "Research Square (preprint)", doi: "10.21203/rs.3.rs-4289285/v1" },
  { y: 2023, topic: "S", type: "article", authors: "Shafi, S., Kausar, N., Al Jaber, N., Yahia Khelif, B., Thirunavukkarasu, V., <b>Ghaly, A. S.</b>, Kumari, S., Al-Arfaj, A. M. A., Al Hassan, G. T., Al Hulaimi, R. A., & Arif", title: "Knowledge, attitude, and practice of iodine intake in community Al-Ahsa region, Saudi Arabia", venue: "NeuroQuantology, 21(2), 762–772", doi: "10.48047/NQ.2023.21.2.NQ23076" },
  { y: 2023, topic: "W", type: "chapter", authors: "<b>Ghaly, A. S.</b> (co-author)", title: "Effectiveness of nursing post-discharge guideline on life quality among menopausal women undergoing uterine prolapse surgery", venue: "In Current Innovations in Disease and Health Research (book chapter)" },
  { y: 2022, topic: "E", type: "article", authors: "Dogham, R. S., Elcokany, N. M., <b>Ghaly, A. S.</b>, Dawood, T. M. A., Aldakheel, F. M., Llaguno, M. B. B., & Mohsen, D. M.", title: "Self-directed learning readiness and online learning self-efficacy among undergraduate nursing students", venue: "International Journal of Africa Nursing Sciences, 17, 100490" },
  { y: 2022, topic: "S", type: "article", authors: "Dogham, R. S., Elcokany, N. M., <b>Ghaly, A. S.</b>, et al.", title: "Nurses’ knowledge and attitudes towards palliative care", venue: "IOSR Journal of Nursing and Health Science, 11(6), 09–16" },
  { y: 2022, topic: "S", type: "article", authors: "Elsayed, S. M., & <b>Ghaly, A. S.</b>", title: "Critical care nurses’ knowledge, practices, and attitudes regarding the ICU configuration prevention measures in the COVID-19 era", venue: "IOSR Journal of Nursing and Health Science, 11(1), 07–13" },
  { y: 2022, topic: "E", type: "conference", authors: "Dogham, R. S., Elcokany, N. M., <b>Ghaly, A. S.</b>, & Sweied, M. M.", title: "Nursing students’ perception regarding remote oral exam", venue: "Conference: Education via Distance Learning and Other Pedagogical Challenges" },
  { y: 2021, topic: "W", type: "article", authors: "<b>Ghaly, A. S.</b>, & Mahmoud Shoukhba, N.", title: "Factors determining choice of delivery place among women of childbearing age: A cross-sectional study", venue: "Assiut Scientific Nursing Journal, 9(24), 179–190", doi: "10.21608/asnj.2021.63248.1131" },
  { y: 2021, topic: "W", type: "article", authors: "<b>Ghaly, A. S.</b>, & Saad Mahmoud, N.", title: "Maternity nurses’ knowledge, practices and attitudes regarding the preventive measures of COVID-19 pandemic", venue: "Egyptian Journal of Health Care, 12(4), 899–910", doi: "10.21608/ejhc.2021.204531" },
  { y: 2021, topic: "S", type: "article", authors: "Mousa, O., Sayed, A., Belal, S., <b>Ghaly, A. S.</b>, Alsoqair, N. Y., & Algharib, F. M.", title: "Adolescent food habits and its association with overweight and obesity among female students in Eastern Region of Saudi Arabia", venue: "International Journal of Nursing Education, 13(2), 78–86", doi: "10.37506/ijone.v13i2.14637" },
  { y: 2021, topic: "S", type: "article", authors: "Abd Elmoniem Syan, S., Galeon Ocampo, J., Aquino Abundo, R., Said Gouda Ahmed, S., & <b>Ghaly, A. S.</b>", title: "Effect of storytelling versus cartoon on pain and fear relief among children undergoing venipuncture", venue: "Egyptian Journal of Health Care, 12(4), 399–408", doi: "10.21608/ejhc.2021.200063" },
  { y: 2020, topic: "E", type: "article", authors: "Abdelhafez, A. I., Elcokany, N. M., <b>Ghaly, A. S.</b>, & Akhter, F.", title: "Learning environment stressors and coping styles among nursing students", venue: "International Journal of Nursing Education, 12(4), 6–14" },
  { y: 2020, topic: "W", type: "article", authors: "<b>Ghaly, A. S.</b>, Mohamed, N., & Ahmed, A. H.", title: "Effect of wristband on post-cesarean nausea and vomiting", venue: "IOSR Journal of Nursing and Health Science, 9(1), 64–77" },
  { y: 2020, topic: "W", type: "article", authors: "<b>Ghaly, A. S.</b>, Mohamed, N., & Ahmed, A. H.", title: "Perception of women towards contraceptive methods: Using health belief model", venue: "International Journal of Advanced Nursing Studies, 9(1), 1–14" },
  { y: 2020, topic: "E", type: "article", authors: "<b>Ghaly, A. S.</b>, Alam, T. H., & Ahmed, A. H.", title: "Effect of debriefing learning strategy on nursing students’ knowledge and performance", venue: "IOSR Journal of Nursing and Health Science, 9(1), 08–18" },
  { y: 2019, topic: "W", type: "article", authors: "<b>Ghaly, A. S.</b>, & Mohamed, N. M.", title: "Dietary knowledge, practices and adequacy among Bedouin pregnant women", venue: "International Journal of Nursing, 6(2), 15–20" },
  { y: 2019, topic: "W", type: "article", authors: "Ismail, N. I., Kamal, S., & <b>Ghaly, A. S.</b>", title: "Effect of breast milk, peppermint water and breast shell on treatment of traumatic nipple in puerperal lactating mothers", venue: "International Journal of Novel Research in Healthcare and Nursing, 6(3), 692–709" },
  { y: 2019, topic: "S", type: "article", authors: "Mohsen, D., Dogham, R., & <b>Ghaly, A. S.</b>", title: "Needle stick and sharp objects injuries infection prevention and control guidelines among health care students: Descriptive, cross-sectional study", venue: "International Journal of Innovative Research in Medical Science, 4(8)" },
  { y: 2019, topic: "W", type: "article", authors: "<b>Ghaly, A. S.</b>, Yosef, H. I., & Rizk, S. A.", title: "Self-care practices utilized by Yemeni pregnant women in Hodeida City", venue: "IOSR Journal of Nursing and Health Science, 8(4), 32–50" },
  { y: 2019, topic: "W", type: "article", authors: "<b>Ghaly, A. S.</b>, Yasin, S. T., & Issa, R.", title: "Intimate partner violence against infertile women", venue: "IOSR Journal of Nursing and Health Science, 8(4), 10–25" },
  { y: 2019, topic: "W", type: "article", authors: "<b>Ghaly, A. S.</b>, Salah, R., & Essa, H.", title: "The effect of using video-based training on university students’ knowledge and attitude regarding breast self-examination", venue: "International Journal of Novel Research in Healthcare and Nursing, 6(2), 1417–1425" }
];

// Renders the list with topic, year and search filters.
// labels comes from the page so each language shows its own wording.
function initPublications(labels) {
  const list = document.getElementById("pubs");
  const count = document.getElementById("pub-count");
  const yearSel = document.getElementById("pub-year");
  const search = document.getElementById("pub-search");
  const buttons = document.querySelectorAll(".filter");
  let topic = "all";

  [...new Set(PUBLICATIONS.map(p => p.y))].forEach(y => {
    const o = document.createElement("option");
    o.value = y; o.textContent = y;
    yearSel.appendChild(o);
  });

  function render() {
    const q = search.value.trim().toLowerCase();
    const items = PUBLICATIONS.filter(p =>
      (topic === "all" || p.topic === topic) &&
      (yearSel.value === "all" || String(p.y) === yearSel.value) &&
      (!q || (p.title + " " + p.authors + " " + p.venue).toLowerCase().includes(q))
    );
    list.innerHTML = items.map(p => `
      <li class="pub">
        <div class="yr">${p.y}</div>
        <div>
          <p class="t">${p.doi ? `<a href="https://doi.org/${p.doi}" target="_blank" rel="noopener">${p.title}</a>` : p.title}</p>
          <p class="a">${p.authors}</p>
          <p class="v"><i>${p.venue}</i></p>
          <span class="tag ${p.topic}">${labels.topics[p.topic]}</span>${p.type !== "article" ? `<span class="tag type">${labels.types[p.type]}</span>` : ""}
        </div>
      </li>`).join("");
    count.textContent = labels.count(items.length);
  }

  buttons.forEach(b => b.addEventListener("click", () => {
    topic = b.dataset.topic;
    buttons.forEach(x => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
    render();
  }));
  yearSel.addEventListener("change", render);
  search.addEventListener("input", render);
  render();
}

function initMenu() {
  const btn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  btn.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
}
