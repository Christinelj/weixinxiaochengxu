// component/cinemaList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: { // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '影院名称' // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    price: {
      type: Number,
      value: 10
    },
    address: {
      type: String,
      value: '地址'
    },
    distance: {
      type: String,
      value: '100m'
    },
    label: {
      type: String,
      value: '标签'
    },

    discount: {
      type: String,
      value: '惠'
    },
    discountIcon: {
      type: String,
      value: '惠'
    },

    promotion: {
      type: String,
      value: '促'
    },

    promotionIcon: {
      type: String,
      value: '促'
    },

    newCardPromotion: {
      type: String,
      value: '卡'
    },

    newCardPromotionIcon: {
      type: String,
      value: '卡'
    },


  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  
  JudgmentPreference: function (e) {

  }

 
})