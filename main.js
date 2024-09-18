var swiper = new Swiper(".mySwiper", {
	navigation: {
		nextEl: ".swiper-next-button",
		prevEl: ".swiper-prev-button"
	},
	effect: "fade",
	loop: "infinite",
});

swiper.on('slideChange', function(sld) {
	document.body.setAttribute('data-sld', sld.realIndex);
})


const getPrevousdiv=()=>{
    result2.innerHTML=`
            <div class="main-d12">
              <img class="main-d12img" width="100%" src="https://i.pinimg.com/736x/83/e7/b9/83e7b935e3afbb38c1fcce4b2c1d9948.jpg" alt="">
              <h3 class="main-h3">Squeeze Bottles</h3>
            </div>
            <div class="main-d12">
              <img class="main-d12img" width="100%" src="https://i.pinimg.com/736x/00/7c/77/007c772e478de514042369225c638716.jpg" alt="">
              <h3 class="main-h3">Thermos Bottles</h3>
            </div>
            <div class="main-d12">
              <img class="main-d12img" width="100%" src="https://i.pinimg.com/736x/74/d5/44/74d544acb5e2900acb4b46b2be2a8693.jpg" alt="">
              <h3 class="main-h3">Stainless Steel Bottles</h3>
            </div>
            <div class="main-d12">
              <img class="main-d12img" width="100%" src="https://i.pinimg.com/564x/6f/ad/3a/6fad3a5e27c32a7d103dc913a0762f16.jpg" alt="">
              <h3 class="main-h3">Growlers</h3>
            </div>
            <div class="main-d12">
              <img class="main-d12img" width="100%" src="https://i.pinimg.com/564x/27/8a/6c/278a6c889a94e93cd79d63f89c207440.jpg" alt="">
              <h3 class="main-h3">Glazed Ceramic Bottles</h3>
            </div>
    `
    buttond1.innerHTML=`
            <button id="button" onclick="getSeeLess()">see less</button>
        `
    document.getElementById("button").style.display = "none";   
}
const getSeeLess=()=>{
    result2.innerHTML=``
    buttond1.innerHTML=``
    document.getElementById("button").style.display = "block";   
}


const slided1=[...document.querySelectorAll('.slide-d1')]

const prevBtn=[...document.querySelectorAll('.prev-btn')]
const nexBtn=[...document.querySelectorAll('.nex-btn')]

slided1.forEach((item,i)=>{
    
    nexBtn[i].addEventListener('click',()=>{
        item.scrollLeft += 760
    })
    prevBtn[i].addEventListener('click',()=>{
        item.scrollLeft -= 760
    })
})


$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( ".inner-switch" ).text( "OFF" );
    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).text( "ON" );
    }
  });

