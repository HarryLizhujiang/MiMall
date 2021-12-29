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
                    <a href="javascript:;">登录</a>
                    <span class="sep">|</span>
                    <a href="javascript:;">注册</a>
                    <span class="sep">|</span>
                    <a href="javascript:;">消息通知</a>
                    <a href="javascript:;" class="cart"><span class="icon-cart"></span>购物车</a>
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
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>Redmi 红米</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>笔记本</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>平板</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>家电</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>路由器</span>
                        <div class="children"></div>
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
                    <div class="search-box"></div>
                    <div class="search-btn"></div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default{
        name:"nav-header"
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
                    width: 850px;
                    .item-menu{
                        display: inline-block;
                        color: #333333;
                        font-size: 16px;
                        line-height: 112px;
                        margin-left: 20px;
                    }
                }
            }
        }
        
    }
</style>