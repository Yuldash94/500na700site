let images = document.querySelectorAll('.slide')
let current = 0
let slider = document.querySelector('.slider')
const btnLeft = document.querySelector('.btn_slider_left')
const btnRight = document.querySelector('.btn_slider_right')



function handleSlider() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add('opacity0')
  }

  images[current].classList.remove('opacity0')
}

function hanleSliderLeft() {
  if (current - 1 == -1) {
    current = images.length -1 
  } else {
    current--
  }
  handleSlider()
}

function handleSliderRight(){
  if (current+1 == images.length) {
    current = 0
  } else {
    current++
  }
  handleSlider()
}

btnLeft.onclick = hanleSliderLeft
btnRight.onclick = handleSliderRight




let acc = document.querySelectorAll(".accordion_link")
let i

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  })
}



let phone = document.getElementById('phone');
const maskOptionsPhone = {
    mask: '+7(000)000-00-00'
} 
let mask = new IMask(phone, maskOptionsPhone);

let email = document.getElementById('email');
let maskOptionsEmail = {    
    mask:function (value) {
                if(/^[a-z0-9_\.-]+$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value))
                    return true;
                return false;
                    },
    lazy: false
} 
let mask2 = new IMask(email, maskOptionsEmail);

let subscribe = document.querySelector('.subscribe_btn')

subscribe.onclick = function(){
    alert('Вы подписаны на рассылку')
}

let menu_btn = document.querySelector('.menu_btn')
let menu_burger = document.querySelector('.menu_items')

menu_btn.addEventListener('click', () => {
  menu_btn.classList.toggle('activ')
  menu_burger.classList.toggle('activ')
})