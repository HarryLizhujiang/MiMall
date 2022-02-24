<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <span class="sep">|</span>
                    <a href="javascript:;">MIUI</a>
                    <span class="sep">|</span>
                    <a href="javascript:;">IoT</a>
                    <span class="sep">|</span>
                    <a href="javascript:;">云服务</a>
                    <span class="sep">|</span>
                    <a href="javascript:;">天星数科</a>
                    <span class="sep">|</span>
                    <a href="javascript:;">有品</a>
                    <span class="sep">|</span>
                    <a href="javascript:;">小爱开放平台</a>
                    <span class="sep">|</span>
                    <a href="javascript:;">企业团购</a>
                    <span class="sep">|</span>
                    <a href="javascript:;">资质证照</a>
                    <span class="sep">|</span>
                    <a href="javascript:;">协议规则</a>
                    <span class="sep">|</span>
                    <a href="javascript:;">下载app</a>
                    <span class="sep">|</span>
                    <a href="javascript:;">智能生活</a>
                    <span class="sep">|</span>
                    <a href="javascript:;">Select Location</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="!username" @click="login">登录</a>
                    <span class="sep">|</span>
                    <a href="javascript:;" v-if="username">我的订单</a>
                    <a href="javascript:;" v-if="!username">注册</a>
                    <span class="sep">|</span>
                    <a href="javascript:;">消息通知</a>
                    <a href="javascript:;" class="cart" @click="goToCart"><span class="icon-cart"></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-log">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>Xiaomi手机</span>
                        <div class="container1">
                            <div class="children">
                                <ul>
                                    <li class="product" v-for="(item,index) in xiaomilist" :key="index">
                                        <a :href="'/#/product/'+item.id" target="_blank">
                                            <div class="pro-img">
                                                <img :src="item.img_url" alt="">
                                            </div>
                                            <div class="pro-name">{{item.product_name}}</div>
                                            <div class="pro-price">{{item.price}}元起</div>
                                        </a>
                                    </li>
                                    <div class="clearflot"></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>Redmi 红米</span>
                        <div class="container1">
                            <div class="children">
                                <ul>
                                    <li class="product" v-for="(item,index) in redmilist" :key="index">
                                        <a :href="'/#/product/'+item.id" target="_blank">
                                            <div class="pro-img">
                                                <img :src="item.img_url" alt="">
                                            </div>
                                            <div class="pro-name">{{item.product_name}}</div>
                                            <div class="pro-price">{{item.price}}元起</div>
                                        </a>
                                    </li>
                                    <div class="clearflot"></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="container1">
                            <div class="children">
                                <ul>
                                    <li class="product" v-for="(item,index) in tvlist" :key="index">
                                        <a :href="'/#/product/'+item.id" target="_blank">
                                            <div class="pro-img">
                                                <img :src="item.img_url" alt="">
                                            </div>
                                            <div class="pro-name">{{item.product_name}}</div>
                                            <div class="pro-price">{{item.price}}元起</div>
                                        </a>
                                    </li>
                                    <div class="clearflot"></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>笔记本</span>
                        <div class="container1">
                            <div class="children">
                                <ul>
                                    <li class="product" v-for="(item,index) in notebookList" :key="index">
                                        <a :href="'/#/product/'+item.id" target="_blank">
                                            <div class="pro-img">
                                                <img :src="item.img_url" alt="">
                                            </div>
                                            <div class="pro-name">{{item.product_name}}</div>
                                            <div class="pro-price">{{item.price}}元起</div>
                                        </a>
                                    </li>
                                    <div class="clearflot"></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>平板</span>
                        <div class="container1">
                            <div class="children">
                                <ul>
                                    <li class="product" v-for="(item,index) in tabletpcList" :key="index">
                                        <a :href="'/#/product/'+item.id" target="_blank">
                                            <div class="pro-img">
                                                <img :src="item.img_url" alt="">
                                            </div>
                                            <div class="pro-name">{{item.product_name}}</div>
                                            <div class="pro-price">{{item.price}}元起</div>
                                        </a>
                                    </li>
                                    <div class="clearflot"></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>家电</span>
                        <div class="container1">
                            <div class="children">
                                <ul>
                                    <li class="product" v-for="(item,index) in redmilist" :key="index">
                                        <a :href="'/#/product/'+item.id" target="_blank">
                                            <div class="pro-img">
                                                <img :src="item.img_url" alt="">
                                            </div>
                                            <div class="pro-name">{{item.product_name}}</div>
                                            <div class="pro-price">{{item.price}}元起</div>
                                        </a>
                                    </li>
                                    <div class="clearflot"></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>路由器</span>
                        <div class="container1">
                            <div class="children">
                                <ul>
                                    <li class="product" v-for="(item,index) in redmilist" :key="index">
                                        <a :href="'/#/product/'+item.id" target="_blank">
                                            <div class="pro-img">
                                                <img :src="item.img_url" alt="">
                                            </div>
                                            <div class="pro-name">{{item.product_name}}</div>
                                            <div class="pro-price">{{item.price}}元起</div>
                                        </a>
                                    </li>
                                    <div class="clearflot"></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>服务</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>社区</span>
                        <div class="children"></div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href=""></a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default{
        name:"nav-header",
        data(){
            return{
                username:this.$store.state.username,
                xiaomilist:[],
                redmilist:[],
                tvlist:[],
                notebookList:[],
                tabletpcList:[]
            }
        },
        mounted(){
            this.getXiaomilist();
            this.getRedmilist();
            this.getTVlist();
            this.getnotebookList();
            this.gettabletpc();
        },
        methods:{
            getXiaomilist(){
                this.axios.get('/XiaomiPhoneList').then((res)=>{
                    if(res.length > 6){
                        this.xiaomilist = res.slice(0,6)
                    }
                   
                })
            },
            getRedmilist(){
                this.axios.get('/RedmiPhoneList').then((res)=>{
                    if(res.length > 6){
                        this.redmilist = res.slice(0,6)
                    }
                   
                })
            },
            getTVlist(){
                this.axios.get('/TVList').then((res)=>{
                    if(res.length > 6){
                        this.tvlist = res.slice(0,6)
                    }else{
                        this.tvlist = res
                    }
                   
                })
            },
            getnotebookList(){
                this.axios.get('/notebookList').then((res)=>{
                    if(res.length > 6){
                        this.notebookList = res.slice(0,6)
                    }else{
                        this.notebookList = res
                    }
                   
                })
            },
            gettabletpc(){
                this.axios.get('/tabletpcList').then((res)=>{
                    if(res.length > 6){
                        this.tabletpcList = res.slice(0,6)
                    }else{
                        this.tabletpcList = res
                    }
                   
                })
            },
            goToCart(){
                this.$router.push("/cart");
            },
            login(){
                this.$router.push("/login")
            }
        }
    }
</script>
<style lang="scss">
@import url('./../../public/scss/bass.scss');
    .header{
        .nav-topbar{
            height: 39px;
            line-height: 39px;
            background: #333333;
            font-size: 12px;
            color: #b0b0b0;
            .container{
                
                display: flex;
                justify-content: space-between;
                align-items: center;
                a{
                    display:inline-block;
                    color: #b0b0b0;
                }
                a:hover{
                    color: #FFFFFF;
                }
                .sep{
                    color: #424242;
                    margin:0 8.5px
                }
                .cart{
                    width: 110px;
                    background: #666;
                    text-align: center;
                    margin-left: 15px;
                    .icon-cart{
                        display: inline-block;
                        width: 16px;
                        height: 12px;
                        background: url("/imgs/icon-cart.png") no-repeat center;
                        background-size: contain;
                        margin-right: 4px;
                    }
                }
                .cart:hover{
                    background-color: #FFFFFF;
                    color: #ff6600;
                    .icon-cart{
                        background: url("/imgs/icon-cart-hover.png") no-repeat center;
                        background-size: contain;
                    }
                }
                .cart-menu{
                    position: absolute;
                    right: 0px;
                    top: 40px;
                    height: 100px;
                    width: 316px;
                    background-color: red;

                }
            }
        }
        .nav-header{
            .container{
                height: 112px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .header-log{
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    a{
                        width: 55px;
                        height: 55px;
                        display: inline-block;
                        background: url("/imgs/logo-mi.png") no-repeat center;
                        background-size: 55px;
                        
                    }
                }
                .header-menu{
                    display: inline-block;
                    .item-menu{
                        display: inline-block;
                        color: #333333;
                        font-size: 16px;
                        line-height: 112px;
                        margin-left: 20px;
                        span{
                            cursor: pointer;
                        }
                        &:hover{
                            color: #ff6600;
                            .container1{
                                height: 220px;
                                opacity: 1;
                            }
                        }
                        .container1{
                            position: absolute;
                            top: 150px;
                            left: 0px;
                            right: 0px;
                            box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
                            border-top: 1px solid #e5e5e5;
                            height: 0px;
                            opacity: 0;
                            overflow: hidden;
                            background-color: #FFFFFF;
                            z-index: 10;
                            transition: all 0.5s;
                            .children{
                                width: 1226px;
                                margin: auto;
                                z-index: 10;
                                background-color: #FFFFFF;
                                .clearflot{
                                    clear: both;
                                }
                                .product{
                                    position: relative;
                                    float: left;
                                    width: 16.6%;
                                    height: 220px;
                                    font-size: 12px;
                                    line-height: 12px;
                                    text-align: center;
                                    a{
                                        display: inline-block;
                                    }
                                    img{
                                        height: 111px;
                                        width: auto;
                                        margin-top: 26px;
                                    }
                                    .pro-img{
                                        height: 137px;
                                    }
                                    .pro-name{
                                        font-weight: bold;
                                        margin-top: 19px;
                                        margin-bottom: 8px;
                                        color: #333333;
                                    }
                                    .pro-price{
                                        color: #ff6600;
                                    }
                                    &:before{
                                        content: " ";
                                        position: absolute;
                                        top: 28px;
                                        right: 0px;
                                        border-left: 1px solid #d7d7d7;
                                        height: 100px;
                                        width: 1px;
                                    }
                                    &:last-child:before{
                                        display: none;
                                    }
                                }
                            }
                        }
                        
                    }
                }
            }
        }
        .header-search{
            width: 315px;
            .wrapper{
                height: 50px;
                border: 1px solid #e0e0e0;
                display: flex;
                align-items: center;
                input{
                    border: none;
                    border-right: 1px solid #e0e0e0;
                    width: 245px;
                    height: 50px;
                    padding-left: 14px;
                }
                a{
                    display: inline-block;
                    width: 52px;
                    height: 50px;
                    background: url('/imgs/icon-search.png') no-repeat center; 
                    background-size: 18px;
                }
                a:hover{
                    background: url('/imgs/icon-search-hover.png') no-repeat center; 
                    background-size: 18px;
                    width: 54px;

                    background-color: #ff6600;
                }
            }
            .wrapper:hover{
                border: 1px solid #b0b0b0;
                input{
                    border-right: 1px solid #b0b0b0;
                }
            }
        }
        
    }
</style>