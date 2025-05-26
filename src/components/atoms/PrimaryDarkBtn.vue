<template >
    <button class="h-[44px]  px-5 green-light-to-dark relative rounded-[12px]">
        <div class="btn-dark-bg-image absolute top-0 left-0 right-0 bottom-0 rounded-[10px] flex justify-center items-center"></div>
        <p class="relative text-nowrap text-base font-semibold text-white">{{ text }}</p>
    </button>
</template>
<script>
export default {
    props : {
        text : String
    }
}
</script>
<style lang="">
    
</style>