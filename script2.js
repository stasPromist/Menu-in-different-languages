let currentLanguage = 'en';

class Language {
    constructor(gemor, dropdownMenuButton1,cardTitle, cardTitle2, cardTitle3, pos, pos2, pos3, cardtext, cardtext2, cardtext3) {
        this.gemor = gemor;
        this.dropdownMenuButton1 = dropdownMenuButton1;
        this.cardTitle = cardTitle;
        this.cardTitle2 = cardTitle2;
        this.cardTitle3 = cardTitle3;
        this.pos = pos;
        this.pos2 = pos2;
        this.pos3 = pos3;
        this.cardtext = cardtext;
        this.cardtext2 = cardtext2;
        this.cardtext3 = cardtext3;
    }
}
const languages = new Map([
    ['english', new Language( 'Profile cards', ' Change Language', 'Patrick Wood', 'Debbon Amet', 'Mary Dunst',
                              'CEO / Co-Founder', 'Front End Developer', 'Web Designer', 'Dont be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye I loveRick Owens bed design but the back is...')],
    ['russian', new Language( 'Карточки профилей', 'Выбрать язык','Патрик Вуд',  'Дэбон Амэтэ', 'Мэри Данст', 
                              'Генеральный директор / Соучредитель', 'Фронтенд-разработчик', 'Веб-дизайнер', 'Не бойтесь правды, потому что нам нужно перезапустить человеческую основу в истине И я люблю тебя, как Канье, которого я люблюДизайн кровати Рика Оуэнса, но спина...')],
    ['japanese', new Language('プロフィールカード', '言語の変更', 'パトリック・ウッド',  'デボン・アメット', 'メアリー・ダンスト',
                              'CEO/共同創業者', 'フロントエンド開発者', 'ウェブデザイナー', '私たちは真実で人間の基盤を再起動する必要があるので、真実を怖がってはいけません、そして、私は私が愛するカニエのようにあなたを愛していますリック・オーウェンズのベッドデザインですが、背中は..')],
    
    ['dutch', new Language('Profielkaarten', 'Taal wijzigen', 'Patrick Wood', 'Debbon Amet', 'Mary Dunst',
                           'CEO / Mede-oprichter', 'Front End-udvikler', 'Webdesigner', 'Wees niet bang voor de waarheid, want we moeten de menselijke basis in waarheid opnieuw opstarten En ik hou van je zoals Kanye ik hou vanHet bedontwerp van Rick Owens, maar de achterkant is...')],
    ['hebrew', new Language(' כרטיסי פרופיל', 'לבחור שפה', 'פטריק ווד','דבון אמט', 'מרי דאנסט', 'מנכ"ל / מייסד שותף', 'מפתח חזיתי', 'מעצב אתרים', 'אל תפחד מהאמת כי אנחנו צריכים להפעיל מחדש את היסוד האנושי באמת ואני אוהב אותך כמו קניה אני אוהב עיצוב המיטה של ריק אוונס אבל הגב..')],
]);

const dropdownLangs = new Map([
    ['english',  ['english', 'russian', ' japanese', 'dutch', ' hebrew']],
    ['russian', ['английский', 'русский', 'японский', 'датский', 'иврит']],
    ['japanese', ['英語', 'ロシア語', '日本語', 'オランダ語', 'ヘブライ語']],
    ['dutch', ['engelsk', 'russisk', 'japansk', 'nederlandsk', 'hebraisk']],
    ['hebrew', ['אנגלית', 'רוסית', 'יפנית','הולנדית','עברית']],
]);
function getLanguages() {
    const langDropdownElement = document.getElementById('lang-dropdown');

    for (let lang of languages.keys()) {
        langDropdownElement.innerHTML += `<li onclick="setLang('${lang}')"><a id="${lang}" class="dropdown-item"  href="#">${lang}</a></li>`;
    }
}
function setLang(lang) {
    currentLanguage = lang;
    const translates = languages.get(lang);
    document.getElementById('gemor').innerHTML = translates.gemor;
    document.getElementById('dropdownMenuButton1').innerHTML = translates.dropdownMenuButton1;
    document.getElementById('cardTitle').innerHTML = translates.cardTitle;
    document.getElementById('cardTitle2').innerHTML = translates.cardTitle2;
    document.getElementById('cardTitle3').innerHTML = translates.cardTitle3;
    document.getElementById('pos').innerHTML = translates.pos;
    document.getElementById('pos2').innerHTML = translates.pos2;
    document.getElementById('pos3').innerHTML = translates.pos3;
    document.getElementById('cardtext').innerHTML = translates.cardtext;
    document.getElementById('cardtext2').innerHTML = translates.cardtext;
    document.getElementById('cardtext3').innerHTML = translates.cardtext;

    let dropdownItems = document.querySelectorAll('.dropdown-item');
    let curLanguage = dropdownLangs.get(lang);
    for (let i = 0; i < dropdownItems.length; i++){
        dropdownItems[i].innerHTML = curLanguage[i];
    }
    this.setRTL();
}
function setDefaultLang() {
    if (navigator.language && languages.has(navigator.language)) {
        this.setLang(navigator.language);
    }
}

function setRTL() {
    if (['he-IL', 'ar'].includes(currentLanguage)) {
        document.getElementsByTagName("body")[0].setAttribute("dir", "rtl");
    }
    else {
        document.getElementsByTagName("body")[0].removeAttribute("dir");
    }
}

function load() {
    this.getLanguages();
    this.setDefaultLang();
}