# Darkmode

https://kimkee.github.io/darkmode/

````html
<span class="check-dark">
    <input type="checkbox" onchange="togDark()">
    <em></em>
</span>
````

```js
const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
const htmlCls  = document.documentElement.classList;
const btnTogs  = document.querySelectorAll('.btn-tog-dark');
const chkTogs  = document.querySelectorAll('.check-dark>input');
const locDark  = JSON.parse(localStorage.getItem('darkmode'));

const togDark  = ()=> setDark( !htmlCls.contains('dark') );
const initDark = ()=> locDark === null ? setDark( darkMode.matches ) : setDark( locDark ) ;
const setDark  = (isDark)=> {
    chkTogs.forEach( tog => tog.checked = isDark );
    btnTogs.forEach( btn => btn.innerHTML = isDark ? '🌛' : '🌞' );
    htmlCls.toggle('dark', isDark);
    localStorage.setItem('darkmode',isDark);
}
document.addEventListener('DOMContentLoaded', initDark);
darkMode.addEventListener('change', initDark);
```
