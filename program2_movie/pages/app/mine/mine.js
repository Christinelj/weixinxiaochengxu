// pages/app/mine/mine.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    userHeadPortraitMap: '../../../resources/mine/userHeadPortraitMap.jpg',
    movieMap: '../../../resources/mine/movieMap.jpg',
    showMap: '../../../resources/mine/showMap.jpg',
    matchMap: '../../../resources/mine/matchMap.jpg',
    peripheralMap: '../../../resources/mine/peripheralMap.jpg',
    bargainMap: '../../../resources/mine/bargainMap.jpg',
    guessMap: '../../../resources/mine/guessMap.jpg',

    cardsList: [
      {
        id: 'coupon',
        name: '优惠券',
      },
      {
        id: 'discountCard',
        name: '折扣卡',
      },
      {
        id: 'viewCard',
        name: '观影卡/票',
      },
      {
        id: 'noPasswordPayment',
        name: '免密支付',
      },
      {
        id: 'genuinePeripheral',
        name: '正版周边',
      },
    ],

    dreamList: [{
        id: 'wantToSeeMovie',
        name: '想看的电影',
      },
      {
        id: 'haveBeenSeenMovie',
        name: '看过的电影',
      },
      {
        id: 'wantToSeeShow',
        name: '想看的演出',
      },
    ],

    advertisementList: [{
      id: 'advertisement',
      name: '猜题押电影，福利领不停',
    }, 
    ],


  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})