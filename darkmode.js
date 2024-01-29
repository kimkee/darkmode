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