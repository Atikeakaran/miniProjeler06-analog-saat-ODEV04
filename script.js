let hr = document.getElementById("hr");
let mn = document.getElementById("min");
let sc = document.getElementById("sc");

let today = document.getElementById("date");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;/*saat çubuk ilerleme hesabı 360/12 derece*/
    let mm = day.getMinutes() * 6; /*360/60 derece */
    let ss = day.getSeconds() * 6; /*360/60 derece */

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;


    //dijital saat
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let ampm = document.getElementById("ampm");

    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();
  
  
   let am = h >= 12 ? "PM" : "AM";
    //ampm = h >= 12 ? "PM" : "AM";

    //24 lük saati 12 lik hale dönüştürme
    if (h > 12) {
        h = h - 12;
    }
  
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML=am;

 
    let gun = document.getElementById("gun");
    let ay = document.getElementById("ay");
    let yil = document.getElementById("yil");
    //let gun2 = document.getElementById("gun2");

    g = day.getDay();
    a = day.getMonth();
    y = day.getFullYear();
   // g2 = day.getUTCDay();

   g = (g < 10) ? "0" + g : g
   a = (a < 10) ? "0" + a : a

    gun.innerHTML =g;
    ay.innerHTML=a;
    yil.innerHTML=y;
   // gun2.innerHTML=g2;



})