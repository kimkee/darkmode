# Darkmode

https://kimkee.github.io/darkmode/

 <video width="320" height="450" controls>
        <source src="https://kimkee.github.io/darkmode/darkmode.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>

````html
<span class="check-dark">
    <input type="checkbox" onchange="togDark()">
    <em></em>
    <b><i class="d fa-solid fa-moon"></i><i class="l fa-solid fa-sun"></i></b>
</span>
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
```
