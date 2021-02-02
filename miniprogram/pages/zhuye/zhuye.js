// pages/zhuye/zhuye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testList:[],
    xshd: '',
    date: '',
    hdtj:[
      {
        src:'cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/head.jpg',
        title:'走进永庆坊，寻觅西关情',
        contain:'【活动简介】广州永庆坊位于广州老城荔湾区西关腹地，是老广州文化风貌最具代表性的街区之一，拥有李小龙故居..',
        active:'·线上活动',
        date:'·01/23 周六'
      },
      {
        src:'cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/back.png',
        title:'腾讯X清华"云实习"项目',
        contain:'腾讯和清华联手啦！清华大学建校110周年即将到来之际，清华大学与腾讯公司达成校庆专项合作！将在科研、新文创、...',
        active:'·线上活动',
        date:'·即将开启'
      },
      {
        src:'cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/body.jpg',
        title:'中国青年对话未来',
        contain:'联合国2030可持续发展目标呼吁全世界共同采取行动，消除贫困，保护地球，改善所有人的生活和未来。2020-2030是落实',
        active:'·腾讯会议/线上活动',
        date:'·2020/06起'
      }
    ],
    hdtj2:[
      {
        src:'cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/back.png',
        title:'为保护海洋中的粉色精灵，从今天开始你的...',
        active:'线下活动',
        date:'2020/11/22 周日'
      },
      {
        src:'cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/back.png',
        title:'为保护海洋中的粉色精灵，从今天开始你的...',
        active:'线下活动',
        date:'2020/11/22 周日'
      },
      {
        src:'cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/back.png',
        title:'为保护海洋中的粉色精灵，从今天开始你的...',
        active:'线下活动',
        date:'2020/11/22 周日'
      }
    ],
    hdtj3:[{
      src:'cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/back.png',
      contain:'欢迎来到机器人世界',
    },
    {
      src:'cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/back.png',
      contain:'腾讯青少年科学小会：来清华对话顶尖科学家',
    },
    {
      src:'cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/back.png',
      contain:'从游戏专业到游戏行业',
    },
    {
      src:'cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/back.png',
      contain:'揭晓音乐的"N+1"种PLAY方式',
    },
    {
      src:'cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/back.png',
      contain:'RoboMaster机器人大赛·总决赛',
    },
    {
      src:'cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/back.png',
      contain:'走进生产车间-见证一辆汽车的诞生',
    },
    {
      src:'cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/back.png',
      contain:'走进FIBA，台前幕后全触达',
    },
    {
      src:'cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/back.png',
      contain:'基金大咖面对面——易方达独家财商课程等...',
    },{
      src:'cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/back.png',
      contain:'不可思议达利全球巡展大揭秘',
    },
    {
      src:'cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/back.png',
      contain:'中国杯帆船赛深度体会',
    }],
    hdtj4:[{
      src:"cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/body.jpg",
      contain:"国际农业发展基金",
    },
    {
      src:"cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/body.jpg",
      contain:"国际劳工组织",
    },
    {
      src:"cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/body.jpg",
      contain:"国际农业发展基金",
    },
    {
      src:"cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/body.jpg",
      contain:"国际农业发展基金",
    },
    {
      src:"cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/body.jpg",
      contain:"国际农业发展基金",
    }],
    picitem:[{
      item:"cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/back.png",
    },
    {
      item:"cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/back.png",
    },
    {
      item:"cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/back.png",
    },
    {
      item:"cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/back.png",
    },
    {
      item:"cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/back.png",
    },
    {
      item:"cloud://envirment-nr7am.656e-envirment-nr7am-1302003610/images/back.png",
    }]

    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db = wx.cloud.database()
    db.collection('images').get({
      success:res=> {
        console.log(res)
        this.setData({
          //将从云端获取的数据放到testList中
          testList:res.data,
        })
        
      },
      fail: console.error
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