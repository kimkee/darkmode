# Toggle Darkmode

https://kimkee.github.io/darkmode/


````html
<body>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="./darkmode.css">

    <span data-ui="dark" class="check-dark">
        <input type="checkbox">
        <em></em>
        <b><i class="d fa-solid fa-moon"></i><i class="l fa-solid fa-sun"></i></b>
    </span>

    <span data-ui="dark" class="check-dark2">
        <input type="checkbox">
        <em></em>
        <b><i class="d fa-solid fa-moon"></i><i class="l fa-solid fa-sun"></i></b>
    </span>

    <script src="./darkmode.js"></script>
</body>
````

```js
const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
const htmlCls  = document.documentElement.classList;
const chkTogs  = document.querySelectorAll('[data-ui="dark"]>input');
const locDark  = JSON.parse(localStorage.getItem('darkmode'));

const initDark = ()=> locDark === null ? setDark( darkMode.matches ) : setDark( locDark ) ;
const togDark  = ()=> setDark( !htmlCls.contains('dark') );
const setDark  = (isDark)=> {
    chkTogs.forEach( tog => tog.checked = isDark );
    htmlCls.toggle('dark', isDark);
    localStorage.setItem('darkmode',isDark);
}
document.addEventListener('DOMContentLoaded', initDark);
darkMode.addEventListener('change', initDark);
chkTogs.forEach( checkbox => checkbox.addEventListener('change', togDark) );
```

 <img src="https://kimkee.github.io/darkmode/darkmode.gif" alt="다크 모드 예시">
