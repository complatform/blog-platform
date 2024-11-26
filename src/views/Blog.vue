<template>
<Nav />
<div class="">
    <div class="mt-5 mb-16">
        <h1 class="text-center font-serif text-xl text-gray-400 font-bold">Post Your Toughts Here</h1>
        <button class="bg-green-200 ml-40 px-10 py-2 mt-5 rounded-sm shadow-md font-serif font-bold text-lg">Post</button>
    </div>
    <h1 class="text-2xl text-center text-gray-400 font-bold mt-5 mb-5">Trending Posts</h1>
    <div class="bg-white rounded-md shadow-md w-80  ml-12 pb-5 ">
        <img src="/authentication.jpg" alt="" class="rounded-md">
        
        <h1 class="text-center text-blue-500 font-serif mt-5"><a href="">The Importance of Secure Authentication in Modern Web Applications</a></h1>
        <div class="flex justify-between mt-5 px-3 text-gray-400 font-bold"> 
            <div><p class="text-gray-400 ">Kalkidan solomon</p></div>
            <div class="flex">
                <i class="fa-solid fa-calendar-days mr-2 mt-1"></i>
                <p>11/26/2024</p>
            </div>
        </div>
    </div>
     <div class="bg-white rounded-md shadow-md w-80  ml-12 pb-5 mt-5 ">
        <img src="/image.jpg" alt="" class="rounded-md">
        
        <h1 class="text-center text-blue-500 font-serif mt-5"><a href="">The Importance of Secure Authentication in Modern Web Applications</a></h1>
        <div class="flex justify-between mt-5 px-3 text-gray-400 font-bold"> 
            <div><p class="text-gray-400 ">Kalkidan solomon</p></div>
            <div class="flex">
                <i class="fa-solid fa-calendar-days mr-2 mt-1"></i>
                <p>11/26/2024</p>
            </div>
        </div>
    </div>
     <div class="bg-white rounded-md shadow-md w-80  ml-12 pb-5 mt-5">
        <img src="/image2.avif" alt="" class="rounded-md">
        
        <h1 class="text-center text-blue-500 font-serif mt-5"><a href="">The Importance of Secure Authentication in Modern Web Applications</a></h1>
        <div class="flex justify-between mt-5 px-3 text-gray-400 font-bold"> 
            <div><p class="text-gray-400 ">Kalkidan solomon</p></div>
            <div class="flex">
                <i class="fa-solid fa-calendar-days mr-2 mt-1"></i>
                <p>11/26/2024</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
 import Nav from '@/components/Nav.vue';
//  import {swiper,SwiperSlide} from "swiper/vue";
 import "swiper/css";
// import Nav from '@/components/Nav.vue';
export default {
components:{Nav}
}
</script>

<style>

</style>