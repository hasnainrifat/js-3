let inc = document.querySelector('.inc');
let dec = document.querySelector('.dec');
let inpRslt = document.querySelector('.inp_rslt');

inc.addEventListener('click' , function(){

    if(Number(inpRslt.value) + 1 < 5){
 inpRslt.value = Number(inpRslt.value) + 1;
 dec.style.cursor = "pointer"

    }else{
        inc.style.cursor = "not-allowed";
    }

})
dec.addEventListener('click' , function(){
    if( inpRslt.value > 1){
    inpRslt.value = Number(inpRslt.value) - 1;
    inc.style.cursor = "pointer"
    }else{
        dec.style.cursor = "not-allowed";
    }
});

let nav = document.querySelector('.nav');
let aside = document.querySelector('aside');
let cross = document.querySelector('.cross');

nav.addEventListener('click', function(){
  aside.classList.add('active')
})

cross.addEventListener('click', function(){
    aside.classList.remove('active')
})

aside.addEventListener('click', (c)=>{
   if(c.target.classList.contains('active')){
    aside.classList.remove('active');
   }
   
})