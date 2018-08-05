// pages/app/movie/movie.js
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
    currentTab: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  /**
   * 点击切换顶部tab
   */
  switchTab(e) {
    console.log(e)
    this.setData({
      currentTab: e.currentTarget.dataset.current
    });
  },

})
