import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home'
import Index from '../pages/index'
import Product from '../pages/product'
import Detail from '../pages/detail'
import Cart from '../pages/cart'
import Order from '../pages/order'
import OrderConfirm from '../pages/orderConfirm'
import OrderList from '../pages/orderList'
import OrderPay from '../pages/orderPay'
import AliPay from '../pages/alipay'

Vue.use(VueRouter)

const routes = [
  {
    // 商城首页
    path: '/',
    name: 'home',
    component:Home,
    redirect:'/index',
    children:[
      {
        path: '/index',
        name: 'index',
        component:Index
      },
      {
        path: '/product/:id',
        name: 'product',
        component:Product
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component:Detail
      }
    ]
  },
  // 购物车
  {
    path: '/cart',
    name: 'cart',
    component:Cart
  },
  // 订单支付
  {
    path: '/order',
    name: 'order',
    component:Order,
    children:[
      {
        path: 'list',
        name: 'order-list',
        component:OrderList,
      },
      {
        path: 'confirm',
        name: 'order-confirm',
        component:OrderConfirm,
      },
      {
        path: 'pay',
        name: 'order-pay',
        component:OrderPay,
      },
      {
        path: 'alipay',
        name: 'order-alipay',
        component:AliPay,
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router