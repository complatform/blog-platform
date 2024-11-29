<template>
  <Nav />
  <div class="shadow-md mt-16 ml-5 mr-5 pl-5 pr-5 pt-5 pb-5 rounded-sm">
    <div class="text-xl font-serif mb-5">
      <label for="">Enter Your Name:</label>
      <input type="text" placeholder="Enter Your Name" class="shadow-md px-7 mt-2 mb-2 focus:outline-blue-300 py-3 rounded-md" v-model="posts.name">
    </div>
    <div class="text-xl font-serif mb-5">
      <label for="">Date:</label><br>
      <input type="date" class="shadow-md px-7 mt-2 mb-2 focus:outline-blue-300 py-3 rounded-md w-72" v-model="posts.date">
    </div>
      <div class="text-xl font-serif mb-5">
      <label for="">Enter Your blog title:</label><br>
      <input type="text" placeholder="Enter Your Title" class="shadow-md px-7 mt-2 mb-2 focus:outline-blue-300 py-3 rounded-md w-72" v-model="posts.title">
    </div>
    <div class="text-xl font-serif mb-5">
      <label for="">Enter Your Thoughts:</label>
      <textarea cols="27" rows="6" class="shadow-md px-7 mt-2 mb-2 focus:outline-blue-300 py-3 rounded-md" v-model="posts.tought"></textarea>
    </div>
    <div class="text-xl font-serif mb-5">
      <label for="">Enter Your Photo:</label>
      <input type="file" class="shadow-md px-7 mt-2 mb-2 focus:outline-blue-300 py-3 rounded-md w-72" @change="handlePhoto">
    </div>
    <div>
      <button class="ml-24 mt-3 bg-green-200 px-10 py-2 text-xl font-serif shadow-md rounded-sm" @click="postToughts">Post</button>
    </div>
    <!-- <div>
      <button class="ml-24 mt-3 bg-green-200 px-10 py-2 text-xl font-serif shadow-md rounded-sm" @click="updateBlog">update</button>
    </div> -->
  </div>
  <!-- <div v-for="blog in blogs" :key="blog">

<img :src="blog.photo" alt="">
<p>{{blog.name}}</p>
<p>{{blog.title}}</p>
<button @click="editBlog(blog.id)">Update</button>
  </div> -->
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  data() {
    return {
      posts: {
        name: '',
        date: null,
        title:'',
        tought: '',
        photo: '',
      },
      blogs: [],
      blogID: 1,
    };
  },
  mounted() {
    
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    if (storedBlogs.length) {
      this.blogs = storedBlogs;
      this.blogID = Math.max(...this.blogs.map(blog => blog.id)) + 1;
    }
  },
  methods: {
    postToughts() {
      const newBlog = { ...this.posts, id: this.blogID++ };
      this.blogs.push(newBlog);
      this.saveBlogs();
      this.resetForm();
      this.$router.push('/'); 
    },
    handlePhoto(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.posts.photo = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
      
    saveBlogs() {
      localStorage.setItem('blogs', JSON.stringify(this.blogs));
    },
    resetForm() {
      this.posts.name = '';
      this.posts.date = null;
      this.posts.title = '';
      this.posts.tought = '';
      this.posts.photo = '';
    },
      updateBlog() {
      if (this.blogID) {
        const taskIndex = this.blogs.findIndex(blog => blog.id === this.blogID);
        if (taskIndex !== -1) {
          this.blogs[taskIndex] = { ...this.posts, id: this.blogID }; 
          this.saveBlogs(); 
          this.resetForm();
        }
      }
    },
     editBlog(id) {
      const blogToEdit = this.blogs.find(blog => blog.id === id);
      if (blogToEdit) {
        this.posts.name = blogToEdit.name;
        this.posts.date = blogToEdit.date;
        this.posts.title = blogToEdit.title;
        this.posts.photo = blogToEdit.photo;
        this.posts.tought = blogToEdit.tought;
        this.blogID = id; 
     
      }
    },
  },
  components: { Nav },
};
</script>