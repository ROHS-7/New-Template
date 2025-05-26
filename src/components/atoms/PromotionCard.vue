<template >
    <div class="p-[1.8px]  rounded-[9px] " style="background:  linear-gradient(0deg, rgb(255, 204, 102) 10%, rgb(235, 205, 155) 50%)"> 
        <div class="flex h-[116px] rounded-[9px] items-center" style="background:linear-gradient(135deg, rgb(0, 0, 0) 40%, rgb(51, 255, 0) 100%)">
        <div class="w-[180px] -ml-[24px] -mt-[24px] relative h-[180px] ">
            <div class="absolute w-full h-full top-0 left-0">
            <img class="w-full h-full" :src="image" alt="">
            </div>
        </div>
        <div>
            <h2 class="text-[20px] text-white font-semibold">{{ title }}</h2>
            <p class="text-white">{{ description }}</p>
        </div>

        </div>
    </div>
</template>
<script>
export default {
    props: {
        image : String,
        title : String,
        description: String
    }
}
</script>
<style lang="">
    
</style>