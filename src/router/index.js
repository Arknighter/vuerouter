import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

// import Home from '../components/Home.vue'
// import About from '../components/About.vue'

//分包  导入import()  
const Home = () => import( /* webpackChunkName:'home' */"../components/Home.vue")
const About = () => import( /* webpackChunkName:'about' */"../components/About.vue")


//创建一个路由：映射关系
const router = createRouter({
    //指定采用的模式 hash7
    // history: createWebHashHistory(),
    //createWebHistory 地址上没有#号
    history: createWebHistory(),
    //映射关系
    routes: [
        // { path: "/", component: Home},
        // redirect 重定向
        { 
            path: "/",
            redirect: "/home"
        },
        {
            //如果匹配错误路径显示错误组件  
            ///:pathMatch(.*)*     后面加*会解析成数组
            path:"/:pathMatch(.*)",
            component:() => import("../components/NoFound.vue")
        },
        {
            path: "/home", 
            component: Home
        },
        { 
            path: "/about", 
            component: About 
        },
        {
            path: "/user/:id",
            component:() => import("../components/User.vue")
        }
    ]
})

export default router