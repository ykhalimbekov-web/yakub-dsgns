// En / Ru language switch and the contact form (About / Contacts page).
const strings = {
  en: {
    branding: 'Branding',
    packaging: 'Packaging',
    arts: 'Arts',
    aboutContacts: 'About / Contacts',
    projects: 'Projects',
    work: 'Selected work',
    copyright: 'YAKUB.DSGNS © 2026. All rights reserved.',

    dIz: 'Private-label packaging for the Korzinka supermarket chain',
    dChef: 'Packaging for a line of ready-to-eat salads',
    dCrash: 'Packaging for snacks and croutons',
    dTokio: 'Billboard campaign for a sushi bar',
    dLama: 'Packaging for plant-based cutlets and nuggets',
    dPloom: 'Packaging for scented candles',
    dToj: 'Packaging for nuts and dried fruit',
    dDom: 'Store signage for a home and building goods retailer',
    dPerfe: 'Branded water and sugar for hospitality',
    dMiamore: 'Identity for a cake shop',
    dBacchus: 'Brand identity and business cards',

    ikSub: 'Rebranding / Packaging Design',
    ikProject: 'The project:',
    ikProjectText: 'It is a proprietary trademark of the Korzinka market chain, created for customers who value high quality, reliability and confidence in their choice. The brand offers both food and non-food products, being a worthy alternative to A-brands, but at the same time remaining affordable.',
    ikSkills: 'Skills acquired:',
    ikS1: 'Brand Identity',
    ikS2: 'Packaging design',
    ikS3: 'Market analysis',
    before: 'Before',
    after: 'After',
    ikFuture: 'Future plans',
    ikFutureIntro: 'In the next 1–2 years, the “Iz Korzinki” brand is aimed at:',
    ikF1: 'Expansion of the product range due to new product categories, especially in the segment of “household goods” and “functional nutrition”;',
    ikF2: 'Deepening differentiation from other PL brands through unique packaging formats and additional visual elements;',
    ikF3: 'Strengthening partnerships with local manufacturers who adhere to high standards;',
    ikF4: 'Increase brand awareness through outdoor advertising, digital campaigns and sales floor promotion;',
    ikF5: 'In-depth analytics of customer behavior to more accurately adapt the product line to the preferences of the key audience.',
    allProjects: 'All projects',

    lmIntro: "Packaging for Lama, a plant-based brand of cutlets and nuggets in the mid-price segment, developed with the CIS market, especially Uzbekistan, in mind.",
    lmGoalT: "Project goal",
    lmGoal: "Create packaging for vegan delicacies that attracts the attention of a mid-price audience, taking into account the specifics of the CIS market (especially Uzbekistan).",
    lmTasksT: "Objectives",
    lmTasks: "Stand out from competitors with an innovative design. Reflect the brand values: naturalness, eco-friendliness, convenience. Develop packaging concepts, including flexible and rigid solutions.",
    lmMarketT: "Market analysis (semi-finished products)",
    lmObsT: "Main observations",
    lmMarketIntro: "When analysing packaging of various products on supermarket chiller shelves, several common features were identified:",
    lmColorsB: "Bright colours:",
    lmColors: "almost all packs use bright, saturated shades that create a positive mood and catch the shopper’s eye.",
    lmStructB: "Structured elements:",
    lmStruct: "packs organise their visual elements: first a large, bold logo (which identifies the brand instantly, especially on marketplaces), then a product-name zone, often accompanied by a product image. The photo plays a key role in making the product look appetising and trustworthy.",
    lmConclT: "Conclusions and proposals",
    lmAdvT: "Main advantages of the packaging:",
    lmAdv: "Eco-friendliness, visual appeal, convenience. The packaging emphasises the naturalness and benefits of the product.",
    lmPotT: "Potential for rollout:",
    lmPot: "Huge demand for functional and eco-friendly solutions. A chance to differentiate through an innovative approach.",
    lmRecT: "Recommendations for further development:",
    lmR1: "Develop a series of packs for different types of delicacies: cutlets, dumplings and sauces.",
    lmR2: "Introduce refill solutions for regular customers.",
    lmR3: "Test the packaging on the target audience in the CIS.",

    'branding.text': 'Identity work starts with immersion in the brand and its market. From there I define the visual direction, build the corporate identity and bring it together in a brand book — so the brand gets not a set of separate elements, but a coherent visual system ready to grow.',
    'packaging.text': 'Packaging design starts with the product, its audience and the shelf it competes on. I develop the concept, structure and graphics, then prepare print-ready layouts for every SKU — packaging that stands out, communicates clearly and scales across the whole range.',
    'arts.text': 'Beyond commercial briefs, I work on illustration, art direction and visual experiments. These projects are a space to test new forms, colour and techniques — ideas that later feed back into branding and packaging work.',
    aboutMe: 'About me',
    'aboutMe.text': 'I’m Yokubbek (Jacob), a 27-year-old graphic designer from Tashkent. My goal is to create meaningful, impactful design that tells stories, evokes emotion and connects with people on a deeper level — visuals that not only look great but leave a lasting impression.',
    'aboutMe.text2': 'I work across branding, packaging and art direction, from private-label systems for large retail chains to identities for small businesses.',
    'contact.title': 'If you have any questions,\nsubmit an application —\nwe will contact you',
    'form.name': 'Name*',
    'form.email': 'Email*',
    'form.phone': 'Number*',
    'form.consent': 'I agree to the processing of my personal data. It will be used only to reply to this request and will not be shared with third parties.',
    'form.submit': 'Submit',
    'form.invalid': 'Please fill in all fields, check the email and accept the consent.',
    'form.ready': 'Your email app is opening with the request ready to send to helloyakub@gmail.com.',
    'form.subject': 'Project request from the website',
  },
  ru: {
    branding: 'Брендинг',
    packaging: 'Упаковка',
    arts: 'Искусство',
    aboutContacts: 'Обо мне / Контакты',
    projects: 'Проекты',
    work: 'Избранные работы',
    copyright: 'YAKUB.DSGNS © 2026. Все права защищены.',

    dIz: 'Упаковка собственной марки сети супермаркетов Korzinka',
    dChef: 'Упаковка линейки готовых салатов',
    dCrash: 'Упаковка снеков и сухариков',
    dTokio: 'Наружная реклама суши-бара',
    dLama: 'Упаковка растительных котлет и наггетсов',
    dPloom: 'Упаковка ароматических свечей',
    dToj: 'Упаковка орехов и сухофруктов',
    dDom: 'Вывески магазина товаров для дома и стройматериалов',
    dPerfe: 'Брендированная вода и сахар для HoReCa',
    dMiamore: 'Айдентика кондитерской',
    dBacchus: 'Айдентика и визитки',

    ikSub: 'Ребрендинг / Дизайн упаковки',
    ikProject: 'О проекте:',
    ikProjectText: 'Собственная торговая марка сети магазинов Korzinka, созданная для покупателей, которые ценят высокое качество, надёжность и уверенность в выборе. Бренд предлагает как продукты питания, так и непродовольственные товары, оставаясь достойной альтернативой A-брендам и при этом доступным по цене.',
    ikSkills: 'Что было сделано:',
    ikS1: 'Айдентика бренда',
    ikS2: 'Дизайн упаковки',
    ikS3: 'Анализ рынка',
    before: 'До',
    after: 'После',
    ikFuture: 'Планы на будущее',
    ikFutureIntro: 'В ближайшие 1–2 года бренд «Из Корзинки» нацелен на:',
    ikF1: 'расширение ассортимента за счёт новых категорий, особенно в сегменте «товаров для дома» и «функционального питания»;',
    ikF2: 'усиление отличий от других PL-брендов через уникальные форматы упаковки и дополнительные визуальные элементы;',
    ikF3: 'укрепление партнёрства с местными производителями, соблюдающими высокие стандарты;',
    ikF4: 'рост узнаваемости бренда с помощью наружной рекламы, цифровых кампаний и продвижения в торговом зале;',
    ikF5: 'глубокую аналитику поведения покупателей, чтобы точнее адаптировать линейку под предпочтения ключевой аудитории.',
    allProjects: 'Все проекты',

    lmIntro: "Упаковка растительного бренда Lama (котлеты и наггетсы) в среднем ценовом сегменте, разработанная с учётом рынка СНГ, в первую очередь Узбекистана.",
    lmGoalT: "Цель проекта",
    lmGoal: "Создание упаковки для веганских деликатесов, привлекающей внимание аудитории в среднем ценовом сегменте, с учётом особенностей рынка СНГ (особенно Узбекистана).",
    lmTasksT: "Задачи",
    lmTasks: "Выделиться среди конкурентов с помощью инновационного дизайна. Отразить ценности бренда: натуральность, экологичность, удобство. Разработать концепции упаковки, включая гибкие и жёсткие решения.",
    lmMarketT: "Анализ рынка (полуфабрикаты)",
    lmObsT: "Основные наблюдения",
    lmMarketIntro: "При анализе упаковок различных продуктов, размещённых в холодильных витринах маркетов, были выявлены несколько общих особенностей:",
    lmColorsB: "Яркие цвета:",
    lmColors: "почти все упаковки используют яркие, насыщенные оттенки, которые создают позитивное настроение и привлекают внимание покупателя.",
    lmStructB: "Структурированность элементов:",
    lmStruct: "упаковки имеют организацию визуальных элементов. Сначала идёт крупный, броский логотип (что помогает моментально идентифицировать бренд, особенно на маркетплейсах), за ним следует зона с названием продукта, которая часто сопровождается изображением продукта. Фото играет ключевую роль в создании аппетитности и доверия к продукту.",
    lmConclT: "Выводы и предложения",
    lmAdvT: "Главные преимущества упаковки:",
    lmAdv: "Экологичность, визуальная привлекательность, удобство. Упаковка акцентирует внимание на натуральности и пользе продукта.",
    lmPotT: "Потенциал для внедрения:",
    lmPot: "Огромный спрос на функциональные и экологичные решения. Возможность дифференцироваться через инновационный подход.",
    lmRecT: "Рекомендации для дальнейшего развития:",
    lmR1: "Разработка серии упаковок для разных типов деликатесов: котлет, пельменей и соусов.",
    lmR2: "Внедрение refill-решений для постоянных клиентов.",
    lmR3: "Тестирование упаковки на целевой аудитории в СНГ.",

    'branding.text': 'Создание айдентики начинается с погружения в бренд и рынок. Затем я формирую визуальное направление, разрабатываю фирменный стиль и собираю его в брендбук. В результате бренд получает не отдельные элементы, а целостную визуальную систему для дальнейшего роста.',
    'packaging.text': 'Дизайн упаковки начинается с продукта, его аудитории и полки, на которой он конкурирует. Я разрабатываю концепцию, конструкцию и графику, а затем готовлю макеты к печати для каждого SKU — упаковку, которая выделяется, понятно говорит с покупателем и масштабируется на всю линейку.',
    'arts.text': 'Помимо коммерческих задач я занимаюсь иллюстрацией, арт-дирекшеном и визуальными экспериментами. Это пространство, где я пробую новые формы, цвет и техники, — идеи, которые потом возвращаются в брендинг и упаковку.',
    aboutMe: 'Обо мне',
    'aboutMe.text': 'Я Ёкуббек (Jacob), графический дизайнер из Ташкента, мне 27 лет. Моя цель — создавать осмысленный и сильный дизайн, который рассказывает истории, вызывает эмоции и находит глубокий отклик у людей: визуал, который не только хорошо выглядит, но и надолго запоминается.',
    'aboutMe.text2': 'Я работаю с брендингом, упаковкой и арт-дирекшеном — от систем собственных торговых марок для крупных розничных сетей до айдентики для небольших компаний.',
    'contact.title': 'Если у вас есть вопросы,\nоставьте заявку —\nмы свяжемся с вами',
    'form.name': 'Имя*',
    'form.email': 'Email*',
    'form.phone': 'Телефон*',
    'form.consent': 'Я соглашаюсь на обработку персональных данных. Они будут использованы только для ответа на эту заявку и не передаются третьим лицам.',
    'form.submit': 'Отправить',
    'form.invalid': 'Заполните все поля, проверьте email и подтвердите согласие.',
    'form.ready': 'Открывается почтовое приложение с готовым письмом на helloyakub@gmail.com.',
    'form.subject': 'Заявка с сайта',
  },
};

let current = 'en';
const t = (key) => strings[current][key] ?? strings.en[key] ?? '';
const buttons = document.querySelectorAll('[data-lang]');

function setLanguage(lang) {
  if (!strings[lang]) return;
  current = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  try { localStorage.setItem('lang', lang); } catch {}
}

buttons.forEach((b) => b.addEventListener('click', () => setLanguage(b.dataset.lang)));

let saved = null;
try { saved = localStorage.getItem('lang'); } catch {}
if (saved && saved !== 'en') setLanguage(saved);

// Contact form: there is no server, so a valid request opens the visitor's
// email app with a ready letter to helloyakub@gmail.com.
const form = document.getElementById('contact-form');
if (form) {
  const status = document.getElementById('form-status');
  const field = (id) => document.getElementById(id).value.trim();
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity() || !field('cf-name') || !field('cf-phone')) {
      status.textContent = t('form.invalid');
      form.querySelector(':invalid')?.focus();
      return;
    }
    const body = [
      `Name: ${field('cf-name')}`,
      `Email: ${field('cf-email')}`,
      `Phone: ${field('cf-phone')}`,
    ].join('\n');
    status.textContent = t('form.ready');
    window.location.href = `mailto:helloyakub@gmail.com?subject=${encodeURIComponent(t('form.subject'))}&body=${encodeURIComponent(body)}`;
  });
}

// Background music: a YouTube track played as audio only. Browsers block sound
// until the visitor interacts, so it starts from the sound button (or from the
// first click on the next page if the visitor left it on), and it resumes from
// the saved position on every page.
(() => {
  const VIDEO = '-yRDPEZ6U3w';
  Object.assign(strings.en, { 'music.on': 'Turn music off', 'music.off': 'Turn music on' });
  Object.assign(strings.ru, { 'music.on': 'Выключить музыку', 'music.off': 'Включить музыку' });

  const read = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
  const write = (k, v) => { try { localStorage.setItem(k, v); } catch {} };

  let state = read('music') === 'on' ? 'pending' : 'off'; // off | pending | on
  let player = null;
  let timer = null;

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'music-toggle';
  btn.innerHTML =
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/>' +
    '<g class="music-waves"><path d="M15.5 9a4 4 0 0 1 0 6"/><path d="M18 6.5a7.5 7.5 0 0 1 0 11"/></g>' +
    '<path class="music-off" d="M16 9.5l5 5M21 9.5l-5 5"/></svg>';
  const holder = document.createElement('div');
  holder.className = 'music-yt';
  holder.innerHTML = '<div id="music-yt"></div>';
  document.body.append(btn, holder);

  function render() {
    const playing = state === 'on';
    btn.setAttribute('aria-pressed', String(playing));
    btn.classList.toggle('is-on', playing);
    btn.setAttribute('aria-label', t(playing ? 'music.on' : 'music.off'));
    btn.title = btn.getAttribute('aria-label');
  }

  function saveTime() {
    try { write('music-time', String(Math.floor(player.getCurrentTime()))); } catch {}
  }

  function loadApi() {
    return new Promise((resolve) => {
      if (window.YT && window.YT.Player) return resolve();
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => { if (prev) prev(); resolve(); };
      const s = document.createElement('script');
      s.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(s);
    });
  }

  async function start() {
    state = 'on';
    write('music', 'on');
    render();
    if (player) { player.playVideo(); return; }
    await loadApi();
    player = new YT.Player('music-yt', {
      width: 200,
      height: 200,
      videoId: VIDEO,
      playerVars: { controls: 0, loop: 1, playlist: VIDEO, playsinline: 1, start: parseInt(read('music-time'), 10) || 0 },
      events: {
        onReady: (e) => { e.target.setVolume(35); if (state === 'on') e.target.playVideo(); },
        onStateChange: (e) => {
          if (e.data === 1 && !timer) timer = setInterval(saveTime, 2000);
        },
        // The video cannot be embedded or was removed: switch the button off quietly.
        onError: () => { state = "off"; write("music", "off"); render(); },
      },
    });
  }

  function stop() {
    state = 'off';
    write('music', 'off');
    if (player) { saveTime(); player.pauseVideo(); }
    render();
  }

  btn.addEventListener('click', () => { if (state === 'on') stop(); else start(); });
  buttons.forEach((b) => b.addEventListener('click', render));
  window.addEventListener('pagehide', () => { if (player) saveTime(); });

  if (state === 'pending') {
    const resume = (e) => {
      if (state !== 'pending' || btn.contains(e.target)) return;
      start();
    };
    ['pointerdown', 'keydown'].forEach((ev) => document.addEventListener(ev, resume, { once: true }));
  }
  render();
})();
