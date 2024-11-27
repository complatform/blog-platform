<template>
  <Nav />
  <div class="">
    <div class="mt-5 mb-16">
      <h1 class="text-center font-serif text-xl text-gray-400 font-bold">Post Your Thoughts Here</h1>
      <button class="bg-green-200 ml-40 px-10 py-2 mt-5 rounded-sm shadow-md font-serif font-bold text-lg" @click="goToPosts">Post</button>
    </div>
    <h1 class="text-2xl text-center text-gray-400 font-bold mt-5 mb-5">Trending Posts</h1>
    <div class="bg-white rounded-md shadow-md w-80 ml-12 pb-5 mb-5" v-for="blog in blogs" :key="blog.id">
      <img :src="blog.photo" alt="" class="rounded-md">
      <h1 class="text-center text-blue-500 font-serif mt-5"><a href="">{{ blog.title }}</a></h1>
      <div class="flex justify-between mt-5 px-3 text-gray-400 font-bold"> 
        <div><p class="text-gray-400">{{ blog.name }}</p></div>
        <div class="flex">
          <i class="fa-solid fa-calendar-days mr-2 mt-1"></i>
          <p>{{ blog.date }}</p>
        </div>
        <!-- <p>{{ blog.id }}</p> -->
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
  },
};
</script>