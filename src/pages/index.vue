<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <swiper class="swiper" :options="swiperOption">
                    <swiper-slide>
                        <a href="">
                            <img width="1226" height="460" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76a18da893789146ac3f75510a3b56f4.jpg?thumb=1&w=1226&h=460&f=webp&q=90" alt="">
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="">
                            <img width="1226" height="460" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a8c552d4d6a06809892d007faeddedf.jpg?w=2452&h=920" alt="">
                        </a>
                    </swiper-slide>                    
                    <swiper-slide>
                        <a href="">
                            <img width="1226" height="460" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a532e33470d046b3f044d5ea49fc5e9e.png?thumb=1&w=1226&h=460&f=webp&q=90" alt="">
                        </a>
                    </swiper-slide>                    
                    <swiper-slide>
                        <a href="">
                            <img width="1226" height="460" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7527aaa1011a9032ce94d7e1dfe953c.jpg?thumb=1&w=1226&h=460&f=webp&q=90" alt="">
                        </a>
                    </swiper-slide>                    
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                  </swiper>


            </div>
            <div class="ads-box">

            </div>
            <div class="banner">

            </div>
            <div class="product-phone">

            </div>
        </div>
    </div>
</template>
<script>

    // Import Swiper Vue.js components
   
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'


    // Import Swiper styles
   
    export default {
        name: 'index',
        components: {
            Swiper,
            SwiperSlide,
        },
        data() {
            return {
                swiperOption: {
                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        bulletClass:"swiper-pagination-bullet",
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    loop:true,
                    autoplay:{
                        delay:5000,
                    },
                    effect : 'fade',
                }
            }
        }
        
    }
</script>
<style lang="scss">
    .swiper {
        height: 460px;
        width: 1226px;
        .swiper-button-next{
            color: rgba(0, 0, 0, 0)!important;
            background: url("/imgs/icon-slides.png") no-repeat -125px 50%;
            right: 0;
            left: auto;
            &:hover{
                background-position: -42px 50%;
            }
        }
        .swiper-button-prev{
            color: rgba(0, 0, 0, 0)!important;
            background: url("/imgs/icon-slides.png") no-repeat -84px 50%;
            left: 0;
            right: auto;
            &:hover{
                background-position: 0 50%;
            }
        }
        .swiper-button-next, .swiper-button-prev {
            position: absolute;
            top: 50%;
            width: 41px;
            height: 69px;
            margin-top: -35px;
            z-index: 10;
            cursor: pointer;
            outline: none;
        }
        .swiper-pagination{
            width: 400px;
            left: auto;
            right: 30px;
            bottom: 20px;
            text-align: right;
            .swiper-pagination-bullet{
                width: 6px;
                height: 6px;
                border: 2px solid #fff;
                border-color: hsla(0,0%,100%,.3);
                border-radius: 10px;
                overflow: hidden;
                background: rgba(0,0,0,.4);
                opacity: 1;
            }
            .swiper-pagination-bullet-active{
                background: hsla(0,0%,100%,.4);
                border-color: rgba(0,0,0,.4);
            }
        }
    }
</style>