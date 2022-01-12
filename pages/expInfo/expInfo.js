// pages/expInfo/expInfo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperList: [],
        wallpaperUrl: "https://cn.bing.com"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getSwiperList()
    },

    // 获取轮播图数据的方法
    getSwiperList() {
            wx.request({
                url: 'http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByOrder&order=create_time&start=0&count=5&from=360chrome',
                method: 'GET',
                success: (res) => {
                    console.log(res.data.data);
                    this.setData({
                        swiperList: res.data.data
                    })
                }
            })

        
       
        // wx.request({
        //   url: 'https://www.escook.cn/slides',
        //   method: 'GET',
        //   success: (res) => {
        //       console.log(res)
        //        this.setData({
        //            swiperList: res.data
        //        })
        //   }
        // })
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