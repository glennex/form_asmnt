
const indicator = document.getElementsByClassName('indicator');
const forwardButton1 = document.getElementById('next-btn-1');
const forwardButton2 = document.getElementById('next-btn-2');
const backButton2 = document.getElementById('back-2');
const backButton1 = document.getElementById('back-1');
const form1=document.getElementById("myForm1");
const form2=document.getElementById("myForm2");
const form3=document.getElementById("myForm3");

let activeIndex = 0;
indicator[activeIndex].classList.add('active');


forwardButton1.onclick= function(){
    if (form1.checkValidity()){
        indicator[activeIndex].classList.remove('active');
        indicator[1].classList.add('active')
        event.preventDefault()
        form2.style.transform ='translate(0, -130%)';
        form1.style.transform ='translate(0, -130%)';
    activeIndex=1
    }
}

forwardButton2.onclick= function(){
    indicator[activeIndex].classList.remove('active');
    indicator[2].classList.add('active')
    event.preventDefault()
    form2.style.transform ='translate(0, 0)';
    form1.style.transform ='translate(0, -130%)';
    form3.style.transform ='translate(0, -240%)';
    activeIndex=2
}

backButton2.onclick= function(){
    indicator[activeIndex].classList.remove('active');
        indicator[1].classList.add('active')
        event.preventDefault()
        form2.style.transform ='translate(0, -130%)';
        form1.style.transform ='translate(0, -130%)';
        form3.style.transform ='translate(0, 0)';
        activeIndex=1
}
backButton1.onclick= function(){
    indicator[activeIndex].classList.remove('active');
        indicator[0].classList.add('active')
        event.preventDefault()
        form2.style.transform ='translate(0, 0)';
        form1.style.transform ='translate(0, 0)';
        form3.style.transform ='translate(0, 0)';
        activeIndex=0

}

