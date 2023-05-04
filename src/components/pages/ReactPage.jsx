import React from 'react'

export default function ReactPage() {
  return (
    <div>
      <ol>
        <li>
          <h2>JSX розширення</h2>
          <p>JSX — XML-образний синтаксис називається JSX (JavaScript Syntax Extension), це розширення синтаксису JavaScript, яке виглядає як XML. JSX може нагадувати мову шаблонів, але з усіма перевагами JavaScript. JSX створює “React-елементи”. Це не HTML, Babel трансформує JSX у виклики функцій. JSX створює елементи – найменші будівельні блоки React. Елементи Virtual DOM це звичайні JavaScript об'єкти, тому створювати їх дуже швидко. Використовуючи JSX, розмітка стає схожою на звичні HTML-шаблони.</p>
        </li>

          <li>
            <h2>Рендер в DOM-дерево елементів</h2>
            <p>Для того, щоб відрендерувати елемент у DOM-дерево, у пакеті react-dom є методи createRoot(container) та render(element), які працюють разом.</p>
            <p>React використовує модель відносин предок - нащадок, тому достатньо використовувати лише один виклик render() в програмі. Рендер найвищого елемента в ієрархії потягне за собою рендер всього піддерева.</p>
          </li>
          <li>
            <h2>Методи життєвого циклу</h2>
            <p>Існує кілька стадій життєвого циклу – монтування, оновлення та розмонтування.</p>
            <p>Всього є сім методів життєвого циклу, якщо не рахувати render і constructor. На практиці, в більшості повсякденних завдань використовують три: componentDidMount, componentDidUpdate і componentWillUnmount.</p>
          </li>
        <li>
          <h2>Хукі</h2>
          <p>Хуки — це функції, за допомогою яких ви можете “зачепитися” за стан та методи життєвого циклу React з функційних компонентів. Хуки не працюють всередині класів — вони дають вам можливість використовувати React без класів.</p>
          <p>Хуки — це функції JavaScript, але вони накладають два додаткових правила:</p>
            <ul>
              <li>Хуки слід викликати тільки на найвищому рівні. Не викликайте хуки всередині циклів, умов або вкладених функцій.</li>
              <li>Хуки слід викликати тільки з функційних React-компонентів.Не викликайте хуки зі звичайних функцій JavaScript. (Є тільки один виняток, звідки ще можна викликати хуки — це з ваших власних хуків. Ми розповімо про них далі.)</li>
            </ul>
          <ul>
            <li>
              <h3>useState</h3>
              <p>Ми викликаємо його для того, щоб надати внутрішній стан нашому компоненту. React буде зберігати цей стан між повторними рендерами. Виклик useState повертає дві речі: поточне значення стану та функцію, яка дозволяє оновлювати цей стан. useState оголошується тільки на верхньому рівні функціонального компонента.</p></li>
            <li>
              <h3>useEffect</h3>
              <p>За допомогою хука ефекту useEffect ви можете виконувати побічні ефекти із функційного компонента. Він виконує таку ж саму роль, що і componentDidMount, componentDidUpdate та componentWillUnmount у React-класах, об’єднавши їх в єдиний API. Передається cb та масив залежностей, при зміні яких буде викликатися cb
              </p>
              <p>Оскільки ефекти оголошуються всередині компонентів, то у них є доступ до пропсів та стану. За замовчуванням, React запускає ефекти після кожного рендеру, включаючи перший рендер.</p>
              <p> Якщо передати пустий масив [], cb спрацює тільки після першого рендеру компонента.</p>
              <p>Якщо ми "вішаємо" слухача якоїсь події в useEffect, то "зняти" слухача можна зробивши нижче return removeEventListener </p>
              <p>Якщо не передати другий параметр залежностей, то useEffect буде спрацьовувати при кожному рендері компонента</p>
              </li>
            <li>
              <h3>useRef</h3>
              <p>Хук useRef дозволяє зберегти об'єкт, який можна змінювати і який зберігається протягом всього життєвого циклу компонента. В якості параметра функції useRef приймає початкове значення збереженого компонента, а повертає посилання-об'єкт з властивістю current, за допомогою якого ми отримуємо доступ до цього значення.</p>
              <p>Якщо нам потрібна змінна, яка не призводить до перерендера компонента, використовуючи властивість current.</p>
              <p>Посилання на DOM-елемент компонента, наприклад фокус інпутів форми, використовуючи атрибут ref</p>
              <p>useRef дозволяє зберегти посилання на DOM-елемент при першому рендері компонента, і це посилання буде мати актуальну властивість current на цей ел-т навіть при зміні props чи state компонента та відповідно оновленні компонента.</p>
            </li>
            <li>
              <h3>useContext</h3>
              <p>Використання контекста в будь-яких компонентах додатка, наприклад, темізація</p>
              <p>За допомогою createContext з react створюємо об'єкт контексту (langContext / themeContext), в якому є властивість Provider, якою ми огортаємо компонент контексту, створюємо (функцію-обгортку), в який передаємо default value - це об'єкт з даними default-ного значення контекста та функції для зміни default значення. Далі огортаємо цією обгорткою весь додаток, щоб об'єкт value був доступним в усіх компонентах додатку. Далі імпортуємо цей компонент в ту частину додатку, в якій нам потрібно змінювати даний контекст і за допомогою хука useContext використовуємо його</p>
            </li>
            <li>
              <h3>useCallback</h3>
              <p>Дозволяє зберегти посилання на функцію при створенні компонента і зберігати це посилання мід ререндерами. Наприклад при обробнику подій.</p>
            </li>
            <li>
              <h3>useMemo</h3>
              <p>Розділяють поняття useMemo (хук) та React.memo(функція вищого порядку React). React.memo - позбавляє нас зайвого ререндеру, ним можна огорнути компонент, який ми точно впевнені, що не треба перерендерювати. React.memo робить поверхневе порівняння shallow equal пропсів (prevProps === nextProps) і тільки у випадку prevProps !== nextProps відбувається ререндер компонента. А хук useMemo позбавляє зайвих виконань складних функцій, діє по принципу useEffect - приймає функцію із залежностями, але на відміну від useEffect записує результат роботи цієї функції.</p>
            </li>
          </ul>
        </li>

        <li>
          <h2>redux - стейт менеджер</h2>
          <p>Redux - глобальний store. Створюємо стор - Redux.createStore(reducer). 
          Dispatch - це фнкція, яка приймає action і тут ми описуємо type action та передаємо в payload дані (наприклад ім'я user) (type: "Add user", payload: data), далі reducer на основі action.type та action.payload може змінити стор, далі передаються зміни стора у всі компоненти, які підписані на стор. Action - це об'єкт, який має в собі властивість type та payload.
          Reducer - це функція, яка приймає initialState та action. reducer = (store= [], action), щось робить зі стором та повертає його.
          Subscribe - підписка компонента на стор.</p>
        </li>
        <li>
          <h2>redux thunk</h2>
          <p>для асинхронних запитів</p>
        </li>
        <li>
          <h2>redux toolkit</h2>
        </li>
        {/* <li>
          <h2></h2>
        </li>
        <li>
          <h2></h2>
        </li>
        <li>
          <h2></h2>
        </li>
        <li>
          <h2></h2>
        </li> */}
      </ol>
    </div>
  )
}
