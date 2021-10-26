<template>
    <div class="index">
        <div class="container">
            <div class="swiper_box">
                <!-- 左侧菜单 -->
                <div class="nav_menu">
                    <ul class="menu_warp">
                        <li class="menu_item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu_item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu_item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu_item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu_item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu_item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu_item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu_item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children"></div>
                        </li>
                    </ul>
                </div>
                <!-- 轮播 -->
                <swiper v-bind:options="swiperOption">
                    <swiper-slide class="swiper-slide" v-for="(item,index) in slideList" v-bind:key="index">
                        <a v-bind:href="'/#/product/'+item.id">
                            <img v-bind:src="item.img">
                        </a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box"></div>
            <div class="banner"></div>
            <div class="product-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar'

import { Swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'


export default {
    name: 'index',
    components:{
        ServiceBar,

        swiperSlide,
        Swiper
    },
    data(){
        return {
            swiperOption:{
                autoplay: true,
                autoplay: {
                    delay: 1500,//1秒切换一次
                },
                loop: true,
                effect: 'cube',
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 100,
                    shadowScale: 0.6
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            },
            slideList:[
                {
                    id:42,
                    img:'/imgs/slider/slide-1.jpg'
                },
                {
                    id:45,
                    img:'/imgs/slider/slide-2.jpg'
                },
                {
                    id:46,
                    img:'/imgs/slider/slide-3.jpg'
                },
                {
                    id:'',
                    img:'/imgs/slider/slide-4.jpg'
                },
                {
                    id:'',
                    img:'/imgs/slider/slide-5.jpg'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
    .index{
        .swiper_box{
            // div
            .nav_menu{
                position: absolute;
                width: 264px;
                height: 399px;
                // height: 451px;
                z-index: 2;
                padding: 26px 0;
                background-color: #55585a82;
                // box-sizing: border-box;

                // ul
                .menu_warp{
                    // li
                    .menu_item{
                        width: 264px;
                        height: 50px;
                        line-height: 50px;
                        a{
                            width: 234px;
                            position: relative;
                            display: block;
                            font-size: 16px;
                            color: #fff;
                            padding-left: 30px;
                            &::after{
                                position: absolute;
                                right: 30px;
                                top: 17.5px;

                                content: '';
                                display:inline-block;
                                width:10px;
                                height:15px;
                                background:url('/imgs/icon-arrow.png') no-repeat center;
                                background-size:contain;
                            }
                        }
                        &:hover{
                            background-color: #FF6600;
                        }
                    }
                }
            }
            .swiper-container{
                .swiper-button-prev{
                    left: 274px;
                }
                height: 451px;
                img{
                    width: 1226px;
                    height: 100%;
                }
            }
        }
    }
</style>