<template>
    <div>
        <div class="nav-bar">
            <div class="container">
                <div class="pro-title">
                    Xiaomi 12 Pro
                </div>
                <div class="pro-param">
                    <a href="">概述页</a><span>|</span>
                    <a href="">参数页</a><span>|</span>
                    <a href="">F码通道</a><span>|</span>
                    <a href="">咨询客服</a><span>|</span>
                    <a href="">用户评价</a>
                    <slot name="buy"></slot>
                </div>
            </div>
        </div>
        <div class="nav-bar nav-bar-hidden" :class="{'is_fixed':isfixed}">
            <div class="container">
                <div class="pro-title">
                    Xiaomi 12 Pro
                </div>
                <div class="pro-param">
                    <a href="">概述页</a><span>|</span>
                    <a href="">参数页</a><span>|</span>
                    <a href="">F码通道</a><span>|</span>
                    <a href="">咨询客服</a><span>|</span>
                    <a href="">用户评价</a>
                    <slot name="buy"></slot>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
    export default{
        name:'nav-bar',
        data(){
           return{
               isfixed:false
           }
        },
        mounted(){
            window.addEventListener('scroll',this.initHeight)
        },
        methods:{
            initHeight(){
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                this.isfixed = scrollTop > 218?true:false
            }
        },
        destroyed(){
            window.removeEventListener('scroll',this.initHeight,false)
        }
    }
</script>
<style lang="scss">
    .nav-bar{
        height: 70px;
        line-height: 70px;
        background-color: #fff;
        border-top: 1px solid #E0E0E0;
        box-shadow: 0 5px 5px rgb(0 0 0 / 7%);
        &.nav-bar-hidden{
            position: fixed;
            top: -10px;
            left: 0;
            z-index: 99;
            width: 100%;
            margin-top: -70px;
            transition: margin-top .3s linear;
            box-shadow: none;
        }
        &.is_fixed{
            position: fixed;
            top: 0px;
            width: 100%;
            margin-top: 0px;
            border-bottom: 1px solid #e0e0e0;
            box-shadow: 0 5px 5px rgb(0 0 0 / 7%);
        }
        .container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .pro-title{
                font-size: 18px;
                color: #424242;
                font-weight: 400;
            }
            .pro-param{
                font-size: 14px;
                span{
                    color: #e0e0e0;
                    margin: 0 10px;
                }
                a{
                    color: #616161;
                    transition: color .2s linear;
                    &:hover{
                        color:#ff6700
                    }
                }
            }
        }
    }
</style>