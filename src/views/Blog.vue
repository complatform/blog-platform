<template>
  <Nav />
  <div v-if="!updatePost" class="md:w-3/4 md:ml-28" >
    <div class="mt-20 mb-5">
      <h1 class="text-center font-serif text-xl text-gray-400 font-bold">Post Your Thoughts Here</h1>
      <div class="md:ml-10 lg:ml-60">
        <button class="bg-cyan-200 hover:bg-cyan-300 hover:shadow-lg ml-40 px-10 py-2 mt-5 rounded-sm shadow-md font-serif font-bold text-lg md:ml-64 " @click="goToPosts">Post</button>
      </div>
    </div>
    <hr class="bg-gray-300">
    <h1 class="text-2xl text-center text-gray-400 font-bold mt-5 mb-5">Trending Posts</h1>
    <div class="flex overflow-hidden">
      <div class="container lg:ml-10" ref="scrollContainer">
        <div class="bg-white rounded-md ml-2 mr-2 shadow-md pb-5 w-fit mb-5 flex flex-col " v-for="blog in blogs" :key="blog.id">
          <div class="flex ">
            <div class="flex-1"> 
              <img :src="blog.photo" alt="" class="rounded-md h-60 md:w-80">
              <h1 class="text-center text-blue-500 font-serif mt-5" @click="showDetails(blog.id, blog.name, blog.title, blog.tought, blog.photo)">
                <a href="">{{ blog.title }}</a>
              </h1>
              <div class="flex justify-between mt-5 px-3 text-gray-400 font-bold"> 
                <div><p class="text-gray-400">{{ blog.name }}</p></div>
                <div class="flex">
                  <i class="fa-solid fa-calendar-days mr-2 mt-1"></i>
                  <p>{{ blog.date }}</p>
                </div>
              </div>
              <div class="flex justify-between ml-5 mr-5 mt-2">
                <button class="bg-green-200 hover:bg-green-300 hover:shadow-lg px-3 py-2 mt-5 rounded-sm shadow-md font-serif font-bold text-lg" @click="editBlog(blog.id)">Update Post</button>
                <button class="bg-red-400 hover:bg-red-500 hover:shadow-lg px-3 py-2 mt-5 rounded-sm shadow-md font-serif font-bold text-lg" @click="deletePosts(blog.id)">Delete Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class="ml-16 mb-10 lg:ml-72" >
    <div class="flex ml-40 mb-40 md:ml-96">
     
        
     
      <div class="text-xl bg-green-300 rounded-full h-8 mr-5" ref="backBtn">
        <i class="fa-solid fa-backward back ml-1 mr-2"></i>
      </div>
      <div ref="nextBtn" class="text-xl pr-1 bg-green-300 rounded-full h-8">
        <i class="fa-solid fa-forward next ml-2"></i>
      </div>
    </div>
     </div>
  </div>
  <div v-if="updatePost" class="lg:ml-40 lg:mb-20 md:mb-20 md:ml-40">
    <div class="shadow-md mt-16 ml-5 mr-5 pl-5 pr-5 pt-5 pb-5 rounded-sm">
      <div class="text-xl font-serif mb-5">
        <label for="">Enter Your Name:</label><br>
        <input type="text" placeholder="Enter Your Name" class="shadow-md px-7 mt-2 mb-2 focus:outline-blue-300 py-3 rounded-md" v-model="posts.name">
      </div>
      <div class="text-xl font-serif mb-5">
        <label for="">Date:</label><br><br>
        <input type="date" class="shadow-md px-7 mt-2 mb-2 focus:outline-blue-300 py-3 rounded-md w-72" v-model="posts.date">
      </div>
      <div class="text-xl font-serif mb-5">
        <label for="">Enter Your blog title:</label><br>
        <input type="text" placeholder="Enter Your Title" class="shadow-md px-7 mt-2 mb-2 focus:outline-blue-300 py-3 rounded-md w-72" v-model="posts.title">
      </div>
      <div class="text-xl font-serif mb-5">
        <label for="">Enter Your Thoughts:</label><br>
        <textarea cols="27" rows="6" class="shadow-md px-7 mt-2 mb-2 focus:outline-blue-300 py-3 rounded-md" v-model="posts.tought"></textarea>
      </div>
      <div class="text-xl font-serif mb-5">
        <label for="">Enter Your Photo:</label><br>
        <input type="file" class="shadow-md px-7 mt-2 mb-2 focus:outline-blue-300 py-3 rounded-md w-72" @change="handlePhoto">
      </div>
      <div>
        <button class="ml-24 mt-3 bg-green-200 px-10 py-2 text-xl font-serif shadow-md rounded-sm" @click="updateBlog">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  data() {
    return {
      posts: {
        name: '',
        date: null,
        title: '',
        tought: '',
        photo: '',
      },
      updatePost: false,
      blogs: [],
      blogID: null, 
    };
  },
  components: { Nav },
  mounted() {
    this.loadBlogs();
    this.setupScrollListeners();
  },
  methods: {
    loadBlogs() {
      const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
      this.blogs = storedBlogs;
    },
    setupScrollListeners() {
      this.$nextTick(() => {
        const scrollContainer = this.$refs.scrollContainer;
        const backBtn = this.$refs.backBtn;
        const nextBtn = this.$refs.nextBtn;

        const scrollHandler = (evt) => {
          evt.preventDefault();
          scrollContainer.scrollLeft += evt.deltaY;
        };

        const scrollNext = () => {
          const card = scrollContainer.querySelector('.bg-white');
          if (card) {
            const cardWidth = card.offsetWidth;
            scrollContainer.scrollLeft += cardWidth; 
          }
        };

        const scrollBack = () => {
          const card = scrollContainer.querySelector('.bg-white');
          if (card) {
            const cardWidth = card.offsetWidth;
            scrollContainer.scrollLeft -= cardWidth; 
          }
        };

        scrollContainer.removeEventListener('wheel', scrollHandler);
        nextBtn.removeEventListener('click', scrollNext);
        backBtn.removeEventListener('click', scrollBack);

        scrollContainer.addEventListener('wheel', scrollHandler);
        nextBtn.addEventListener('click', scrollNext);
        backBtn.addEventListener('click', scrollBack);
      });
    },
    goToPosts() {
      this.$router.push('/BlogPost'); 
    },
    showDetails(id, name, title, tought, photo) {
      localStorage.setItem('id', id);
      localStorage.setItem('name', name);
      localStorage.setItem('title', title);
      localStorage.setItem('tought', tought);
      localStorage.setItem('photo', photo);
      this.$router.push('/detailTought');
    },
    deletePosts(id) {
      this.blogs = this.blogs.filter((blog) => blog.id !== id);
      this.saveBlogs();
    },
    saveBlogs() {
      localStorage.setItem('blogs', JSON.stringify(this.blogs));
    },
    resetForm() {
      this.posts = {
        name: '',
        date: null,
        title: '',
        tought: '',
        photo: '',
      };
    },
    editBlog(id) {
      this.updatePost = true; 
      const blogToEdit = this.blogs.find(blog => blog.id === id);
      if (blogToEdit) {
        this.posts = { ...blogToEdit };
        this.blogID = id; 
      }
    },
    updateBlog() {
      if (this.blogID) {
        const blogIndex = this.blogs.findIndex(blog => blog.id === this.blogID);
        if (blogIndex !== -1) {
          this.blogs[blogIndex] = { ...this.posts, id: this.blogID }; 
          this.saveBlogs(); 
          this.resetForm();
          this.updatePost = false; 
          this.setupScrollListeners();
        }
      }
    },
  },
};
</script>

<style>
.container {
  overflow-x: hidden; 
  white-space: nowrap; 
  display: flex; 
}

.bg-white {
  flex: 0 0 auto; 
  width: 300px; 
}
</style>