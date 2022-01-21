<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机
                                <img class="icon-arrow" src="/imgs/icon-arrow-right.png" alt="">
                            </a>
                            <div class="children">
                                <ul v-for="(item,index) in menuList" :key="index">
                                    <li v-for="(sub,index) in item" :key="index">
                                        <a :href="'/#/product/'+sub.id">
                                        <img :src="sub.img_url" width="40" height="40" alt="">
                                        <span>{{sub.product_name}}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视
                                <img class="icon-arrow" src="/imgs/icon-arrow-right.png" alt="">
                            </a>
                            <div class="children">
                                <ul v-for="(item,index) in tvList" :key="index">
                                    <li v-for="(sub,index) in item" :key="index">
                                        <a :href="'/#/product/'+sub.id">
                                        <img :src="sub.img_url" width="40" height="40" alt="">
                                        <span>{{sub.product_name}}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 平板
                                <img class="icon-arrow" src="/imgs/icon-arrow-right.png" alt="">
                            </a>
                            <div class="children">
                                <ul v-for="(item,index) in notebookList" :key="index">
                                    <li v-for="(sub,index) in item" :key="index">
                                        <a :href="'/#/product/'+sub.id">
                                        <img :src="sub.img_url" width="40" height="40" alt="">
                                        <span>{{sub.product_name}}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电
                                <img class="icon-arrow" src="/imgs/icon-arrow-right.png" alt="">
                            </a>
                            <div class="children">
                                <ul v-for="(item,index) in menuList" :key="index">
                                    <li v-for="(sub,index) in item" :key="index">
                                        <a :href="'/#/product/'+sub.id">
                                        <img :src="sub.img_url" width="40" height="40" alt="">
                                        <span>{{sub.product_name}}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴
                                <img class="icon-arrow" src="/imgs/icon-arrow-right.png" alt="">
                            </a>
                            <div class="children">
                                <ul v-for="(item,index) in menuList" :key="index">
                                    <li v-for="(sub,index) in item" :key="index">
                                        <a :href="'/#/product/'+sub.id">
                                        <img :src="sub.img_url" width="40" height="40" alt="">
                                        <span>{{sub.product_name}}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器
                                <img class="icon-arrow" src="/imgs/icon-arrow-right.png" alt="">
                            </a>
                            <div class="children">
                                <ul v-for="(item,index) in menuList" :key="index">
                                    <li v-for="(sub,index) in item" :key="index">
                                        <a :href="'/#/product/'+sub.id">
                                        <img :src="sub.img_url" width="40" height="40" alt="">
                                        <span>{{sub.product_name}}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件
                                <img class="icon-arrow" src="/imgs/icon-arrow-right.png" alt="">
                            </a>
                            <div class="children">
                                <ul v-for="(item,index) in menuList" :key="index">
                                    <li v-for="(sub,index) in item" :key="index">
                                        <a :href="'/#/product/'+sub.id">
                                        <img :src="sub.img_url" width="40" height="40" alt="">
                                        <span>{{sub.product_name}}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">健康 儿童
                                <img class="icon-arrow" src="/imgs/icon-arrow-right.png" alt="">
                            </a>
                            <div class="children">
                                <ul v-for="(item,index) in menuList" :key="index">
                                    <li v-for="(sub,index) in item" :key="index">
                                        <a :href="'/#/product/'+sub.id">
                                        <img :src="sub.img_url" width="40" height="40" alt="">
                                        <span>{{sub.product_name}}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">耳机 音箱
                                <img class="icon-arrow" src="/imgs/icon-arrow-right.png" alt="">
                            </a>
                            <div class="children">
                                <ul v-for="(item,index) in menuList" :key="index">
                                    <li v-for="(sub,index) in item" :key="index">
                                        <a :href="'/#/product/'+sub.id">
                                        <img :src="sub.img_url" width="40" height="40" alt="">
                                        <span>{{sub.product_name}}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包
                                <img class="icon-arrow" src="/imgs/icon-arrow-right.png" alt="">
                            </a>
                            <div class="children">
                                <ul v-for="(item,index) in menuList" :key="index">
                                    <li v-for="(sub,index) in item" :key="index">
                                        <a :href="'/#/product/'+sub.id">
                                        <img :src="sub.img_url" width="40" height="40" alt="">
                                        <span>{{sub.product_name}}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <swiper class="swiper" :options="swiperOption">
                    <swiper-slide v-for="(item,index) in slideList" :key="index">
                        <a :href="'/#/product/'+item.id">
                            <img width="1226" height="460" :src="item.img" alt="">
                        </a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                  </swiper>


            </div>
            <div class="ads-box">
                <div class="QuickN">
                    <ul>
                        <li>
                            <a href="javascript:;">
                                <img src="/imgs/icon-guarantee.png" alt="">
                                保障服务
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src="/imgs/icon-enterprise.png" alt="">
                                企业团购
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src="/imgs/icon-f.png" alt="">
                                F码通道
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src="/imgs/icon-card.png" alt="">
                                米粉卡
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src="/imgs/icon-new.png" alt="">
                                以旧换新
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src="/imgs/icon-huofei.png" alt="">
                                话费充值
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="ad-item">
                    <ul>
                        <li v-for="(item,index) in adsList" :key="index">
                            <a :href="'/#/product/'+item.id">
                                <img :src="item.img_url" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="banner">
                <a href="/#/product/112">
                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f334fbd05d5681bb838fefd1c815d88c.jpg?thumb=1&w=1226&h=120&f=webp&q=90" alt="">
                </a>
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
                        delay:4000,
                        disableOnInteraction : false
                    },
                    effect : 'fade',
                    
                },
                slideList:[
                    {
                        id:"45",
                        img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76a18da893789146ac3f75510a3b56f4.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
                    },
                    {
                        id:"46",
                        img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a8c552d4d6a06809892d007faeddedf.jpg?w=2452&h=920"
                    },
                    {
                        id:"47",
                        img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a532e33470d046b3f044d5ea49fc5e9e.png?thumb=1&w=1226&h=460&f=webp&q=90"
                    },
                    {
                        id:"48",
                        img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7527aaa1011a9032ce94d7e1dfe953c.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
                    }
                ],
                menuList:[],
                tvList:[],
                notebookList:[],
                adsList:[]
            }
        },
        mounted(){
            this.getmenuList();
            this.gettvList();
            this.getnotebookList();
            this.getadsList()

        },
        methods:{
            getmenuList(){
                this.axios.get("/PhoneList").then((res)=>{
                    let len = res.length;
                    let n = 6; 
                    let lineNum = len % 6 === 0 ? len / 6 : Math.floor( (len / 6) + 1 );
                    let phonel = [];
                    for (let i = 0; i < lineNum; i++) {
                        let temp = res.slice(i*n, i*n+n);
                        phonel.push(JSON.parse(JSON.stringify(temp)));
                    }
                    this.menuList = phonel
                })
            },
            gettvList(){
                this.axios.get("/TVList").then((res)=>{
                    let len = res.length;
                    let n = 6; 
                    let lineNum = len % 6 === 0 ? len / 6 : Math.floor( (len / 6) + 1 );
                    let phonel = [];
                    for (let i = 0; i < lineNum; i++) {
                        let temp = res.slice(i*n, i*n+n);
                        phonel.push(JSON.parse(JSON.stringify(temp)));
                    }
                    this.tvList = phonel
                })
            },
            getnotebookList(){
                this.axios.get("/notebookList").then((res)=>{
                    let len = res.length;
                    let n = 6; 
                    let lineNum = len % 6 === 0 ? len / 6 : Math.floor( (len / 6) + 1 );
                    let phonel = [];
                    for (let i = 0; i < lineNum; i++) {
                        let temp = res.slice(i*n, i*n+n);
                        phonel.push(JSON.parse(JSON.stringify(temp)));
                    }
                    this.notebookList = phonel
                })
            },
            getadsList(){
                this.axios.get("/adsList").then((res)=>{
                    this.adsList = res
                })
            }
        }
        
    }
</script>
<style lang="scss">
    .swiper-box{
        .nav-menu{
            position: absolute;
            width: 234px;
            height: 460px;
            z-index: 9;
            font-size: 14px;
            .menu-wrap{
                padding: 20px 0;
                background: rgba(105,101,101,.6);
            }
            .menu-item{
                height: 42px;
                a{
                    position: relative;
                    display: block;
                    height: 42px;
                    line-height: 42px;
                    padding-left: 30px;
                    color:white;
                    .icon-arrow{
                        position: absolute;
                        top:12px;
                        right: 30px;
                        width: 16px;
                        height: 16px;
                    }
                }
                .children{
                    display: none;
                    position: absolute;
                    left: 234px;
                    top: 0px;
                    z-index: 9;
                    height: 458px;
                    border: 1px solid #e0e0e0;
                    border-left: 0px;
                    background: #fff;
                    box-shadow: 0 8px 16px rgb(0 0 0 / 18%);
                    width: 992px;

                    ul{
                        width: 248px;
                        height: 458px;
                        margin: 0;
                        padding: 2px 0;
                        list-style-type: none;
                        float: left;
                        li{
                            position: relative;
                            width: 265px;
                            height: 76px;
                            a{
                                display: block;
                                padding: 18px 20px;
                                line-height: 40px;
                                color: #333;
                                transition: color .2s;
                                img{
                                    margin-right: 12px;
                                    vertical-align: middle;
                                }
                                span{
                                    width: 172px;
                                    line-height: 40px;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    overflow: hidden;
                                }
                            }
                            &:hover{
                                a{
                                    color: #ff6600;
                                }
                                
                            }
                        }
                    }
                }
                &:hover{
                    background-color: #ff6600;
                    .children{
                        display: block;
                    }
                    transition: all .2s;
                }
            }
            
        }
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
                left: 234px;
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
    }
    .ads-box{
        &::before{
            content: " ";
            display: table;
        }
        &::after{
            content: " ";
            clear: both;
            display: table;
        }
        margin-top: 14px;
        .QuickN{
            width: 234px;
            float: left;
            min-height: 1px;
            ul{
                margin: 0px;
                padding: 3px;
                list-style-type: none;
                font-size: 12px;
                text-align: center;
                background: #5f5750;
                li{
                    position: relative;
                    float: left;
                    width: 70px;
                    height: 82px;
                    padding: 0 3px;
                    &:before{
                        position: absolute;
                        content: " ";
                        background: #665e57;
                        top: -1px;
                        left: 6px;
                        width: 64px;
                        height: 1px;
                    }
                    &::after{
                        position: absolute;
                        content: " ";
                        background: #665e57;
                        top: 6px;
                        left: 0px;
                        width: 1px;
                        height: 70px;
                    }
                    a{
                        display: block;
                        padding-top: 18px;
                        text-overflow: ellipsis;
                        color: #fff;
                        opacity: .7;
                        transition: opcity .2s;
                        img{
                            display: block;
                            width: 24px;
                            width: 24px;
                            margin: 0 auto 4px;
                        }
                        &:hover{
                            opacity: 1;
                        }
                    }
                }
                &::before{
                    content: " ";
                    display: table;
                }
                &::after{
                    content: " ";
                    clear: both;
                    display: table;
                }
            }
        }
        .ad-item{
            width: 978px;
            float: left;
            margin-left: 14px;
            min-height: 1px;
            ul{
                li{
                    float: left;
                    width: 316px;
                    height: 170px;
                    margin-left: 15px;
                    &:first-child{
                        margin-left: 0px;
                    }
                    a{
                        display: block;
                        height: 170px;
                        img{
                            display: block;
                            width: 316px;
                            height: 170px;
                        }
                    }
                }
                &::before{
                    content: " ";
                    display: table;
                }
                &::after{
                    content: " ";
                    display: table;
                    clear: both;
                }
            }
        }
    }
    .banner{
        height: 120px;
        margin: 22px 0px;
        overflow: hidden;
    }
</style>