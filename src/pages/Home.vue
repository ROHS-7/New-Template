<template>
  <div>
    <div class="flex mt-[30px] xl:gap-5 gap-2 xl:px-0 px-3">
      <div class="lg:w-[75%] w-full">
        <Marquee />
        <div class="grid mt-[30px] xl:grid-cols-3 grid-cols-2 gap-5">
          <PromotionCard
            image="https://cdn.zabbet.com/0VNF/lobby_settings/26f5c813-c080-4876-ba84-55561875e23f.png"
            title="โปรโมชั่นพิเศษ"
            description="โปรโมชั่นพิเศษเฉพาะคุณ"
          />
          <PromotionCard
            image="https://cdn.zabbet.com/0VNF/lobby_settings/8c6c6e91-0c11-469a-b46b-937f3c168dea.png"
            title="กิจกรรม"
            description="กิจกรรมตลอด 24 ชั่วโมง"
          />
          <PromotionCard
            image="https://cdn.zabbet.com/0VNF/lobby_settings/b2082a32-6963-4333-ad94-b662c8e8647f.png"
            title="ข่าวสาร"
            description="ข่าวสารที่คุณไม่ควรพลาด"
          />
        </div>
        <div
          class="w-full mt-8 p-[2px] rounded-xl"
          style="
            background: linear-gradient(
              to right,
              rgba(18, 255, 32, 0.5),
              rgba(0, 0, 0, 0)
            );
          "
        >
          <div
            class="max-h-[543px] p-5 rounded-xl w-full relative"
            style="
              background: radial-gradient(
                57.87% 93.51% at 50% 6.49%,
                rgb(46, 117, 48) -60%,
                rgb(0, 0, 0) 40%
              );
              backdrop-filter: blue(10px);
            "
          >
            <div class="flex w-full justify-center items-center absolute top-0">
              <div
                class="lg:w-[919px] h-[71px] shrink-0"
                style="
                  border-radius: 919px;
                  background: radial-gradient(
                    30% 50% at 50% 10%,
                    rgb(18, 255, 32) -90%,
                    rgba(7, 29, 70, 0) 100%
                  );
                "
              ></div>
            </div>
            <div class="h-[40px] relative w-full overflow-hidden mb-5">
              <GreenToDarkGradientContainer
                image="https://alpha7s.online/images/home/star.png"
                text="ไฮไลท์"
              >
              </GreenToDarkGradientContainer>
            </div>
            <div class="flex items-start h-[439px] gap-8">
              <div class="w-[30%] xl:block hidden h-full">
                <Swiper
                  class="h-full"
                  :modules="modules"
                  :navigation="false"
                  :pagination="paginationConfig"
                >
                  <swiper-slide>
                    <img
                      class="w-full h-full rounded-md"
                      src="https://cdn.zabbet.com/0VNF/highlight/1733901790670-b39933e6-c31a-4650-99ef-dcf0024d341c.webp"
                      alt=""
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      class="w-full h-full rounded-md"
                      src="https://cdn.zabbet.com/0VNF/highlight/1733902456125-9f7095d2-0929-4ddb-80f9-b7c59b295404.webp"
                      alt=""
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      class="w-full h-full rounded-md"
                      src="https://cdn.zabbet.com/0VNF/highlight/1733901792997-d084c9d8-3a23-4d40-9c3d-18ecdac9fea5.webp"
                      alt=""
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      class="w-full h-full rounded-md"
                      src="https://cdn.zabbet.com/0VNF/highlight/1733901790670-b39933e6-c31a-4650-99ef-dcf0024d341c.webp"
                      alt=""
                    />
                  </swiper-slide>
                </Swiper>
              </div>
              <div class="xl:w-[70%] w-full">
                <div class="grid grid-cols-4 gap-2">
                  <GameCardWithNumber
                    image="https://cdn.zabbet.com/games/1737006098341-03501b47-3887-4b07-aeac-57f9abb6c1c0.jpeg"
                    name="QUEEN OF INCA"
                    is-hot="true"
                    is-new="true"
                    game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                    :number="One"
                  />
                  <GameCardWithNumber
                    image="https://cdn.zabbet.com/games/1740548980936-69a8f2cf-d52e-4280-a17f-afa6ac8fd963.jpeg"
                    name="QUEEN OF INCA"
                    is-hot="true"
                    is-new="true"
                    game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                    :number="Tow"
                  />
                  <GameCardWithNumber
                    image="https://cdn.zabbet.com/games/1740451909381-106b6110-23dc-4f17-93d9-e523c2609a49.jpeg"
                    name="QUEEN OF INCA"
                    is-hot="true"
                    is-new="true"
                    game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                    :number="Three"
                  />
                  <GameCardWithNumber
                    image="https://cdn.zabbet.com/games/1740549258636-11c2ada2-b093-459c-af42-2bf6a489872c.jpeg"
                    name="QUEEN OF INCA"
                    is-hot="true"
                    is-new="true"
                    game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                    :number="Four"
                  />
                  <GameCardWithNumber
                    image="https://cdn.zabbet.com/games/1737006098341-03501b47-3887-4b07-aeac-57f9abb6c1c0.jpeg"
                    name="QUEEN OF INCA"
                    is-hot="true"
                    is-new="true"
                    game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                    :number="Five"
                  />
                  <GameCardWithNumber
                    image="https://cdn.zabbet.com/games/1737006098341-03501b47-3887-4b07-aeac-57f9abb6c1c0.jpeg"
                    name="QUEEN OF INCA"
                    is-hot="true"
                    is-new="true"
                    game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                    :number="Six"
                  />
                  <GameCardWithNumber
                    image="https://cdn.zabbet.com/games/1737006098341-03501b47-3887-4b07-aeac-57f9abb6c1c0.jpeg"
                    name="QUEEN OF INCA"
                    is-hot="true"
                    is-new="true"
                    game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                    :number="Seven"
                  />
                  <GameCardWithNumber
                    image="https://cdn.zabbet.com/games/1737006098341-03501b47-3887-4b07-aeac-57f9abb6c1c0.jpeg"
                    name="QUEEN OF INCA"
                    is-hot="true"
                    is-new="true"
                    game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                    :number="Eight"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-[30px]">
          <GreenToDarkGradientContainer
            image="https://alpha7s.online/images/home/iconreview.png"
            text="รีวิวจากสมาชิก"
          />
          <ReviewSlider class="mt-4" />
          <button
            class="w-[300px] h-[40px] border-[1px] mx-auto block mt-4 text-white text-sm font-bold rounded-lg border-primary bg-black"
          >
            View All
          </button>
        </div>
        <div class="mt-[30px]">
          <GreenToDarkGradientContainer
            image="https://cdn.zabbet.com/0VNF/highlight/1733772517644-6d543a67-fa80-4940-bff1-f54cfbeb9020.gif"
            text="TOP 10 เกมส์ใหม่มาแรง"
          />
          <div class="mt-[30px]">
            <Swiper
              slides-per-view="6.5"
              space-between="20"
              :modules="[]"
              :centered-slides="false"
              :navigation="false"
              :loop="false"
              :breakpoints="GameCardsSwiperBreakPoints"
            >
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/1737006098341-03501b47-3887-4b07-aeac-57f9abb6c1c0.jpeg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="One"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/1740548980936-69a8f2cf-d52e-4280-a17f-afa6ac8fd963.jpeg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Tow"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/1740451909381-106b6110-23dc-4f17-93d9-e523c2609a49.jpeg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Three"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/1740549258636-11c2ada2-b093-459c-af42-2bf6a489872c.jpeg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Four"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/1737006098341-03501b47-3887-4b07-aeac-57f9abb6c1c0.jpeg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Five"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/1737006098341-03501b47-3887-4b07-aeac-57f9abb6c1c0.jpeg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Six"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/1737006098341-03501b47-3887-4b07-aeac-57f9abb6c1c0.jpeg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Seven"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/1737006098341-03501b47-3887-4b07-aeac-57f9abb6c1c0.jpeg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Eight"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/1740548980936-69a8f2cf-d52e-4280-a17f-afa6ac8fd963.jpeg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Nine"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/1740451909381-106b6110-23dc-4f17-93d9-e523c2609a49.jpeg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  number-class="bottom-22"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Ten"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div class="mt-[30px]">
          <GreenToDarkGradientContainer
            image="https://cdn.zabbet.com/0VNF/highlight/1733772517644-6d543a67-fa80-4940-bff1-f54cfbeb9020.gif"
            text="TOP 10 เกมส์ฮิตค่าย PG Soft"
          />
          <div class="mt-[30px]">
            <Swiper
              slides-per-view="6.5"
              space-between="20"
              :modules="[]"
              :centered-slides="false"
              :navigation="false"
              :loop="false"
              :breakpoints="GameCardsSwiperBreakPoints"
            >
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/1737006098341-03501b47-3887-4b07-aeac-57f9abb6c1c0.jpeg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="One"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/1740548980936-69a8f2cf-d52e-4280-a17f-afa6ac8fd963.jpeg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Tow"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/1740451909381-106b6110-23dc-4f17-93d9-e523c2609a49.jpeg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Three"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/1740549258636-11c2ada2-b093-459c-af42-2bf6a489872c.jpeg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Four"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/1737006098341-03501b47-3887-4b07-aeac-57f9abb6c1c0.jpeg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Five"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/1737006098341-03501b47-3887-4b07-aeac-57f9abb6c1c0.jpeg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Six"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/1737006098341-03501b47-3887-4b07-aeac-57f9abb6c1c0.jpeg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Seven"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/1737006098341-03501b47-3887-4b07-aeac-57f9abb6c1c0.jpeg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Eight"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/1740548980936-69a8f2cf-d52e-4280-a17f-afa6ac8fd963.jpeg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Nine"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/1740451909381-106b6110-23dc-4f17-93d9-e523c2609a49.jpeg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  number-class="bottom-22"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Ten"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div class="mt-[30px]">
          <GreenToDarkGradientContainer
            image="https://cdn.zabbet.com/0VNF/highlight/1733772517644-6d543a67-fa80-4940-bff1-f54cfbeb9020.gif"
            text="TOP 10 บาคาร่าสด จากต่างประเทศ"
          />
          <div class="mt-[30px]">
            <Swiper
              slides-per-view="6.5"
              space-between="20"
              :modules="[]"
              :centered-slides="false"
              :navigation="false"
              :loop="false"
              :breakpoints="GameCardsSwiperBreakPoints"
            >
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/providers/set/1_1_v/sexyd.png"
                  name="QUEEN OF INCA"
                  :bg-transparent="true"
                  is-hot="true"
                  is-new="true"
                  :number="One"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/providers/set/1_1_v/sag.png"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  :bg-transparent="true"
                  is-new="true"
                  :number="Tow"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/providers/set/1_1_v/evt.png"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  :bg-transparent="true"
                  :number="Three"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/providers/set/1_1_v/ebgcasino.png"
                  name="QUEEN OF INCA"
                  :bg-transparent="true"
                  is-hot="true"
                  is-new="true"
                  :number="Four"
                  :isMaintenance="true"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/providers/set/1_1_v/biggamecasino.png"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  :bg-transparent="true"
                  is-new="true"
                  :number="Five"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/providers/set/1_1_v/dg.png"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  :bg-transparent="true"
                  :number="Six"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/providers/set/1_1_v/ppcasino.png"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  :bg-transparent="true"
                  :number="Seven"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/providers/set/1_1_v/wmc.png"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  :bg-transparent="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Eight"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/providers/set/1_1_v/ab.png"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  :bg-transparent="true"
                  is-new="true"
                  :number="Nine"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/KM/EN/Blackjack.jpg"
                  name="QUEEN OF INCA"
                  :bg-transparent="true"
                  is-hot="true"
                  number-class="bottom-22"
                  is-new="true"
                  :number="Ten"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div class="mt-[30px]">
          <GreenToDarkGradientContainer
            image="https://cdn.zabbet.com/0VNF/highlight/1733772517644-6d543a67-fa80-4940-bff1-f54cfbeb9020.gif"
            text="ออนไลน์มากที่สุดในขณะนี้"
          />
          <div class="mt-[30px]">
            <Swiper
              slides-per-view="7"
              space-between="20"
              :modules="[]"
              :centered-slides="false"
              :navigation="false"
              :loop="false"
              :breakpoints="GameCardsSwiperBreakPoints"
            >
              <SwiperSlide>
                <GameCardWithNumberCounter
                  image="https://cdn.zabbet.com/providers/set/1_1_v/jl.png"
                  :number="24456"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumberCounter
                  image="https://cdn.zabbet.com/providers/set/1_1_v/pp.png"
                  :number="211456"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumberCounter
                  image="https://cdn.zabbet.com/providers/set/1_1_v/bng.png"
                  :number="43456"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumberCounter
                  image="https://cdn.zabbet.com/providers/set/1_1_v/ygr.png"
                  :number="24456"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumberCounter
                  image="https://cdn.zabbet.com/providers/set/1_1_v/kingm.png"
                  :number="212456"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumberCounter
                  image="https://cdn.zabbet.com/providers/set/1_1_v/sexyd.png"
                  :number="84456"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumberCounter
                  image="https://cdn.zabbet.com/providers/set/1_1_v/lali.png"
                  :number="234456"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumberCounter
                  image="https://cdn.zabbet.com/providers/set/1_1_v/jl.png"
                  :number="24456"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div class="mt-[30px]">
          <GreenToDarkGradientContainer
            image="https://cdn.zabbet.com/0VNF/highlight/1736104291853-92a60a5d-1fb7-4cd9-a642-eced7a45eb7c.png"
            text="ถ่ายทอดสดกีฬา"
          />
          <div
            class="relative mt-[30px] w-full flex justify-center items-center rounded-xl p-[2px] overflow-hidden"
            style="
              background: linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.263) -6.21%,
                rgba(18, 255, 32, 0.44) 4.41%,
                rgba(0, 0, 0, 0.263) 74.51%,
                rgba(0, 0, 0, 0) 100%
              );
            "
          >
            <div
              class="w-full h-[200px] rounded-xl"
              style="
                background: linear-gradient(
                    0deg,
                    rgba(0, 255, 51, 0.38) 0%,
                    rgba(0, 255, 51, 0.38) 100%
                  ),
                  linear-gradient(
                    0deg,
                    rgba(0, 0, 0, 0.44) 0%,
                    rgba(0, 0, 0, 0.44) 100%
                  ),
                  url('https://alpha7s.online/images/live/bg_live2.jpeg') 50%
                    center / cover no-repeat lightgray;
              "
            ></div>
            <div
              class="absolute -top-[1%] w-[740px] h-[600px]"
              style="
                background: radial-gradient(
                  40% 40% at 50% 50%,
                  rgb(18, 255, 32) 0%,
                  rgba(0, 0, 0, 0) 100%
                );
              "
            ></div>
            <div
              class="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-6"
            >
              <div
                class="w-[54px] h-[54px] rounded-full flex justify-center items-center"
                style="
                  background-color: rgba(0, 0, 0, 0.42);
                  border: 2px solid rgb(247, 247, 248);
                "
              >
                <img
                  loading="lazy"
                  class="absolute"
                  width="80"
                  height="80"
                  src="https://alpha7s.online/images/live/sport_type.gif"
                />
              </div>
              <div class="text-[30px] text-white font-semibold leading-[39px">
                There is currently no live broadcast.
              </div>
              <div
                class="flex justify-center items-center gap-2 h-[36px] bg-[#FF0402] rounded-md cursor-pointer px-[17px] text-nowrap"
              >
                <img
                  loading="lazy"
                  src="https://alpha7s.online/images/home/white_live.svg"
                />
                <div
                  class="text-sm text-white font-semibold leading-[18.2px] text-nowrap"
                >
                  See the live match schedule
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-[30px]">
          <GreenToDarkGradientContainer
            image="https://cdn.zabbet.com/0VNF/highlight/1733801504046-38030e85-7561-4eaa-834c-0d9fb0de25e2.gif"
            text="TOP 5 กีฬาดัง ค่านํ้าดี!"
          />
          <div class="mt-[30px]">
            <Swiper
              slides-per-view="7"
              space-between="20"
              :modules="[]"
              :centered-slides="false"
              :navigation="false"
              :loop="false"
              :breakpoints="GameCardsSwiperBreakPoints"
            >
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/providers/set/1_1_v/lali.png"
                  name="QUEEN OF INCA"
                  :bg-transparent="true"
                  :is-hot="true"
                  :is-new="false"
                  :number="One"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/providers/set/1_1_v/muay.png"
                  name="QUEEN OF INCA"
                  :bg-transparent="true"
                  :is-hot="true"
                  :is-new="false"
                  :number="Tow"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/providers/set/1_1_v/sbo.png"
                  name="QUEEN OF INCA"
                  :bg-transparent="true"
                  :is-hot="true"
                  :is-new="false"
                  :number="Three"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/providers/set/1_1_v/bcs.png"
                  name="QUEEN OF INCA"
                  :bg-transparent="true"
                  :is-hot="true"
                  :is-new="false"
                  :number="Four"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/providers/set/1_1_v/saba.png"
                  name="QUEEN OF INCA"
                  :bg-transparent="true"
                  :is-hot="true"
                  :is-new="false"
                  :number="Five"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div class="mt-[30px]">
          <GreenToDarkGradientContainer
            image="https://cdn.zabbet.com/0VNF/highlight/1733772517644-6d543a67-fa80-4940-bff1-f54cfbeb9020.gif"
            text="TOP 8  เกมส์ไทยพื้นบ้าน ยอดนิยม!"
          />
          <div class="mt-[30px]">
            <Swiper
              slides-per-view="7"
              space-between="20"
              :modules="[]"
              :centered-slides="false"
              :navigation="false"
              :loop="false"
              :breakpoints="GameCardsSwiperBreakPoints"
            >
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/KM/EN/Sicbo.jpg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="One"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/KM/EN/Pai_Kang.jpg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Tow"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/KM/EN/Thai_Hi_Lo_2.jpg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Three"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/KM/EN/Fish_Prawn_Crab_2.jpg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Four"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/KM/EN/Coin_Toss.jpg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Five"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/KM/EN/Kingmaker_Pok_Deng.jpg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Six"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/KM/EN/Blackjack.jpg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Seven"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/games/KM/EN/7_Up_7_Down.jpg"
                  name="QUEEN OF INCA"
                  is-hot="true"
                  is-new="true"
                  game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/fachai.png"
                  :number="Eight"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div class="mt-[30px]">
          <GreenToDarkGradientContainer
            image="https://cdn.zabbet.com/0VNF/highlight/1735852948840-f8b3c328-b900-4430-8595-5c1d0e6df273.png"
            text="ค่ายหวย อันดับ 1"
          />
          <div class="mt-[20px]">
            <Swiper
              slides-per-view="7"
              space-between="20"
              :modules="[]"
              :centered-slides="false"
              :navigation="false"
              :loop="false"
              :breakpoints="GameCardsSwiperBreakPoints"
            >
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/providers/set/1_1_v/lotmw.png"
                  name="QUEEN OF INCA"
                  :bg-transparent="true"
                  :is-hot="true"
                  :is-new="false"
                  :number="One"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GameCardWithNumber
                  image="https://cdn.zabbet.com/providers/set/1_1_v/dac.png"
                  name="QUEEN OF INCA"
                  :bg-transparent="true"
                  :is-hot="true"
                  :is-new="false"
                  :number="Tow"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div class="mt-[30px]">
          <GreenToDarkGradientContainer
            image="https://alpha7s.online/images/home/faq1.png"
            text="คู่มือนักลงทุน"
          />
          <div class="mt-[30px] flex flex-col">
            <Accordion title="ฝากเงินแบบ โอนผ่านธนาคาร">
              <div
                class="p-4 text-white rounded-b-[4px] text-[14px]"
                style="
                  background: rgb(0, 0, 0);
                  border-width: 0px 1px 1px;
                  border-top-style: initial;
                  border-right-style: solid;
                  border-bottom-style: solid;
                  border-left-style: solid;
                  border-top-color: initial;
                  border-right-color: rgb(0, 0, 0);
                  border-bottom-color: rgb(0, 0, 0);
                  border-left-color: rgb(0, 0, 0);
                  border-image: initial;
                "
              >
                <div>
                  <div>
                    <p>
                      <span
                        style="
                          background-color: transparent;
                          color: hsl(0, 0%, 100%);
                        "
                        >ไปที่เมนู</span
                      ><span
                        style="background-color: transparent; color: #000000"
                        ><strong> </strong></span
                      ><span
                        style="background-color: transparent; color: #ff0000"
                        ><strong>“ฝาก”</strong></span
                      ><span
                        style="background-color: transparent; color: #000000"
                      >
                      </span
                      ><span
                        style="
                          background-color: transparent;
                          color: hsl(0, 0%, 100%);
                        "
                        >มุมซ้ายล่าง รูปสัญลักษณ์กระเป๋าเงิน</span
                      >
                    </p>
                  </div>
                </div>
                <div class="mt-2">
                  <img
                    src="https://cdn.zabbet.com/0VNF/user-guides/1725938593250-89ca8ca6-1262-4788-b0a7-9a2a311e91ed.png"
                    alt=""
                    class="rounded-[8px] mt-2 border-[1px]"
                    style="
                      object-fit: cover;
                      border-color: rgba(255, 255, 255, 0.2);
                    "
                  />
                </div>
                <div class="css-1bsqa3n">
                  <div>
                    <p class="mt-4">
                      <span
                        style="
                          background-color: transparent;
                          color: hsl(0, 0%, 100%);
                        "
                        >เลือกวิธีฝากเงิน เลือก</span
                      ><span
                        style="background-color: transparent; color: #000000"
                        ><strong> </strong></span
                      ><span
                        style="background-color: transparent; color: #ff0000"
                        ><strong>“โอนเงินผ่านธนาคาร”</strong></span
                      >
                    </p>
                  </div>
                </div>
                <div class="css-1bsqa3n">
                  <img
                    src="https://cdn.zabbet.com/0VNF/user-guides/1725938601567-c551d627-bf2d-4b8b-8b26-cc504e9fa071.png"
                    alt=""
                    class="rounded-[8px] mt-2 border-[1px]"
                    style="
                      object-fit: cover;
                      border-color: rgba(255, 255, 255, 0.2);
                    "
                  />
                </div>
                <div class="css-1bsqa3n">
                  <div class="mt-4">
                    <p>
                      <span
                        style="background-color: transparent; color: #ff0000"
                        ><strong>กรอกจำนวนที่ต้องการฝาก</strong></span
                      ><span
                        style="background-color: transparent; color: #000000"
                      >
                      </span
                      ><span
                        style="
                          background-color: transparent;
                          color: hsl(0, 0%, 100%);
                        "
                        >(ขั้นต่ำ : 20 / สูงสุด : 10,000,000)</span
                      >
                    </p>
                  </div>
                </div>
                <div class="css-1bsqa3n">
                  <img
                    src="https://cdn.zabbet.com/0VNF/user-guides/1725938469074-c80bae14-b9ec-4a60-92cb-f765a652110d.png"
                    alt=""
                    class="rounded-[8px] mt-2 border-[1px]"
                    style="
                      object-fit: cover;
                      border-color: rgba(255, 255, 255, 0.2);
                    "
                  />
                </div>
                <div class="mt-4">
                  <div class="dangerouslySetInnerHTML">
                    <p>
                      <span
                        style="
                          background-color: transparent;
                          color: hsl(0, 0%, 100%);
                        "
                        >กด</span
                      ><span
                        style="background-color: transparent; color: #000000"
                      >
                      </span
                      ><span
                        style="background-color: transparent; color: #ff0000"
                        ><strong>ยืนยัน</strong></span
                      ><span
                        style="
                          background-color: transparent;
                          color: hsl(0, 0%, 100%);
                        "
                      >
                        ยอดที่ต้องการฝาก</span
                      >
                    </p>
                  </div>
                </div>
                <div class="css-1bsqa3n">
                  <img
                    src="https://cdn.zabbet.com/0VNF/user-guides/1725938505132-615e78b4-68f9-40e5-b3f9-784eaaaaec59.png"
                    alt=""
                    class="rounded-[8px] mt-2 border-[1px]"
                    style="
                      object-fit: cover;
                      border-color: rgba(255, 255, 255, 0.2);
                    "
                  />
                </div>
                <div class="mt-4">
                  <div class="">
                    <ul>
                      <li>
                        <span
                          style="
                            background-color: transparent;
                            color: hsl(0, 0%, 100%);
                          "
                          >หน้ารายละเอียดฝากเงิน จะแจ้ง</span
                        ><span
                          style="background-color: transparent; color: #ff0000"
                          ><strong>เลขบัญชีที่ต้องโอน</strong></span
                        ><span
                          style="background-color: transparent; color: #000000"
                        >
                        </span
                        ><span
                          style="
                            background-color: transparent;
                            color: hsl(0, 0%, 100%);
                          "
                          >สามารถ</span
                        ><span
                          style="background-color: transparent; color: #ff0000"
                          ><strong>คัดลอก</strong></span
                        ><span
                          style="
                            background-color: transparent;
                            color: hsl(0, 0%, 100%);
                          "
                          >ได้เลย</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="css-1bsqa3n">
                  <img
                    src="https://cdn.zabbet.com/0VNF/user-guides/1725938511168-d749953c-29d5-4be1-a06d-7d47a06fc0c9.png"
                    alt=""
                    class="rounded-[8px] mt-2 border-[1px]"
                    style="
                      object-fit: cover;
                      border-color: rgba(255, 255, 255, 0.2);
                    "
                  />
                </div>
                <div class="mt-4">
                  <div class="">
                    <ul>
                      <li>
                        <span
                          style="
                            background-color: transparent;
                            color: hsl(0, 0%, 100%);
                          "
                          >เมื่อทำรายการโอนผ่านแอปธนาคารแล้ว กด </span
                        ><span
                          style="background-color: transparent; color: #ff0000"
                          ><strong>ยืนยันการโอน</strong></span
                        ><span
                          style="background-color: transparent; color: #000000"
                        >
                        </span
                        ><span
                          style="
                            background-color: transparent;
                            color: hsl(0, 0%, 100%);
                          "
                          >ยอดเงินจะเข้าทันที</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="css-1bsqa3n">
                  <img
                    src="https://cdn.zabbet.com/0VNF/user-guides/1725938525565-b7e3cbf9-c9e2-4fa0-9747-50e6c409c996.png"
                    alt=""
                    class="rounded-[8px] mt-2 border-[1px]"
                    style="
                      object-fit: cover;
                      border-color: rgba(255, 255, 255, 0.2);
                    "
                  />
                </div>
                <div class="mt-4">
                  <div class="">
                    <ul>
                      <li>
                        <span
                          style="
                            background-color: transparent;
                            color: hsl(0, 0%, 100%);
                          "
                          >รายการฝาก</span
                        ><span
                          style="background-color: transparent; color: #000000"
                        >
                        </span
                        ><span
                          style="background-color: transparent; color: #38761d"
                          ><strong>สำเร็จ </strong></span
                        ><span
                          style="
                            background-color: transparent;
                            color: hsl(0, 0%, 100%);
                          "
                          >ขอให้เพลิดเพลินกับทุกความสนุกครบวงจร</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="css-1bsqa3n">
                  <img
                    src="https://cdn.zabbet.com/0VNF/user-guides/1725938578792-73a9ac80-8db9-4a54-ba96-99d58df7cc92.png"
                    alt=""
                    class="rounded-[8px] mt-2 border-[1px]"
                    style="
                      object-fit: cover;
                      border-color: rgba(255, 255, 255, 0.2);
                    "
                  />
                </div>
              </div>
            </Accordion>
            <Accordion title="ฝากเงินแบบ โอนผ่านธนาคาร">
              <div
                class="p-4 text-white rounded-b-[4px] text-[14px]"
                style="
                  background: rgb(0, 0, 0);
                  border-width: 0px 1px 1px;
                  border-top-style: initial;
                  border-right-style: solid;
                  border-bottom-style: solid;
                  border-left-style: solid;
                  border-top-color: initial;
                  border-right-color: rgb(0, 0, 0);
                  border-bottom-color: rgb(0, 0, 0);
                  border-left-color: rgb(0, 0, 0);
                  border-image: initial;
                "
              >
                <div>
                  <div>
                    <p>
                      <span
                        style="
                          background-color: transparent;
                          color: hsl(0, 0%, 100%);
                        "
                        >ไปที่เมนู</span
                      ><span
                        style="background-color: transparent; color: #000000"
                        ><strong> </strong></span
                      ><span
                        style="background-color: transparent; color: #ff0000"
                        ><strong>“ฝาก”</strong></span
                      ><span
                        style="background-color: transparent; color: #000000"
                      >
                      </span
                      ><span
                        style="
                          background-color: transparent;
                          color: hsl(0, 0%, 100%);
                        "
                        >มุมซ้ายล่าง รูปสัญลักษณ์กระเป๋าเงิน</span
                      >
                    </p>
                  </div>
                </div>
                <div class="mt-2">
                  <img
                    src="https://cdn.zabbet.com/0VNF/user-guides/1725938593250-89ca8ca6-1262-4788-b0a7-9a2a311e91ed.png"
                    alt=""
                    class="rounded-[8px] mt-2 border-[1px]"
                    style="
                      object-fit: cover;
                      border-color: rgba(255, 255, 255, 0.2);
                    "
                  />
                </div>
                <div class="css-1bsqa3n">
                  <div>
                    <p class="mt-4">
                      <span
                        style="
                          background-color: transparent;
                          color: hsl(0, 0%, 100%);
                        "
                        >เลือกวิธีฝากเงิน เลือก</span
                      ><span
                        style="background-color: transparent; color: #000000"
                        ><strong> </strong></span
                      ><span
                        style="background-color: transparent; color: #ff0000"
                        ><strong>“โอนเงินผ่านธนาคาร”</strong></span
                      >
                    </p>
                  </div>
                </div>
                <div class="css-1bsqa3n">
                  <img
                    src="https://cdn.zabbet.com/0VNF/user-guides/1725938601567-c551d627-bf2d-4b8b-8b26-cc504e9fa071.png"
                    alt=""
                    class="rounded-[8px] mt-2 border-[1px]"
                    style="
                      object-fit: cover;
                      border-color: rgba(255, 255, 255, 0.2);
                    "
                  />
                </div>
                <div class="css-1bsqa3n">
                  <div class="mt-4">
                    <p>
                      <span
                        style="background-color: transparent; color: #ff0000"
                        ><strong>กรอกจำนวนที่ต้องการฝาก</strong></span
                      ><span
                        style="background-color: transparent; color: #000000"
                      >
                      </span
                      ><span
                        style="
                          background-color: transparent;
                          color: hsl(0, 0%, 100%);
                        "
                        >(ขั้นต่ำ : 20 / สูงสุด : 10,000,000)</span
                      >
                    </p>
                  </div>
                </div>
                <div class="css-1bsqa3n">
                  <img
                    src="https://cdn.zabbet.com/0VNF/user-guides/1725938469074-c80bae14-b9ec-4a60-92cb-f765a652110d.png"
                    alt=""
                    class="rounded-[8px] mt-2 border-[1px]"
                    style="
                      object-fit: cover;
                      border-color: rgba(255, 255, 255, 0.2);
                    "
                  />
                </div>
                <div class="mt-4">
                  <div class="dangerouslySetInnerHTML">
                    <p>
                      <span
                        style="
                          background-color: transparent;
                          color: hsl(0, 0%, 100%);
                        "
                        >กด</span
                      ><span
                        style="background-color: transparent; color: #000000"
                      >
                      </span
                      ><span
                        style="background-color: transparent; color: #ff0000"
                        ><strong>ยืนยัน</strong></span
                      ><span
                        style="
                          background-color: transparent;
                          color: hsl(0, 0%, 100%);
                        "
                      >
                        ยอดที่ต้องการฝาก</span
                      >
                    </p>
                  </div>
                </div>
                <div class="css-1bsqa3n">
                  <img
                    src="https://cdn.zabbet.com/0VNF/user-guides/1725938505132-615e78b4-68f9-40e5-b3f9-784eaaaaec59.png"
                    alt=""
                    class="rounded-[8px] mt-2 border-[1px]"
                    style="
                      object-fit: cover;
                      border-color: rgba(255, 255, 255, 0.2);
                    "
                  />
                </div>
                <div class="mt-4">
                  <div class="">
                    <ul>
                      <li>
                        <span
                          style="
                            background-color: transparent;
                            color: hsl(0, 0%, 100%);
                          "
                          >หน้ารายละเอียดฝากเงิน จะแจ้ง</span
                        ><span
                          style="background-color: transparent; color: #ff0000"
                          ><strong>เลขบัญชีที่ต้องโอน</strong></span
                        ><span
                          style="background-color: transparent; color: #000000"
                        >
                        </span
                        ><span
                          style="
                            background-color: transparent;
                            color: hsl(0, 0%, 100%);
                          "
                          >สามารถ</span
                        ><span
                          style="background-color: transparent; color: #ff0000"
                          ><strong>คัดลอก</strong></span
                        ><span
                          style="
                            background-color: transparent;
                            color: hsl(0, 0%, 100%);
                          "
                          >ได้เลย</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="css-1bsqa3n">
                  <img
                    src="https://cdn.zabbet.com/0VNF/user-guides/1725938511168-d749953c-29d5-4be1-a06d-7d47a06fc0c9.png"
                    alt=""
                    class="rounded-[8px] mt-2 border-[1px]"
                    style="
                      object-fit: cover;
                      border-color: rgba(255, 255, 255, 0.2);
                    "
                  />
                </div>
                <div class="mt-4">
                  <div class="">
                    <ul>
                      <li>
                        <span
                          style="
                            background-color: transparent;
                            color: hsl(0, 0%, 100%);
                          "
                          >เมื่อทำรายการโอนผ่านแอปธนาคารแล้ว กด </span
                        ><span
                          style="background-color: transparent; color: #ff0000"
                          ><strong>ยืนยันการโอน</strong></span
                        ><span
                          style="background-color: transparent; color: #000000"
                        >
                        </span
                        ><span
                          style="
                            background-color: transparent;
                            color: hsl(0, 0%, 100%);
                          "
                          >ยอดเงินจะเข้าทันที</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="css-1bsqa3n">
                  <img
                    src="https://cdn.zabbet.com/0VNF/user-guides/1725938525565-b7e3cbf9-c9e2-4fa0-9747-50e6c409c996.png"
                    alt=""
                    class="rounded-[8px] mt-2 border-[1px]"
                    style="
                      object-fit: cover;
                      border-color: rgba(255, 255, 255, 0.2);
                    "
                  />
                </div>
                <div class="mt-4">
                  <div class="">
                    <ul>
                      <li>
                        <span
                          style="
                            background-color: transparent;
                            color: hsl(0, 0%, 100%);
                          "
                          >รายการฝาก</span
                        ><span
                          style="background-color: transparent; color: #000000"
                        >
                        </span
                        ><span
                          style="background-color: transparent; color: #38761d"
                          ><strong>สำเร็จ </strong></span
                        ><span
                          style="
                            background-color: transparent;
                            color: hsl(0, 0%, 100%);
                          "
                          >ขอให้เพลิดเพลินกับทุกความสนุกครบวงจร</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="css-1bsqa3n">
                  <img
                    src="https://cdn.zabbet.com/0VNF/user-guides/1725938578792-73a9ac80-8db9-4a54-ba96-99d58df7cc92.png"
                    alt=""
                    class="rounded-[8px] mt-2 border-[1px]"
                    style="
                      object-fit: cover;
                      border-color: rgba(255, 255, 255, 0.2);
                    "
                  />
                </div>
              </div>
            </Accordion>
            <Accordion title="ฝากเงินแบบ โอนผ่านธนาคาร">
              <div
                class="p-4 text-white rounded-b-[4px] text-[14px]"
                style="
                  background: rgb(0, 0, 0);
                  border-width: 0px 1px 1px;
                  border-top-style: initial;
                  border-right-style: solid;
                  border-bottom-style: solid;
                  border-left-style: solid;
                  border-top-color: initial;
                  border-right-color: rgb(0, 0, 0);
                  border-bottom-color: rgb(0, 0, 0);
                  border-left-color: rgb(0, 0, 0);
                  border-image: initial;
                "
              >
                <div>
                  <div>
                    <p>
                      <span
                        style="
                          background-color: transparent;
                          color: hsl(0, 0%, 100%);
                        "
                        >ไปที่เมนู</span
                      ><span
                        style="background-color: transparent; color: #000000"
                        ><strong> </strong></span
                      ><span
                        style="background-color: transparent; color: #ff0000"
                        ><strong>“ฝาก”</strong></span
                      ><span
                        style="background-color: transparent; color: #000000"
                      >
                      </span
                      ><span
                        style="
                          background-color: transparent;
                          color: hsl(0, 0%, 100%);
                        "
                        >มุมซ้ายล่าง รูปสัญลักษณ์กระเป๋าเงิน</span
                      >
                    </p>
                  </div>
                </div>
                <div class="mt-2">
                  <img
                    src="https://cdn.zabbet.com/0VNF/user-guides/1725938593250-89ca8ca6-1262-4788-b0a7-9a2a311e91ed.png"
                    alt=""
                    class="rounded-[8px] mt-2 border-[1px]"
                    style="
                      object-fit: cover;
                      border-color: rgba(255, 255, 255, 0.2);
                    "
                  />
                </div>
                <div class="css-1bsqa3n">
                  <div>
                    <p class="mt-4">
                      <span
                        style="
                          background-color: transparent;
                          color: hsl(0, 0%, 100%);
                        "
                        >เลือกวิธีฝากเงิน เลือก</span
                      ><span
                        style="background-color: transparent; color: #000000"
                        ><strong> </strong></span
                      ><span
                        style="background-color: transparent; color: #ff0000"
                        ><strong>“โอนเงินผ่านธนาคาร”</strong></span
                      >
                    </p>
                  </div>
                </div>
                <div class="css-1bsqa3n">
                  <img
                    src="https://cdn.zabbet.com/0VNF/user-guides/1725938601567-c551d627-bf2d-4b8b-8b26-cc504e9fa071.png"
                    alt=""
                    class="rounded-[8px] mt-2 border-[1px]"
                    style="
                      object-fit: cover;
                      border-color: rgba(255, 255, 255, 0.2);
                    "
                  />
                </div>
                <div class="css-1bsqa3n">
                  <div class="mt-4">
                    <p>
                      <span
                        style="background-color: transparent; color: #ff0000"
                        ><strong>กรอกจำนวนที่ต้องการฝาก</strong></span
                      ><span
                        style="background-color: transparent; color: #000000"
                      >
                      </span
                      ><span
                        style="
                          background-color: transparent;
                          color: hsl(0, 0%, 100%);
                        "
                        >(ขั้นต่ำ : 20 / สูงสุด : 10,000,000)</span
                      >
                    </p>
                  </div>
                </div>
                <div class="css-1bsqa3n">
                  <img
                    src="https://cdn.zabbet.com/0VNF/user-guides/1725938469074-c80bae14-b9ec-4a60-92cb-f765a652110d.png"
                    alt=""
                    class="rounded-[8px] mt-2 border-[1px]"
                    style="
                      object-fit: cover;
                      border-color: rgba(255, 255, 255, 0.2);
                    "
                  />
                </div>
                <div class="mt-4">
                  <div class="dangerouslySetInnerHTML">
                    <p>
                      <span
                        style="
                          background-color: transparent;
                          color: hsl(0, 0%, 100%);
                        "
                        >กด</span
                      ><span
                        style="background-color: transparent; color: #000000"
                      >
                      </span
                      ><span
                        style="background-color: transparent; color: #ff0000"
                        ><strong>ยืนยัน</strong></span
                      ><span
                        style="
                          background-color: transparent;
                          color: hsl(0, 0%, 100%);
                        "
                      >
                        ยอดที่ต้องการฝาก</span
                      >
                    </p>
                  </div>
                </div>
                <div class="css-1bsqa3n">
                  <img
                    src="https://cdn.zabbet.com/0VNF/user-guides/1725938505132-615e78b4-68f9-40e5-b3f9-784eaaaaec59.png"
                    alt=""
                    class="rounded-[8px] mt-2 border-[1px]"
                    style="
                      object-fit: cover;
                      border-color: rgba(255, 255, 255, 0.2);
                    "
                  />
                </div>
                <div class="mt-4">
                  <div class="">
                    <ul>
                      <li>
                        <span
                          style="
                            background-color: transparent;
                            color: hsl(0, 0%, 100%);
                          "
                          >หน้ารายละเอียดฝากเงิน จะแจ้ง</span
                        ><span
                          style="background-color: transparent; color: #ff0000"
                          ><strong>เลขบัญชีที่ต้องโอน</strong></span
                        ><span
                          style="background-color: transparent; color: #000000"
                        >
                        </span
                        ><span
                          style="
                            background-color: transparent;
                            color: hsl(0, 0%, 100%);
                          "
                          >สามารถ</span
                        ><span
                          style="background-color: transparent; color: #ff0000"
                          ><strong>คัดลอก</strong></span
                        ><span
                          style="
                            background-color: transparent;
                            color: hsl(0, 0%, 100%);
                          "
                          >ได้เลย</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="css-1bsqa3n">
                  <img
                    src="https://cdn.zabbet.com/0VNF/user-guides/1725938511168-d749953c-29d5-4be1-a06d-7d47a06fc0c9.png"
                    alt=""
                    class="rounded-[8px] mt-2 border-[1px]"
                    style="
                      object-fit: cover;
                      border-color: rgba(255, 255, 255, 0.2);
                    "
                  />
                </div>
                <div class="mt-4">
                  <div class="">
                    <ul>
                      <li>
                        <span
                          style="
                            background-color: transparent;
                            color: hsl(0, 0%, 100%);
                          "
                          >เมื่อทำรายการโอนผ่านแอปธนาคารแล้ว กด </span
                        ><span
                          style="background-color: transparent; color: #ff0000"
                          ><strong>ยืนยันการโอน</strong></span
                        ><span
                          style="background-color: transparent; color: #000000"
                        >
                        </span
                        ><span
                          style="
                            background-color: transparent;
                            color: hsl(0, 0%, 100%);
                          "
                          >ยอดเงินจะเข้าทันที</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="css-1bsqa3n">
                  <img
                    src="https://cdn.zabbet.com/0VNF/user-guides/1725938525565-b7e3cbf9-c9e2-4fa0-9747-50e6c409c996.png"
                    alt=""
                    class="rounded-[8px] mt-2 border-[1px]"
                    style="
                      object-fit: cover;
                      border-color: rgba(255, 255, 255, 0.2);
                    "
                  />
                </div>
                <div class="mt-4">
                  <div class="">
                    <ul>
                      <li>
                        <span
                          style="
                            background-color: transparent;
                            color: hsl(0, 0%, 100%);
                          "
                          >รายการฝาก</span
                        ><span
                          style="background-color: transparent; color: #000000"
                        >
                        </span
                        ><span
                          style="background-color: transparent; color: #38761d"
                          ><strong>สำเร็จ </strong></span
                        ><span
                          style="
                            background-color: transparent;
                            color: hsl(0, 0%, 100%);
                          "
                          >ขอให้เพลิดเพลินกับทุกความสนุกครบวงจร</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="css-1bsqa3n">
                  <img
                    src="https://cdn.zabbet.com/0VNF/user-guides/1725938578792-73a9ac80-8db9-4a54-ba96-99d58df7cc92.png"
                    alt=""
                    class="rounded-[8px] mt-2 border-[1px]"
                    style="
                      object-fit: cover;
                      border-color: rgba(255, 255, 255, 0.2);
                    "
                  />
                </div>
              </div>
            </Accordion>
          </div>
          <button
            class="w-[300px] h-[40px] border-[1px] mx-auto block mt-4 text-white text-sm font-bold rounded-lg border-primary bg-black"
          >
            View All
          </button>
        </div>
      </div>
      <div class="w-[25%] lg:block hidden sticky h-fit top-[124px]">
        <div class="px-[10px] py-[12px] relative">
          <div
            class="absolute left-0 right-0 top-0 h-[150px]"
            style="
              background: radial-gradient(
                circle at 50% -30%,
                rgb(18, 255, 32) 0%,
                rgba(7, 29, 70, 0) 60%
              );
              border-top-right-radius: 25px;
              border-top-left-radius: 25px;
            "
          ></div>
          <div
            class="h-[30px] flex items-center gap-4 w-full relative overflow-hidden rounded-md pl-4"
          >
            <div
              class="absolute top-0 left-0 w-full h-[30px] opacity-[0.4]"
              style="
                background: linear-gradient(
                  90deg,
                  rgba(0, 0, 0, 0.6) -6.21%,
                  rgb(18, 255, 32) -4.41%,
                  rgba(0, 0, 0, 0.6) 83.01%
                );
              "
            ></div>
            <div
              class="absolute bottom-0 left-0 w-full h-[2px] opacity-[0.4]"
              style="
                background: linear-gradient(
                  90deg,
                  rgba(0, 0, 0, 0.6) -6.21%,
                  rgb(18, 255, 32) -4.41%,
                  rgba(0, 0, 0, 0.6) 83.01%
                );
              "
            ></div>
            <div class="flex items-center gap-4 relative z-[10]">
              <img
                class="w-[16px] h-[16px]"
                src="https://alpha7s.online/images/home/coin.png"
                alt=""
              />
              <p class="text-[14px] font-semibold text-white">
                Jackpot รางวัลชนะรวมเดือนนี้
              </p>
            </div>
          </div>
          <div class="relative mt-5">
            <div>
              <img
                class="w-full h-full"
                src="https://cdn.zabbet.com/0VNF/highlight/1748080772600-f01d7eb3-c25c-421a-9d9b-fa03ded4c250.gif"
                alt=""
              />
            </div>
            <div
              class="text-[27px] font-extrabold text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mt-1"
            >
              <span>49,041,057</span>
            </div>
          </div>
          <div
            class="h-[30px] flex items-center gap-4 w-full mt-3 relative overflow-hidden rounded-md pl-4"
          >
            <div
              class="absolute top-0 left-0 w-full h-[30px] opacity-[0.4]"
              style="
                background: linear-gradient(
                  90deg,
                  rgba(0, 0, 0, 0.6) -6.21%,
                  rgb(18, 255, 32) -4.41%,
                  rgba(0, 0, 0, 0.6) 83.01%
                );
              "
            ></div>
            <div
              class="absolute bottom-0 left-0 w-full h-[2px] opacity-[0.4]"
              style="
                background: linear-gradient(
                  90deg,
                  rgba(0, 0, 0, 0.6) -6.21%,
                  rgb(18, 255, 32) -4.41%,
                  rgba(0, 0, 0, 0.6) 83.01%
                );
              "
            ></div>
            <div class="flex items-center gap-3 relative z-[10]">
              <img
                src="https://alpha7s.online/images/home/leader-board.svg"
                alt=""
              />
              <p class="text-[14px] font-semibold text-white">กระดานผู้นำ</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                fill="none"
              >
                <path
                  fill="#12ff20"
                  d="M8.025 13.974h1.744V8.74H8.025v5.234Zm.872-6.978a.845.845 0 0 0 .622-.252.84.84 0 0 0 .25-.62.848.848 0 0 0-.25-.622.842.842 0 0 0-.622-.25.842.842 0 0 0-.621.25.848.848 0 0 0-.251.621c0 .247.083.454.251.622a.838.838 0 0 0 .621.25Zm0 11.34a8.49 8.49 0 0 1-3.402-.688 8.821 8.821 0 0 1-2.77-1.864 8.789 8.789 0 0 1-1.863-2.77 8.513 8.513 0 0 1-.688-3.401c0-1.207.229-2.34.688-3.402a8.828 8.828 0 0 1 1.864-2.77 8.796 8.796 0 0 1 2.77-1.864A8.497 8.497 0 0 1 8.896.89c1.206 0 2.34.229 3.402.687a8.795 8.795 0 0 1 2.77 1.864 8.84 8.84 0 0 1 1.864 2.77 8.442 8.442 0 0 1 .687 3.402 8.552 8.552 0 0 1-.688 3.401 8.749 8.749 0 0 1-1.864 2.77 8.86 8.86 0 0 1-2.769 1.865 8.45 8.45 0 0 1-3.402.686Zm0-1.745c1.948 0 3.598-.676 4.95-2.028 1.352-1.352 2.028-3.002 2.028-4.95 0-1.949-.676-3.599-2.028-4.95-1.352-1.353-3.002-2.029-4.95-2.029-1.948 0-3.598.676-4.95 2.028-1.352 1.352-2.028 3.002-2.028 4.95 0 1.949.676 3.599 2.028 4.95 1.352 1.353 3.002 2.029 4.95 2.029Z"
                ></path>
              </svg>
            </div>
          </div>
          <div class="mt-3">
            <table
              class="w-full text-[12px] text-white"
              style="background: rgb(0, 0, 0)"
            >
              <thead>
                <tr class="sticky top-0 z-1">
                  <th class="px-2 py-1 text-center">No.</th>
                  <th class="px-2 py-1 text-left">Game/Jackpot</th>
                  <th class="px-2 py-1 text-left"></th>
                  <th class="px-2 py-1 text-left"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="px-[20px] py-[7px]">
                  <td>
                    <div
                      class="bg-contain bg-no-repeat bg-center flex items-center justify-center text-shadow-lg"
                      style="
                        background-image: url('https://alpha7s.online/images/LeaderBoard/rank1.png');
                      "
                    >
                      <div
                        class="text-[12px] box-shadow: 0px 2px 6px 0px #000000;"
                        style="margin-top: 5px"
                      >
                        1
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="flex gap-2 py-1">
                      <img
                        class="w-[30px] rounded-md"
                        src="https://cdn.zabbet.com/games/1700029552066-1974f0ec-e51b-467b-a99e-e10e06cbde44.jpg"
                        alt=""
                      />
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="21"
                      viewBox="0 0 24 21"
                      fill="none"
                    >
                      <path
                        d="M2 3.77344C2 2.11658 3.34315 0.773438 5 0.773438H19C20.6569 0.773438 22 2.11658 22 3.77344V17.7734C22 19.4303 20.6569 20.7734 19 20.7734H5C3.34315 20.7734 2 19.4303 2 17.7734V3.77344Z"
                        fill="#000000"
                        fill-opacity="0.7"
                      ></path>
                      <g filter="url(#filter0_d_6809_29153)">
                        <path
                          d="M16 10.7734L10 14.2375L10 7.30934L16 10.7734Z"
                          fill="url(#paint0_linear_6809_29153)"
                        ></path>
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_6809_29153"
                          x="3.5"
                          y="0.808594"
                          width="19"
                          height="19.9297"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset></feOffset>
                          <feGaussianBlur stdDeviation="3.25"></feGaussianBlur>
                          <feComposite
                            in2="hardAlpha"
                            operator="out"
                          ></feComposite>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.00784314 0 0 0 0 0.470588 0 0 0 0 0.780392 0 0 0 1 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_6809_29153"
                          ></feBlend>
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_6809_29153"
                            result="shape"
                          ></feBlend>
                        </filter>
                        <linearGradient
                          id="paint0_linear_6809_29153"
                          x1="14.8008"
                          y1="6.77344"
                          x2="8.02396"
                          y2="5.52963"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#20ed00"></stop>
                          <stop offset="1" stop-color="#20ed00"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </td>
                </tr>
                <tr class="px-[20px] py-[7px]">
                  <td>
                    <div
                      class="bg-contain bg-no-repeat bg-center flex items-center justify-center text-shadow-lg"
                      style="
                        background-image: url('http://alpha7s.online/images/LeaderBoard/rank2.png');
                      "
                    >
                      <div
                        class="text-[12px] box-shadow: 0px 2px 6px 0px #000000;"
                        style="margin-top: 5px"
                      >
                        2
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="flex gap-2 py-1">
                      <img
                        class="w-[30px] rounded-md"
                        src="https://cdn.zabbet.com/games/1741166271145-aedb0e71-feb3-4fc0-8bdc-93d802aad6af.jpeg"
                        alt=""
                      />
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="21"
                      viewBox="0 0 24 21"
                      fill="none"
                    >
                      <path
                        d="M2 3.77344C2 2.11658 3.34315 0.773438 5 0.773438H19C20.6569 0.773438 22 2.11658 22 3.77344V17.7734C22 19.4303 20.6569 20.7734 19 20.7734H5C3.34315 20.7734 2 19.4303 2 17.7734V3.77344Z"
                        fill="#000000"
                        fill-opacity="0.7"
                      ></path>
                      <g filter="url(#filter0_d_6809_29153)">
                        <path
                          d="M16 10.7734L10 14.2375L10 7.30934L16 10.7734Z"
                          fill="url(#paint0_linear_6809_29153)"
                        ></path>
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_6809_29153"
                          x="3.5"
                          y="0.808594"
                          width="19"
                          height="19.9297"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset></feOffset>
                          <feGaussianBlur stdDeviation="3.25"></feGaussianBlur>
                          <feComposite
                            in2="hardAlpha"
                            operator="out"
                          ></feComposite>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.00784314 0 0 0 0 0.470588 0 0 0 0 0.780392 0 0 0 1 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_6809_29153"
                          ></feBlend>
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_6809_29153"
                            result="shape"
                          ></feBlend>
                        </filter>
                        <linearGradient
                          id="paint0_linear_6809_29153"
                          x1="14.8008"
                          y1="6.77344"
                          x2="8.02396"
                          y2="5.52963"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#20ed00"></stop>
                          <stop offset="1" stop-color="#20ed00"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </td>
                </tr>
                <tr class="px-[20px] py-[7px]">
                  <td>
                    <div
                      class="bg-contain bg-no-repeat bg-center flex items-center justify-center text-shadow-lg"
                      style="
                        background-image: url('https://alpha7s.online/images/LeaderBoard/rank3.png');
                      "
                    >
                      <div
                        class="text-[12px] box-shadow: 0px 2px 6px 0px #000000;"
                        style="margin-top: 5px"
                      >
                        3
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="flex gap-2 py-1">
                      <img
                        class="w-[30px] rounded-md"
                        src="https://cdn.zabbet.com/games/1738037114621-15f0a607-3357-41dc-a1b9-b37983cd8fcd.png"
                        alt=""
                      />
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="21"
                      viewBox="0 0 24 21"
                      fill="none"
                    >
                      <path
                        d="M2 3.77344C2 2.11658 3.34315 0.773438 5 0.773438H19C20.6569 0.773438 22 2.11658 22 3.77344V17.7734C22 19.4303 20.6569 20.7734 19 20.7734H5C3.34315 20.7734 2 19.4303 2 17.7734V3.77344Z"
                        fill="#000000"
                        fill-opacity="0.7"
                      ></path>
                      <g filter="url(#filter0_d_6809_29153)">
                        <path
                          d="M16 10.7734L10 14.2375L10 7.30934L16 10.7734Z"
                          fill="url(#paint0_linear_6809_29153)"
                        ></path>
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_6809_29153"
                          x="3.5"
                          y="0.808594"
                          width="19"
                          height="19.9297"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset></feOffset>
                          <feGaussianBlur stdDeviation="3.25"></feGaussianBlur>
                          <feComposite
                            in2="hardAlpha"
                            operator="out"
                          ></feComposite>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.00784314 0 0 0 0 0.470588 0 0 0 0 0.780392 0 0 0 1 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_6809_29153"
                          ></feBlend>
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_6809_29153"
                            result="shape"
                          ></feBlend>
                        </filter>
                        <linearGradient
                          id="paint0_linear_6809_29153"
                          x1="14.8008"
                          y1="6.77344"
                          x2="8.02396"
                          y2="5.52963"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#20ed00"></stop>
                          <stop offset="1" stop-color="#20ed00"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </td>
                </tr>
                <tr class="px-[20px] py-[7px]">
                  <td>
                    <div
                      class="bg-contain bg-no-repeat bg-center flex items-center justify-center text-shadow-lg"
                    >
                      <div
                        class="text-[12px] box-shadow: 0px 2px 6px 0px #000000;"
                        style="margin-top: 5px"
                      >
                        4
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="flex gap-2 py-1">
                      <img
                        class="w-[30px] rounded-md"
                        src="https://cdn.zabbet.com/games/1745918328112-bd7af36c-205a-4177-917e-b48fd8bbb5ec.jpeg"
                        alt=""
                      />
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="21"
                      viewBox="0 0 24 21"
                      fill="none"
                    >
                      <path
                        d="M2 3.77344C2 2.11658 3.34315 0.773438 5 0.773438H19C20.6569 0.773438 22 2.11658 22 3.77344V17.7734C22 19.4303 20.6569 20.7734 19 20.7734H5C3.34315 20.7734 2 19.4303 2 17.7734V3.77344Z"
                        fill="#000000"
                        fill-opacity="0.7"
                      ></path>
                      <g filter="url(#filter0_d_6809_29153)">
                        <path
                          d="M16 10.7734L10 14.2375L10 7.30934L16 10.7734Z"
                          fill="url(#paint0_linear_6809_29153)"
                        ></path>
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_6809_29153"
                          x="3.5"
                          y="0.808594"
                          width="19"
                          height="19.9297"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset></feOffset>
                          <feGaussianBlur stdDeviation="3.25"></feGaussianBlur>
                          <feComposite
                            in2="hardAlpha"
                            operator="out"
                          ></feComposite>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.00784314 0 0 0 0 0.470588 0 0 0 0 0.780392 0 0 0 1 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_6809_29153"
                          ></feBlend>
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_6809_29153"
                            result="shape"
                          ></feBlend>
                        </filter>
                        <linearGradient
                          id="paint0_linear_6809_29153"
                          x1="14.8008"
                          y1="6.77344"
                          x2="8.02396"
                          y2="5.52963"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#20ed00"></stop>
                          <stop offset="1" stop-color="#20ed00"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </td>
                </tr>
                <tr class="px-[20px] py-[7px]">
                  <td>
                    <div
                      class="bg-contain bg-no-repeat bg-center flex items-center justify-center text-shadow-lg"
                    >
                      <div
                        class="text-[12px] box-shadow: 0px 2px 6px 0px #000000;"
                        style="margin-top: 5px"
                      >
                        5
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="flex gap-2 py-1">
                      <img
                        class="w-[30px] rounded-md"
                        src="https://cdn.zabbet.com/games/1737688704831-103eb675-51ea-47ae-9d1a-e971c58d1b3d.png"
                        alt=""
                      />
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="21"
                      viewBox="0 0 24 21"
                      fill="none"
                    >
                      <path
                        d="M2 3.77344C2 2.11658 3.34315 0.773438 5 0.773438H19C20.6569 0.773438 22 2.11658 22 3.77344V17.7734C22 19.4303 20.6569 20.7734 19 20.7734H5C3.34315 20.7734 2 19.4303 2 17.7734V3.77344Z"
                        fill="#000000"
                        fill-opacity="0.7"
                      ></path>
                      <g filter="url(#filter0_d_6809_29153)">
                        <path
                          d="M16 10.7734L10 14.2375L10 7.30934L16 10.7734Z"
                          fill="url(#paint0_linear_6809_29153)"
                        ></path>
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_6809_29153"
                          x="3.5"
                          y="0.808594"
                          width="19"
                          height="19.9297"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset></feOffset>
                          <feGaussianBlur stdDeviation="3.25"></feGaussianBlur>
                          <feComposite
                            in2="hardAlpha"
                            operator="out"
                          ></feComposite>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.00784314 0 0 0 0 0.470588 0 0 0 0 0.780392 0 0 0 1 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_6809_29153"
                          ></feBlend>
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_6809_29153"
                            result="shape"
                          ></feBlend>
                        </filter>
                        <linearGradient
                          id="paint0_linear_6809_29153"
                          x1="14.8008"
                          y1="6.77344"
                          x2="8.02396"
                          y2="5.52963"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#20ed00"></stop>
                          <stop offset="1" stop-color="#20ed00"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="h-[30px] mt-3 flex items-center gap-4 w-full relative overflow-hidden rounded-md pl-4"
          >
            <div
              class="absolute top-0 left-0 w-full h-[30px] opacity-[0.4]"
              style="
                background: linear-gradient(
                  90deg,
                  rgba(0, 0, 0, 0.6) -6.21%,
                  rgb(18, 255, 32) -4.41%,
                  rgba(0, 0, 0, 0.6) 83.01%
                );
              "
            ></div>
            <div
              class="absolute bottom-0 left-0 w-full h-[2px] opacity-[0.4]"
              style="
                background: linear-gradient(
                  90deg,
                  rgba(0, 0, 0, 0.6) -6.21%,
                  rgb(18, 255, 32) -4.41%,
                  rgba(0, 0, 0, 0.6) 83.01%
                );
              "
            ></div>
            <div class="flex items-center gap-4 z-[10] relative">
              <img
                src="https://alpha7s.online/images/home/mini-game.webp"
                alt=""
              />
              <p class="text-[14px] font-semibold text-white">Mini Games</p>
            </div>
          </div>
          <div class="flex items-center gap-6 px-4 mt-5">
            <div
              class="rounded-full flex-1 p-[3px]"
              style="
                background: linear-gradient(
                  rgb(252, 200, 143) 0%,
                  rgb(255, 252, 245) 22%,
                  rgb(245, 197, 49) 48%,
                  rgb(198, 124, 45) 100%
                );
              "
            >
              <div
                class="w-full h-[42px] flex items-center 4xl:pr-5 rounded-full"
                style="
                  background: linear-gradient(
                    135deg,
                    rgb(15, 137, 218) 10%,
                    rgb(8, 70, 157) 100%
                  );
                "
              >
                <div class="w-full flex items-center -ml-5">
                  <img
                    loading="lazy"
                    class="h-[90px] -mx-[15px]"
                    src="https://alpha7s.online/images/mini_game/icon-luckywheel-dt.webp"
                  />
                  <div
                    class="w-full text-center text-xl text-white whitespace-nowrap font-semibold"
                  >
                    Spinner
                  </div>
                </div>
              </div>
            </div>
            <div
              class="rounded-full flex-1 p-[3px]"
              style="
                background: linear-gradient(
                  rgb(252, 200, 143) 0%,
                  rgb(255, 252, 245) 22%,
                  rgb(245, 197, 49) 48%,
                  rgb(198, 124, 45) 100%
                );
              "
            >
              <div
                class="w-full h-[42px] flex items-center 4xl:pr-5 rounded-full"
                style="
                  background: linear-gradient(
                    135deg,
                    rgb(15, 137, 218) 10%,
                    rgb(8, 70, 157) 100%
                  );
                "
              >
                <div class="w-full flex items-center -ml-5">
                  <img
                    loading="lazy"
                    class="h-[90px] -mx-[15px]"
                    src="https://alpha7s.online/images/mini_game/icon-dailymission-dt.webp"
                  />
                  <div
                    class="w-full text-center text-xl text-white whitespace-nowrap font-semibold"
                  >
                    Spinner
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-[30px] xl:px-0 px-3">
      <h1 class="text-xl font-semibold text-white pl-2">Our Alliance</h1>
      <div class="flex items-center gap-[20px] mt-6">
        <div class="w-[107px] py-[7px] rounded-[5px]">
          <img
            class="h-[10px] mx-auto"
            src="https://alpha7s.online/images/alliance/evoplay.png"
          />
        </div>
        <div class="w-[107px] py-[7px] rounded-[5px]">
          <img
            class="h-[10px] mx-auto"
            src="https://alpha7s.online/images/alliance/cq9.png"
          />
        </div>
        <div class="w-[107px] py-[7px] rounded-[5px]">
          <img
            class="h-[10px] mx-auto"
            src="https://alpha7s.online/images/alliance/jili.png"
          />
        </div>
        <div class="w-[107px] py-[7px] rounded-[5px]">
          <img
            class="h-[10px] mx-auto"
            src="https://alpha7s.online/images/alliance/playstar.png"
          />
        </div>
        <div class="w-[107px] py-[7px] rounded-[5px]">
          <img
            class="h-[10px] mx-auto"
            src="https://alpha7s.online/images/alliance/joker.png"
          />
        </div>
        <div class="w-[107px] py-[7px] rounded-[5px]">
          <img
            class="h-[10px] mx-auto"
            src="https://alpha7s.online/images/alliance/ebet.png"
          />
        </div>
        <div class="w-[107px] py-[7px] rounded-[5px]">
          <img
            class="h-[10px] mx-auto"
            src="https://alpha7s.online/images/alliance/popk.png"
          />
        </div>
        <div class="w-[107px] py-[7px] rounded-[5px]">
          <img
            class="h-[10px] mx-auto"
            src="https://alpha7s.online/images/alliance/evoplay.png"
          />
        </div>
        <div class="w-[107px] py-[7px] rounded-[5px]">
          <img
            class="h-[10px] mx-auto"
            src="https://alpha7s.online/images/alliance/cq9.png"
          />
        </div>
        <div class="w-[107px] py-[7px] rounded-[5px]">
          <img
            class="h-[10px] mx-auto"
            src="https://alpha7s.online/images/alliance/jili.png"
          />
        </div>
        <div class="w-[107px] py-[7px] rounded-[5px]">
          <img
            class="h-[10px] mx-auto"
            src="https://alpha7s.online/images/alliance/playstar.png"
          />
        </div>
        <div class="w-[107px] py-[7px] rounded-[5px]">
          <img
            class="h-[10px] mx-auto"
            src="https://alpha7s.online/images/alliance/joker.png"
          />
        </div>
      </div>
      <div class="flex items-center gap-[20px] justify-center mt-6">
        <div class="w-[107px] py-[7px] rounded-[5px]">
          <img
            class="h-[10px] mx-auto"
            src="https://alpha7s.online/images/alliance/cq9.png"
          />
        </div>
        <div class="w-[107px] py-[7px] rounded-[5px]">
          <img
            class="h-[10px] mx-auto"
            src="https://alpha7s.online/images/alliance/jili.png"
          />
        </div>
        <div class="w-[107px] py-[7px] rounded-[5px]">
          <img
            class="h-[10px] mx-auto"
            src="https://alpha7s.online/images/alliance/ebet.png"
          />
        </div>
        <div class="w-[107px] py-[7px] rounded-[5px]">
          <img
            class="h-[10px] mx-auto"
            src="https://alpha7s.online/images/alliance/popk.png"
          />
        </div>
        <div class="w-[107px] py-[7px] rounded-[5px]">
          <img
            class="h-[10px] mx-auto"
            src="https://alpha7s.online/images/alliance/evoplay.png"
          />
        </div>
        <div class="w-[107px] py-[7px] rounded-[5px]">
          <img
            class="h-[10px] mx-auto"
            src="https://alpha7s.online/images/alliance/cq9.png"
          />
        </div>
        <div class="w-[107px] py-[7px] rounded-[5px]">
          <img
            class="h-[10px] mx-auto"
            src="https://alpha7s.online/images/alliance/jili.png"
          />
        </div>
        <div class="w-[107px] py-[7px] rounded-[5px]">
          <img
            class="h-[10px] mx-auto"
            src="https://alpha7s.online/images/alliance/playstar.png"
          />
        </div>
        <div class="w-[107px] py-[7px] rounded-[5px]">
          <img
            class="h-[10px] mx-auto"
            src="https://alpha7s.online/images/alliance/joker.png"
          />
        </div>
      </div>
    </div>
    <div class="mt-[30px] xl:px-0 px-3">
      <div class="grid md:grid-cols-8 grid-cols-1 mt-3 gap-6">
        <div>
          <p class="text-[#7CA9B7] font-semibold text-sm">About</p>
        </div>
        <div class="xl:col-span-3 lg:col-span-4 md:col-span-6">
          <p class="text-[#7CA9B7] font-normal text-sm">
            <span class="font-semibold">Licenses and certificates</span>
            <span>"(Guaranteed authentic licensed game)"</span>
          </p>
          <div class="mt-3 flex gap-6 items-center">
            <img
              loading="lazy"
              class="max-h-[32px]"
              alt="Image 1"
              src="https://alpha7s.online/images/footer/GC-icon%202.png"
            /><img
              loading="lazy"
              class="max-h-[32px]"
              alt="Image 2"
              src="https://alpha7s.online/images/footer/iTech.png"
            /><img
              loading="lazy"
              class="max-h-[32px]"
              alt="Image 3"
              src="https://alpha7s.online/images/footer/GamingLab.png"
            /><img
              loading="lazy"
              class="max-h-[32px]"
              alt="Image 4"
              src="https://alpha7s.online/images/footer/BBM-Cert.png"
            /><img
              loading="lazy"
              class="max-h-[32px]"
              alt="Image 5"
              src="https://alpha7s.online/images/footer/Iovation.png"
            />
          </div>
          <div class="flex mt-8 gap-12">
            <div>
              <div class="text-[#7CA9B7] font-semibold text-sm">
                Support and security by
              </div>
              <div class="mt-3 flex gap-6 items-center">
                <img
                  loading="lazy"
                  class="max-h-[32px]"
                  alt="Image 1"
                  src="https://alpha7s.online/images/footer/GO%20DADDY.png"
                /><img
                  loading="lazy"
                  class="max-h-[32px]"
                  alt="Image 2"
                  src="https://alpha7s.online/images/footer/Group%2048102721.png"
                />
              </div>
            </div>
            <div>
              <div class="text-[#7CA9B7] font-semibold text-sm">
                Responsible for betting
              </div>
              <div class="mt-3 flex gap-6 items-center">
                <img
                  loading="lazy"
                  class="max-h-[32px]"
                  alt="Image 1"
                  src="https://alpha7s.online/images/footer/18.png"
                /><img
                  loading="lazy"
                  class="max-h-[32px]"
                  alt="Image 2"
                  src="https://alpha7s.online/images/footer/gamecare.png"
                /><img
                  loading="lazy"
                  class="max-h-[32px]"
                  alt="Image 3"
                  src="https://alpha7s.online/images/footer/be-gamble-aware.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p class="text-[#7CA9B7] font-semibold text-sm">Games</p>
          <ul class="mt-3 flex flex-col gap-3">
            <li class="text-base font-normal text-secondary">
              <a>Casino</a>
            </li>
            <li class="text-base font-normal text-secondary">
              <a>Slot</a>
            </li>
            <li class="text-base font-normal text-secondary">
              <a>Fishing</a>
            </li>
            <li class="text-base font-normal text-secondary">
              <a>Sports</a>
            </li>
            <li class="text-base font-normal text-secondary">
              <a>Cards</a>
            </li>
            <li class="text-base font-normal text-secondary">
              <a>Lottery</a>
            </li>
          </ul>
        </div>
        <div>
          <p class="text-[#7CA9B7] font-semibold text-sm">Information</p>
          <ul class="mt-3 flex flex-col gap-3">
            <li class="text-base font-normal text-secondary">
              <a>Promotions</a>
            </li>
            <li class="text-base font-normal text-secondary">
              <a>News</a>
            </li>
            <li class="text-base font-normal text-secondary">
              <a>Event</a>
            </li>
            <li class="text-base font-normal text-secondary">
              <a>Sports</a>
            </li>
            <li class="text-base font-normal text-secondary">
              <a>VIP Member Level</a>
            </li>
            <li class="text-base font-normal text-secondary">
              <a>Network Income</a>
            </li>
            <li class="text-base font-normal text-secondary">
              <a>Commision Income</a>
            </li>
          </ul>
        </div>
        <div class="md:col-span-2 flex flex-col ml-10">
          <p class="text-[#7CA9B7] font-semibold text-sm">Contact</p>
          <div class="flex items-center gap-3 mt-3">
            <img
              class="w-[32px]"
              src="https://cdn.zabbet.com/0VNF/lobby_settings/da78a3be-1ece-44a8-99d2-d7f823dbcffa.png"
            />
            <img
              class="w-[32px]"
              src="https://cdn.zabbet.com/0VNF/lobby_settings/dad788f8-6441-4f80-a0c4-bb39325532e9.png"
              alt=""
            />

            <img
              class="w-[32px]"
              src="https://cdn.zabbet.com/0VNF/lobby_settings/f6a5f318-531d-4cec-a8b3-5e4c5816577c.webp"
            />
          </div>
        </div>
      </div>
      <div
        class="w-full h-[1px] my-6"
        style="background: rgb(112, 138, 115)"
      ></div>
      <div>
        <p class="font-semibold text-center" style="color: rgb(112, 138, 115)">
          Payment Method
        </p>
        <div class="mt-3 flex flex-wrap gap-4 items-center justify-center">
          <div class="relative inline-block max-h-[32px] rounded-full">
            <img
              loading="lazy"
              class="max-h-[32px] rounded-full brightness-75"
              src="https://alpha7s.online/images/banks/TH/BBL.png"
              alt="BBL"
            />
          </div>
          <div class="relative inline-block max-h-[32px] rounded-full">
            <img
              loading="lazy"
              class="max-h-[32px] rounded-full brightness-75"
              src="https://alpha7s.online/images/banks/TH/KBANK.png"
              alt="KBANK"
            />
          </div>
          <div class="relative inline-block max-h-[32px] rounded-full">
            <img
              loading="lazy"
              class="max-h-[32px] rounded-full brightness-75"
              src="https://alpha7s.online/images/banks/TH/KTB.png"
              alt="KTB"
            />
          </div>
          <div class="relative inline-block max-h-[32px] rounded-full">
            <img
              loading="lazy"
              class="max-h-[32px] rounded-full brightness-75"
              src="https://alpha7s.online/images/banks/TH/TTB.png"
              alt="TTB"
            />
          </div>
          <div class="relative inline-block max-h-[32px] rounded-full">
            <img
              loading="lazy"
              class="max-h-[32px] rounded-full brightness-75"
              src="https://alpha7s.online/images/banks/TH/SCB.png"
              alt="SCB"
            />
          </div>
          <div class="relative inline-block max-h-[32px] rounded-full">
            <img
              loading="lazy"
              class="max-h-[32px] rounded-full brightness-75"
              src="https://alpha7s.online/images/banks/TH/BAY.png"
              alt="BAY"
            />
          </div>
          <div class="relative inline-block max-h-[32px] rounded-full">
            <img
              loading="lazy"
              class="max-h-[32px] rounded-full brightness-75"
              src="https://alpha7s.online/images/banks/TH/KKP.png"
              alt="KKP"
            />
          </div>
          <div class="relative inline-block max-h-[32px] rounded-full">
            <img
              loading="lazy"
              class="max-h-[32px] rounded-full brightness-75"
              src="https://alpha7s.online/images/banks/TH/CIMBT.png"
              alt="CIMBT"
            />
          </div>
          <div class="relative inline-block max-h-[32px] rounded-full">
            <img
              loading="lazy"
              class="max-h-[32px] rounded-full brightness-75"
              src="https://alpha7s.online/images/banks/TH/UOBT.png"
              alt="TISCO"
            />
          </div>
          <div class="relative inline-block max-h-[32px] rounded-full">
            <img
              loading="lazy"
              class="max-h-[32px] rounded-full brightness-75"
              src="https://alpha7s.online/images/banks/TH/TCD.png"
              alt="UOBT"
            />
          </div>
          <div class="relative inline-block max-h-[32px] rounded-full">
            <img
              loading="lazy"
              class="max-h-[32px] rounded-full brightness-75"
              src="https://alpha7s.online/images/banks/TH/LHFG.png"
              alt="TCD"
            />
          </div>
          <div class="relative inline-block max-h-[32px] rounded-full">
            <img
              loading="lazy"
              class="max-h-[32px] rounded-full brightness-75"
              src="https://alpha7s.online/images/banks/TH/BAAC.png"
              alt="LHFG"
            />
          </div>
          <div class="relative inline-block max-h-[32px] rounded-full">
            <img
              loading="lazy"
              class="max-h-[32px] rounded-full brightness-75"
              src="https://alpha7s.online/images/banks/TH/EXIM.png"
              alt="BAAC"
            />
          </div>
          <div class="relative inline-block max-h-[32px] rounded-full">
            <img
              loading="lazy"
              class="max-h-[32px] rounded-full brightness-75"
              src="https://alpha7s.online/images/banks/TH/GSB.png"
              alt="EXIM"
            />
          </div>
          <div class="relative inline-block max-h-[32px] rounded-full">
            <img
              loading="lazy"
              class="max-h-[32px] rounded-full brightness-75"
              src="https://alpha7s.online/images/banks/TH/GHB.png"
              alt="GSB"
            />
          </div>
        </div>
      </div>
      <div class="flex gap-5 items-end mt-12">
        <img
          loading="lazy"
          class="max-h-[25px]"
          src="https://cdn.zabbet.com/0VNF/lobby_settings/8e561d6d-916e-4647-a060-769b671aaa4a.png"
          alt="logo"
        />
        <div class="font-normal text-sm text-white opacity-50">
          Copyright © alpha7s.com, All Rights Reserved.
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import PromotionCard from "../components/atoms/PromotionCard.vue";
import Marquee from "../components/main/Marquee.vue";
import { SwiperSlide } from "swiper/vue";
import Swiper from "../components/main/Swiper.vue";
import GameCardWithNumber from "../components/atoms/GameCardWithNumber.vue";
import One from "../components/icons/One.vue";
import Tow from "../components/icons/Tow.vue";
import Three from "../components/icons/Three.vue";
import Four from "../components/icons/Four.vue";
import Five from "../components/icons/Five.vue";
import Six from "../components/icons/Six.vue";
import Seven from "../components/icons/Seven.vue";
import Eight from "../components/icons/Eight.vue";
import GreenToDarkGradientContainer from "../components/atoms/GreenToDarkGradientContainer.vue";
import ReviewSlider from "../components/main/ReviewSlider.vue";
import Nine from "../components/icons/Nine.vue";
import Ten from "../components/icons/Ten.vue";
import GameCardWithNumberCounter from "../components/atoms/GameCardWithNumberCounter.vue";
import Accordion from "../components/atoms/Accordion.vue";
import { GameCardsSwiperBreakPoints } from "../libs/GameCardsSwiperBreakPoints";
import { Autoplay, Pagination } from "swiper/modules";

const paginationConfig = {
  clickable: true,
  renderBullet: function (index, className) {
    return `<div class="${className} !w-[24px] !h-[9px] !rounded-[6px] " style="box-shadow:rgb(0,0,0) 0px 0px 5px;background:rgb(255, 255, 255)"></div>`;
  },
};

const modules = [Pagination, Autoplay];
</script>
<style lang=""></style>
