//barb
let bar = document.querySelector('.clash-card__unit-stats--barbarian');
bar.style.backgroundColor= '#eb9e2a';
//arch
let arch = document.querySelector('.clash-card__unit-stats--archer');
//giant
let gai = document.querySelector('.clash-card__unit-stats--giant');
gai.style.backgroundColor= '#d35400';
//gob
let gob = document.querySelector('.clash-card__unit-stats--goblin');
gob.style.backgroundColor= '#4cd137';
//wiz
let wiz = document.querySelector('.clash-card__unit-stats--wizard');
wiz.style.backgroundColor= '#00a8ff';
//text color
let col=document.querySelectorAll('.clearfix');
let color = [...col];
color.map((x)=> x.style.color = "#fff");
let scol= document.querySelectorAll(".no-border");
let scolor = [...scol];
scolor.map((x)=> x.style.color = "#fff");