(() => {
  'use strict';

  const CONFIG = {
    registrationUrl: 'https://t.me/yvnbet',
    operatorUrl: 'https://t.me/yvnbet',
    providerUrl: 'https://ggplus.pro',
    audioUrl: '',
    jackpotCount: 12,
    jackpotInterval: 7200
  };

  const translations = {
    hy: {
      navGames:'Խաղեր',navAdvantages:'Առավելություններ',navPayments:'Վճարումներ',navRules:'Կանոններ',login:'Մուտք',register:'Գրանցվել',
      eyebrow:'YVNBET • PREMIUM GAMING',heroTitle:'Խաղա՛ վստահ,<br><span>հաղթի՛ր YVNBET-ի հետ։</span>',heroText:'Ժամանակակից խաղային փորձ, արագ օպերատորական աջակցություն և հարմարավետ սպասարկում՝ մեկ հարթակում։',registerTelegram:'Գրանցվել Telegram-ում ↗',openProvider:'Մուտք գործել',telegramOnly:'Գործողություններ՝ Telegram-ի միջոցով',featured:'FEATURED',playNow:'PLAY NOW',depositBonus:'դեպոզիտի բոնուս',minDeposit:'նվազագույն լիցքավորում',liveActivity:'LIVE ACTIVITY',recentWins:'Վերջին շահումները',whyUs:'WHY YVNBET',advantagesTitle:'YVNBET-ի առավելությունները',advantagesIntro:'Պարզ, արագ և ժամանակակից սպասարկում՝ ստեղծված հարմարավետ խաղային փորձի համար։',privacyTitle:'Գաղտնիություն',privacyText:'Գրանցումը իրականացվում է Telegram-ի միջոցով՝ պահպանելով անձնական տվյալների գաղտնիությունը։',supportTitle:'Արագ աջակցություն',supportText:'Օպերատորը պատրաստ է օգնել կայքի և ծառայության հետ կապված հարցերում։',bonusTitle:'+10% բոնուս',bonusText:'Յուրաքանչյուր դեպոզիտի համար նախատեսված է +10% բոնուս՝ գործող պայմանների համաձայն։',languagesTitle:'3 լեզու',languagesText:'Հայերեն, Русский և English՝ պարզ ու հարմար ինտերֆեյսով։',gamesEyebrow:'CASINO GAMES',gamesTitle:'Խաղերի աշխարհ',allGames:'Դիտել հարթակը →',paymentsEyebrow:'PAYMENT METHODS',paymentsTitle:'Հարմար վճարումներ',paymentsText:'Լիցքավորման և ելքագրման գործողությունները կազմակերպվում են Telegram-ի միջոցով։',minDepositLabel:'Նվազագույն լիցքավորում',minWithdrawLabel:'Նվազագույն ելքագրում',maxWithdrawLabel:'Օրական առավելագույն ելքագրում',everyDeposit:'Յուրաքանչյուր դեպոզիտ',bonusLabel:'բոնուս',rulesEyebrow:'TERMS & CONDITIONS',rulesTitle:'Կանոններ և դրույթներ',rulesLead:'Մինչ գրանցվելը ծանոթացեք YVNBET-ի կանոններին։',rulesLeadText:'Օգտագործելով ծառայությունը՝ դուք հաստատում եք, որ ծանոթացել եք գործող պայմաններին։',rule1:'Կայքում կարող են գրանցվել միայն 18 տարին լրացած անձինք։',rule2:'Յուրաքանչյուր օգտատեր կարող է ունենալ միայն մեկ հաշիվ։ Մի քանի հաշվի հայտնաբերման դեպքում հասանելիությունը կարող է սահմանափակվել կամ արգելափակվել։',rule3:'Տեխնիկական կամ երրորդ կողմի ծառայություններից առաջացած խնդիրների համար YVNBET-ը պատասխանատվություն չի կրում այն դեպքերում, որոնք գտնվում են իր վերահսկողությունից դուրս։',rule4:'Օպերատորի նկատմամբ վիրավորական կամ անհարգալից վերաբերմունքի դեպքում ծառայությունը կարող է սահմանափակել օգտատիրոջ հասանելիությունը։',rule5:'Գրանցումը, մուտքը, լիցքավորումը և ելքագրումը իրականացվում են Telegram-ի միջոցով։',aboutEyebrow:'ABOUT YVNBET',aboutTitle:'Ժամանակակից փորձ՝ պարզ մոտեցմամբ։',aboutText:'YVNBET-ը ստեղծված է հարմարավետ, արագ և ժամանակակից խաղային փորձի համար՝ Telegram-ի վրա հիմնված օպերատորական սպասարկմամբ և բազմալեզու աջակցությամբ։',partnerEyebrow:'PARTNERSHIP PROGRAM',partnerTitle:'Գործընկերային ծրագիր',partnerText:'Ունե՞ք Telegram ալիք, սոցիալական էջ, կայք կամ այլ հարթակ և ցանկանում եք համագործակցել YVNBET-ի հետ։ Կապ հաստատեք մեզ հետ՝ գործընկերության հնարավորությունները քննարկելու համար։',contactUs:'Կապ հաստատել',footerText:'Խաղա՛ վստահ, հաղթի՛ր YVNBET-ի հետ։',footerNavigation:'Նավիգացիա',footerLegal:'Իրավական',terms:'Կայքի պայմաններ',privacy:'Գաղտնիության քաղաքականություն',about:'Մեր մասին',contact:'Կապ մեզ հետ',footerPayments:'Վճարման միջոցներ',telegramNotice:'Գրանցում, մուտք, լիցքավորում և ելքագրում՝ Telegram-ի միջոցով'
    },
    ru: {
      navGames:'Игры',navAdvantages:'Преимущества',navPayments:'Платежи',navRules:'Правила',login:'Войти',register:'Регистрация',eyebrow:'YVNBET • PREMIUM GAMING',heroTitle:'Играй уверенно,<br><span>побеждай с YVNBET.</span>',heroText:'Современный игровой опыт, оперативная поддержка оператора и удобный сервис в одном месте.',registerTelegram:'Регистрация в Telegram ↗',openProvider:'Войти',telegramOnly:'Операции через Telegram',featured:'FEATURED',playNow:'PLAY NOW',depositBonus:'бонус к депозиту',minDeposit:'минимальный депозит',liveActivity:'LIVE ACTIVITY',recentWins:'Последние выигрыши',whyUs:'WHY YVNBET',advantagesTitle:'Преимущества YVNBET',advantagesIntro:'Простой, быстрый и современный сервис для комфортного игрового опыта.',privacyTitle:'Конфиденциальность',privacyText:'Регистрация осуществляется через Telegram с соблюдением конфиденциальности персональных данных.',supportTitle:'Быстрая поддержка',supportText:'Оператор готов помочь по вопросам сайта и сервиса.',bonusTitle:'+10% бонус',bonusText:'На каждый депозит предусмотрен бонус +10% согласно действующим условиям.',languagesTitle:'3 языка',languagesText:'Հայերեն, Русский и English — понятный и удобный интерфейс.',gamesEyebrow:'CASINO GAMES',gamesTitle:'Мир игр',allGames:'Открыть платформу →',paymentsEyebrow:'PAYMENT METHODS',paymentsTitle:'Удобные платежи',paymentsText:'Пополнение и вывод организуются через Telegram.',minDepositLabel:'Минимальный депозит',minWithdrawLabel:'Минимальный вывод',maxWithdrawLabel:'Максимальный вывод в день',everyDeposit:'Каждый депозит',bonusLabel:'бонус',rulesEyebrow:'TERMS & CONDITIONS',rulesTitle:'Правила и условия',rulesLead:'Перед регистрацией ознакомьтесь с правилами YVNBET.',rulesLeadText:'Используя сервис, вы подтверждаете, что ознакомились с действующими условиями.',rule1:'На сайте могут регистрироваться только лица, достигшие 18 лет.',rule2:'Один пользователь может иметь только один аккаунт. При обнаружении нескольких аккаунтов доступ может быть ограничен или заблокирован.',rule3:'YVNBET не несет ответственности за технические проблемы или проблемы сторонних сервисов, находящиеся вне его контроля.',rule4:'При оскорбительном или неуважительном отношении к оператору сервис вправе ограничить доступ пользователя.',rule5:'Регистрация, вход, пополнение и вывод осуществляются через Telegram.',aboutEyebrow:'ABOUT YVNBET',aboutTitle:'Современный опыт с простым подходом.',aboutText:'YVNBET создан для удобного и современного игрового опыта с операторской поддержкой через Telegram и многоязычным сервисом.',partnerEyebrow:'PARTNERSHIP PROGRAM',partnerTitle:'Партнерская программа',partnerText:'У вас есть Telegram-канал, социальная страница, сайт или другая площадка и хотите сотрудничать с YVNBET? Свяжитесь с нами, чтобы обсудить возможности партнерства.',contactUs:'Связаться',footerText:'Играй уверенно, побеждай с YVNBET.',footerNavigation:'Навигация',footerLegal:'Правовая информация',terms:'Условия сайта',privacy:'Политика конфиденциальности',about:'О нас',contact:'Связаться',footerPayments:'Платежные средства',telegramNotice:'Регистрация, вход, пополнение и вывод — через Telegram'
    },
    en: {
      navGames:'Games',navAdvantages:'Advantages',navPayments:'Payments',navRules:'Rules',login:'Login',register:'Register',eyebrow:'YVNBET • PREMIUM GAMING',heroTitle:'Play with confidence,<br><span>win with YVNBET.</span>',heroText:'A modern gaming experience with responsive operator support and convenient service in one place.',registerTelegram:'Register via Telegram ↗',openProvider:'Login',telegramOnly:'Operations via Telegram',featured:'FEATURED',playNow:'PLAY NOW',depositBonus:'deposit bonus',minDeposit:'minimum deposit',liveActivity:'LIVE ACTIVITY',recentWins:'Recent wins',whyUs:'WHY YVNBET',advantagesTitle:'YVNBET advantages',advantagesIntro:'Simple, fast and modern service designed for a comfortable gaming experience.',privacyTitle:'Privacy',privacyText:'Registration is handled through Telegram with a focus on personal-data privacy.',supportTitle:'Fast support',supportText:'Our operator is ready to help with website and service questions.',bonusTitle:'+10% bonus',bonusText:'A +10% bonus is offered on each deposit under the applicable terms.',languagesTitle:'3 languages',languagesText:'Հայերեն, Русский and English with a clear, convenient interface.',gamesEyebrow:'CASINO GAMES',gamesTitle:'Game world',allGames:'Open platform →',paymentsEyebrow:'PAYMENT METHODS',paymentsTitle:'Convenient payments',paymentsText:'Deposits and withdrawals are handled through Telegram.',minDepositLabel:'Minimum deposit',minWithdrawLabel:'Minimum withdrawal',maxWithdrawLabel:'Maximum daily withdrawal',everyDeposit:'Every deposit',bonusLabel:'bonus',rulesEyebrow:'TERMS & CONDITIONS',rulesTitle:'Rules & conditions',rulesLead:'Please read YVNBET rules before registering.',rulesLeadText:'By using the service, you confirm that you have read the applicable terms.',rule1:'Only persons aged 18 or older may register on the website.',rule2:'Each user may have only one account. If multiple accounts are detected, access may be restricted or blocked.',rule3:'YVNBET is not responsible for technical or third-party service issues outside its control.',rule4:'In case of abusive or disrespectful behavior toward the operator, the service may restrict user access.',rule5:'Registration, login, deposits and withdrawals are handled through Telegram.',aboutEyebrow:'ABOUT YVNBET',aboutTitle:'A modern experience with a simple approach.',aboutText:'YVNBET is designed for a convenient, fast and modern gaming experience with Telegram-based operator support and multilingual service.',partnerEyebrow:'PARTNERSHIP PROGRAM',partnerTitle:'Partnership program',partnerText:'Have a Telegram channel, social page, website or another platform and want to work with YVNBET? Contact us to discuss partnership opportunities.',contactUs:'Contact us',footerText:'Play with confidence, win with YVNBET.',footerNavigation:'Navigation',footerLegal:'Legal',terms:'Site terms',privacy:'Privacy policy',about:'About us',contact:'Contact us',footerPayments:'Payment methods',telegramNotice:'Registration, login, deposits and withdrawals — via Telegram'
    }
  };

  const games = [
    {name:'Neon Fortune',type:'Slots',image:'https://images.unsplash.com/photo-1518544866330-95a2f5d5d4f4?auto=format&fit=crop&w=900&q=80'},
    {name:'Royal Spin',type:'Casino',image:'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80'},
    {name:'Golden Night',type:'Jackpot',image:'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&w=900&q=80'},
    {name:'Lucky Seven',type:'Classic',image:'https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=900&q=80'},
    {name:'Purple Rush',type:'Slots',image:'https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=900&q=80'},
    {name:'Diamond Club',type:'Premium',image:'https://images.unsplash.com/photo-1518894781321-630e638d074b?auto=format&fit=crop&w=900&q=80'},
    {name:'Midnight Ace',type:'Cards',image:'https://images.unsplash.com/photo-1541278107931-e006523892df?auto=format&fit=crop&w=900&q=80'},
    {name:'Vegas Lights',type:'Casino',image:'https://images.unsplash.com/photo-1508170754725-6e9a5cfb7f2b?auto=format&fit=crop&w=900&q=80'}
  ];

  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.hy;
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    $$('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    localStorage.setItem('yvnbet-language', lang);
  }

  function renderGames() {
    const grid = $('#gameGrid');
    if (!grid) return;
    grid.innerHTML = games.map(game => `
      <article class="game-card" tabindex="0" role="link" aria-label="${game.name}">
        <div class="game-image" style="background-image:url('${game.image}')"></div>
        <span class="game-open">↗</span>
        <div class="game-content"><h3>${game.name}</h3><p>${game.type} • YVNBET</p></div>
      </article>`).join('');
    $$('.game-card').forEach(card => {
      const open = () => window.open(CONFIG.providerUrl, '_blank', 'noopener,noreferrer');
      card.addEventListener('click', open);
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    });
  }

  const firstNames = ['Arm','Tik','Hov','Mar','Ani','Dav','Sam','Nare','Leo','Mik','Eva','Aram','Lus','Tig','Gor','Saro','Mia','Nik','Ari','Vah'];
  function dailySeed() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
  }
  function seededRandom(seed) {
    let h = 2166136261;
    for (let i=0;i<seed.length;i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
    return () => { h += h << 13; h ^= h >>> 7; h += h << 3; h ^= h >>> 17; h += h << 5; return ((h >>> 0) % 100000) / 100000; };
  }
  function createDailyWinners() {
    const key = `yvnbet-jackpot-${dailySeed()}`;
    const saved = localStorage.getItem(key);
    if (saved) return JSON.parse(saved);
    const rnd = seededRandom(dailySeed());
    const used = new Set();
    const amounts = [2000,3500,5000,7500,10000,12500,15000,22000,30000,45000,67000,85000,120000];
    const result=[];
    while(result.length < CONFIG.jackpotCount){
      let idx=Math.floor(rnd()*firstNames.length);
      if(used.has(idx)) continue;
      used.add(idx);
      const raw=firstNames[idx];
      const visible=Math.max(2,Math.min(raw.length,2+Math.floor(rnd()*3)));
      const mask='*'.repeat(Math.max(2,raw.length-visible+2));
      const amount=amounts[Math.floor(rnd()*amounts.length)];
      result.push({name:raw.slice(0,visible)+mask,amount});
    }
    localStorage.setItem(key,JSON.stringify(result));
    return result;
  }

  function renderWinner(w) {
    const ticker=$('#jackpotTicker');
    if(!ticker) return;
    const item=document.createElement('div');
    item.className='winner';
    item.innerHTML=`<div><span class="person">${w.name}</span><small>YVNBET • WIN</small></div><span class="amount">${w.amount.toLocaleString('en-US')} AMD</span>`;
    ticker.prepend(item);
    while(ticker.children.length>3) ticker.lastElementChild.remove();
  }
  function startJackpot(){
    const winners=createDailyWinners();
    let i=0;
    const show=()=>{renderWinner(winners[i%winners.length]);i++;};
    show();
    setInterval(show, CONFIG.jackpotInterval);
  }

  function setupSound(){
    const audio=$('#backgroundAudio'), button=$('#soundToggle'), icon=$('#soundIcon');
    if(!audio||!button)return;
    if(CONFIG.audioUrl){ audio.src=CONFIG.audioUrl; }
    let muted=localStorage.getItem('yvnbet-sound')==='off';
    audio.muted=muted;
    const sync=()=>{icon.textContent=audio.muted?'🔇':'🔊';};
    sync();
    const tryPlay=()=>{if(!audio.src||muted)return; audio.play().catch(()=>{});};
    button.addEventListener('click',()=>{audio.muted=!audio.muted; muted=audio.muted; localStorage.setItem('yvnbet-sound',muted?'off':'on'); if(!muted)tryPlay();sync();});
    ['pointerdown','touchstart','keydown'].forEach(ev=>document.addEventListener(ev,()=>tryPlay(),{once:true,passive:true}));
  }

  function setupMenu(){
    const toggle=$('#menuToggle'), menu=$('#mobileMenu');
    toggle?.addEventListener('click',()=>menu.classList.toggle('open'));
    $$('#mobileMenu a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
  }

  function setupReveal(){
    const els=$$('.reveal');
    if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('visible'));return;}
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
    els.forEach(e=>observer.observe(e));
  }

  function setupTelegramDrag(){
    const el=$('#telegramFloat'); if(!el)return;
    const saved=localStorage.getItem('yvnbet-telegram-position');
    if(saved){try{const p=JSON.parse(saved);el.style.left=p.left+'px';el.style.top=p.top+'px';el.style.right='auto';el.style.bottom='auto';}catch{}}
    let dragging=false,moved=false,startX=0,startY=0,startLeft=0,startTop=0;
    const start=(x,y)=>{dragging=true;moved=false;const r=el.getBoundingClientRect();startX=x;startY=y;startLeft=r.left;startTop=r.top;el.style.left=startLeft+'px';el.style.top=startTop+'px';el.style.right='auto';el.style.bottom='auto';};
    const move=(x,y)=>{if(!dragging)return;const dx=x-startX,dy=y-startY;if(Math.abs(dx)+Math.abs(dy)>5)moved=true;const maxX=innerWidth-el.offsetWidth,maxY=innerHeight-el.offsetHeight;el.style.left=Math.max(5,Math.min(maxX,startLeft+dx))+'px';el.style.top=Math.max(5,Math.min(maxY,startTop+dy))+'px';};
    const end=()=>{if(!dragging)return;dragging=false;if(moved){localStorage.setItem('yvnbet-telegram-position',JSON.stringify({left:parseFloat(el.style.left),top:parseFloat(el.style.top)}));}};
    el.addEventListener('pointerdown',e=>{start(e.clientX,e.clientY);el.setPointerCapture?.(e.pointerId);});
    el.addEventListener('pointermove',e=>move(e.clientX,e.clientY));
    el.addEventListener('pointerup',end);el.addEventListener('pointercancel',end);
    el.addEventListener('click',e=>{if(moved){e.preventDefault();e.stopPropagation();}});
  }

  function setupLanguages(){
    const saved=localStorage.getItem('yvnbet-language')||'hy';
    applyLanguage(saved);
    $$('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>applyLanguage(btn.dataset.lang)));
  }

  function protectUI(){
    document.addEventListener('contextmenu',e=>e.preventDefault());
    document.addEventListener('dragstart',e=>e.preventDefault());
    document.addEventListener('copy',e=>e.preventDefault());
    document.addEventListener('cut',e=>e.preventDefault());
    document.addEventListener('keydown',e=>{
      if((e.ctrlKey||e.metaKey)&&['+','-','=','0','c','x','u','s'].includes(e.key.toLowerCase()))e.preventDefault();
    });
  }

  function init(){
    $('#year').textContent=new Date().getFullYear();
    renderGames(); setupLanguages(); setupSound(); setupMenu(); setupReveal(); setupTelegramDrag(); startJackpot(); protectUI();
  }
  document.addEventListener('DOMContentLoaded',init);
})();