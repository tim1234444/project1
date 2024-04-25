import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./style.css"

window.onload = function() {
   var swiper = new Swiper('#right', {
    
    modules: [Navigation],
    loop: false,
    effect: 'fade', 
    speed: 500, // Скорость переключения слайдов (в миллисекундах)
  autoplay: {
    delay: 5000, // Задержка между автоматическим переключением слайдов (в миллисекундах)
  },
    
   
 
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 20,
   
    navigation: {
      prevEl: '.prev',
      nextEl: '.next'
    }});
    swiper.on('slideChange', function () {
        if(this.activeIndex === 2) {
            setTimeout(showMessage, 500)
      // Закрытие сообщения через 3 секунды
      setTimeout(closeMessage, 3000);
        }
    });
    function showMessage() {
        var messageContainer = document.getElementById("message-container");
        messageContainer.classList.add("show");
      }
      
      // Функция для закрытия сообщения
      function closeMessage() {
        var messageContainer = document.getElementById("message-container");
        messageContainer.classList.remove("show");
      }
      
      
        
      
      
      // Привязка функции closeMessage к кнопке закрытия
      document.getElementById("close-button").addEventListener("click", closeMessage);
      }
    
    