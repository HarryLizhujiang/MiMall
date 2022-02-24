<template>

   <div class='login'>
       <div class="login-left">
           
       </div>
       <div class="login-right">
           <div class="header">
               <div class="log">
                   <img src="/imgs/logo-mi.png" alt="">
                   小米帐号
               </div>
           </div>
           <div class="body">
               <div class="card">
                   <div class="top">
                       登录
                   </div>
                   <div class="userinput">
                       <input type="text" v-model="userName"  name="account" placeholder="邮箱/手机号码/小米ID">
                   </div>
                   <div class="passinput">
                       <input type="password" v-model="passWord" name="account" placeholder="密码">
                   </div>
                   <div class="btn" @click="login">
                       登录
                   </div>
               </div>
           </div>
       </div>
   </div>

</template>

<script>

   export default {

       components: {
           
       },
       data(){
           return{
                userName:'',
                passWord:''
           }
       },
       methods:{
           login(){
               if(this.userName != "" && this.passWord != ""){
                   this.$store.dispatch('saveUserName',this.userName)
                   this.$router.push('/index')
               }else{
                   alert("请输入用户名")
               }
           }
       }

   }
</script>


<style scoped lang=scss>
    .login{
        min-width: 1226px;
        .login-left{
            width: 375px;
            position: fixed;
            left: 0px;
            top: 0px;
            bottom: 0px;
            background: url('https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.4994397e.jpg');
            background-size: 100%;
        }
        .login-right{
            position: fixed;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            margin-left: 375px;
            .header{
                .log{
                    height: 40px;
                    font-size: 26px;
                    font-weight: 500;
                    line-height: 40px;
                    margin: 25px;
                    img{
                        width: 40px;
                        height: 40px;
                        vertical-align: top;
                    }
                }
            }
            .body{
                padding-top: 88px;
                .card{
                    width: 450px;
                    margin: auto;
                    box-shadow: 0 20px 50px 0 hsl(0deg 0% 64% / 10%);
                    .top{
                        color: #333;
                        font-weight: 500;
                        font-size: 20px;
                        padding-top: 25px;
                        padding-left: 45px;
                    }
                    .userinput{
                        width: 354px;
                        height: 60px;
                        border-radius: 4px;
                        border: 1px solid rgba(0,0,0,0);
                        margin-left: 45px;
                        background-color: #f9f9f9;
                        margin-top: 30px;
                        input{
                            width: 354px;
                            height: 60px;
                            border: none;
                            background-color: rgba(0,0,0,0);
                            margin-left: 19px;
                            font-size: 18px;
                        }
                    }
                    .passinput{
                        width: 354px;
                        height: 60px;
                        border-radius: 4px;
                        border: 1px solid rgba(0,0,0,0);
                        margin-left: 45px;
                        background-color: #f9f9f9;
                        margin-top: 30px;
                        input{
                            width: 354px;
                            height: 60px;
                            border: none;
                            background-color: rgba(0,0,0,0);
                            margin-left: 19px;
                            font-size: 18px;
                        }
                    }
                    .btn{
                        width: 354px;
                        height: 60px;
                        border-radius: 4px;
                        border: 1px solid rgba(0,0,0,0);
                        margin-left: 45px;
                        background-color: #ff5c00;
                        margin-top: 30px;
                        font-size: 20px;
                        line-height: 60px;
                        opacity: .4;
                        margin-bottom: 60px;
                    }
                }
            }
        }
    }
</style>