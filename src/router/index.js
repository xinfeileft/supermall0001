import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Catc = () => import('../views/category/Catc')
const My = () => import('../views/my/My')
const Buy = () => import('../views/buy/Buy')

//1.安装插件
Vue.use(VueRouter)

//2.创建路由对象
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/my',
        component: My
    },
    {
        path: '/category',
        component: Catc
    },
    {
        path: '/buy',
        component: Buy
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})
//3.导出router
export default router