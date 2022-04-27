

let ısım=prompt("adıınızı giriniz")


let info=document.querySelector("#info")


info.innerHTML=`Merhaba  ${ısım} HOŞGELDİN `


if(ısım.length>0){
    let body=document.querySelector("#bg")
    body.classList.remove("first")
    body.classList.add("second")




}

let tarih=new Date();
let gun=tarih.getDay();
let gunler=["pazar","pazartesi","salı","çarşamba","perşembe","cuma","cumartesi",];

 



let gn=document.querySelector("#gn");

gn.innerHTML=` ${gunler[gun]} `



