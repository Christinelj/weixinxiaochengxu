// pages/app/cinema/cinema.js
Component({
  data: {
    backgroundMap: ['../../../resources/cinema/advertisingMap.jpg',
    '../../../resources/cinema/advertisingMap.jpg', 
    '../../../resources/cinema/advertisingMap.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: true,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,

    cinemaArray: [{
        name: '万达影城',
        price: '34.5',
        address: '雁塔区丈八北路与科技二路交汇处西北角',
        distance: '200m',
        label: 'IMAX厅'
      },
      {
        name: '欢乐梦工厂影城',
        price: '19.9',
        address: '雁塔区',
        distance: '900m',
        label: '小吃',
        discountIcon: '惠',
        discount: '西虹市首富等6部影片特惠',
        promotion: '观影套餐销量特惠',
        promotionIcon: '促',
        newCardPromotion: '开卡首惠，首单2张立减16元',
        newCardPromotionIcon: '卡',
      },
      {
        name: '恒大影城',
        price: '19.9 ',
        address: '雁塔区大寨路',
        distance: '2km',
        label: '折扣卡'
      },

    ]
  },
  canvasIdErrorCallback: function(e) {
    console.error(e.detail.errMsg)
  },
  onReady: function(e) {
    this.cinemaList = this.selectComponent("#cinemaList");
  }

})