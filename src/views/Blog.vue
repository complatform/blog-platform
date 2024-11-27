<template>
  <Nav />
  <div class="">
    <div class="mt-20 mb-5">
      <h1 class="text-center font-serif text-xl text-gray-400 font-bold">Post Your Thoughts Here</h1>
      <button class="bg-cyan-200 hover:bg-cyan-300 hover:shadow-lg ml-40 px-10 py-2 mt-5 rounded-sm shadow-md font-serif font-bold text-lg" @click="goToPosts">Post</button>
    </div>
    <hr class="bg-gray-300">
    <h1 class="text-2xl text-center text-gray-400 font-bold mt-5 mb-5">Trending Posts</h1>
    <div class="bg-white rounded-md shadow-md w-80 ml-12 pb-5 mb-5" v-for="blog in blogs" :key="blog.id">
      <img :src="blog.photo" alt="" class="rounded-md">
      <h1 class="text-center text-blue-500 font-serif mt-5" @click="showDetails(blog.id,blog.name,blog.title,blog.tought,blog.photo)"><a href="">{{ blog.title }}</a></h1>
      <div class="flex justify-between mt-5 px-3 text-gray-400 font-bold"> 
        <div><p class="text-gray-400">{{ blog.name }}</p></div>
        <div class="flex">
          <i class="fa-solid fa-calendar-days mr-2 mt-1"></i>
          <p>{{ blog.date }}</p>
        </div>
       
        <!-- <p>{{ blog.id }}</p> -->
      </div>
       <div class="flex justify-between ml-5 mr-5 mt-2">
            <button class="bg-green-200 hover:bg-green-300 hover:shadow-lg  px-3 py-2 mt-5 rounded-sm shadow-md font-serif font-bold text-lg">Update Post</button>
            <button class="bg-red-400 hover:bg-red-500 hover:shadow-lg px-3  py-2 mt-5 rounded-sm shadow-md font-serif font-bold text-lg">Delete Post</button>
        </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  data() {
    return {
      blogs: [],
    };
  },
  components: { Nav },
  mounted() {
   
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    this.blogs = storedBlogs;
  },
  methods: {
    goToPosts() {
      this.$router.push('/BlogPost'); 
    },
    showDetails(id,name,title,tought,photo){
localStorage.setItem('id',id)
localStorage.setItem('name',name)
localStorage.setItem('title',title)
localStorage.setItem('tought',tought)
localStorage.setItem('photo',photo)
this.$router.push('/detailTought')

    }
  },
};
</script>