localStorage.setItem("hello","world")
undefined
localStorage.setItem("helllo","worldd")
undefined
localStorage.getItem("helllo")
'worldd'
localStorage.removeItem("helllo")
undefined
const user = {name:"Ajay"}
undefined
localStorage.setItem("user",user)
undefined
localStorage.setItem("userr",JSON.stringify(user))
undefined
localStorage.getItem("userr")
'{"name":"Ajay"}'
JSON.parse(localStorage.getItem("userr"));
{name: 'Ajay'}