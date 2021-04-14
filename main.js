// язык
let currentLanguage = 'ru'


let ru = [
  "Информация",
  "Преимущества",
  "Залы",
  "FAQ",
  "Отзывы",
  "Где мы находимся",
  "Cinema-LOFTS",
  "Лучший кинотеатр для свиданий, вечеринок и дней рождений! Комфорт и уютная атмосфера",
  "Забронировать",
  "Развлекайся",
  "Устрой караоке-баттл, свое stand-up шоу или просто смотри кино, спортивные трансляции и концерты любимых исполнителей на большом экране",
  "Празднуй",
  "Отпразднуй важное событие в Party Time! К твоим услугам любая из 30 комнат! Выбирай формат: вечеринка с караоке, посиделки с друзьями, фуршет и танцы. А если хочешь можешь сделать все сразу!",
  "Играй!",
  "Устрой чемпионат по UNO, прими участие в грандиозной битве в Fortnite, вычисли «Мафию», найди убийцу в Клуэдо или зарубись в Mortal Kombat! К твоим услугам большой выбор настольных игр, консоли PS4 и X-Box 360",
  "Почему именно мы?",
  "Можно с собой",
  "Приносите еду и напитки с собой. А бокалы и другую посуду мы предоставим",
  "Уютные комнаты",
  "Комнаты с авторским дизайном, которые трансформируются под нужный вам формат мероприятий",
  "Паровые коктейли",
  "Ароматные паровые коктейли от Russian hookah masters",
  "Большие экраны",
  "Смотри кино, спортивные события, концерты, с высоким качеством и объемным звуком",
  "Караоке",
  "В нашей музыкальной библиотеке несколько тысяч песен звезд российской и мировой эстрады",
  "Приставки и игры",
  "PS4, Х-Box 360 и большой выбор настольных игр для любителей драйва или напрячь извилины",
  "Сцена",
  "Камерная театральная сцена для любителей выступить или посмотреть представление",
  "Чай и сладости",
  "Можно заказать вкуснейшие заварные чаи, ароматный кофе, сладости, бургеры, хот-доги и многое другое!",
  "Наши залы",
  "Стандартный сеанс",
  "Продолжительность сеанса: 2 часа",
  "Возможность выбрать любой фильм из большой библиотеки фильмов",
  "Сет-суши (на выбор)",
  "Коктейль (на выбор)",
  "Забронировать",
  "Стандартный сеанс",
  "Продолжительность сеанса: 2 часа",
  "Ф.И.О.",
  "Телефон",
  "Дата",
  "Время",
  "Адрес",
  "ул. Каля Ешилор 8, Кишинёв",
  "Дополнительные услуги",
  "Шампанское                \"Вернальд\" — 150 MDL ",
  "    Забронировать - 600 MDL",
  "Отменить бронирование",
  "VIP сеанс",
  "Продолжительность сеанса: 4 часа",
  "Романтическое украшение зала (по желанию)",
  "Ужин на двоих (Итальянская, Японская, Китайская кухни, на выбор)",
  "Вкусные десерты: шоколадное фондю с фруктами, мороженное для двоих (на выбор в ассортименте)",
  "Вино или шампанское (на выбор)",
  "Кальян",
  "Приставка PlayStation 4",
  "Забронировать",
  "VIP сеанс",
  "Продолжительность сеанса: 4 часа",
  "Ф.И.О.",
  "Телефон",
  "Дата",
  "Время",
  "Адрес",
  "ул. Каля Ешилор 8, Кишинёв", ,
  "Дополнительные услуги",
  "Забронировать- 1000 MDL",
  "Отменить бронирование",
  "VIP-свидание «СВИДАНИЕ НА ЗВЕЗДАХ»",
  "Продолжительность свидания: 6 часов",
  "Ужин на двоих (Итальянская, Японская, Китайская кухни, на выбор)",
  "Праздничная сервировка стола, дизайнерские свечи",
  "Выступление саксофониста или скрипача",
  "Воспроизведение с большого экрана заранее подготовленного видеоролика либо слайд-шоу из фотографий",
  "Романтическая фотосессия в украшенном специально для вас кинозале",
  "Букет цветов для Вашей любимой / любимое блюдо для мужчины",
  "Вкусные десерты: мороженое для двоих (на выбор в ассортименте)",
  "Горячие напитки: заварной чай или кофе (на выбор) с Raffaello",
  "Предварительный подбор любимого фильма или музыки",
  "Забронировать",
  "VIP сеанс",
  "Продолжительность сеанса: 4 часа",
  "Ф.И.О.",
  "Телефон",
  "Дата",
  "Время",
  "Адрес",
  "ул. Каля Ешилор 8, Кишинёв", ,
  "Дополнительные услуги",
  "Забронировать - 1600 MDL",
  "Отменить бронирование"
]

let ro = [
  "Informație",
  "Beneficii",
  "Săli",
  "FAQ",
  "Recenzii",
  "Unde suntem",
  "Cinema - LOFTS",
  "Cel mai bun cinema pentru întâlniri, petreceri și zile de naștere! Confort și atmosferă confortabilă",
  "A rezerva",
  "A se distra",
  "Aranjați o bătălie de karaoke, propriul dvs.spectacol stand - up sau pur și simplu urmăriți filme, emisiuni sportive și concerte ale interpreților dvs.preferați pe marele ecran",
  "Sărbători",
  "Sărbătoriți un eveniment important la petrecere! Oricare dintre cele 30 de camere vă stau la dispoziție! Alegeți un format: o petrecere de karaoke, întâlniri cu prietenii, o masă tip bufet și dansuri. Și dacă doriți puteți face totul dintr-o dată!",
  "Joaca!",
  "Găzduiește un campionat UNO, ia parte la o luptă epică Fortnite, urmărește Mafia, găsește un ucigaș în Cluedo sau piratează în Mortal Kombat! Alege dintr-o gamă largă de jocuri de societate, console PS4 și X-Box 360",
  "De ce noi?",
  "Poți lua cu tine",
  "Aduceți alimente și băuturi cu voi. Vă vom oferi pahare și alte ustensile.",
  "Camere confortabile",
  "Camere cu design de autor, care se transformă în formatul evenimentelor de care aveți nevoie",
  "Cocktailuri cu aburi",
  "Cocktailuri cu aburi parfumate de la maeștrii narghilea rusi",
  "Ecrane mari",
  "Urmăriți filme, evenimente sportive, concerte, cu sunet surround de înaltă calitate",
  "Karaoke",
  "În biblioteca noastră de muzică există câteva mii de melodii ale starurilor pop din Rusia și din lume",
  "Console și jocuri",
  "PS4, X - Box 360 și o gamă largă de jocuri de societate pentru cei cărora le place să conducă sau să - și încordeze creierul",
  "Scenă",
  "Scenă de teatru de cameră pentru cei cărora le place să interpreteze sau să urmărească un spectacol",
  "Ceai și dulciuri",
  "Puteți comanda ceaiuri delicioase de custard, cafea aromată, dulciuri, burgeri, hot dog și multe altele!",
  "Halele noastre",
  "Sesiune standard",
  "Durata sesiunii: 2 ore",
  "Abilitatea de a selecta orice film dintr - o bibliotecă mare de filme",
  "Set sushi(optional) ",
  "Cocktail(opțional) ",
  "A rezerva",
  "Sesiune standard ",
  "Durata sesiunii: 2 ore",
  "NUMELE COMPLET.",
  "Telefon",
  "Data",
  "Timp",
  "Abordare",
  "str. Calea Iesilor, Chișinău",
  "Servicii aditionale",
  "Șampanie Vernald - 150 MDL",
  "A rezerva - 600 MDL ",
  "Anulați rezervarea",
  "Sesiune VIP",
  "Durata sesiunii: 4 ore",
  "Decorare romantică a sălii(opțional) ",
  "Cina pentru doi (bucătărie italiană, japoneză, chineză, la alegere)",
  "Deserturi delicioase: fondue de ciocolată cu fructe, înghețată pentru doi (alegerea dvs. în sortiment)",
  "Vin sau șampanie (opțional)",
  "Narghilea",
  "PlayStation 4",
  "A rezerva",
  "Sesiune VIP",
  "Durata sesiunii: 4 ore",
  "NUMELE COMPLET.",
  "Telefon",
  "Data",
  "Timp",
  "Abordare",
  "str. Calea Iesilor, Chișinău",
  "Servicii aditionale",
  "A rezerva - 1000 MDL",
  "Anulați rezervarea",
  "Data VIP DATA ÎN STELE ",
  "Durata datei: 6 ore",
  "Cina pentru doi (bucătărie italiană, japoneză, chineză, la alegere)",
  "Setare de masă festivă, lumânări de designer",
  "Performanța unui saxofonist sau violonist",
  "Redarea de pe un ecran mare al unui clip video pregătit anterior sau dintr - o prezentare de fotografii",
  "O ședință foto romantică într - o sală de cinema special amenajată",
  "Un buchet de flori pentru felul tău preferat / preferat pentru bărbat",
  "Deserturi delicioase: înghețată pentru doi (alegerea dvs. în sortiment)",
  "Băuturi calde: ceai sau cafea preparate (la alegere) cu  Raffaello",
  "Selecție preliminară a filmului sau muzicii preferate",
  "A rezerva",
  "Sesiune VIP",
  "Durata sesiunii: 4 ore",
  "NUMELE COMPLET.",
  "Telefon",
  "Data",
  "Timp",
  "Abordare",
  "str. Calea Iesilor, Chișinău",
  "Servicii aditionale",
  " A rezerva - 1600 MDL ",
  "Anulați rezervarea"
]

document.querySelector('.btn-ln-ro').onclick = () => {
  currentLanguage = 'ro'
  document.querySelectorAll('.lang').forEach((elem, index) => elem.innerText = ro[index])

  document.querySelectorAll('.feedback')[0].querySelectorAll('.lang')[0].innerText = 'Maria Popescu'
  document.querySelectorAll('.feedback')[0].querySelectorAll('.lang')[1].innerText = 'Dorim să mulțumim personalului pentru munca bună și sentimentele plăcute prezentate. Mulțumiri speciale pentru promptitudine, când au plecat, au uitat unitatea flash, au sunat imediat și au informat despre asta. Suntem foarte mulțumiți, cu siguranță ne vom uita din nou !!!!! Recomanda.'

  document.querySelectorAll('.feedback')[1].querySelectorAll('.lang')[0].innerText = 'Elena Ionescu'
  document.querySelectorAll('.feedback')[1].querySelectorAll('.lang')[1].innerText = 'Am dansat din toată inima, am cântat (am strigat), am făcut poze și am fost foarte încântați! Narghilea minunată! Administratori foarte atenți și mulțumesc fotografului Alexander că mi-a capturat petrecerea burlacilor =) Fondue, băuturi - doar suficient =) Fetelor, dacă decideți să mergeți la o petrecere a burlacilor, vă sfătuiesc să includeți înregistrări din jocul Just Dance! Vă garantez că va fi atât de distractiv😍'

  document.querySelectorAll('.feedback')[2].querySelectorAll('.lang')[0].innerText = 'Mihai Radu'
  document.querySelectorAll('.feedback')[2].querySelectorAll('.lang')[1].innerText = 'Loc grozav !!) a fost ieri cu o fată la tine, mi-a plăcut totul, foarte confortabil și personalul este prietenos. Vom veni din nou la tine și îl voi recomanda prietenilor mei!) 👍👍'

  document.querySelectorAll('.feedback')[3].querySelectorAll('.lang')[0].innerText = 'Alexandra Lapa'
  document.querySelectorAll('.feedback')[3].querySelectorAll('.lang')[1].innerText = 'Totul a fost bombardant de răcoros, m-am distrat 100% cu prietenii mei !! Fata recepționerului a fost foarte politicoasă, ospitalieră și drăguță 🎉😊sala a fost decorată cu noi, după cum ne-a cerut, ne-au întâlnit la jumătatea drumului, în general, totul a fost pur și simplu minunat 👍🏻👍🏻Multumesc mult прид cu siguranță vom mai veni la tine )))'

  document.querySelector('.where-1').innerText = "Unde suntem?"
  document.querySelector('.where-2').innerText = "str. Calea Iesilor, Chișinău"

  document.querySelector('.q-1').innerHTML = "De ce această metodă de plată? <img src='./src/arrow.svg' />"
  document.querySelector('.a-1').innerText = " În momentul pandemiei, instituția funcționează pe un sistem de înregistrare electronică. Toți vizitatorii  sunt acceptați doar prin înregistrare electronică prealabilă. Conform 54-FZ, orice  vizitator neînregistrat va fi urmărit penal și va plăti o amendă ."

  document.querySelector('.q-2').innerHTML = "Pot primi o rambursare ? <img src='./src/arrow.svg' />"
  document.querySelector('.a-2').innerText = " Puteți emite o rambursare cu o oră înainte de sesiune prin intermediul asistenței tehnice de pe site. "

  document.querySelector('.q-3').innerHTML = "Am plătit, ce urmează ? <img src='./src/arrow.svg' />"
  document.querySelector('.a-3').innerText = " După plata în termen de 1 oră, veți primi un SMS cu un cod special pe care îl veți informa la  intrarea în sală. Dacă nu primiți un SMS, vă rugăm să contactați asistența de pe site."

  document.querySelector('.q-4').innerHTML = "Pot să aduc mâncare și băutură? <img src='./src/arrow.svg' />"
  document.querySelector('.a-4').innerText = "Această problemă trebuie discutată personal"

}

document.querySelector('.btn-ln-ru').onclick = () => {
  currentLanguage = 'ru'
  document.querySelectorAll('.lang').forEach((elem, index) => elem.innerText = ru[index])

  document.querySelectorAll('.feedback')[0].querySelectorAll('.lang')[0].innerText = 'Maria Popescu'
  document.querySelectorAll('.feedback')[0].querySelectorAll('.lang')[1].innerText = "Хотим сказать большое спасибо персоналу за хорошую работу и подаренные приятные ощущения. Отдельное спасибо за оперативность, когда уходили забыли флешку, сразу позвонили и сообщили об этом. Мы очень довольные, обязательно заглянем ещё!!!!! Рекомендую."

  document.querySelectorAll('.feedback')[1].querySelectorAll('.lang')[0].innerText = 'Elena Ionescu'
  document.querySelectorAll('.feedback')[1].querySelectorAll('.lang')[1].innerText = "От души натанцевались, напелись (наорались), нафоткались и очень остались довольны! Прекрасные кальяны! Очень внимательные администраторы и спасибо фотографу Александру за то, что запечатлел мой девичник=) Фондю, напитки - всего хватает=) Девчонки!если надумаете гулять девичник, то советую включать записи с игры Just Dance! Гарантирую, что будет ооочень весело😍"

  document.querySelectorAll('.feedback')[2].querySelectorAll('.lang')[0].innerText = 'Mihai Radu'
  document.querySelectorAll('.feedback')[2].querySelectorAll('.lang')[1].innerText = "Отличное место !!) был вчера с девушкой у вас, все понравилось, очень уютно и персонал дружелюбный. Придем к вам еще раз обязательно и друзьям буду рекомендовать!)👍👍"

  document.querySelectorAll('.feedback')[3].querySelectorAll('.lang')[0].innerText = 'Alexandra Lapa'
  document.querySelectorAll('.feedback')[3].querySelectorAll('.lang')[1].innerText = "Все было бомбически круто , я повеселилась с друзьями на все 100%!! Девушка-администратор очень была вежливая,гостеприимная и милая 🎉😊зал нам украсили , как просили, нам пошли навстречу , в общем всё было просто замечательно 👍🏻👍🏻Спасибо вам огромное ❤💋🙏🏻 обязательно придём к вам ещё ))"

  document.querySelector('.where-1').innerText = 'Где мы находимся?'
  document.querySelector('.where-2').innerText = "ул. Каля Ешилор 8, Кишинёв"

  
  document.querySelector('.q-1').innerHTML = "Почему такой способ оплаты? <img src='./src/arrow.svg' />"
  document.querySelector('.a-1').innerText = "На время пандемии заведение работает по системе электронного учета. Всех посетителейпринимаем только по предварительной электронной записи. Согласно 54-ФЗ, любойнезарегистрированный посетитель привлекается к ответственности и будет платить штраф."

  document.querySelector('.q-2').innerHTML = "Можно ли оформить возврат средств? <img src='./src/arrow.svg' />"
  document.querySelector('.a-2').innerText = "Оформить возврат средств можно за час до сеанса через техническую поддержку на сайте."

  document.querySelector('.q-3').innerHTML = "Я оплатил,что дальше? <img src='./src/arrow.svg' />"
  document.querySelector('.a-3').innerText = "После оплаты в течение 1 часа вам на номер придёт СМС с спец. кодом который вы сообщите привходе в зал. Если же СМС не пришло, обратитесь к поддержке на сайте. "

  document.querySelector('.q-4').innerHTML = "Можно ли приносить еду и выпивку? <img src='./src/arrow.svg' />"
  document.querySelector('.a-4').innerText = "Этот вопрос нужно обсудить лично"
}


// header scroll
let navBtns = document.querySelectorAll('.nav-btn')
let sections = document.querySelectorAll('section')


window.addEventListener('scroll', function () {
  function isAnyPartOfElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    const vertInView = (rect.top + 200 <= windowHeight) && ((rect.top + rect.height) >= 0);
    if (vertInView == true) {
      return true
    } else {
      return false
    }
  }
});

// 
navBtns.forEach((item, index) => {
  console.log(index);

  function handleButtonClick() {
    sections[index + 1].scrollIntoView({ block: "start", behavior: "smooth" });
  }

  item.addEventListener('click', handleButtonClick);
})

getTable.addEventListener('click', () => sections[3].scrollIntoView({ block: "start", behavior: "smooth" }))

let checkboxes = [
  document.getElementById('checkbox1'),
  document.getElementById('checkbox2'),
  document.getElementById('checkbox3')
]

let getTableBtns = [
  document.getElementById('getTableBtn1'),
  document.getElementById('getTableBtn2'),
  document.getElementById('getTableBtn3')
]


function checkForm(i, x) {
  let inputs = [
    document.getElementById('field-' + i + '-1'),
    document.getElementById('field-' + i + '-2'),
    document.getElementById('field-' + i + '-3'),
    document.getElementById('field-' + i + '-4')
  ]


  if (inputs[0].value.length > 1 && inputs[1].value.length > 8 && inputs[2].value && inputs[3].value) {
    document.getElementById('getTable-' + i + '-' + Number(checkboxes[x].checked)).click()

  } else {
    (currentLanguage == 'ru') ? alert('Заполните форму') : alert('Completati formularul')
  }

}

getTableBtns[0].onclick = () => { checkForm(1, 0) }
getTableBtns[1].onclick = () => { checkForm(2, 1) }
getTableBtns[2].onclick = () => { checkForm(3, 2) }

checkboxes[0].addEventListener('change', function () {
  if (this.checked) {
    (currentLanguage == 'ru') ? getTableBtns[0].innerText = ` Зарезервировать - 750 MDL ` : getTableBtns[0].innerText = `A rezerva - 750 MDL `
  } else {
    (currentLanguage == 'ru') ? getTableBtns[0].innerText = ` Зарезервировать - 600 MDL ` : getTableBtns[0].innerText = `A rezerva - 600 MDL `
  }
})

checkboxes[1].addEventListener('change', function () {
  (this.checked) ?
    getTableBtns[1].innerText = (currentLanguage == 'ru') ? ` Зарезервировать - 1150 MDL ` : `A rezerva - 1150 MDL `
    :
    getTableBtns[1].innerText = (currentLanguage == 'ru') ? ` Зарезервировать - 1000 MDL ` : `A rezerva - 1000 MDL `
})

checkboxes[2].addEventListener('change', function () {
  (this.checked) ?
    getTableBtns[2].innerText = (currentLanguage == 'ru') ? ` Зарезервировать - 1750 MDL ` : `A rezerva - 1750 MDL `
    :
    getTableBtns[2].innerText = (currentLanguage == 'ru') ? ` Зарезервировать - 1600 MDL ` : `A rezerva - 1600 MDL `
})