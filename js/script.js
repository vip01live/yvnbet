(() => {
  'use strict';

  const CONFIG = {
    registrationUrl: 'https://t.me/yvnbet',
    operatorUrl: 'https://t.me/yvnbet',
    providerUrl: 'https://ggplus.pro',
    audioUrl: '',
    jackpotCount: 12,
    jackpotInterval: 7200,
    sliderInterval: 5000
  };

  const translations = {
    hy:{navGames:'Խաղեր',navAdvantages:'Առավելություններ',navPayments:'Վճարումներ',navRules:'Կանոններ',login:'Մուտք',register:'Գրանցվել',heroTitle:'Խաղա՛ վստահ,<br><span>հաղթի՛ր YVNBET-ի հետ։</span>',heroText:'Ժամանակակից խաղային փորձ, հարմարավետ սպասարկում և արագ օպերատորական աջակցություն՝ մեկ հարթակում։',registerTelegram:'Գրանցվել Telegram-ում',openProvider:'Մուտք գործել',telegramOnly:'Գործողություններ՝ Telegram-ի միջոցով',playNow:'PLAY NOW',depositBonus:'ամեն դեպոզիտի վրա',minDeposit:'նվազագույն լիցքավորում',recentWins:'Վերջին շահումները',advantagesTitle:'YVNBET-ի առավելությունները',privacyTitle:'100% գաղտնիություն',privacyText:'Գրանցման գործընթացը իրականացվում է Telegram-ի միջոցով՝ պահպանելով օգտատիրոջ գաղտնիությունը։',supportTitle:'Արագ աջակցություն',supportText:'Օպերատորը պատրաստ է օգնել կայքի և սպասարկման հետ կապված հարցերում։',bonusTitle:'+10% բոնուս',bonusText:'Յուրաքանչյուր լիցքավորման համար նախատեսված է +10% բոնուս՝ գործող պայմանների համաձայն։',winTitle:'Մեծ շահումների հնարավորություն',winText:'Ընտրեք հասանելի խաղերից և օգտվեք YVNBET-ի խաղային հնարավորություններից։',showcaseTitle:'Խաղային մթնոլորտ',gamesTitle:'Խաղերի աշխարհ',allGames:'Դիտել հարթակը',paymentsTitle:'Լիցքավորման միջոցներ',paymentsText:'Լիցքավորման և ելքագրման գործողությունները կազմակերպվում են Telegram-ի միջոցով։',minDepositLabel:'Նվազագույն լիցքավորում',minWithdrawLabel:'Նվազագույն ելքագրում',maxWithdrawLabel:'Օրական առավելագույն ելքագրում',everyDeposit:'Յուրաքանչյուր լիցքավորում',bonusLabel:'բոնուս',rulesTitle:'Կանոններ և դրույթներ',rulesLead:'Մինչ կայքում գրանցվելը ծանոթացեք YVNBET-ի կանոններին։',rulesLeadText:'Օգտագործելով ծառայությունը՝ դուք հաստատում եք, որ ծանոթացել եք գործող պայմաններին։',rule1:'Կայքում կարող են գրանցվել միայն 18 տարին լրացած անձինք։',rule2:'Յուրաքանչյուր օգտատեր կարող է ունենալ միայն մեկ հաշիվ։ Մի քանի հաշվի հայտնաբերման դեպքում օգտատերը կարող է արգելափակվել։',rule3:'Կայքում կամ երրորդ կողմի ծառայություններում առաջացած և YVNBET-ի վերահսկողությունից դուրս գտնվող տեխնիկական խնդիրների համար YVNBET-ը պատասխանատվություն չի կրում։',rule4:'Օպերատորի նկատմամբ վիրավորական կամ անհարգալից վերաբերմունքի դեպքում YVNBET-ը իրավունք ունի սահմանափակել կամ արգելափակել օգտատիրոջ հասանելիությունը։',rule5:'Գրանցումը, մուտքը, լիցքավորումը և ելքագրումը իրականացվում են Telegram-ի միջոցով։',rule6:'Նվազագույն լիցքավորումը՝ 1,500 AMD, նվազագույն ելքագրումը՝ 2,000 AMD, օրական առավելագույն ելքագրումը՝ 200,000 AMD։',rule7:'Ելքագրումը հասանելի է կրիպտո հասցեների, VISA, Mastercard և ARCA միջոցներով՝ գործող պայմանների համաձայն։',aboutTitle:'YVNBET',aboutText:'YVNBET-ը ներկայացնում է ժամանակակից խաղային միջավայր՝ խաղերով, հարմար վճարային միջոցներով, օպերատորի աջակցությամբ և Telegram-ի միջոցով իրականացվող սպասարկմամբ։',partnerTitle:'Գործընկերային ծրագիր',partnerText:'Ունե՞ք Telegram ալիք, կայք, սոցիալական էջ կամ այլ հարթակ և ցանկանում եք համագործակցել YVNBET-ի հետ։ Կապվեք մեզ հետ՝ գործընկերության հնարավորություններն ու պայմանները քննարկելու համար։',contactUs:'Կապվել մեզ հետ',footerNavigation:'Նավիգացիա',footerLegal:'Իրավական',terms:'Պայմաններ և դրույթներ',privacy:'Գաղտնիության քաղաքականություն',about:'Մեր մասին',contact:'Կապ մեզ հետ',partnership:'Գործընկերային ծրագիր',footerPayments:'Վճարման միջոցներ',telegramNotice:'Գրանցում, մուտք, լիցքավորում և ելքագրում՝ Telegram-ի միջոցով'},
    ru:{navGames:'Игры',navAdvantages:'Преимущества',navPayments:'Платежи',navRules:'Правила',login:'Войти',register:'Регистрация',heroTitle:'Играй уверенно,<br><span>побеждай с YVNBET.</span>',heroText:'Современный игровой опыт, удобный сервис и оперативная поддержка оператора в одном месте.',registerTelegram:'Регистрация в Telegram',openProvider:'Войти',telegramOnly:'Операции через Telegram',playNow:'PLAY NOW',depositBonus:'на каждый депозит',minDeposit:'минимальный депозит',recentWins:'Последние выигрыши',advantagesTitle:'Преимущества YVNBET',privacyTitle:'100% конфиденциальность',privacyText:'Регистрация осуществляется через Telegram с сохранением конфиденциальности пользователя.',supportTitle:'Быстрая поддержка',supportText:'Оператор готов помочь по вопросам сайта и сервиса.',bonusTitle:'+10% бонус',bonusText:'На каждое пополнение предусмотрен бонус +10% согласно действующим условиям.',winTitle:'Большая возможность выигрыша',winText:'Выбирайте доступные игры и пользуйтесь игровыми возможностями YVNBET.',showcaseTitle:'Игровая атмосфера',gamesTitle:'Мир игр',allGames:'Открыть платформу',paymentsTitle:'Способы пополнения',paymentsText:'Пополнение и вывод организуются через Telegram.',minDepositLabel:'Минимальный депозит',minWithdrawLabel:'Минимальный вывод',maxWithdrawLabel:'Максимальный вывод в день',everyDeposit:'Каждое пополнение',bonusLabel:'бонус',rulesTitle:'Правила и условия',rulesLead:'Перед регистрацией ознакомьтесь с правилами YVNBET.',rulesLeadText:'Используя сервис, вы подтверждаете, что ознакомились с действующими условиями.',rule1:'На сайте могут регистрироваться только лица, достигшие 18 лет.',rule2:'Один пользователь может иметь только один аккаунт. При обнаружении нескольких аккаунтов пользователь может быть заблокирован.',rule3:'YVNBET не несет ответственности за технические проблемы сайта или сторонних сервисов, находящиеся вне его контроля.',rule4:'При оскорбительном или неуважительном отношении к оператору YVNBET вправе ограничить или заблокировать доступ пользователя.',rule5:'Регистрация, вход, пополнение и вывод осуществляются через Telegram.',rule6:'Минимальный депозит — 1 500 AMD, минимальный вывод — 2 000 AMD, максимальный вывод в день — 200 000 AMD.',rule7:'Вывод доступен на криптоадреса, VISA, Mastercard и ARCA согласно действующим условиям.',aboutTitle:'YVNBET',aboutText:'YVNBET представляет современную игровую среду с играми, удобными платежными средствами, поддержкой оператора и обслуживанием через Telegram.',partnerTitle:'Партнерская программа',partnerText:'У вас есть Telegram-канал, сайт, социальная страница или другая площадка и хотите сотрудничать с YVNBET? Свяжитесь с нами, чтобы обсудить возможности и условия партнерства.',contactUs:'Связаться',footerNavigation:'Навигация',footerLegal:'Правовая информация',terms:'Условия и положения',privacy:'Политика конфиденциальности',about:'О нас',contact:'Связаться',partnership:'Партнерская программа',footerPayments:'Способы оплаты',telegramNotice:'Регистрация, вход, пополнение и вывод — через Telegram'},
    en:{navGames:'Games',navAdvantages:'Advantages',navPayments:'Payments',navRules:'Rules',login:'Login',register:'Register',heroTitle:'Play with confidence,<br><span>win with YVNBET.</span>',heroText:'A modern gaming experience, convenient service and responsive operator support in one place.',registerTelegram:'Register via Telegram',openProvider:'Login',telegramOnly:'Operations via Telegram',playNow:'PLAY NOW',depositBonus:'on every deposit',minDeposit:'minimum deposit',recentWins:'Recent wins',advantagesTitle:'YVNBET advantages',privacyTitle:'100% privacy',privacyText:'Registration is handled through Telegram with a focus on user privacy.',supportTitle:'Fast support',supportText:'Our operator is ready to help with website and service questions.',bonusTitle:'+10% bonus',bonusText:'A +10% bonus is provided on every deposit under the applicable terms.',winTitle:'Great winning potential',winText:'Choose from available games and use the gaming opportunities offered by YVNBET.',showcaseTitle:'Gaming atmosphere',gamesTitle:'Game world',allGames:'Open platform',paymentsTitle:'Deposit methods',paymentsText:'Deposits and withdrawals are handled through Telegram.',minDepositLabel:'Minimum deposit',minWithdrawLabel:'Minimum withdrawal',maxWithdrawLabel:'Maximum daily withdrawal',everyDeposit:'Every deposit',bonusLabel:'bonus',rulesTitle:'Rules & conditions',rulesLead:'Please read YVNBET rules before registering.',rulesLeadText:'By using the service, you confirm that you have read the applicable terms.',rule1:'Only persons aged 18 or older may register on the website.',rule2:'Each user may have only one account. If multiple accounts are detected, the user may be blocked.',rule3:'YVNBET is not responsible for technical website or third-party service issues outside its control.',rule4:'In case of abusive or disrespectful behavior toward the operator, YVNBET may restrict or block user access.',rule5:'Registration, login, deposits and withdrawals are handled through Telegram.',rule6:'Minimum deposit: 1,500 AMD. Minimum withdrawal: 2,000 AMD. Maximum daily withdrawal: 200,000 AMD.',rule7:'Withdrawals are available to crypto addresses, VISA, Mastercard and ARCA according to applicable terms.',aboutTitle:'YVNBET',aboutText:'YVNBET presents a modern gaming environment with games, convenient payment methods, operator support and Telegram-based service.',partnerTitle:'Partnership program',partnerText:'Have a Telegram channel, website, social page or another platform and want to work with YVNBET? Contact us to discuss partnership opportunities and terms.',contactUs:'Contact us',footerNavigation:'Navigation',footerLegal:'Legal',terms:'Terms & conditions',privacy:'Privacy policy',about:'About us',contact:'Contact us',partnership:'Partnership program',footerPayments:'Payment methods',telegramNotice:'Registration, login, deposits and withdrawals — via Telegram'}
  };

  const games = [
    {name:'Neon Fortune',type:'Slots',image:'https://images.unsplash.com/photo-1518544866330-95a2f5d5d4f4?auto=format&fit=crop&w=1000&q=85'},
    {name:'Royal Spin',type:'Casino',image:'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=85'},
    {name:'Golden Night',type:'Jackpot',image:'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&w=1000&q=85'},
    {name:'Lucky Seven',type:'Classic',image:'https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=1000&q=85'},
    {name:'Purple Rush',type:'Slots',image:'https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1000&q=85'},
    {name:'Diamond Club',type:'Premium',image:'https://images.unsplash.com/photo-1518894781321-630e638d074b?auto=format&fit=crop&w=1000&q=85'},
    {name:'Midnight Ace',type:'Cards',image:'https://images.unsplash.com/photo-1541278107931-e006523892df?auto=format&fit=crop&w=1000&q=85'},
    {name:'Vegas Lights',type:'Casino',image:'https://images.unsplash.com/photo-1508170754725-6e9a5cfb7f2b?auto=format&fit=crop&w=1000&q=85'}
  ];

  const showcase = [
    {title:'YVNBET',text:'Խաղային մթնոլորտ և ժամանակակից casino փորձ։',image:'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=85'},
    {title:'Խաղերի ընտրանի',text:'Տարբեր խաղային ուղղություններ՝ մեկ հարթակում։',image:'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&w=1600&q=85'},
    {title:'Premium experience',text:'Հարմարավետ սպասարկում և օպերատորի աջակցություն։',image:'https://images.unsplash.com/photo-1518544866330-95a2f5d5d4f4?auto=format&fit=crop&w=1600&q=85'}
  ];

  const payments = ['LTC','DASH','SOL','USDT','VISA','Mastercard','ARCA'];
  const $ = (s,root=document) => root.querySelector(s);
  const $$ = (s,root=document) => [...root.querySelectorAll(s)];
  const icon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 20 6v5c0 5.2-3.3 8.6-8 10-4.7-1.4-8-4.8-8-10V6l8-3Z"/></svg>';

  function applyLanguage(lang){
    const dict=translations[lang]||translations.hy;
    document.documentElement.lang=lang;
    $$('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(dict[key]!==undefined)el.innerHTML=dict[key];});
    $$('.lang-btn').forEach(btn=>btn.classList.toggle('active',btn.dataset.lang===lang));
    localStorage.setItem('yvnbet-language',lang);
  }

  function renderGames(){
    const grid=$('#gameGrid'); if(!grid)return;
    grid.innerHTML=games.map(game=>`<article class="game-card" tabindex="0" role="link" aria-label="${game.name}"><div class="game-image" style="background-image:url('${game.image}')"></div><span class="game-open"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg></span><div class="game-content"><h3>${game.name}</h3><p>${game.type} • YVNBET</p></div></article>`).join('');
    $$('.game-card').forEach(card=>{const open=()=>window.open(CONFIG.providerUrl,'_blank','noopener,noreferrer');card.addEventListener('click',open);card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});});
  }

  function renderPayments(){
    const html=payments.map(name=>`<div class="payment-item"><svg viewBox="0 0 24 24"><path d="M12 3 20 6v5c0 5.2-3.3 8.6-8 10-4.7-1.4-8-4.8-8-10V6l8-3Z"/></svg><div><strong>${name}</strong><small>YVNBET</small></div></div>`).join('');
    if($('#paymentList'))$('#paymentList').innerHTML=html;
    if($('#footerPayments'))$('#footerPayments').innerHTML=payments.map(name=>`<span>${name}</span>`).join('');
  }

  function renderShowcase(){
    const track=$('#showcaseTrack'),dots=$('#sliderDots'); if(!track||!dots)return;
    track.innerHTML=showcase.map(slide=>`<article class="showcase-slide"><img src="${slide.image}" alt="YVNBET ${slide.title}" loading="lazy"><div class="showcase-copy"><span class="eyebrow">YVNBET</span><h3>${slide.title}</h3><p>${slide.text}</p></div></article>`).join('');
    dots.innerHTML=showcase.map((_,i)=>`<button class="slider-dot${i===0?' active':''}" data-slide="${i}" aria-label="Slide ${i+1}"></button>`).join('');
    let current=0;
    const goTo=i=>{current=(i+showcase.length)%showcase.length;track.style.transform=`translateX(-${current*100}%)`;$$('.slider-dot').forEach((d,n)=>d.classList.toggle('active',n===current));};
    $('#slidePrev')?.addEventListener('click',()=>goTo(current-1));$('#slideNext')?.addEventListener('click',()=>goTo(current+1));
    $$('.slider-dot').forEach(d=>d.addEventListener('click',()=>goTo(Number(d.dataset.slide))));
    let timer=setInterval(()=>goTo(current+1),CONFIG.sliderInterval);
    const slider=$('.showcase-slider');slider?.addEventListener('mouseenter',()=>clearInterval(timer));slider?.addEventListener('mouseleave',()=>{timer=setInterval(()=>goTo(current+1),CONFIG.sliderInterval);});
    let startX=0;slider?.addEventListener('touchstart',e=>{startX=e.touches[0].clientX},{passive:true});slider?.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-startX;if(Math.abs(dx)>45)goTo(current+(dx<0?1:-1));},{passive:true});
  }

  const firstNames=['Arm','Tik','Hov','Mar','Ani','Dav','Sam','Nare','Leo','Mik','Eva','Aram','Lus','Tig','Gor','Saro','Mia','Nik','Ari','Vah'];
  function dailySeed(){const d=new Date();return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;}
  function seededRandom(seed){let h=2166136261;for(let i=0;i<seed.length;i++)h=Math.imul(h^seed.charCodeAt(i),16777619);return()=>{h+=h<<13;h^=h>>>7;h+=h<<3;h^=h>>>17;h+=h<<5;return((h>>>0)%100000)/100000;};}
  function createDailyWinners(){
    const key=`yvnbet-jackpot-${dailySeed()}`;const saved=localStorage.getItem(key);if(saved){try{return JSON.parse(saved);}catch{}}
    const rnd=seededRandom(dailySeed()),used=new Set(),amounts=[2000,3500,5000,7500,10000,12500,15000,22000,30000,45000,67000,85000,120000],result=[];
    while(result.length<CONFIG.jackpotCount){const idx=Math.floor(rnd()*firstNames.length);if(used.has(idx))continue;used.add(idx);const raw=firstNames[idx];const visible=Math.max(2,Math.min(raw.length,2+Math.floor(rnd()*2)));const mask='*'.repeat(Math.max(2,raw.length-visible+2));result.push({name:raw.slice(0,visible)+mask,amount:amounts[Math.floor(rnd()*amounts.length)]});}
    localStorage.setItem(key,JSON.stringify(result));return result;
  }
  function renderWinner(w){const ticker=$('#jackpotTicker');if(!ticker)return;const item=document.createElement('div');item.className='winner';item.innerHTML=`<div><span class="person">${w.name}</span><small>YVNBET • WIN</small></div><span class="amount">${w.amount.toLocaleString('en-US')} AMD</span>`;ticker.prepend(item);while(ticker.children.length>3)ticker.lastElementChild.remove();}
  function startJackpot(){const winners=createDailyWinners();let i=0;const show=()=>{renderWinner(winners[i%winners.length]);i++;};show();setInterval(show,CONFIG.jackpotInterval*1000);}

  function setupSound(){
    const audio=$('#backgroundAudio'),button=$('#soundToggle'),icon=$('#soundIcon');if(!audio||!button)return;
    if(CONFIG.audioUrl)audio.src=CONFIG.audioUrl;
    let muted=localStorage.getItem('yvnbet-sound')==='off';audio.muted=muted;
    const sync=()=>{icon.innerHTML=audio.muted?'<path d="M4 9v6h4l5 4V5L8 9H4Zm13.5 1.5 4 4m0-4-4 4"/>':'<path d="M4 9v6h4l5 4V5L8 9H4Zm12.5 3a4.5 4.5 0 0 0-2.5-4.05v8.1A4.5 4.5 0 0 0 16.5 12Zm0-8.5v2.07A7.5 7.5 0 0 1 16.5 18.43V20.5A9.5 9.5 0 0 0 16.5 3.5Z"/>';};
    const tryPlay=()=>{if(!audio.src||muted)return;audio.play().catch(()=>{});};sync();
    button.addEventListener('click',()=>{audio.muted=!audio.muted;muted=audio.muted;localStorage.setItem('yvnbet-sound',muted?'off':'on');if(!muted)tryPlay();sync();});
    ['pointerdown','touchstart','keydown'].forEach(ev=>document.addEventListener(ev,tryPlay,{once:true,passive:true}));
  }

  function setupMenu(){const toggle=$('#menuToggle'),menu=$('#mobileMenu');toggle?.addEventListener('click',()=>menu.classList.toggle('open'));$$('#mobileMenu a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));}
  function setupReveal(){const els=$$('.reveal');if(!('IntersectionObserver'in window)){els.forEach(e=>e.classList.add('visible'));return;}const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.12});els.forEach(e=>observer.observe(e));}
  function setupTelegramDrag(){
    const el=$('#telegramFloat');if(!el)return;const saved=localStorage.getItem('yvnbet-telegram-position');if(saved){try{const p=JSON.parse(saved);el.style.left=p.left+'px';el.style.top=p.top+'px';el.style.right='auto';el.style.bottom='auto';}catch{}}
    let dragging=false,moved=false,startX=0,startY=0,startLeft=0,startTop=0;const start=(x,y)=>{dragging=true;moved=false;const r=el.getBoundingClientRect();startX=x;startY=y;startLeft=r.left;startTop=r.top;el.style.left=startLeft+'px';el.style.top=startTop+'px';el.style.right='auto';el.style.bottom='auto';};const move=(x,y)=>{if(!dragging)return;const dx=x-startX,dy=y-startY;if(Math.abs(dx)+Math.abs(dy)>5)moved=true;const maxX=innerWidth-el.offsetWidth,maxY=innerHeight-el.offsetHeight;el.style.left=Math.max(5,Math.min(maxX,startLeft+dx))+'px';el.style.top=Math.max(5,Math.min(maxY,startTop+dy))+'px';};const end=()=>{if(!dragging)return;dragging=false;if(moved)localStorage.setItem('yvnbet-telegram-position',JSON.stringify({left:parseFloat(el.style.left),top:parseFloat(el.style.top)}));};
    el.addEventListener('pointerdown',e=>{start(e.clientX,e.clientY);el.setPointerCapture?.(e.pointerId);});el.addEventListener('pointermove',e=>move(e.clientX,e.clientY));el.addEventListener('pointerup',end);el.addEventListener('pointercancel',end);el.addEventListener('click',e=>{if(moved){e.preventDefault();e.stopPropagation();}});
  }
  function setupLanguages(){const saved=localStorage.getItem('yvnbet-language')||'hy';applyLanguage(saved);$$('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>applyLanguage(btn.dataset.lang)));}
  function protectUI(){document.addEventListener('contextmenu',e=>e.preventDefault());document.addEventListener('dragstart',e=>e.preventDefault());document.addEventListener('copy',e=>e.preventDefault());document.addEventListener('cut',e=>e.preventDefault());document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&['+','-','=','0','c','x','u','s'].includes(e.key.toLowerCase()))e.preventDefault();});}
  function init(){const year=$('#year');if(year)year.textContent=new Date().getFullYear();renderGames();renderPayments();renderShowcase();setupLanguages();setupSound();setupMenu();setupReveal();setupTelegramDrag();startJackpot();protectUI();}
  document.addEventListener('DOMContentLoaded',init);
})();