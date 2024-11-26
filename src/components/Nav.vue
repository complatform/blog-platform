<template>
  <nav class="">
    <div class="flex justify-between shadow-md pt-3 pb-3 px-5 bg-green-100  font-bold">
<div class="text-2xl font-serif">simpleThoughts</div>
<div class="">
    <div @click="toggleShow">
        <i class="fa-solid fa-bars text-2xl"></i>
    </div>


</div>
    </div>
        <div class="ml-80 mt-2" v-if="showPages">
            <div class="ml-8 text-xl font-serif">

<div>Home</div>
<div>About</div>
            </div>
    </div>
  </nav>
</template>

<script>
export default {
data(){
    return{
        showPages:false
    }
},
methods:{
    toggleShow(){
        this.showPages = !this.showPages
    }
}
}
</script>

<style>

</style>