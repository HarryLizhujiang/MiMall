module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:'localhost',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    }
}