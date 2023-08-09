import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

// import Home from '../components/Home.vue'
// import About from '../components/About.vue'

//分包  导入import()
const Home = () =>
  import(/* webpackChunkName:'home' */ "../components/Home.vue");
const About = () =>
  import(/* webpackChunkName:'about' */ "../components/About.vue");

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
      redirect: "/home",
    },
    {
      //如果匹配错误路径显示错误组件
      ///:pathMatch(.*)*     后面加*会解析成数组
      path: "/:pathMatch(.*)",
      component: () => import("../components/NoFound.vue"),
    },
    {
      name: "home",
      path: "/home",
      component: Home,
      children: [
        {
          path: "/home",
          redirect: "/home/recommend"
        },
        {
          path:"recommend",
          component:() => import("../components/HoemRecommend.vue")
        },
      ],
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/login",
      component: () => import("../components/Login.vue")
    },
    {
      path: "/user/:id",
      component: () => import("../components/User.vue"),
    },
  ],
});

//[动态路由]模拟是管理员登录了
let isAdmin = true;
if (isAdmin) {
  //动态添加一级路由
  router.addRoute({
    path: "/admin",
    component: () => import("../components/Admin.vue"),
  })
  //添加动态子路由
  router.addRoute("home",{
    path:"vip",
    component:() => import("../components/HomeVip.vue")
  })

}

console.log(router.getRoutes())


//路由导航守卫   
//在任何路由上进行跳转前，传入到beforeeach都会被回调
router.beforeEach( (to , from) =>{
    console.log(to,from)
    //进入到任何页面都跳转到/login
    // if( to.path !== "/login") {
    //   return "/login"
    // }

    // localStorage.removeItem("token")
    // localStorage.setItem("token","xasdayjh")
    // const token = localStorage.getItem("token")
    // if(!token && to.path === "/order"){
    //   return "/login"
    // }

})



export default router;
