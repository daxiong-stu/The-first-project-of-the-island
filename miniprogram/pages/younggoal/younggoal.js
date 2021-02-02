// index.js
// 获取应用实例
const app = getApp()

Page({ 
  

  data:{
    movies:[
    {url:'/images/01.jpg'},
        {url:'/images/01.jpg'},
          {url:'/images/01.jpg'}
        ]
    },
    
    onLoadL:function(){},
    adc () {
          wx.navigateTo({
          url: '/pages/index/index',
          })
          },
})