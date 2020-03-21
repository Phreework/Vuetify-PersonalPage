import Vue from 'vue';
import Router from 'vue-router';
import Home from  './views/Home.vue';
import About from  './views/About.vue';
import Test from  './views/Test.vue';
import Gallery from  './views/Gallery.vue';
import Blog from  './views/Blog.vue';
Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path:'/home',
            name:'home',
            component:Home
        },
        {
            path:'/about',
            name:'about',
            component:About
        },
        {
            path:'/test',
            name:'test',
            component:Test
        },
        {
            path:'/blog',
            name:'blog',
            component:Blog
        },
        {
            path:'/gallery',
            name:'gallery',
            component:Gallery
        }

    ]
});