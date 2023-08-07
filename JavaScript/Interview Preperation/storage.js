localStorage.setItem("name","Ajay");



sessionStorage.setItem("name","John");
console.log(sessionStorage.getItem("name"))
sessionStorage.removeItem("name")

document.cookie = "name=Ajay; expires=" + new Date(2080, 0, 1).toUTCString();
console.log(document.cookie)