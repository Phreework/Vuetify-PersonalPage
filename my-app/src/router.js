import Vue from 'vue';
import Router from 'vue-router';
import Home from  './views/Home.vue';
import About from  './views/About.vue';
import Test from  './views/Test.vue';
import Gallery from  './views/Gallery.vue';
import Blog from  './views/Blog.vue';
import Timeline from  './views/Timeline.vue';
import Article from  './views/Article.vue';
import Project from  './views/Project.vue';
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
            name:'homex',
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
        },
        {
            path:'/timeline',
            name:'timeline',
            component:Timeline
        },
        {
            path:'/article',
            name:'article',
            component:Article
        },
        {
            path:'/project',
            name:'project',
            component:Project
        },
    ]
});