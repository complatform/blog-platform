<template>
  <nav class="fixed w-full top-0 ">
    <div class="flex justify-between shadow-md pt-3 pb-3 px-5 bg-green-100  font-bold">
<div class="text-2xl font-serif">simpleThoughts</div>
<div class="">
    <div @click="toggleShow">
        <i class="fa-solid fa-bars text-2xl"></i>
    </div>


</div>
    </div>
        <div class="lg:ml-96 ml-44 mt-2 mr-10" v-if="showPages">
            <div class="ml-8 md:ml-96 lg:ml-96 text-xl font-serif">
<div class="ml-36 lg:ml-96">
<div class="lg:ml-40 md:ml-32 ">
<div>

<router-link >Home</router-link>
</div>
<div>

<router-link to="/About">About</router-link>
</div>
</div>
</div>
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
    },
    goToHome(){
this.$router.push()
    }
}
}
</script>

<style>

</style>