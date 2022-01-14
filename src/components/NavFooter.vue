<template>
    <div class="footer">
        <div class="container">
            <div class="footer-service">
                <ul class="list-service clearfix">
                    <li>
                        <a href="javascript:void(0)">
                            <span class="icon-setting"></span>
                            预约维修服务
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <span class="icon-7day"></span>
                            7天无理由退货
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <span class="icon-15day"></span>
                            15天免费换货
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <span class="icon-post"></span>
                            满69包邮
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <span class="icon-local"></span>
                            520余家售后网点
                        </a>
                    </li>
                </ul>
            </div>
            <div class="footer-links clearfix">
                <dl>
                    <dt>帮助中心</dt>
                    <dd>
                        <a href="javascript:void(0)">账户管理</a>
                    </dd>
                    <dd>
                        <a href="javascript:void(0)">购物指南</a>
                    </dd>
                    <dd>
                        <a href="javascript:void(0)">订单操作</a>
                    </dd>
                </dl>
                <dl>
                    <dt>服务支持</dt>
                    <dd>
                        <a href="javascript:void(0)">售后政策</a>
                    </dd>
                    <dd>
                        <a href="javascript:void(0)">自助服务</a>
                    </dd>
                    <dd>
                        <a href="javascript:void(0)">相关下载</a>
                    </dd>
                </dl>
                <dl>
                    <dt>线下门店</dt>
                    <dd>
                        <a href="javascript:void(0)">小米之家</a>
                    </dd>
                    <dd>
                        <a href="javascript:void(0)">服务网点</a>
                    </dd>
                    <dd>
                        <a href="javascript:void(0)">授权体验店/专区</a>
                    </dd>
                </dl>
                <dl>
                    <dt>关于小米</dt>
                    <dd>
                        <a href="javascript:void(0)">了解小米</a>
                    </dd>
                    <dd>
                        <a href="javascript:void(0)">加入小米</a>
                    </dd>
                    <dd>
                        <a href="javascript:void(0)">投资者关系</a>
                    </dd>
                    <dd>
                        <a href="javascript:void(0)">企业社会责任</a>
                    </dd>
                    <dd>
                        <a href="javascript:void(0)">廉洁举报</a>
                    </dd>
                </dl>
                <dl>
                    <dt>关于我们</dt>
                    <dd>
                        <a href="javascript:void(0)">新浪微博</a>
                    </dd>
                    <dd>
                        <a href="javascript:void(0)">官方微信</a>
                    </dd>
                    <dd>
                        <a href="javascript:void(0)">联系我们</a>
                    </dd>
                    <dd>
                        <a href="javascript:void(0)">公益基金会</a>
                    </dd>
                </dl>
                <dl>
                    <dt>特色服务</dt>
                    <dd>
                        <a href="javascript:void(0)">F 码通道</a>
                    </dd>
                    <dd>
                        <a href="javascript:void(0)">礼物码</a>
                    </dd>
                    <dd>
                        <a href="javascript:void(0)">防伪查询</a>
                    </dd>
                </dl>
                <div class="col-contact">
                    <p class="phone">400-100-5678</p>
                    <p>8:00-18:00(仅收市话费)</p>
                    <a href="javascript:void(0)">
                        人工客服
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"nav-footer"
    }
</script>
<style lang="scss" >
    .footer{
       .container{
           width: 1226px;
           margin: auto;
           color: #616161;
           .footer-service{
               padding: 27px 0px;
               border-bottom: 1px solid #e0e0e0;
               ul{
                   margin: 0px;
                   padding: 0px;
                   list-style-type: none;
                   li{
                       font-size: 16px;
                       float: left;
                       height: 25px;
                       line-height: 25px;
                       text-align: center;
                       width: 19.8%;
                       border-left: 1px solid #e0e0e0;
                       a{
                           text-decoration: none;
                           color: #616161;
                           .icon-setting{
                               width: 25px;
                               height: 25px;
                               display: inline-block;
                               background: url('/imgs/icon-setting.png') no-repeat center;
                               background-size: 25px;
                               vertical-align: -5px;
                           }
                           .icon-7day{
                               width: 25px;
                               height: 25px;
                               display: inline-block;
                               background: url('/imgs/icon-7day.png') no-repeat center;
                               background-size: 25px;
                               vertical-align: -5px;
                           }
                           .icon-15day{
                               width: 25px;
                               height: 25px;
                               display: inline-block;
                               background: url('/imgs/icon-15day.png') no-repeat center;
                               background-size: 25px;
                               vertical-align: -5px;
                           }
                           .icon-post{
                               width: 25px;
                               height: 25px;
                               display: inline-block;
                               background: url('/imgs/icon-post.png') no-repeat center;
                               background-size: 25px;
                               vertical-align: -5px;
                           }
                           .icon-local{
                               width: 25px;
                               height: 25px;
                               display: inline-block;
                               background: url('/imgs/icon-local.png') no-repeat center;
                               background-size: 25px;
                               vertical-align: -5px;
                           }
                       }
                       a:hover{
                           color: #ff6600;
                           transition: color .2s;
                           .icon-setting{
                               background: url('/imgs/icon-setting-hover.png') no-repeat center;
                               background-size: 25px;
                               transition: all .2s;
                           }
                           .icon-7day{
                               background: url('/imgs/icon-7day-hover.png') no-repeat center;
                               background-size: 25px;
                               transition: all .2s;
                           }
                           .icon-15day{
                               background: url('/imgs/icon-15day-hover.png') no-repeat center;
                               background-size: 25px;
                               transition: all .2s;
                           }
                           .icon-post{
                               background: url('/imgs/icon-post-hover.png') no-repeat center;
                               background-size: 25px;
                               transition: all .2s;
                           }
                           .icon-local{
                               background: url('/imgs/icon-local-hover.png') no-repeat center;
                               background-size: 25px;
                               transition: all .2s;
                           }
                       }
                   }
                   li:first-child{
                       border-left: 0px;
                   }
               }
               .clearfix:after, .clearfix:before{
                  content: " ";
                  display: table;
               }
               .clearfix:after{
                   clear: both;
               }
           }
           .footer-links{
               padding: 40px 0;
               dl{
                   float: left;
                   width: 160px;
                   margin: 0px;
                   dt{
                    margin: -1px 0 26px;
                    font-size: 14px;
                    line-height: 1.25;
                    color: #424242;
                    }
                    dd{
                        margin: 10px 0 0;
                        font-size: 12px;
                        a{
                            color: #757575;
                            text-decoration: none;
                        }
                        a:hover{
                            color: #ff6600;
                            transition: color .2;
                        }
                    }
               }
               .col-contact{
                   float:right;
                   width:251px;
                   border-left: solid 1px #e0e0e0;
                   text-align: center;
                   color: #616161;
                   p{
                       margin: 0 0 5px 0;
                       font-size: 12px;
                   }
                   .phone{
                       font-size: 22px;
                       line-height: 1;
                       color: #ff6600;
                   }
                   a{
                       color: #ff6600;
                       border: #ff6600 1px solid;
                       width: 118px;
                       height: 28px;
                       font-size: 12px;
                       line-height: 28px;
                       display: inline-block;
                   }
                   a:hover{
                       color: #FFFFFF;
                       background-color: #ff6600;
                       transition: all .5s;
                   }
               }
               
           }
           .clearfix:after, .clearfix:before{
               content: " ";
               display: table;
           }
           .clearfix:after{
               clear: both;
           }

       }
       .container:before{
           content: " ";
           display: table;
       }
    }
    
    
</style>