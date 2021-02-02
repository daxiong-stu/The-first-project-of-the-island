// pages/my/my.js
const app = getApp();
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    havauser:false,
    list: ['待参加', '待录取', '待评价'],
    id: 0,
    allactivity: [
         [
      //   {
      //   key: 0,
      //   url: 'cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/Jellyfish.jpg',
      //   title: '走进永庆坊，寻觅西关情走进永庆坊，寻觅西关情走进永庆坊，寻觅西关情走进永庆坊，寻觅西关情走进永庆坊，寻觅西关情走进永庆坊，寻觅西关情',
      //   time: '2020/01/23'
      // },
      // {
      //   key: 1,
      //   url: 'cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/Hydrangeas.jpg',
      //   title: 'STEAM科技艺术之圣诞发光故事板',
      //   time: '2020/12/26'
      // }
    ],
      [
      //   {
      //   key: 0,
      //   url: 'cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/Jellyfish.jpg',
      //   title: '走进永庆坊，寻觅西关情走进永庆坊，寻觅西关情走进永庆坊，寻觅西关情走进永庆坊，寻觅西关情走进永庆坊，寻觅西关情走进永庆坊，寻觅西关情',
      //   time: '2020/01/23'
      // }
    ],
      [
      //   {
      //   key: 0,
      //   url: 'cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/Hydrangeas.jpg',
      //   title: 'STEAM科技艺术之圣诞发光故事板',
      //   time: '2020/12/26'
      // },
      // {
      //   key: 1,
      //   url: 'cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/Jellyfish.jpg',
      //   title: '走进永庆坊，寻觅西关情走进永庆坊，寻觅西关情走进永庆坊，寻觅西关情走进永庆坊，寻觅西关情走进永庆坊，寻觅西关情走进永庆坊，寻觅西关情',
      //   time: '2020/01/23'
      // }
    ]
    ],
    userInfo: {
      nickName: '登录'
    },
    userdata: {
      sc: 0,
      gz: 0,
      pl: 0,
      stzm: 0
    }
  },
  jumpall: function () {
    wx.setStorageSync('allactivity', this.data.allactivity),
    wx.navigateTo({
      url: '../allregact/allregact',
    })
  },
  getuserinfo: function (e) {
    //获取收藏，关注。。。数据
    var cdata=this.data.userdata
    //获取待参加的数据
    var dcj=this.data.allactivity[0]
    var dlq=this.data.allactivity[1]
    console.log(dcj)
    const that=this
    wx.login({
      success(res){
        console.log(res)
       wx.getUserInfo({
         success(usere){
          wx.cloud.callFunction({
            name:'login',
            data:{},
            success:callres =>{
              db.collection("login").where({
                _openid:callres.result.openid
              }).get().then(callres2=>{
                if(callres2.data[0]==null){
                  db.collection("login").add({
                    data:{
                      collection:0,
                      comment:0,
                      follow:0,
                      pep:0,
                    }
                  }).then(callres3=>{
                    console.log(callres3)
                  })
                }
                else{
                   // 查找数据库里面的数据
                  db.collection("login").where({
                    _openid: callres.result.openid
                  }).get().then(res=>{
                    dcj=res.data[0].tbatt
                    dlq=res.data[0].tbeva
                    console.log(dcj)
                    cdata.sc=res.data[0].collection
                    cdata.gz=res.data[0].comment
                    cdata.pl=res.data[0].follow
                    cdata.stzm=res.data[0].pep
                    that.setData({
                      userdata:cdata,
                      allactivity:[dcj,dlq,[]]
                    })
                 })
                }
              })
            }
          })
         }
       })
      }
    })
    this.setData({
      userInfo: e.detail.userInfo
    })
  },
  getactivity: function (e) {
    this.setData({
      id: e.currentTarget.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})