const app = getApp();

Page({
  data: {
    listData:[
      '全部',
      '科技',
      '艺术',
      '体育',
      '其他'
    ],
    tabIndex:0,
  },
  clickTab(e) {
    console.log(e);
    this.setData({
      tabIndex: e.detail
    });
  },
  
})
