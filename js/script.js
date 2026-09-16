(() => {
  'use strict';

  const CONFIG = {
    providerUrl: 'https://ggplus.pro',
    telegramUrl: 'https://t.me/yvnbet',
    sliderInterval: 5200,
    winnerInterval: 4200,
    winnerCount: 12
  };

  const translations = {
    hy: {
      login:'Մուտք', register:'Գրանցում',
      heroTitle:'Խաղա՛ վստահ,<br><span>հաղթի՛ր YVNBET-ի հետ։</span>',
      heroText:'Ժամանակակից ներկայացման հարթակ՝ հարմարավետ սպասարկմամբ, գաղտնի գրանցմամբ և արագ օպերատորական աջակցությամբ։',
      metricBonus:'բոնուս', metricDeposit:'նվազագույն լիցքավորում', metricSupport:'աջակցություն',
      depositBonus:'յուրաքանչյուր լիցքավորման համար', privacyShort:'գաղտնիություն',
      sliderTitle:'Կարևոր առաջարկներ', paymentsTitle:'Լիցքավորման միջոցներ', paymentsNote:'Արագ և հարմար կրիպտո լիցքավորում',
      recentWins:'Վերջին շահողները', advantagesTitle:'YvnBet-ի առավելությունները',
      privacyTitle:'Գաղտնիություն', privacyText:'Օգտատերերի տվյալների գաղտնիության նկատմամբ հատուկ ուշադրություն։',
      supportTitle:'Մշտական աջակցություն', supportText:'Օպերատորի հասանելի աջակցություն օգտատերերի հարցերի համար։',
      registrationTitle:'100% գաղտնի գրանցում', registrationText:'Գրանցման գործընթացը կազմակերպված է գաղտնիությանը միտված ձևաչափով։',
      bonusTitle:'+10% բոնուս', bonusText:'Յուրաքանչյուր լիցքավորման համար +10% բոնուս։',
      depositTitle:'Հարմար լիցքավորում', depositText:'Արագ և հարմար լիցքավորման տարբերակներ՝ կրիպտոարժույթներով։',
      bonusSectionTitle:'Լիցքավորման բոնուս', bonusSectionText:'Յուրաքանչյուր լիցքավորման համար +10% բոնուս։',
      limitTitle:'Նվազագույն լիցքավորում', footerDescription:'Պրոֆեսիոնալ ներկայացման հարթակ՝ YvnBet ապրանքանիշի մասին։',
      responsible:'Խաղացեք պատասխանատվությամբ։ Միայն 18+։', footerNavigation:'Նավիգացիա',
      terms:'Պայմաններ և դրույթներ', about:'Մեր մասին', contact:'Կապ մեզ հետ', privacy:'Գաղտնիության քաղաքականություն', partnership:'Գործընկերային ծրագիր', footerPayments:'Լիցքավորման միջոցներ'
    },
    ru: {
      login:'Войти', register:'Регистрация',
      heroTitle:'Играй уверенно,<br><span>побеждай с YVNBET.</span>',
      heroText:'Современная презентационная платформа с удобным сервисом, конфиденциальной регистрацией и поддержкой оператора.',
      metricBonus:'бонус', metricDeposit:'минимальное пополнение', metricSupport:'поддержка',
      depositBonus:'на каждое пополнение', privacyShort:'конфиденциальность',
      sliderTitle:'Важные предложения', paymentsTitle:'Способы пополнения', paymentsNote:'Быстрое и удобное крипто-пополнение',
      recentWins:'Последние победители', advantagesTitle:'Преимущества YvnBet',
      privacyTitle:'Конфиденциальность', privacyText:'Особое внимание уделяется конфиденциальности пользовательских данных.',
      supportTitle:'Постоянная поддержка', supportText:'Оператор доступен для помощи по вопросам сервиса.',
      registrationTitle:'100% конфиденциальная регистрация', registrationText:'Процесс регистрации ориентирован на сохранение конфиденциальности.',
      bonusTitle:'+10% бонус', bonusText:'+10% бонус на каждое пополнение.',
      depositTitle:'Удобное пополнение', depositText:'Быстрые и удобные варианты пополнения в криптовалюте.',
      bonusSectionTitle:'Бонус за пополнение', bonusSectionText:'+10% бонус на каждое пополнение.',
      limitTitle:'Минимальное пополнение', footerDescription:'Профессиональная презентационная площадка бренда YvnBet.',
      responsible:'Играйте ответственно. Только 18+.', footerNavigation:'Навигация',
      terms:'Условия и положения', about:'О нас', contact:'Связаться с нами', privacy:'Политика конфиденциальности', partnership:'Партнерская программа', footerPayments:'Способы пополнения'
    },
    en: {
      login:'Login', register:'Register',
      heroTitle:'Play with confidence,<br><span>win with YVNBET.</span>',
      heroText:'A modern presentation platform with convenient service, privacy-focused registration and responsive operator support.',
      metricBonus:'bonus', metricDeposit:'minimum deposit', metricSupport:'support',
      depositBonus:'on every deposit', privacyShort:'privacy',
      sliderTitle:'Key offers', paymentsTitle:'Deposit methods', paymentsNote:'Fast and convenient crypto deposits',
      recentWins:'Latest winners', advantagesTitle:'YvnBet advantages',
      privacyTitle:'Privacy', privacyText:'Special attention is paid to the privacy of user data.',
      supportTitle:'Constant support', supportText:'Operator support is available for user questions.',
      registrationTitle:'100% private registration', registrationText:'The registration process is designed with privacy in mind.',
      bonusTitle:'+10% bonus', bonusText:'+10% bonus on every deposit.',
      depositTitle:'Convenient deposits', depositText:'Fast and convenient cryptocurrency deposit options.',
      bonusSectionTitle:'Deposit bonus', bonusSectionText:'+10% bonus on every deposit.',
      limitTitle:'Minimum deposit', footerDescription:'A professional presentation platform for the YvnBet brand.',
      responsible:'Play responsibly. 18+ only.', footerNavigation:'Navigation',
      terms:'Terms and conditions', about:'About us', contact:'Contact us', privacy:'Privacy policy', partnership:'Partnership program', footerPayments:'Deposit methods'
    }
  };

  const slides = [
    { title:'+10% բոնուս ամեն լիցքավորման համար', kicker:'BONUS', className:'slide-bonus', icon:'+' , text:'Ակտիվացրու YvnBet-ի լիցքավորման բոնուսային առաջարկը։' },
    { title:'100% գաղտնիություն', kicker:'PRIVACY', className:'slide-privacy', icon:'01', text:'Ժամանակակից մոտեցում՝ օգտատիրոջ գաղտնիության նկատմամբ հատուկ ուշադրությամբ։' },
    { title:'Արագ և հարմար լիցքավորում', kicker:'CRYPTO', className:'slide-crypto', icon:'◆', text:'Լիցքավորման հարմար տարբերակներ՝ LTC, USDT, SOL և DASH։' },
    { title:'YvnBet', kicker:'BRAND', className:'slide-brand', icon:'Y', text:'Պրոֆեսիոնալ ներկայացում, մաքուր դիզայն և կենտրոնացված սպասարկում։' }
  ];

  const payments = [
    { name:'LTC', label:'Litecoin', icon:'https://cdn.simpleicons.org/litecoin' },
    { name:'USDT', label:'Tether', icon:'https://cdn.simpleicons.org/tether' },
    { name:'SOL', label:'Solana', icon:'https://cdn.simpleicons.org/solana' },
    { name:'DASH', label:'Dash', icon:'https://cdn.simpleicons.org/dash' }
  ];

  const names = ['arm**','Tik***','Hov***','Ani***','Dav***','Mar**','Saro***','Nare***','Gor***','Mik***','Lus***','Tig***','Sam***','Eva***','Ari***','Vah***'];
  const amounts = [2000,3000,5000,7500,10000,12500,15000,22000,30000,45000,67000,85000,120000];

  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];

  function applyLanguage(lang) {
    const selected = translations[lang] ? lang : 'hy';
    document.documentElement.lang = selected;
    const dict = translations[selected];
    $$('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(dict, key)) el.innerHTML = dict[key];
    });
    $$('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === selected));
    localStorage.setItem('yvnbet-language', selected);
  }

  function renderSlider() {
    const track = $('#showcaseTrack');
    const dots = $('#sliderDots');
    const slider = $('#showcaseSlider');
    if (!track || !dots || !slider) return;

    track.innerHTML = slides.map((slide, index) => `
      <article class="showcase-slide ${slide.className}" aria-roledescription="slide" aria-label="${index + 1} / ${slides.length}">
        <div class="slide-art" aria-hidden="true"><span>${slide.icon}</span></div>
        <div class="slide-copy"><span class="eyebrow">${slide.kicker}</span><h3>${slide.title}</h3><p>${slide.text}</p></div>
      </article>
    `).join('');
    dots.innerHTML = slides.map((_, i) => `<button class="slider-dot${i === 0 ? ' active' : ''}" type="button" data-slide="${i}" aria-label="Սլայդ ${i + 1}"></button>`).join('');

    let current = 0;
    let timer = null;
    let startX = 0;
    let interacting = false;

    const goTo = (index) => {
      current = (index + slides.length) % slides.length;
      track.style.transform = `translate3d(-${current * 100}%,0,0)`;
      $$('.slider-dot').forEach((dot, i) => dot.classList.toggle('active', i === current));
    };
    const stop = () => { if (timer) window.clearInterval(timer); timer = null; };
    const start = () => { stop(); timer = window.setInterval(() => goTo(current + 1), CONFIG.sliderInterval); };

    $('#slidePrev')?.addEventListener('click', () => { goTo(current - 1); start(); });
    $('#slideNext')?.addEventListener('click', () => { goTo(current + 1); start(); });
    $$('.slider-dot').forEach(dot => dot.addEventListener('click', () => { goTo(Number(dot.dataset.slide)); start(); }));
    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', () => { if (!interacting) start(); });
    slider.addEventListener('touchstart', e => { startX = e.touches[0].clientX; interacting = true; stop(); }, { passive:true });
    slider.addEventListener('touchend', e => {
      const delta = e.changedTouches[0].clientX - startX;
      if (Math.abs(delta) > 45) goTo(current + (delta < 0 ? 1 : -1));
      interacting = false;
      start();
    }, { passive:true });
    start();
  }

  function renderPayments() {
    const list = $('#paymentList');
    const footer = $('#footerPayments');
    if (!list) return;
    list.innerHTML = payments.map(payment => `
      <article class="payment-item">
        <div class="payment-logo"><img src="${payment.icon}" alt="${payment.label} logo" loading="lazy" width="42" height="42" onerror="this.style.display='none';this.parentElement.classList.add('logo-fallback')"></div>
        <div><strong>${payment.name}</strong><small>${payment.label}</small></div>
      </article>
    `).join('');
    if (footer) footer.innerHTML = payments.map(payment => `<span><img src="${payment.icon}" alt="${payment.label}" loading="lazy" width="22" height="22" onerror="this.style.display='none'"><b>${payment.name}</b></span>`).join('');
  }

  function dateKey(date = new Date()) {
    return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
  }

  function seededRandom(seed) {
    let h = 2166136261;
    for (let i = 0; i < seed.length; i += 1) h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
    return () => {
      h += h << 13; h ^= h >>> 7; h += h << 3; h ^= h >>> 17; h += h << 5;
      return ((h >>> 0) % 100000) / 100000;
    };
  }

  function createDailyWinners(date = new Date()) {
    const key = `yvnbet-winners-${dateKey(date)}`;
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === CONFIG.winnerCount) return parsed;
      } catch (_) {}
    }
    const rnd = seededRandom(dateKey(date));
    const unique = new Set();
    const result = [];
    while (result.length < CONFIG.winnerCount) {
      const name = names[Math.floor(rnd() * names.length)];
      if (unique.has(name)) continue;
      unique.add(name);
      const amount = amounts[Math.floor(rnd() * amounts.length)];
      result.push({ name, amount });
    }
    localStorage.setItem(key, JSON.stringify(result));
    return result;
  }

  function msUntilNextMidnight() {
    const now = new Date();
    const next = new Date(now);
    next.setHours(24, 0, 0, 0);
    return Math.max(1000, next.getTime() - now.getTime() + 100);
  }

  function startWinners() {
    const stage = $('#winnerStage');
    if (!stage) return;
    let winners = createDailyWinners();
    let index = 0;

    const show = () => {
      const winner = winners[index % winners.length];
      index += 1;
      stage.classList.remove('winner-enter');
      void stage.offsetWidth;
      stage.innerHTML = `<div class="winner-entry"><div><strong>${winner.name}</strong><small>YvnBet</small></div><span>${winner.amount.toLocaleString('en-US')} AMD</span></div>`;
      stage.classList.add('winner-enter');
    };

    const rollOver = () => {
      winners = createDailyWinners();
      index = 0;
      show();
      window.setTimeout(rollOver, msUntilNextMidnight());
    };

    show();
    window.setInterval(show, CONFIG.winnerInterval);
    window.setTimeout(rollOver, msUntilNextMidnight());
  }

  function setupLanguages() {
    const saved = localStorage.getItem('yvnbet-language') || 'hy';
    applyLanguage(saved);
    $$('.lang-btn').forEach(btn => btn.addEventListener('click', () => applyLanguage(btn.dataset.lang)));
  }

  function setupTelegramDrag() {
    const el = $('#telegramFloat');
    if (!el) return;
    const saved = localStorage.getItem('yvnbet-telegram-position');
    if (saved) {
      try {
        const p = JSON.parse(saved);
        el.style.left = `${p.left}px`;
        el.style.top = `${p.top}px`;
        el.style.right = 'auto';
        el.style.bottom = 'auto';
      } catch (_) {}
    }

    let dragging = false;
    let moved = false;
    let startX = 0, startY = 0, startLeft = 0, startTop = 0;

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
    el.addEventListener('pointerdown', e => {
      dragging = true;
      moved = false;
      const rect = el.getBoundingClientRect();
      startX = e.clientX; startY = e.clientY; startLeft = rect.left; startTop = rect.top;
      el.style.left = `${startLeft}px`; el.style.top = `${startTop}px`;
      el.style.right = 'auto'; el.style.bottom = 'auto';
      el.setPointerCapture?.(e.pointerId);
    });
    el.addEventListener('pointermove', e => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (Math.abs(dx) + Math.abs(dy) > 6) moved = true;
      el.style.left = `${clamp(startLeft + dx, 6, innerWidth - el.offsetWidth - 6)}px`;
      el.style.top = `${clamp(startTop + dy, 6, innerHeight - el.offsetHeight - 6)}px`;
    });
    const finish = () => {
      if (!dragging) return;
      dragging = false;
      if (moved) localStorage.setItem('yvnbet-telegram-position', JSON.stringify({ left: parseFloat(el.style.left), top: parseFloat(el.style.top) }));
    };
    el.addEventListener('pointerup', finish);
    el.addEventListener('pointercancel', finish);
    el.addEventListener('click', e => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } });
  }

  function setupReveal() {
    const items = $$('.reveal');
    if (!('IntersectionObserver' in window)) { items.forEach(item => item.classList.add('visible')); return; }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold:0.12 });
    items.forEach(item => observer.observe(item));
  }

  function init() {
    const year = $('#year');
    if (year) year.textContent = new Date().getFullYear();
    renderSlider();
    renderPayments();
    setupLanguages();
    startWinners();
    setupTelegramDrag();
    setupReveal();
  }

  document.addEventListener('DOMContentLoaded', init);
})();