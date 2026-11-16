/* =====================================================================
   КОНТЕНТ САЙТУ MATIÉ — редагуйте ТІЛЬКИ цей файл.
   Після збереження на GitHub сайт оновиться сам приблизно за хвилину.
   Фото кладіть у папку images/<id проєкту>/ і вписуйте шляхи в images,
   напр. images:["images/rouge/01.jpg","images/rouge/02.jpg"].
   Проєкт: images = список фото (перше — обкладинка). Поки фото немає,
   сайт малює заглушки за полем "art". tint — колір відтінку сторінки
   проєкту. live — цифри «Якби знімати наживо» (null = позначка [..]).
   SINGLES — окремі кадри, що потрапляють лише у сферу.
   ===================================================================== */
var SITE = {
  telegram: "martamatviykiv",
  instagram: ["matiemoi","marta.matviykiv"], /* перший — основний */
  projects: [
    {id:"rouge", tint:"#c1121f", images:[], live:[null,null,null], art:{k:"product",pal:["#2a0507","#120203","#c1121f","#ff6b5b","#f4d8c8"]},
     uk:{t:"Rouge",c:"Рекламна кампанія · догляд за шкірою",f:"Запуск нового крему бренду косметики: соцмережі, сайт, банери.",k:"Показати крем як предмет розкоші й зробити серію кадрів, що впізнаються з першої секунди в стрічці.",s:"Глибокий червоний, драматичне світло і скло, що грає відблисками. Кожен кадр зібраний як обкладинка: один предмет, одна емоція, нічого зайвого."},
     en:{t:"Rouge",c:"Ad campaign · skincare",f:"Launch of a new cream for a cosmetics brand: social, website, banners.",k:"Present the cream as a luxury object and create a series that stands out in the feed from the first second.",s:"Deep red, dramatic light and glass catching reflections. Each frame is built like a cover: one object, one emotion, nothing extra."}},
    {id:"elysium", tint:"#e08a3c", images:[], live:[null,null,null], art:{k:"columns",pal:["#f2b56b","#7a3b1d","#e8d2b0","#b0532a","#3b1e12"]},
     uk:{t:"Elysium",c:"Фотосесія · блогерка",f:"Особистий бренд блогерки: аватар, обкладинки, серія постів.",k:"Перенести героїню в античну Грецію: мармур, золоте світло, тканини в русі.",s:"Теплий вечірній світ, справжні пропорції архітектури й живописна композиція, як на полотнах старих майстрів."},
     en:{t:"Elysium",c:"Photoshoot · creator",f:"A creator’s personal brand: avatar, covers, a post series.",k:"Place her in ancient Greece: marble, golden light, fabric in motion.",s:"Warm evening light, true architectural proportions and painterly composition in the manner of the old masters."}},
    {id:"noir", tint:"#9a958e", images:[], live:[null,null,null], art:{k:"portrait",pal:["#1c1c1e","#050505","#d9d4cc","#8d8780","#f5f2ec"]},
     uk:{t:"Noir",c:"Портретна серія · публічна людина",f:"Фото для інтерв’ю, обкладинки подкасту та преси.",k:"Стриманий чорно-білий образ, який передає характер без зайвого глянцю.",s:"Жорстке бокове світло, глибокі тіні, видима текстура шкіри. Ретуш, що не стирає особистість."},
     en:{t:"Noir",c:"Portrait series · public figure",f:"Images for interviews, a podcast cover and press.",k:"A restrained black-and-white look that shows character without excess gloss.",s:"Hard side light, deep shadows, visible skin texture. Retouching that keeps the personality."}},
    {id:"dune", tint:"#3f9f97", images:[], live:[null,null,null], art:{k:"fashion",pal:["#5fa8a0","#d9b98c","#1f3b3a","#f1e3cc","#9c6b3e"]},
     uk:{t:"Dune",c:"Лукбук · бренд одягу",f:"Нова колекція бренду одягу для сайту та маркетплейсів.",k:"Зняти колекцію в пустелі без виїзду команди й тижнів підготовки.",s:"Пісок, бірюзове небо, моделі в русі. Тканини зберігають фактуру, кольори відповідають реальним виробам."},
     en:{t:"Dune",c:"Lookbook · fashion brand",f:"A new collection for a fashion brand’s website and marketplaces.",k:"Shoot the collection in the desert without sending a crew or weeks of prep.",s:"Sand, turquoise sky, models in motion. Fabrics keep their texture and colours match the real garments."}},
    {id:"soft-world", tint:"#ff8fab", images:[], live:[null,null,null], art:{k:"cartoon",pal:["#f6c6d4","#bcd7f2","#ff8fab","#fff4e6","#7a8cc9"]},
     uk:{t:"Soft World",c:"AI-мультфільм · дитячий бренд",f:"Рекламний мультфільм і персонаж для дитячого бренду.",k:"Придумати героя й коротку історію, яку діти захочуть дивитися знову.",s:"М’які форми, пастельна палітра й теплий голос оповідача. Персонаж однаковий у кожній сцені."},
     en:{t:"Soft World",c:"AI animation · kids brand",f:"An animated ad and a mascot for a children’s brand.",k:"Create a hero and a short story kids will want to watch again.",s:"Soft shapes, a pastel palette and a warm narrator. The character stays consistent in every scene."}},
    {id:"neon-night", tint:"#ff2fd1", images:[], live:[null,null,null], art:{k:"city",pal:["#0a0f2c","#1b0b3a","#ff2fd1","#2ee6ff","#ffd36e"]},
     uk:{t:"Neon Night",c:"AI-відео · музичний реліз",f:"Тизер і обкладинка синглу для музиканта.",k:"Створити візуальний світ релізу, який тримає увагу з першого кадру.",s:"Нічне місто, неонові відблиски на мокрому асфальті, кадри змонтовані під ритм треку."},
     en:{t:"Neon Night",c:"AI video · music release",f:"A teaser and single cover for a musician.",k:"Build a visual world for the release that holds attention from the first frame.",s:"A night city, neon reflections on wet asphalt, cuts timed to the beat."}}
  ],
  singles: [
    {image:null, art:{k:"columns",pal:["#d9a6ff","#2b1846","#efe2ff","#6b3fa0","#1b0f2c"]}},
    {image:null, art:{k:"product",pal:["#0f2a1e","#04100b","#2f9e6f","#9ff0c8","#e8fff4"]}}
  ],
  /* Калькулятор: base — ціна за incl одиниць, extra — за кожну наступну; per — ціна за одиницю */
  services: [
    {id:"photo",   peek:0, calc:{base:1800,incl:10,extra:150,min:10,max:50,step:5,unit:["фото","photos"]},
     uk:["AI-фотосесія","Персональна зйомка для блогерів і публічних людей: концепція, образи, локації, 10 фото у високій якості з повною схожістю.","від 1 800 грн"],
     en:["AI Photoshoot","A personal shoot for creators and public figures: concept, looks, locations, 10 high-resolution photos with a true likeness.","from 1,800 UAH"]},
    {id:"brand",   peek:0, calc:{base:3200,incl:10,extra:280,min:10,max:60,step:5,unit:["кадрів","frames"]},
     uk:["AI-контент для бренду","Предметна та рекламна зйомка продукту, лукбуки, кадри для соцмереж, сайту й маркетплейсів. 10 кадрів.","від 3 200 грн"],
     en:["AI Brand Content","Product and advertising shots, lookbooks, images for social, web and marketplaces. 10 frames.","from 3,200 UAH"]},
    {id:"identity",peek:3, calc:{base:9500,incl:20,extra:350,min:20,max:80,step:5,unit:["візуалів","visuals"]},
     uk:["AI-візуал під бренд","Власний візуальний стиль бренду: постійна AI-модель або персонаж, кольори, світло. Кампанія від 20 візуалів.","від 9 500 грн"],
     en:["AI Brand Visual Identity","Your brand’s own visual language: a recurring AI model or character, colour, light. A campaign of 20+ visuals.","from 9,500 UAH"]},
    {id:"illus",   peek:1, calc:{per:300,min:1,max:50,step:1,bulk:[[10,.9]],unit:["ілюстр.","illustr."]},
     uk:["AI-ілюстрації","Авторські ілюстрації з правом вільного комерційного використання.","від 300 грн / шт.","10 шт. — від 2 700 грн"],
     en:["AI Illustrations","Original illustrations with a free commercial-use licence.","from 300 UAH each","10 for 2,700 UAH"]},
    {id:"video",   peek:5, calc:{per:2800,min:1,max:10,step:1,unit:["ролик(ів)","video(s)"]},
     uk:["AI-відео","Рекламні ролики та Reels до 15 с зі сценарієм, музикою й монтажем. Оживлення фото.","від 2 800 грн","оживлення фото від 600 грн"],
     en:["AI Video","Ads and Reels up to 15 s with script, music and editing. Photo animation.","from 2,800 UAH","photo animation from 600 UAH"]},
    {id:"anim",    peek:4, calc:{per:5000,min:1,max:10,step:1,unit:["хв","min"]},
     uk:["AI-мультфільм","Анімаційна історія від ідеї до готового фільму: сценарій, персонажі, озвучка, музика.","від 5 000 грн / хв"],
     en:["AI Animation","An animated story from idea to finished film: script, characters, voice, music.","from 5,000 UAH / min"]},
    {id:"voice",   peek:5, calc:{per:300,min:1,max:20,step:1,unit:["ролик(ів)","clip(s)"]},
     uk:["AI-озвучка","Природний голос для відео й реклами різними мовами. За згодою — клон голосу клієнта.","від 300 грн","ролик до 60 с"],
     en:["AI Voiceover","A natural voice for video and ads in many languages. With consent, a clone of the client’s own voice.","from 300 UAH","per clip up to 60 s"]},
    {id:"edit",    peek:5, calc:{per:800,min:1,max:20,step:1,unit:["Reels","Reels"]},
     uk:["Монтаж","Reels, TikTok і реклама: динаміка, звук, субтитри, колір.","від 800 грн","Reels до 60 с"],
     en:["Video Editing","Reels, TikTok and ads: pacing, sound, subtitles, colour.","from 800 UAH","Reels up to 60 s"]},
    {id:"retouch", peek:2, calc:{per:100,perHi:300,min:1,max:200,step:1,bulk:[[30,.9],[100,.8]],unit:["фото","photos"]},
     uk:["Ретуш","Портретна, beauty та предметна ретуш зі збереженням природної текстури шкіри.","від 100 грн / фото","high-end від 300 грн"],
     en:["Retouching","Portrait, beauty and product retouching that keeps natural skin texture.","from 100 UAH / photo","high-end from 300 UAH"]}
  ],
  urgency: [
    {k:1,   uk:["Стандарт","5–7 робочих днів"], en:["Standard","5–7 working days"]},
    {k:1.3, uk:["Швидко","2–3 дні"],           en:["Fast","2–3 days"]},
    {k:1.6, uk:["Терміново","24–48 годин"],     en:["Urgent","24–48 hours"]}
  ],
  journal: [
    {proj:0, img:2, uk:{t:"Як зібрати світло для кадру Rouge",m:"Розбір · 3 хв",ex:"Чому червоний виглядає дорого лише з правильними тінями, і як скло стає головним героєм.",
      b:["Задача була проста на словах: зробити крем схожим на прикрасу. На практиці це означало боротьбу з червоним, який легко стає дешевим і пластиковим.","<h3>Світло першим</h3>","Я почала не з продукту, а зі світла: один жорсткий контровий промінь і м’яке заповнення з боку камери. Так скло отримує тонкий блік по краю, а банка не зливається з фоном.","<h3>Менше деталей</h3>","Кожен кадр має одну ідею. Якщо в композиції з’являлася зайва гілка чи крапля, я прибирала її, навіть коли вона була красивою.","<h3>Ретуш</h3>","Фінально вирівнюю відтінок червоного в усій серії, щоб у стрічці кадри виглядали як одна кампанія."]},
     en:{t:"Building the light for Rouge",m:"Breakdown · 3 min",ex:"Why red only looks expensive with the right shadows, and how glass becomes the hero.",
      b:["The brief sounded simple: make a cream look like jewellery. In practice it meant fighting a red that easily turns cheap and plastic.","<h3>Light first</h3>","I started with the light, not the product: one hard rim light and soft fill from the camera side. The glass gets a thin edge highlight and the jar never melts into the background.","<h3>Fewer details</h3>","Each frame holds one idea. If an extra branch or droplet appeared, it went, even when it was pretty.","<h3>Retouching</h3>","Finally I match the exact red across the series so the frames read as one campaign in the feed."]}},
    {proj:1, img:3, uk:{t:"Античність без виїзду: Elysium",m:"Розбір · 4 хв",ex:"Як перенести людину в Грецію й не загубити її впізнаваність.",
      b:["Найскладніше в історичних зйомках — зберегти обличчя людини, коли навколо змінюється все: епоха, світло, одяг.","<h3>Референси</h3>","Я зібрала мудборд із живопису та фотографій мармуру на заході сонця. Саме теплий бічний світ зробив серію живою.","<h3>Схожість</h3>","Кожен кадр перевіряю на схожість окремо: пропорції, посмішка, погляд. Те, що не схоже на 100%, не потрапляє до фіналу."]},
     en:{t:"Antiquity without travel: Elysium",m:"Breakdown · 4 min",ex:"How to place a person in Greece without losing their likeness.",
      b:["The hardest part of period shoots is keeping the face when everything else changes: era, light, clothing.","<h3>References</h3>","I built a moodboard from paintings and photos of marble at sunset. The warm side light is what made the series feel alive.","<h3>Likeness</h3>","I check every frame for likeness: proportions, smile, gaze. Anything less than a true match doesn’t make the final cut."]}},
    {proj:2, img:1, uk:{t:"Чому ретуш не повинна стирати шкіру",m:"Думка · 2 хв",ex:"Про пори, текстуру й портрети, яким хочеться вірити.",
      b:["Ідеально гладка шкіра читається як маска. Глядач не знає чому, але перестає вірити кадру.","<h3>Що я прибираю</h3>","Тимчасове: подразнення, сліди втоми, випадкові волоски, відблиски. Те, чого не було б на людині в хороший день.","<h3>Що лишаю</h3>","Пори, зморшки від посмішки, родимки. Це і є характер, за який людину впізнають."]},
     en:{t:"Why retouching shouldn’t erase skin",m:"Opinion · 2 min",ex:"On pores, texture and portraits you can believe.",
      b:["Perfectly smooth skin reads as a mask. Viewers can’t say why, but they stop trusting the image.","<h3>What I remove</h3>","The temporary: irritation, signs of fatigue, stray hairs, glare. Things that wouldn’t be there on a good day.","<h3>What I keep</h3>","Pores, smile lines, moles. That is the character people recognise."]}}
  ],
  photographers: {
    prices: [
      {uk:["Базова ретуш","Колір і світло, шкіра, дрібні дефекти, кадрування.","від 100 грн / фото"],en:["Basic retouching","Colour and light, skin, small blemishes, cropping.","from 100 UAH / photo"]},
      {uk:["Beauty / high-end","Dodge & burn, частотне розкладання, волосся, одяг, фон.","від 300 грн / фото"],en:["Beauty / high-end","Dodge & burn, frequency separation, hair, clothing, background.","from 300 UAH / photo"]},
      {uk:["Пакет від 30 фото","Знижка на серію в одному стилі.","−10%"],en:["30+ photo package","Discount for a series in one style.","−10%"]},
      {uk:["Пакет від 100 фото","Для весіль, каталогів і великих зйомок.","−20%"],en:["100+ photo package","For weddings, catalogues and large shoots.","−20%"]}
    ],
    terms: [
      {uk:["Тест безкоштовно","Ретушую 1 ваше фото, щоб ви оцінили стиль."],en:["Free test","I retouch one of your photos so you can judge the style."]},
      {uk:["Ваш стиль","Працюю за вашими референсами та пресетами."],en:["Your style","I follow your references and presets."]},
      {uk:["Терміни","До 30 фото — 3 робочі дні, більше — за домовленістю."],en:["Turnaround","Up to 30 photos in 3 working days; more by arrangement."]},
      {uk:["Формати","RAW, TIFF, JPEG — повертаю у вашому форматі."],en:["Formats","RAW, TIFF, JPEG, returned in your format."]},
      {uk:["Правки","Одне коло правок включено у вартість."],en:["Revisions","One round of revisions included."]},
      {uk:["Конфіденційність","Не публікую ваші кадри без вашої згоди."],en:["Confidentiality","I never publish your images without consent."]}
    ]
  }
};
