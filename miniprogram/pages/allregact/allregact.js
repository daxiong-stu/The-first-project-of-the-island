// pages/allregact/allregact.js
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actlist:[
    //   {
    //   src:'cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/body.jpg',
    //   title:'腾讯X清华 "云实习" 项目',
    //   style:'线上活动',
    //   date:'即将开启',
    //   status:'待参加',
    // },
    // {
    //   src:'cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/body.jpg',
    //   title:'腾讯X清华 "云实习" 项目',
    //   style:'线上活动',
    //   date:'即将开启',
    //   status:'待参加',
    // }
  ],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.getStorage({
      key: 'allactivity',
      success (res) {
        console.log(res.data)
          that.setData({
            actlist:res.data
          })
        }  
    })
    },

  back:function(){
    wx.navigateBack({
      delta: 1,
    })
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