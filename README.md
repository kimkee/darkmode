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
const btnTogs  = document.querySelector('.btn-tog-dark');
const chkTogs  = document.querySelector('.check-dark>input');

const togDark  = ()=> setDark( !htmlCls.contains('dark') );
const initDark = ()=> setDark( darkMode.matches );
const setDark  = (isDark)=> {
	chkTogs.checked = isDark;
	htmlCls.toggle('dark', isDark);
	btnTogs.textContent = isDark ? '🌛' : '🌞';
}
document.addEventListener('DOMContentLoaded', initDark);
darkMode.addEventListener('change', initDark);
```
