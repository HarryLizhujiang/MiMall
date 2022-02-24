<template>
    <div>
        <product-param>
            <template v-slot:buy>
                <button class="btn">立即购买</button>
            </template>
        </product-param>
        <div class="product-content">
            <div class="div1">
                <div class="header">
                    <img class="img1" src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi12proarp71i/header_img1.jpg" alt="">
                    <img class="img2" src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi12proarp71i/header_img2.png" alt="">
                </div>
            </div>
            <div class="div2">
                <div class="divText">
                    <span class="txt1">
                        好快,好稳,
                        <br>
                        好一次强上加强。
                    </span>
                    <br>
                    <span class="txt2">
                        高通全新一代芯片賦能,速度大幅提升。<br>
                        三大专业主摄影像加持,能力全面进化。<br>
                        大师级设计理念新诠释,质感简而不凡。<br>
                        斩获十五项记录旗舰屏,感官万般出众。
                    </span>
                </div>
            </div>
            <div class="div3">
                <span class="span1">好戏连台的全面突破<br>好好看!</span>
                <div class="content">
                    <div class="div-a">
                        <div class="img1">
                            <div class="txt-a">
                                <span class="span-a">全新一代&nbsp;骁龙8<br>移动平台</span>
                                <span class="span-b">动态性能调度技术</span>
                            </div>
                        </div>
                        <div class="img2">
                            <div class="txt-b">
                                <span class="span-c">120w&nbsp;小米澎湃秒充<br>4600mAh&nbsp;大电量</span>
                                <br>
                                <span class="span-d">自研[小米澎湃P1]芯片<br>最快18分钟充电至100%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="div4">
                <video muted loop="loop" width="100%" autoplay="autoplay" src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi12proarp71i/video1-1.mp4"></video>
                <div class="btn-box">
                    <div @click="play" class="btn-a"></div>
                </div>
                
            </div>
        </div>
        <div :class="[ishide?'video-win-hide':'video-win']">
        </div>
        <div :class="[ishide?'animate__animated animate__fadeOutUp fixvideo-hide ':'fixvideo animate__animated animate__fadeInDown']">
            <div class="videoBox">
                <video id="play" class=""  width="1000px" height="561px" controls="controls"  src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi12proarp71i/video1-2.mp4"></video>
                <div class="clsbtn" @click="closeVideo"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import ProductParam from './../components/ProductParam'
    export default{
        name:"product",
        components:{
            ProductParam
        },
        data(){
            return {
                ishide:true
            }
        },
        methods:{
            play(){
                this.ishide = false
                document.getElementById('play').load()
                document.getElementById('play').play()
            },
            closeVideo(){
                this.ishide = true
                document.getElementById('play').pause()
            }
        }
        
    }
</script>
<style lang="scss">
    .btn{
        display: inline-block;
        width: 110px;
        line-height: 30px;
        text-align: center;
        background-color: #ff6700;
        color: #fff;
        cursor: pointer;
        border: 0px;
        margin-left: 10px;
        transition: background-color .2s linear;
        &:hover{
            background-color: #f25807;
        }
    }
    .product-content{
        min-width: 1226px;
        background-color: #000;
        position: relative;
        z-index: 0;
        .div1{
            width: 25.6rem;
            background-size: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            box-sizing: border-box;
            flex-shrink: 0;
        }
        .div2{
            background: url(https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi12proarp71i/106.jpg);
            background-size: 100%;
            width: 25.6rem;
            height: 19.44rem;
            .divText{
                font-size: .85rem;
                text-align: center;
                color: #fff;
                line-height: 1.05rem;
                .txt1{
                    margin-top: 3.01rem;
                    display: inline-block;
                    font-weight: 550px;
                }
                .txt2{
                    display: inline-block;
                    font-size: .36rem;
                    line-height: .55rem;
                    font-weight: 550;
                    margin-top: .6rem;
                }
            }
        }
        .div3{
            width: 25.6rem;
            text-align: center;
            .span1{
                font-size: .85rem;
                text-align: center;
                color: #fff;
            }
            .content{
                width: 15.89rem;
                margin: auto;
                margin-top: 1.47rem;
                .div-a{
                    display: flex;
                    padding-left: 1.4rem;
                    .img1{
                        width: 7.68rem;
                        height: 7.41rem;
                        background: url("https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi12proarp71i/3782.png");
                        background-size: 100%;
                        margin-right: 0.42rem;
                        .txt-a{
                            width: 2.45rem;
                            height: 1.47rem;
                            margin-top: 0.65rem;
                            margin-left: 0.65rem;
                            .span-a{
                                display: block;
                                text-align: left;
                                font-size: 0.36rem;
                                color: #fff;
                                font-family: MILanPro_MEDIUM--GB1-4;
                                line-height: .48rem;
                                white-space: nowrap;
                                font-weight: 600;
                            }
                            .span-b{
                                display: block;
                                text-align: left;
                                font-size: .2rem;
                                color: #787878;
                                line-height: .28rem;
                                font-family: MILanPro_MEDIUM--GB1-4;
                                margin-top: .2rem;
                            }
                        }
                    }
                    .img2{
                        width: 5.4rem;
                        height: 7.3rem;
                        background:url(https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi12proarp71i/3816.png);
                        background-size: 100%;
                        .txt-b{
                            width: 2.91rem;
                            margin: auto;
                            margin-top: 0.65rem;
                            .span-c{
                                font-size: 0.36rem;
                                color: #fff;
                                font-family: MILanPro_MEDIUM--GB1-4;
                                line-height: .48rem;
                                white-space: nowrap;
                                font-weight: 600;
                            }
                            .span-d{
                                display: inline-block;
                                font-size: .2rem;
                                color: #787878;
                                line-height: .28rem;
                                font-family: MILanPro_MEDIUM--GB1-4;
                                margin-top: .2rem;
                            }
                        }
                    }
                }
            }
        }
        .div4{
            margin-top: 100px;
            position: relative;
            .btn-box{
                position: absolute;
                top: 0px;
                left: 0px;
                right: 0px;
                bottom: 0px;
                .btn-a{
                    width: 60px;
                    height: 60px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    background-image: url("https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi12proarp71i/365.png");
                    background-size: 100% 100%;
                }
            }
        }
        .header{
            height: 13rem;
            .img1{
                width: 25.6rem;
            }
            .img2{
                position: absolute;
                left: 2.95rem;
                top: 4.56rem;
                width: 7.22rem;
                
            }
        }
        
    }
    .video-win{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        background-color: #000;
        opacity: .5;
        transition: opacity .3s;
        
    }
    .video-win-hide{
        display: none;
    }
    .fixvideo-hide{
        display: none;
    }
    .fixvideo{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        .videoBox{
            width: 1000px;
            height: 561px;
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            .clsbtn{
                width: 30px;
                height: 30px;
                position: absolute;
                right: 15px;
                top: 15px;
                background-image: url('/imgs/close.png');
                background-size: 100%;
                cursor: pointer;
            }
            
        }
        
    }
</style>