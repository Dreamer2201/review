import React from 'react'

export default function HtmlCssPage() {
  return (
    <div>
      <ol>

        <li>
          <h2>Семантична верстка</h2>
          <p>Семантична верстка — це підхід до розмітки сторінки, при якому наголос зроблено не на зміст, а на смислове призначення кожного блоку, а також на логічну структуру всього документа.</p>
          <ul>
            <li>Розставлення великих смислових блоків із використанням тегів header, main, footer.</li>
            <li>Розміщення смислових розділів усередині окремих блоків із застосуванням nav, section, article, aside.</li>
            <li>Виділення заголовків різних рівнів за допомогою тегів h1 – h6.</li>
            <li>Розміщення дрібних елементів: списків, таблиць, параграфів, форм, цитат тощо (p, ul, li).</li>
            <li>Розміщення фразових елементів: зображень, посилань, кнопок, відео та ін. (img, video, a тощо).</li>
          </ul>
          <ul>
            <li>Поліпшення позицій вебресурсу в пошуковій видачі</li>
            <li>Підвищення доступності вебсайту - для скрінрідерів, які зачитують текст зі сторінки. Аби скрінрідер працював коректно, визначав та вказував заголовки, основний текст, навігаційні елементи та інше, їх обов’язково потрібно обрамляти відповідними тегами.</li>
          </ul>
        </li>

        <li>
          <h2>Мета теги - мета дані, які необхідні для зберігання інформації, призначеної для браузера і пошукових систем.</h2>
          <ol>
            <li>Для відображення контенту: кодування сторінки charset=utf-8, адаптивність: content= width=device-width initial-scale=1.0 name= viewport</li>
            <li>Для СЕО. name="description", name="keywords"</li>
            <li>Технічні. name="author", name="copyright", name="address" </li>
          </ol>
        </li>

        <li>
          <h2>Методологія BEM</h2>
          <p>Методологія БЕМ (Блок, Елемент, Модифікатор): блок__елемент--модифікатор. Методологія BEM забороняє використання селекторів тегів, ідентифікаторів або комбінованих селекторів на зразок div.class1.class2. Методологія допускає використання вкладених селекторів. </p>
        </li>

        <li>
          <h2>Методи відцентрувати блок Div: </h2>
          <ul>
            <li>за допомогою margin зі значенням 0 auto - горизонтально</li>
            <li>display: flex та justify-content: center; align-items: center</li>
            <li>За допомогою властивості position - для батьківського елемента встановлюємо position relative, потім дл я дочірнього position: absolute та top на 50%, left: 50%. І встановлюємо від'ємні поля для елемента за допомогою властивості transform: translate(-50%, -50%)</li>
          </ul>
        </li>

        <li>
          <h2>Що таке препроцессор - розширенням оригінального CSS-синтаксису.</h2>
          <p>Найпопулярніші препроцесори - це SASS, LESS і Stylus. Препроцесори дозволяють використовувати конструкції, які прискорюють і спрощують написання коду. Найпопулярніший препроцесор - SASS і його синтаксис SCSS. </p>
          <p>Переваги:
              Сумісність - синтаксис препроцесора повністю сумісний з уже існуючими CSS-правилами. Готовий CSS-код можна вставити в SASS-файл, але не навпаки.
              Багатий функціонал - велика кількість допоміжних конструкцій для спрощення основних завдань під час написання CSS-коду.
              Структура проекту - препроцесор дозволяє писати стилі в окремих файлах, що підвищує якість структури проекту та пошук стилів окремих блоків.
              Чистота коду - оскільки стилі пишуться в окремих файлах і застосовуються допоміжні конструкції для повторного використання коду, він стає чистішим.
          </p>
          <p>
              Браузер не розуміє синтаксису спеціальних конструкцій SASS, тому код препроцесора необхідно перетворити (скомпілювати) в CSS. Способів компіляції досить багато: різні консольні утиліти, збирачі і плагіни редактора.
              Процес розробки зводиться до таких кроків:
              Налаштовуємо інструмент для компіляції SASS-коду.
              Пишемо код у файлах з розширенням .scss.
              SASS автоматично компілюється в CSS і створюється CSS-файл.
              Підключаємо скомпільований CSS-файл в index.html.
          </p>
          <ul>
            <li><p>Синтаксис оголошення змінної - знак $ перед ім'ям та її значення після двокрапки. Імена змінних можуть бути записані в kebab-case, snake_case або camelCase нотаціях. Змінні доступні тільки в межах того рівня вкладеності селекторів, на якому вони визначені.</p></li>
            <li><p>Вкладеність дозволяє робити одні оголошення правил всередині інших. </p></li>
            <li><p>Конкатенація селекторів. Символ & (амперсанд) дозволяє вказати, в яке місце необхідно підставити батьківський селектор. </p></li>
            <li>
              <p>На відміну від функції calc(), в препроцесорі не можна змішувати типи одиниць. width: 960px + 10%; // Помилка!  width: calc(100% - 20px); // не буде помилки </p>
            </li>
            <li>
            <p>Директива @import. Писати увесь код в одному великому файлі незручно. Тому препроцесор SASS дозволяє зберігати стилі в окремих файлах і збирати їх як мозаїку. Такий модульний підхід до написання коду спрощує рефакторинг і підтримку кодової бази. Для того щоб підключити фрагмент в інший Sass-файл, використовується директива @import. Файл main.scss з прикладу буде виглядати наступним чином. main.scss
          @import 'utils/colors';
          @import 'utils/mixins';
          @import 'components/header';
          @import 'components/logo';...........
          </p>
            </li>
            <li>
              <p>Директива @extend. Директива @extend використовується для наслідування (розширення) вже існуючих стилів.</p>
            </li>
            <li>
              <p>Шаблони (плейсхолдери). Для таких випадків існує placeholder (плейсхолдер, заповнювач місця, шаблон) - довільне ім'я селектора з обов'язковим символом % на початку, наприклад %button</p>
            </li>
            <li>
              <p>Директива @mixin, дозволяють створювати готові набори властивостей, але з різними значеннями, залежно від отриманих аргументів під час виклику міксіна. Додати стилі міксіна до селектора можна за допомогою директиви @include міксін(аргументи). </p>
            </li>
            <li>
              <p>Мапи (словники). Замість $color-primary: #8e3329;
                $color-accent: #d98328;
                $color-secondary: #5a1321;
                $color-foreground: #191919;
                $color-background: #e9e9e9; можна використати мапу $colors: (
                  'primary': #8e3329,
                  'accent': #d98328,
                  'secondary': #5a1321,
                  'foreground': #191919,
                  'background': #e9e9e9,
                ); Для того щоб отримати значення властивості, використовується вбудована SASS-функція map-get(ім`я_мапи, ім`я_властивості)</p>
            </li>
          </ul>
          <p>На основі одного mixin можна створити інший mixin</p>
          <p>Вендорні префікси - це спеціальні приставки, що використовуються виробниками (вендорами) браузерів для експериментальних CSS-властивостей і значень, які ще не прийняті у стандарті, або не повністю реалізовані в браузері.
          Список вендорних префіксів по браузерам:
          -webkit- - Chrome, Safari, Edge, нові версії Opera.
          -moz- - Firefox.
          -o- - Старі версії Opera.
          -ms- - Internet Explorer. Вручну прописувати їх не потрібно, для цього використовуються спеціальні інструменти, які автоматизують процес, наприклад SASS-компілятор з додатковими налаштуваннями (автопрефіксер).</p>
        </li>

        <li>
          <h2>Різниця між div / span:</h2>
          <p>Div - це блочний тег і відповідно займає всю ширину сторінки, а span - рядковий тег, ширина якого залежить від контенту всередині нього</p>
        </li>

        <li>
          <h2>Значення властивості display:</h2>
          <p>none, inherit, block, inline (генерує рядковий елемент), inline-block (генерує рядково-блочний елемент), flex (адаптивний контейнер), grid (створює сітку) </p>
        </li>

        <li>
          <h2>Властивочті позиціонування:</h2>
          <p>Absolute - ел-т випадає з потоку,і може бути розміщений в будь-якому місці сторінки за допомогою властивостей left / right, top / bottom</p>
            <p>Relative - ел-т не випадає з потоку документа</p>
            <p>Fixed - ел-т розміщується (закріпляється) в одному місці екрана, так, щоб при скролі сторінки він залишався на одному й тому ж самому місці</p>
            <p>Static - це положення усіх ел-тів за замовчуванням</p>
            <p>Sticky - суміш relative та fixed, лишається в потоці</p>
            <p>Inherit</p>
        </li>

        <li>
          <h2>Перелічити псевдоелементи</h2>
          <p>before, after, selection (застосовуються стилі до виділеного користувачем тексту), placeholder (стилі в ел-тах форми), firstline (перший рядок тексту), firstletter - перша буква, backdrop - тінь модального вікна, дозволяє створити фон для тега dialog </p>
        </li>
        
        <li>
          <h2>Базові псевдокласи</h2>
          <p>checked - застосовується до ел-тів checkbox та radio коли вони визначені </p>
                <p>active - дозволяє додати стиль активному посиланню</p>
                <p>firstchild / lastchild - стилі першого / останнього дочірнього ел-та свого батька </p>
                <p>focus - стилі ел-тів, які є в фокусі</p>
                <p>not </p>
                <p>hover - ел-т, на якого наводимо курсор мишки</p>
                <p>nth-child</p>
                <p>link - посилання, які ще не відвідувалися користувачем</p>
                <p>visited - посилання, які вже відвідувалися користувачем</p>
        </li>

        <li>
          <h2>Різниця мід псевдо-класами та псевдо-елементами</h2>
          <p>Псевдоелементи - це віртуальні елементи, які найчастіше допомагають в стилізації елемента. Псевдоклас - це стан елемента - наприклад hover, focus, відвідана сторінка сайту.</p>
        </li>

        <li>
          <h2>Як підключити JS до сторінки</h2>
          <p>Бажано вкінці блоку body. Написати скрипт в тег script або підключити в тег script за допомогою атрибута src з посиланням на файл JS. </p>
        </li>

        
        <li>
          <h2>Підключення css на сторінку</h2>
          <p>CSS (Cascading Style Sheets, каскадні таблиці стилів) - це мова для опису і зміни зовнішнього вигляду елементів. HTML використовується для визначення структури і семантики вмісту документа, а CSS - для його оформлення і позиціонування.</p>
          <ul>
            <li>Вбудовані (інлайн) стилі задаються тегу безпосередньо в атрибуті style</li>
            <li>Зовнішня таблиця стилів. У проекті створюється окремий файл стилів з розширенням .css і підключається в HTML-документі. На одному рівні з index.html створюється папка css, а всередині неї - файл стилів styles.css. В тезі head, використовуючи тег link, підключається створений раніше файл. В атрибуті href вказується шлях до файлу стилів щодо HTML-документа. В атрибуті rel вказується тип документа - stylesheet (таблиця стилів), що підключається. !!! Можна підключити скільки завгодно CSS-файлів, додаючи для кожного тег link.</li>
          </ul>
        </li>

        <li>
          <h2>Що таке блокова модель CSS</h2>
          <p>Це така модель, де всі елементи на сторінці представлені у вигляді прямокутників. padding, border, margin.</p>
          <p>box-sizing: - content-box (за замовчуванням, без урахування pad та border), border-box (ширина включає pad та border)</p>
        </li>

        <li>
          <h2>Яка різниця між reset.css и normalize.css?</h2>
          <p>reset скидую стилі за замовчуванням в 0, normalize - приводить до однакового стану в усіх браузерах.</p>
        </li>
        <li>
          <h2>critical css</h2>
          <p>Необхідні стилі для швидкого відображення видимої частини сторінки. Інші стиі завантажуються асинхронно в цьому випадку.</p>
          <p>!!! DOM - CSSOM - RENDER TERR - LAYOUT - PAINTS</p>
        </li>

        <li>
          <h2>Специфічність селекторів.</h2>
          <p> inline (1000) - id (0100) - class, psevdo-class, atribute (0010) - element, psevdoelement (0001) </p>
        </li>
      </ol>
    </div>
  )
}
