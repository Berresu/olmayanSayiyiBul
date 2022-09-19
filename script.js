let sayilar=["0","1","2","3","4","5","6","8","9","10"]
let sonuc=document.getElementById("sonuc");
let bul=document.getElementById("btnEksik");

bul.addEventListener("click", ()=>{
    for(let i=0; i<sayilar.length; i++){
        if(i==0){
            sonuc.innerHTML=i;
        }
        else if(i==1){
            sonuc.innerHTML=i;
        }
        else if(i==2){
            sonuc.innerHTML=i;
        }
        else if(i==3){
            sonuc.innerHTML=i;
        }
        else if(i==4){
            sonuc.innerHTML=i;
        }
        else if(i==5){
            sonuc.innerHTML=i;
        }
        else if(i==6){
            sonuc.innerHTML=i;
        }
        else if(i==7){
            sonuc.innerHTML="Yedi Sayısı Bulunmamaktadır."
        }
        console.log(i);
    }
});
