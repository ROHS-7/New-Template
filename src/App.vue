<script setup>
import PromotionCard from './components/atoms/PromotionCard.vue';
import Marquee from './components/main/Marquee.vue';
import Navbar from './components/main/Navbar.vue';
import Swiper from './components/main/Swiper.vue';
</script>

<template>
  <Navbar />
  <div class="mt-[150px]">
    <Swiper />
    <div class="flex mt-[30px] gap-5">
      <div class="w-[75%]"> 
        <Marquee />
        <div class="grid mt-[30px] grid-cols-3 gap-5">
          <PromotionCard image="https://cdn.zabbet.com/0VNF/lobby_settings/26f5c813-c080-4876-ba84-55561875e23f.png" title="โปรโมชั่นพิเศษ" description="โปรโมชั่นพิเศษเฉพาะคุณ" />
          <PromotionCard image="https://cdn.zabbet.com/0VNF/lobby_settings/8c6c6e91-0c11-469a-b46b-937f3c168dea.png" title="กิจกรรม" description="กิจกรรมตลอด 24 ชั่วโมง" />
          <PromotionCard image="https://cdn.zabbet.com/0VNF/lobby_settings/b2082a32-6963-4333-ad94-b662c8e8647f.png" title="ข่าวสาร" description="ข่าวสารที่คุณไม่ควรพลาด" />
        </div>
        <div class="h-[1000px]"></div>
      </div>
      <div class="w-[25%] sticky h-fit top-[124px]">
        <div class="px-[10px] py-[12px] relative">
          <div class="absolute left-0 right-0 top-0 h-[150px]" style="background: radial-gradient(circle at 50% -30%, rgb(18, 255, 32) 0%, rgba(7, 29, 70, 0) 60%); border-top-right-radius: 25px; border-top-left-radius: 25px;"></div>
          <div class="h-[30px] flex items-center gap-4 w-full relative overflow-hidden rounded-md pl-4">
            <div class="absolute top-0 left-0 w-full h-[30px] opacity-[0.4]" style="background: linear-gradient(90deg, rgba(0, 0, 0, 0.6) -6.21%, rgb(18, 255, 32) -4.41%, rgba(0, 0, 0, 0.6) 83.01%);"></div>
            <div class="absolute bottom-0 left-0 w-full h-[2px] opacity-[0.4]" style="background: linear-gradient(90deg, rgba(0, 0, 0, 0.6) -6.21%, rgb(18, 255, 32) -4.41%, rgba(0, 0, 0, 0.6) 83.01%);"></div>
            <div class="flex items-center gap-4 relative z-[10]">
            <img class="w-[16px] h-[16px]" src="https://alpha7s.online/images/home/coin.png" alt="">
            <p class="text-[14px] font-semibold text-white">Jackpot รางวัลชนะรวมเดือนนี้</p>
            </div>
          </div>
          <div class="relative mt-5">
            <div>
              <img class="w-full h-full" src="https://cdn.zabbet.com/0VNF/highlight/1748080772600-f01d7eb3-c25c-421a-9d9b-fa03ded4c250.gif" alt="">
            </div>
            <div class="text-[27px] font-extrabold text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mt-1">
              <span>49,041,057</span>
            </div>
          </div>
          <div class="h-[30px] flex items-center gap-4 w-full mt-3 relative overflow-hidden rounded-md pl-4">
            <div class="absolute top-0 left-0 w-full h-[30px] opacity-[0.4]" style="background: linear-gradient(90deg, rgba(0, 0, 0, 0.6) -6.21%, rgb(18, 255, 32) -4.41%, rgba(0, 0, 0, 0.6) 83.01%);"></div>
            <div class="absolute bottom-0 left-0 w-full h-[2px] opacity-[0.4]" style="background: linear-gradient(90deg, rgba(0, 0, 0, 0.6) -6.21%, rgb(18, 255, 32) -4.41%, rgba(0, 0, 0, 0.6) 83.01%);"></div>
            <div class="flex items-center gap-3 relative z-[10]">
            <img src="https://alpha7s.online/images/home/leader-board.svg" alt="">
            <p class="text-[14px] font-semibold text-white">กระดานผู้นำ</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none"><path fill="#12ff20" d="M8.025 13.974h1.744V8.74H8.025v5.234Zm.872-6.978a.845.845 0 0 0 .622-.252.84.84 0 0 0 .25-.62.848.848 0 0 0-.25-.622.842.842 0 0 0-.622-.25.842.842 0 0 0-.621.25.848.848 0 0 0-.251.621c0 .247.083.454.251.622a.838.838 0 0 0 .621.25Zm0 11.34a8.49 8.49 0 0 1-3.402-.688 8.821 8.821 0 0 1-2.77-1.864 8.789 8.789 0 0 1-1.863-2.77 8.513 8.513 0 0 1-.688-3.401c0-1.207.229-2.34.688-3.402a8.828 8.828 0 0 1 1.864-2.77 8.796 8.796 0 0 1 2.77-1.864A8.497 8.497 0 0 1 8.896.89c1.206 0 2.34.229 3.402.687a8.795 8.795 0 0 1 2.77 1.864 8.84 8.84 0 0 1 1.864 2.77 8.442 8.442 0 0 1 .687 3.402 8.552 8.552 0 0 1-.688 3.401 8.749 8.749 0 0 1-1.864 2.77 8.86 8.86 0 0 1-2.769 1.865 8.45 8.45 0 0 1-3.402.686Zm0-1.745c1.948 0 3.598-.676 4.95-2.028 1.352-1.352 2.028-3.002 2.028-4.95 0-1.949-.676-3.599-2.028-4.95-1.352-1.353-3.002-2.029-4.95-2.029-1.948 0-3.598.676-4.95 2.028-1.352 1.352-2.028 3.002-2.028 4.95 0 1.949.676 3.599 2.028 4.95 1.352 1.353 3.002 2.029 4.95 2.029Z"></path></svg>

            </div>
          </div>
          <div class="mt-3"> 
            <table class="w-full text-[12px] text-white" style="background:rgb(0,0,0)">
              <thead>
                <tr class="sticky top-0 z-1">
                  <th class="px-2  py-1 text-center">No.</th>
                  <th class="px-2  py-1 text-left">Game/Jackpot</th>
                  <th class="px-2  py-1 text-left"></th>
                  <th class="px-2  py-1 text-left"></th>


                </tr>
              </thead>
              <tbody>
                <tr class="px-[20px] py-[7px] ">
                  <td>
                    <div class="bg-contain bg-no-repeat bg-center flex items-center justify-center text-shadow-lg" style="background-image: url('https://alpha7s.online/images/LeaderBoard/rank1.png');">
                      <div class="text-[12px] box-shadow: 0px 2px 6px 0px #000000;" style="margin-top: 5px;">1</div>
                    </div>
                  </td>
                  <td>
                    <div class="flex gap-2 py-1">
                      <img class="w-[30px] rounded-md" src="https://cdn.zabbet.com/games/1700029552066-1974f0ec-e51b-467b-a99e-e10e06cbde44.jpg" alt="">
                      <div class="">
                        <p class="text-[10px]">Caishen Wins</p>
                        <p class="text-[10px]">09xxxxxxx34</p>
                        <p>Wins <span class="text-primary">102</span></p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="w-[57px] h-[20px]"></div>
                  </td>
                  <td>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none"><path d="M2 3.77344C2 2.11658 3.34315 0.773438 5 0.773438H19C20.6569 0.773438 22 2.11658 22 3.77344V17.7734C22 19.4303 20.6569 20.7734 19 20.7734H5C3.34315 20.7734 2 19.4303 2 17.7734V3.77344Z" fill="#000000" fill-opacity="0.7"></path><g filter="url(#filter0_d_6809_29153)"><path d="M16 10.7734L10 14.2375L10 7.30934L16 10.7734Z" fill="url(#paint0_linear_6809_29153)"></path></g><defs><filter id="filter0_d_6809_29153" x="3.5" y="0.808594" width="19" height="19.9297" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="3.25"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.00784314 0 0 0 0 0.470588 0 0 0 0 0.780392 0 0 0 1 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6809_29153"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6809_29153" result="shape"></feBlend></filter><linearGradient id="paint0_linear_6809_29153" x1="14.8008" y1="6.77344" x2="8.02396" y2="5.52963" gradientUnits="userSpaceOnUse"><stop stop-color="#20ed00"></stop><stop offset="1" stop-color="#20ed00"></stop></linearGradient></defs></svg>
                  </td>
                
                </tr>
                <tr class="px-[20px] py-[7px] ">
                  <td>
                    <div class="bg-contain bg-no-repeat bg-center flex items-center justify-center text-shadow-lg" style="background-image: url('http://alpha7s.online/images/LeaderBoard/rank2.png');">
                      <div class="text-[12px] box-shadow: 0px 2px 6px 0px #000000;" style="margin-top: 5px;">2</div>
                    </div>
                  </td>
                  <td>
                    <div class="flex gap-2 py-1">
                      <img class="w-[30px] rounded-md" src="https://cdn.zabbet.com/games/1741166271145-aedb0e71-feb3-4fc0-8bdc-93d802aad6af.jpeg" alt="">
                      <div class="">
                        <p class="text-[10px]">Caishen Wins</p>
                        <p class="text-[10px]">09xxxxxxx34</p>
                        <p>Wins <span class="text-primary">102</span></p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="w-[57px] h-[20px]"></div>
                  </td>
                  <td>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none"><path d="M2 3.77344C2 2.11658 3.34315 0.773438 5 0.773438H19C20.6569 0.773438 22 2.11658 22 3.77344V17.7734C22 19.4303 20.6569 20.7734 19 20.7734H5C3.34315 20.7734 2 19.4303 2 17.7734V3.77344Z" fill="#000000" fill-opacity="0.7"></path><g filter="url(#filter0_d_6809_29153)"><path d="M16 10.7734L10 14.2375L10 7.30934L16 10.7734Z" fill="url(#paint0_linear_6809_29153)"></path></g><defs><filter id="filter0_d_6809_29153" x="3.5" y="0.808594" width="19" height="19.9297" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="3.25"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.00784314 0 0 0 0 0.470588 0 0 0 0 0.780392 0 0 0 1 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6809_29153"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6809_29153" result="shape"></feBlend></filter><linearGradient id="paint0_linear_6809_29153" x1="14.8008" y1="6.77344" x2="8.02396" y2="5.52963" gradientUnits="userSpaceOnUse"><stop stop-color="#20ed00"></stop><stop offset="1" stop-color="#20ed00"></stop></linearGradient></defs></svg>
                  </td>
                
                </tr>
                <tr class="px-[20px] py-[7px] ">
                  <td>
                    <div class="bg-contain bg-no-repeat bg-center flex items-center justify-center text-shadow-lg" style="background-image: url('https://alpha7s.online/images/LeaderBoard/rank3.png');">
                      <div class="text-[12px] box-shadow: 0px 2px 6px 0px #000000;" style="margin-top: 5px;">3</div>
                    </div>
                  </td>
                  <td>
                    <div class="flex gap-2 py-1">
                      <img class="w-[30px] rounded-md" src="https://cdn.zabbet.com/games/1738037114621-15f0a607-3357-41dc-a1b9-b37983cd8fcd.png" alt="">
                      <div class="">
                        <p class="text-[10px]">Caishen Wins</p>
                        <p class="text-[10px]">09xxxxxxx34</p>
                        <p>Wins <span class="text-primary">102</span></p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="w-[57px] h-[20px]"></div>
                  </td>
                  <td>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none"><path d="M2 3.77344C2 2.11658 3.34315 0.773438 5 0.773438H19C20.6569 0.773438 22 2.11658 22 3.77344V17.7734C22 19.4303 20.6569 20.7734 19 20.7734H5C3.34315 20.7734 2 19.4303 2 17.7734V3.77344Z" fill="#000000" fill-opacity="0.7"></path><g filter="url(#filter0_d_6809_29153)"><path d="M16 10.7734L10 14.2375L10 7.30934L16 10.7734Z" fill="url(#paint0_linear_6809_29153)"></path></g><defs><filter id="filter0_d_6809_29153" x="3.5" y="0.808594" width="19" height="19.9297" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="3.25"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.00784314 0 0 0 0 0.470588 0 0 0 0 0.780392 0 0 0 1 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6809_29153"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6809_29153" result="shape"></feBlend></filter><linearGradient id="paint0_linear_6809_29153" x1="14.8008" y1="6.77344" x2="8.02396" y2="5.52963" gradientUnits="userSpaceOnUse"><stop stop-color="#20ed00"></stop><stop offset="1" stop-color="#20ed00"></stop></linearGradient></defs></svg>
                  </td>
                
                </tr>
                <tr class="px-[20px] py-[7px] ">
                  <td>
                    <div class="bg-contain bg-no-repeat bg-center flex items-center justify-center text-shadow-lg" >
                      <div class="text-[12px] box-shadow: 0px 2px 6px 0px #000000;" style="margin-top: 5px;">4</div>
                    </div>
                  </td>
                  <td>
                    <div class="flex gap-2 py-1">
                      <img class="w-[30px] rounded-md" src="https://cdn.zabbet.com/games/1745918328112-bd7af36c-205a-4177-917e-b48fd8bbb5ec.jpeg" alt="">
                      <div class="">
                        <p class="text-[10px]">Caishen Wins</p>
                        <p class="text-[10px]">09xxxxxxx34</p>
                        <p>Wins <span class="text-primary">102</span></p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="w-[57px] h-[20px]"></div>
                  </td>
                  <td>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none"><path d="M2 3.77344C2 2.11658 3.34315 0.773438 5 0.773438H19C20.6569 0.773438 22 2.11658 22 3.77344V17.7734C22 19.4303 20.6569 20.7734 19 20.7734H5C3.34315 20.7734 2 19.4303 2 17.7734V3.77344Z" fill="#000000" fill-opacity="0.7"></path><g filter="url(#filter0_d_6809_29153)"><path d="M16 10.7734L10 14.2375L10 7.30934L16 10.7734Z" fill="url(#paint0_linear_6809_29153)"></path></g><defs><filter id="filter0_d_6809_29153" x="3.5" y="0.808594" width="19" height="19.9297" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="3.25"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.00784314 0 0 0 0 0.470588 0 0 0 0 0.780392 0 0 0 1 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6809_29153"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6809_29153" result="shape"></feBlend></filter><linearGradient id="paint0_linear_6809_29153" x1="14.8008" y1="6.77344" x2="8.02396" y2="5.52963" gradientUnits="userSpaceOnUse"><stop stop-color="#20ed00"></stop><stop offset="1" stop-color="#20ed00"></stop></linearGradient></defs></svg>
                  </td>
                
                </tr>
                <tr class="px-[20px] py-[7px] ">
                  <td>
                    <div class="bg-contain bg-no-repeat bg-center flex items-center justify-center text-shadow-lg" >
                      <div class="text-[12px] box-shadow: 0px 2px 6px 0px #000000;" style="margin-top: 5px;">5</div>
                    </div>
                  </td>
                  <td>
                    <div class="flex gap-2 py-1">
                      <img class="w-[30px] rounded-md" src="https://cdn.zabbet.com/games/1737688704831-103eb675-51ea-47ae-9d1a-e971c58d1b3d.png" alt="">
                      <div class="">
                        <p class="text-[10px]">Caishen Wins</p>
                        <p class="text-[10px]">09xxxxxxx34</p>
                        <p>Wins <span class="text-primary">102</span></p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="w-[57px] h-[20px]"></div>
                  </td>
                  <td>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none"><path d="M2 3.77344C2 2.11658 3.34315 0.773438 5 0.773438H19C20.6569 0.773438 22 2.11658 22 3.77344V17.7734C22 19.4303 20.6569 20.7734 19 20.7734H5C3.34315 20.7734 2 19.4303 2 17.7734V3.77344Z" fill="#000000" fill-opacity="0.7"></path><g filter="url(#filter0_d_6809_29153)"><path d="M16 10.7734L10 14.2375L10 7.30934L16 10.7734Z" fill="url(#paint0_linear_6809_29153)"></path></g><defs><filter id="filter0_d_6809_29153" x="3.5" y="0.808594" width="19" height="19.9297" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="3.25"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.00784314 0 0 0 0 0.470588 0 0 0 0 0.780392 0 0 0 1 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6809_29153"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6809_29153" result="shape"></feBlend></filter><linearGradient id="paint0_linear_6809_29153" x1="14.8008" y1="6.77344" x2="8.02396" y2="5.52963" gradientUnits="userSpaceOnUse"><stop stop-color="#20ed00"></stop><stop offset="1" stop-color="#20ed00"></stop></linearGradient></defs></svg>
                  </td>
                
                </tr>
              </tbody>
            </table>
          </div>
          <div class="h-[30px] mt-3 flex items-center gap-4 w-full relative overflow-hidden rounded-md pl-4">
            <div class="absolute top-0 left-0 w-full h-[30px] opacity-[0.4]" style="background: linear-gradient(90deg, rgba(0, 0, 0, 0.6) -6.21%, rgb(18, 255, 32) -4.41%, rgba(0, 0, 0, 0.6) 83.01%);"></div>
            <div class="absolute bottom-0 left-0 w-full h-[2px] opacity-[0.4]" style="background: linear-gradient(90deg, rgba(0, 0, 0, 0.6) -6.21%, rgb(18, 255, 32) -4.41%, rgba(0, 0, 0, 0.6) 83.01%);"></div>
            <div class="flex items-center gap-4 z-[10] relative">
              <img src="https://alpha7s.online/images/home/mini-game.webp" alt="">
            <p class="text-[14px] font-semibold text-white">Mini Games</p>
            </div>
          </div>
          <div class="flex items-center gap-6 px-4 mt-5">
            <div class="rounded-full flex-1 p-[3px]" style="background:linear-gradient(rgb(252, 200, 143) 0%, rgb(255, 252, 245) 22%, rgb(245, 197, 49) 48%, rgb(198, 124, 45) 100%)">
              <div class="w-full h-[42px] flex items-center 4xl:pr-5 rounded-full" style="background: linear-gradient(135deg, rgb(15, 137, 218) 10%, rgb(8, 70, 157) 100%);">
                <div class="w-full flex items-center -ml-5">
                  <img loading="lazy" class="h-[90px] -mx-[15px]" src="https://alpha7s.online/images/mini_game/icon-luckywheel-dt.webp">
                  <div class="w-full text-center text-xl text-white whitespace-nowrap font-semibold">Spinner</div>
                </div>
              </div>
            </div>
            <div class="rounded-full flex-1 p-[3px]" style="background:linear-gradient(rgb(252, 200, 143) 0%, rgb(255, 252, 245) 22%, rgb(245, 197, 49) 48%, rgb(198, 124, 45) 100%)">
              <div class="w-full h-[42px] flex items-center 4xl:pr-5 rounded-full" style="background: linear-gradient(135deg, rgb(15, 137, 218) 10%, rgb(8, 70, 157) 100%);">
                <div class="w-full flex items-center -ml-5">
                  <img loading="lazy" class="h-[90px] -mx-[15px]" src="https://alpha7s.online/images/mini_game/icon-dailymission-dt.webp">
                  <div class="w-full text-center text-xl text-white whitespace-nowrap font-semibold">Spinner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
