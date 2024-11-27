<template>
 <Nav />
  <div class="text-2xl pl-5 pr-5 pt-5 font-serif mt-24">
    <img :src="photo" alt="" class="rounded-md h-72">
     <p class="text-center mb-3 text-green-300 mt-5">{{title}}</p>
    <p>{{tought}}</p>
   
  
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
export default {
    components:{
Nav
    },
    data(){
return{
    id:null,
    name:'',
    tought:'',
    title:'',
    photo:''
}
    },
mounted(){
    this.id = localStorage.getItem('id')
    this.name = localStorage.getItem('name')
    this.tought = localStorage.getItem('tought')
    this.title = localStorage.getItem('title')
    this.photo = localStorage.getItem('photo')
}
}
</script>

<style>

</style>