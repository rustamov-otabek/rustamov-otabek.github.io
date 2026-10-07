// ---------- i18n ----------
const I18N = {
  en:{"nav.about":"ABOUT","nav.work":"WORK","nav.cap":"CAPABILITIES","nav.exp":"EXPERIENCE","nav.contact":"CONTACT","nav.online":"ONLINE",
  "hero.sys":"SYSTEM","hero.sysv":"PERSONAL PORTFOLIO","hero.status":"STATUS","hero.statusv":"ONLINE","hero.core":"CREATIVE CORE","hero.corev":"ACTIVE","hero.loc":"LOCATION","hero.locv":"UZBEKISTAN",
  "hero.eyebrow":"PERSONAL PORTFOLIO","hero.subtitle":"ECONOMICS STUDENT • DEVELOPER • CREATOR","hero.supporting":"I build intelligent systems, digital products and ideas that connect technology with real-world problems.",
  "hero.cta1":"EXPLORE MY WORK","hero.cta2":"CONTACT","hero.scroll":"SCROLL TO EXPLORE",
  "about.label":"ABOUT ME","about.statement":"Economics by education. Technology by curiosity. Building by choice.",
  "about.body":"Otabek Rustamov is an Economics student at Tashkent State University of Economics with professional experience in accounting and a growing focus on software, AI, automation and digital systems.",
  "about.profile":"PROFILE","about.name":"NAME","about.edu":"EDUCATION","about.field":"FIELD","about.fieldv":"Economics","about.exp":"EXPERIENCE","about.expv":"2 years — Accounting","about.langs":"LANGUAGES",
  "work.label":"SELECTED WORK","work.title":"Things I build, explore and turn into working systems.",
  "proj.jarvis.desc":"A personal AI assistant I'm building — focused on local intelligence, automation, voice interaction and computer control.",
  "proj.nexora.desc":"An early-stage project I'm shaping — focused on intelligent digital experiences and innovative solutions.",
  "proj.status":"IN ACTIVE DEVELOPMENT","proj.link":"FOLLOW PROGRESS →","proj.link2":"FOLLOW PROGRESS →",
  "cap.label":"CAPABILITIES","cap.title":"The tools and disciplines behind what I build.",
  "exp.label":"EXPERIENCE","exp.years":"CURRENT","exp.role":"CHIEF ACCOUNTANT — OILL SEVEN","exp.desc":"Professional accounting experience across multiple companies.",
  "edu.label":"EDUCATION","edu.field":"Economics","lang.label":"LANGUAGES","lang.uz":"Uzbek","lang.ru":"Russian","lang.en":"English","lang.native":"NATIVE","lang.fluent":"FLUENT","lang.fluent2":"FLUENT",
  "contact.label":"LET'S CONNECT","contact.title":"Have an idea, project or opportunity?","footer":"© Otabek Rustamov"},
  ru:{"nav.about":"О СЕБЕ","nav.work":"ПРОЕКТЫ","nav.cap":"НАВЫКИ","nav.exp":"ОПЫТ","nav.contact":"СВЯЗЬ","nav.online":"НА СВЯЗИ",
  "hero.sys":"СИСТЕМА","hero.sysv":"ЛИЧНОЕ ПОРТФОЛИО","hero.status":"СТАТУС","hero.statusv":"АКТИВНО","hero.core":"ТВОРЧЕСКОЕ ЯДРО","hero.corev":"АКТИВНО","hero.loc":"ЛОКАЦИЯ","hero.locv":"УЗБЕКИСТАН",
  "hero.eyebrow":"ЛИЧНОЕ ПОРТФОЛИО","hero.subtitle":"СТУДЕНТ-ЭКОНОМИСТ • РАЗРАБОТЧИК • СОЗДАТЕЛЬ","hero.supporting":"Я создаю интеллектуальные системы, цифровые продукты и идеи, соединяющие технологии с реальными задачами.",
  "hero.cta1":"МОИ ПРОЕКТЫ","hero.cta2":"СВЯЗАТЬСЯ","hero.scroll":"ЛИСТАЙТЕ ВНИЗ",
  "about.label":"О СЕБЕ","about.statement":"Экономист по образованию. Технолог по интересу. Создатель по выбору.",
  "about.body":"Отабек Рустамов — студент экономического факультета Ташкентского государственного экономического университета с опытом работы в бухгалтерии и растущим интересом к разработке, ИИ, автоматизации и цифровым системам.",
  "about.profile":"ПРОФИЛЬ","about.name":"ИМЯ","about.edu":"ОБРАЗОВАНИЕ","about.field":"НАПРАВЛЕНИЕ","about.fieldv":"Экономика","about.exp":"ОПЫТ","about.expv":"2 года — бухгалтерия","about.langs":"ЯЗЫКИ",
  "work.label":"ИЗБРАННЫЕ ПРОЕКТЫ","work.title":"То, что я создаю, исследую и превращаю в работающие системы.",
  "proj.jarvis.desc":"Персональный ИИ-ассистент, который я разрабатываю — локальный интеллект, автоматизация, голосовое взаимодействие и управление компьютером.",
  "proj.nexora.desc":"Проект на ранней стадии, который я формирую — интеллектуальные цифровые решения и инновации.",
  "proj.status":"В АКТИВНОЙ РАЗРАБОТКЕ","proj.link":"СЛЕДИТЬ ЗА ПРОГРЕССОМ →","proj.link2":"СЛЕДИТЬ ЗА ПРОГРЕССОМ →",
  "cap.label":"НАВЫКИ","cap.title":"Инструменты и дисциплины, стоящие за тем, что я создаю.",
  "exp.label":"ОПЫТ","exp.years":"СЕЙЧАС","exp.role":"ГЛАВНЫЙ БУХГАЛТЕР — OILL SEVEN","exp.desc":"Профессиональный опыт бухгалтерского учёта в нескольких компаниях.",
  "edu.label":"ОБРАЗОВАНИЕ","edu.field":"Экономика","lang.label":"ЯЗЫКИ","lang.uz":"Узбекский","lang.ru":"Русский","lang.en":"Английский","lang.native":"РОДНОЙ","lang.fluent":"СВОБОДНО","lang.fluent2":"СВОБОДНО",
  "contact.label":"СВЯЗАТЬСЯ","contact.title":"Есть идея, проект или предложение?","footer":"© Отабек Рустамов"}
};
function applyLang(lang){
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
  document.querySelectorAll('[data-i]').forEach(el=>{
    const key = el.getAttribute('data-i');
    if(I18N[lang][key]) el.textContent = I18N[lang][key];
  });
  document.querySelectorAll('#langToggle span').forEach(s=>s.classList.toggle('active', s.dataset.lang===lang));
  try{ localStorage.setItem('otabek_lang', lang); }catch(e){}
}
document.getElementById('langToggle').addEventListener('click', e=>{
  const t = e.target.closest('span[data-lang]');
  if(t) applyLang(t.dataset.lang);
});
let savedLang = 'en';
try{ savedLang = localStorage.getItem('otabek_lang') || 'en'; }catch(e){}
applyLang(savedLang);

// ---------- Skills ----------
const SKILLS = {
  en:[["PYTHON","Programming and system automation."],["AI / MACHINE LEARNING","Exploring intelligent systems and machine learning."],
  ["AUTOMATION","Building workflows that reduce repetitive tasks."],["WEB DEVELOPMENT","Creating interactive digital experiences."],
  ["TAX & VAT REPORTING","Tax calculation, VAT and profit tax reporting via government platforms."],
  ["PAYROLL & 1C","Payroll, bank operations and accounting records in 1C 8.3."],
  ["ECONOMICS","Academic foundation in economics and economic analysis."],["ACCOUNTING","Two years of professional accounting experience."]],
  ru:[["PYTHON","Программирование и автоматизация систем."],["ИИ / МАШИННОЕ ОБУЧЕНИЕ","Изучение интеллектуальных систем и машинного обучения."],
  ["АВТОМАТИЗАЦИЯ","Создание рабочих процессов, сокращающих рутину."],["ВЕБ-РАЗРАБОТКА","Создание интерактивных цифровых продуктов."],
  ["НАЛОГИ И НДС","Расчёт налогов, НДС и налога на прибыль через государственные платформы."],
  ["ЗАРПЛАТА И 1С","Расчёт заработной платы, банковские операции и учёт в 1С 8.3."],
  ["ЭКОНОМИКА","Академическая база в экономике и экономическом анализе."],["БУХГАЛТЕРИЯ","Два года профессионального опыта в бухгалтерии."]]
};
function renderSkills(lang){
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = '';
  SKILLS[lang].forEach(([n,d])=>{
    const c = document.createElement('div'); c.className='skill-cell';
    c.innerHTML = `<div class="skill-name">${n}</div><div class="skill-desc">${d}</div>`;
    grid.appendChild(c);
  });
}
renderSkills(savedLang);
document.getElementById('langToggle').addEventListener('click', e=>{
  const t = e.target.closest('span[data-lang]');
  if(t) renderSkills(t.dataset.lang);
});

// ---------- Nav scroll state ----------
const nav = document.getElementById('nav');
window.addEventListener('scroll', ()=>{ nav.classList.toggle('scrolled', window.scrollY>40); }, {passive:true});

// ---------- Reveal on scroll (staggered) ----------
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll('.reveal');
if(reduceMotion){ revealEls.forEach(el=>el.classList.add('in')); }
else{
  const io = new IntersectionObserver(entries=>{
    entries.forEach((en,i)=>{
      if(en.isIntersecting){
        const delay = en.target.dataset.delay || (i*70);
        setTimeout(()=>en.target.classList.add('in'), delay);
        io.unobserve(en.target);
      }
    });
  }, {threshold:.15});
  revealEls.forEach(el=>io.observe(el));
}

// ---------- Project card 3D tilt ----------
if(!reduceMotion){
  document.querySelectorAll('.project-card').forEach(card=>{
    card.addEventListener('mousemove', e=>{
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left)/r.width - .5;
      const y = (e.clientY - r.top)/r.height - .5;
      card.style.transform = `perspective(900px) rotateY(${x*4}deg) rotateX(${-y*4}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', ()=>{ card.style.transform = ''; });
  });
}

// ---------- Three.js hero core ----------
(function(){
  const canvas = document.getElementById('heroCanvas');
  if(!window.THREE || reduceMotion){ canvas.style.opacity = reduceMotion ? '0.4' : '0'; return; }
  const hero = document.querySelector('.hero');
  let W = hero.clientWidth, H = hero.clientHeight;
  const isMobile = W < 700;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, W/H, 0.1, 100);
  camera.position.set(0,0, isMobile ? 8.5 : 6.5);
  const renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
  renderer.setSize(W,H);

  const group = new THREE.Group();
  scene.add(group);

  // core: layered geometric object (not a plain sphere)
  const coreGeo = new THREE.IcosahedronGeometry(1.15, 1);
  const coreMat = new THREE.MeshPhysicalMaterial({color:0x0d0f12, metalness:.85, roughness:.25, transparent:true, opacity:.92, transmission:.15});
  const core = new THREE.Mesh(coreGeo, coreMat);
  group.add(core);

  const wireGeo = new THREE.IcosahedronGeometry(1.15, 1);
  const wireMat = new THREE.MeshBasicMaterial({color:0x4fd7ff, wireframe:true, transparent:true, opacity:.22});
  group.add(new THREE.Mesh(wireGeo, wireMat));

  const ringGeo1 = new THREE.TorusGeometry(1.75, 0.008, 8, 90);
  const ringMat = new THREE.MeshBasicMaterial({color:0x4fd7ff, transparent:true, opacity:.5});
  const ring1 = new THREE.Mesh(ringGeo1, ringMat); ring1.rotation.x = Math.PI/2.3; group.add(ring1);
  const goldMat = new THREE.MeshBasicMaterial({color:0xe8b86d, transparent:true, opacity:.55});
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.05, 0.006, 8, 90), goldMat);
  ring2.rotation.x = Math.PI/1.6; ring2.rotation.y = .6; group.add(ring2);

  // small orbiting modules (alternating accent colors)
  const modGeo = new THREE.BoxGeometry(0.09,0.09,0.09);
  const modules = [];
  for(let i=0;i<7;i++){
    const col = i%3===0 ? 0xe8b86d : 0x4fd7ff;
    const m = new THREE.Mesh(modGeo, new THREE.MeshBasicMaterial({color:col}));
    const a = (i/7)*Math.PI*2;
    m.userData = {radius: 1.75 + (i%2)*0.3, speed: 0.15 + i*0.02, offset:a};
    group.add(m); modules.push(m);
  }

  scene.add(new THREE.AmbientLight(0x404850, 1.4));
  const dir = new THREE.DirectionalLight(0xffffff, 1.1); dir.position.set(4,5,3); scene.add(dir);
  const rim = new THREE.DirectionalLight(0x4fd7ff, .8); rim.position.set(-4,-2,-3); scene.add(rim);

  let mx=0, my=0;
  window.addEventListener('mousemove', e=>{
    mx = (e.clientX/window.innerWidth - .5); my = (e.clientY/window.innerHeight - .5);
  });
  let scrollT = 0;
  window.addEventListener('scroll', ()=>{ scrollT = Math.min(window.scrollY / (hero.clientHeight||1), 1.2); }, {passive:true});

  const clock = new THREE.Clock();
  function animate(){
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    group.rotation.y = t*0.12 + mx*0.5;
    group.rotation.x = my*0.3 + Math.sin(t*0.2)*0.05;
    modules.forEach(m=>{
      const a = m.userData.offset + t*m.userData.speed;
      m.position.set(Math.cos(a)*m.userData.radius, Math.sin(a*0.7)*0.4, Math.sin(a)*m.userData.radius);
    });
    group.position.y = -scrollT*1.4;
    group.scale.setScalar(1 - scrollT*0.15);
    camera.position.z = (isMobile?8.5:6.5) + scrollT*1.5;
    renderer.render(scene, camera);
  }
  requestAnimationFrame(()=>{ canvas.style.transition='opacity 1.2s ease'; canvas.style.opacity='1'; });
  animate();

  window.addEventListener('resize', ()=>{
    W = hero.clientWidth; H = hero.clientHeight;
    camera.aspect = W/H; camera.updateProjectionMatrix();
    renderer.setSize(W,H);
  });
})();
