import React from 'react'

export default function JavaScriptPage() {

  // palindrome
  // const palindrome = str => {
  //   str = str.toLowerCase()
  //   const str1 = str.split('').reverse().join('')
  //   return str === str1
  // }
  // console.log(palindrome('Anna'))


  // anagrama ("finder", "friend" )
//  const anagrama = (str1, str2) => {
//     str1 = str1.toLowerCase()
//     str2 = str2.toLowerCase()
//     return str1.split("").sort().join('') === str2.split("").sort().join('')
//  }
//  console.log(anagrama ("123456", "123456" ))

// const removeDuplicates = str => {
//   const unique = new Set(str)
//   console.log(unique)
//   const arr = Array.from(unique)
//   console.log(arr)
//   const newStr = arr.join('')
//   return newStr
// }
// console.log(removeDuplicates('Oksana'))

  return (
    <div>
      <ol>
        <li>
        <h2>Prototype</h2>
        <p>Экземпляр класса (англ. instance) — это описание конкретного объекта в памяти.
                Класс описывает поля и методы, которые будут доступны у объекта, построенного по описанию, заложенному в классе. Экземпляры используются для представления (моделирования) конкретных сущностей реального мира.
                Инстанцированием (instantiation) называют процесс (акт) создания на основе класса экземпляра (instance) — такого объекта, который получает доступ ко всему содержимому класса, но при этом обладает и способностью хранить собственные данные.
            </p>
            <b>prototype  - це об'єкт, який присутній у батьківському об'єкті</b>
            <b>__proto__  - сам по собі це об'єкт, і він є у всіх об'єктів</b>
            <p>__proto__ однакових типів даних рівні між собою</p>
            <b>prototype є у class або function</b>
            <p>__proto__ посилається на prototype того класу (функції-конструктора) за допомогою якого був створений.
                const number = 5 
                number.__proto__ - створюється тимчасова об'єктна версія примітива (new Number) і таким чином об'єкт __proto__ посилається на Number.prototype
            </p>
        </li>
          <li>
            <h2>Прототипне наслідування</h2>
            <p>Для того, щоб прочитати властивість об'єкта, js йде по цепочці прототипів, прототип прототипа і тд, якщо не знайде  -  поверне undefined.</p>
          </li>
          <li>
            <h2>Event loop і JS</h2>
            <p>Це механізм, який відповідає за виконання кода в JS. Складові частини: call stack, web API, callback queue (micro (Promise) та macro tasks (setTimeout)). !!! Після виконання кожної макрозадачі двигун виконує всі задачі з черги мікротасок перед тим, як виконати наступну макрозадачу.</p>
          </li>
        <li>
          <h2>КОНТЕКСТ this, bind, apply, call</h2>
              <p>this завжди динамічне та вказує на той об'єкт, в контексті якого було визвано.</p>
              <p>метод bind створює, а не викликає!!!, функцію, яка прив'язує до себе контекст іншого об'єкта. Можливість викликаємо функцію тоді, коли нам це потрібно</p>
              <p>метод call СТВОРЮЄ ТА ВІДРАЗУ ВИКЛИКАЄ функцію з новим прив'язаним контекстом</p>
              <p>метод apply також створює та відразу викликає функцію з прив'язаним контекстом. Відмінність в тому, що аргументи функції ми передаємо в масиві.</p>
        </li>

        <li>
          <h2>Чи є об'єкт масивом - Array.isArray( obj )</h2>
        </li>

        <li>
          <h2>Як перевірити, чи число є скінченним?</h2>
            <p>isFinite() - визначає чи є значення кінцевим числом.
            </p>
            <p>
              isFinite() глобальна функція яка перевіряє чи є значення кінцевим числом.
              isFinite() подібний методу Number. isFinite() різницею є те що isFinite() перетаорює значеня у числове.
            </p>
        </li>

        <li>
          <h2>Чим відрізняється поведінка isNaN() та Number.isNaN()?</h2>
            <p>На відміну від глобальної функції isNaN(), Number. isNaN() не має проблеми примусового перетворення параметра в число. Це означає, що в нього безпечно передавати значення, які зазвичай перетворюються в NaN, але насправді NaN не є.</p>
        </li>

        <li>
          <h2>FUNCTIONS</h2>
                <h3>Function declaration - function hiBook()</h3>
                <h3>Funcyion expresion - const hi = function()</h3>
        </li>

        <li>
          <h2>Глубоке та поверхневе копіювання об'єктів</h2>
          <p>Для поверхневого копіювання використовуються Object.assign(obj) або оператор spread ...</p>
                <p>Для глибокого копіювання використовується let objCopy = JSON.parse(JSON.stringify(obj));</p>
        </li>

        <li>
        <h2>Що таке JSON</h2>
            <p>JavaScript Object Notation — це текстовий формат обміну даними між комп'ютерами.
                Формат JSON використовується для впорядкованого зберігання даних у процесі їх обміну між веб-браузером (або клієнтською частиною програми) та сервером (або між різними серверами). Більше того, завдяки текстовому вигляду рядка дані JSON можна легко передавати через будь-які інші канали обміну інформацією в інтернеті. Для отримання доступу до даних, що містяться в ньому, файл .json повинен бути перетворений на об'єкт JavaScript, для чого в цій мові є відповідні методи перетворення.
            </p>
        </li>

        <li>
        <h2>Promise</h2>
            <p>Promise - об'єкт JavaScript для сторення асинхроних операцій.</p>
            <p>new Promise( function(resolve, reject){ 
                /* код який виконується при створені Promise */
                } );</p>
            <p>Promise потрібен для того, щоб синхронний код JS зробити асинхронним</p>
            <p>Callback потрібен для того, щоб розширити функціонал вже існуючої функції</p>
            <p> при затримці 0 у setTimiout, Promise спрацьовує швидше, а якщо Promise відпрацьовує довго і у setTimeout затримака невелика, то спрацює тоЙ, хто швидше закінчить свою роботу</p>
            <p> new Promise - це класс (шаблон)
                Promise.resolve - статичний метод класу new Promise, який доступний виключно для класу, а для його екземплярів не доступний
                promise - це екземпляр класу, then / catch / finally  - це методи які доступні для екземпляра, а для класа - ні.
                Promise.all([promise1(), promise2()]).then().catch() - запускає колекцію промісів (наприклад треба відмалювати курси валют різних банків, збирається інформація з різних джерел і результат роботи усіх промісів має виводитися)
                Promise.race([promise1(), promise2()]).then().catch() - "змагання промісів", хто перший закінче свою роботу, той запускається. Наприклад, коли інформація зберігається на різних ресурсах однакова інформація (наприклад, погода).
                Promise.allSelected([promise1(), promise2()]).then().catch() - повертає масив об'єктів - результатів роботи всіх промісів.
            </p>
        </li>

        <li>
          <h2>MIME-тип</h2>
                <p>MIME-тип (называемый "media type", а иногда "content type") - это строка, отправляемая вместе с файлом, которая указывает тип файла. (например, передаваемый аудиофайл может быть помечен как audio/ogg тип, а изображение - image/png). MIME-тип играет точно такую же роль, как и расширение файла в системе Windows. Когда HTTP-сообщение содержит Content-type заголовок, тело запроса будет парситься в соответствии с MIME-типом, указанным в заголовке.</p>
        </li>

        <li>
          <h2>Різниця між Map() та Object</h2>
          <p>Map це колекція ключ/значення, як і Object . Але основна відмінність полягає в тому, що Map дозволяє мати ключі будь-якого типу. Методи та властивості: new Map() – створює колекцію. Map iterable, obj - not iterable. Map() має метод size.</p>
        </li>
        <li>
          <h2>Типи даних в js</h2>
            <p>string, number, boolean, underfind, null, function, Symbol, object (тип даних за посиланням).</p>
        </li>
        <li>
          <h2>Різниця між null и undefined?</h2>
          <p>undefined: або змінна, яка неініціалізована, або функція, яка нічого не повертає явно, або неіснуючий об'єкт.</p>
          <p>Null - відсутнє (пусте) значення.</p>
        </li>

        <li>
          <h2>Різниця === та ==</h2>
          <p>=== порівнює значення за типом та значенням, а == приводить до одного типу дані, а потім порівнюєю.</p>
        </li>
        <li>
          <h2>Як плрівняти 2 об'єкти.</h2>
          <p>Привести об'єкти до рядка за допомогою методу Json.stringify, і потім вже порівняти.</p>
        </li>
        <li>
          <h2>Цикли в js:</h2>
          <ul>
            <li>for (цикл з перерахунком),</li>
            <li>while (цикл з передумовою),</li>
            <li>do while (цикл з післяумовою ),</li>
            <li>for of (цикл перебору для ітерабельних об'єктів),</li>
            <li>for in (цикл перебору усіх властивостей об'єкта)</li>
          </ul>
        </li>
        <li>
            <h2>Різниця між break та continuous</h2>
            <p>continuous - завершує поточну ітерацію циклу</p>
            <p>break - завершує виконання циклу</p>
        </li>
        <li>
          <h2>Функції</h2>
            <p> функції - це будівельний блок нашого сайт, роботу чкого ми можемо перевикористовувати багато разіву</p>
            <p>function declaration - function getName() {} , створюються ітератором до виконання коду</p>
            <p>function expression - оголошення функції в контексті будь-якого виразу</p>
            <p>Чиста функція - завжди, при виклику її з одними й тими ж аргументами, повертає один і той же результат.
При виконанні такої функції не відбувається ніяких побічних ефектів (fetch запити, localStorage, console.log, зовнішні змінні).</p>
        </li>
        <li>
            <h2>Замикання та рекурсія</h2>
            <p>Замикання - це конструкція, коли функція створена в одній області видимості, запам'ятовує своє лексичне оточення навіть коли вона викликається поза своєю області видимості. Це є зовнішня функція, змінні створені в зовнішній функції, + внутрішня функція, яка використовує (обробляє) змінні зовнішньої функції.</p>
            <p>Рекурсія - функція, яка в своєму тілі викликає сама себе.</p>
        </li>
        <li>
            <h2>Методи масивів</h2>
            <p>forEach (перебор масиву)/ map / reduce/ find / filter / shift / unshift / pop / push / splice / sort / reverse </p>
        </li>
        <li>
            <h2>Some methods of STRING and ARRAY</h2>
            <p>str.split() - метод об'єкту String який розбиває рядок на частини за вказаним роздільником і повертає новий масив з частин. Якщо параметр дорівнює пустому рядку ("") то рядок буде перетворено в масив символів. Якщо параметр не вказано повертає масив з одним рядковим елементом.</p>
            <p>join() - об'єднує всі елементи масиву в рядок. Якщо нічого не передати в параметр - елементи масиву розділяються комою.</p>
            <p>.slice(beginSlice [, endSlice]) - витягує частину рядка і повертає новий рядок. endSlice не входить.</p>
            <p>arr.splice(start, deleteCount [, item1[, item2[, ...]]]) - видаляє елементи з масиву і при необхідності вставляє на їх місце нові елементи, повертаючи вилучені елементи.</p>
            <p></p>
        </li>
        <li>
            <p>Регулярні вирази - наприклад, ддя валідації</p>
        </li>
        <li>
            <p>функція зворотнього зв'язку або callback function, передається в інші функції у якості аргументу і викликається всередині неї</p>
        </li>
        <li>
            <p>запити в js: exemelHTTPrequest та fetch</p>
        </li>
        <li>
            <p>Синхронний код - стандартний для js і виконується по порядку</p>
            <p>Асинхнронний код - виконується не одразу, а з деякою затримкою в часі і на виконання такого коду треба зачекати, саме для цього використовується синтаксис async await </p>
        </li>
        <li>
          <p>Процедурне програмування - набір не пов'язаних явно функцій і змінних для зберігання і обробки інформації. Цей підхід - простий і прямолінійний, і може використовуватись для задач, в яких немає тісно пов'язаних сутностей (даних і функцій для їх обробки).</p>
          <p>Об'єктно-орієнтоване програмування (ООП) - методологія, яка описує програму як сукупність об'єктів, кожен з яких містить дані (властивості) і методи для взаємодії з ними.</p>
        </li>
        <li>
          <h2>Принципи ООП:</h2>
          <ul>
            <li>
              <h3>Інкапсуляція</h3>
              <p>Инкапсуляция включает в себя идею о том, что данные объекта не должны быть напрямую доступны. Нужно вызывать методы вместо прямого доступа к данным. Инкапсуляция позволяет нам скрывать/показывать свойства функций.</p>
              <p>Правильно инкапсулированные компоненты более легки для понимания и процесса отладки, что упрощает поддержку приложения.

В языке Java инкапсуляция реализована с помощью системы классов, которые позволяют собрать информацию об объекте в одном месте; пакетов, которые группируют классы по какому-либо критерию, и модификаторов доступа, которыми можно пометить весь класс или его поле или метод.

Всего модификаторов доступа четыре:
public – полный доступ к сущности (полю или методу класса) из любого пакета;
protected – доступ к сущности только для классов своего пакета и наследников класса;
неявный модификатор по умолчанию (при отсутствии трёх явных) – доступ к сущности только для классов своего пакета;
private – доступ только внутри класса, в котором объявлена сущность.</p></li>
            <li>
              <h3>Абстракція</h3>
              <p>Це способ создания простой модели, которая содержит только важные свойства с точки зрения контекста приложения, из более сложной модели. Иными словами - это способ скрыть детали реализации и показать пользователям только функциональность. Абстракция игнорирует нерелевантные детали и показывает только необходимые. Важно помнить, что мы не можем создать экземпляр абстрактного класса.</p>
            </li>
            <li>
              <h3>Поліморфізм</h3>
              <p>Само слово означает много форм. Существует много толкований того, что именно оно означает, но идея заключается в способности вызывать один и тот же метод для разных объектов, и при этом каждый объект реагирует по-своему.

Чтобы это произошло полиморфизм использует наследование.</p>
            </li>
            <li>
              <h3>Наслідування</h3>
              <p>Наследование - это механизм базирования объекта или class на другом объекте (наследование на основе прототипа) или class (наследование на основе класса). Мы избегаем необходимости переписывать один и тот же код, а также экономим пространство памяти, используя общие методы.</p>
            </li>
          </ul>
          

        </li>
        <li>
            <p>Класичне наслідування в js - прототипне наслідуавння. В JavaScript всі об'єкти мають приховану властивість [[Prototype]], яка є або іншим об'єктом, або null. Наслідування класу – це коли один клас розширює інший.

Таким чином, ми можемо створити нову функціональність на основі тої, що існує. Объект, на который ссылается [[Prototype]], называется «прототипом».
Если мы хотим прочитать свойство obj или вызвать метод, которого не существует у obj, тогда JavaScript попытается найти его в прототипе. Если мы вызываем obj.method(), а метод при этом взят из прототипа, то this всё равно ссылается на obj. Таким образом, методы всегда работают с текущим объектом, даже если они наследуются.
Цикл for..in перебирает как свои, так и унаследованные свойства. Остальные методы получения ключей/значений работают только с собственными свойствами объекта. Почти все остальные методы, получающие ключи/значения, такие как Object.keys, Object.values и другие – игнорируют унаследованные свойства.

Они учитывают только свойства самого объекта, не его прототипа.</p>

        </li>
        <li>
          <h2>поведінка браузером за замовчуванням</h2>
          <p>event.preventDefault - </p>
          <p>stopPropogation - </p>
        </li>

        <li>
          <h3>різниця var, let, const</h3>
          <p>let, const мають блокову область видимості, а var - глобальну.</p>
        </li>
        <li>
          <h2>функція debounce</h2>
          <p></p>
        </li>
        <li>
          <h2>deep copy та shadow</h2>
        </li>
 
        <li>
          <h2>В чому різниця між cookie, sessionStorage та localStorage.</h2>
          <ul>
            <li>localStorage: зберігає дані поки їх не видалять</li>
            <li>sesionStorage: зберігає дані поки триває поточна сесія, кожна вкладка має свій sesionStorage</li>
            <li>cookie: зберігає дані, які передаються на сервер через заголовки, мають термін зберігання. cookie можуть бути захищеними для того, щоб їх не можна було отримати на стороні клієнта. Це важливо для аутентифікації при зберіганні користувацьких token-ів.</li>
          </ul>
        </li>
      
        <li>
          <h2>Об'єднання масивів.</h2>
          <p>Метод concat, або за допомогою оператора spread ... розпилити 2 масиви в один.</p>
        </li> 
        <li>
          <h2>Що таке лексичне оточення(Lexical Environment)</h2>
          <p>«Лексическое окружение» – это специальный внутренний объект. Мы не можем получить его в нашем коде и изменять напрямую. Сам движок JavaScript может оптимизировать его, уничтожать неиспользуемые переменные для освобождения памяти и выполнять другие внутренние уловки, но видимое поведение объекта должно оставаться таким, как было описано.</p>
          <p>Нове лексичне оточення створюється кожного разу, коли функція викликається. І якщо функція викликається декілька разів, то кожного разу створюється нове лексичне її оточення зі своїми локальними змінними та парметрами.</p>
          <p>У кожної функції є її оточення scope, яке під час її створення</p>
        </li>
        <li>
          <h2>Замикання</h2>
          <p>Замикання - це коли функція запам'ятовує свої зовнішні змінні і має доступ до них під час виклику. Також замикання забороняє збірнику сміття видаляти цю функцію з пам'яті.</p>
          <p>Замикання використовується для інкапсуляції, тобто створення приватних змінних та функцій. І для збереження промежуточних параметрів виклику функції  - карирування</p>
        </li>
        {/* <li>
          <h2></h2>
          <p></p>
        </li>

        <li>
          <h2></h2>
          <p></p>
        </li>



        <li>
          <h2></h2>
          <p></p>
        </li>


        <li>
          <h2></h2>
          <p></p>
        </li> */}

        <li>
            <p>new Set() утворює сет унікальних даних</p>
        </li>
      </ol>
    </div>
  )
}
