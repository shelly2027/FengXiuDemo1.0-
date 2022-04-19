// pages/home/home.js
import method from "../../miniprogram_npm/lin-ui/common/async-validator/validator/method";
import {config} from "../../config/config";
import {Theme} from "../../model/theme";


Page({

  /**
   * 页面的初始数据
   */
  data: {
    topTheme:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: "http://se.talelin.com/v1/theme/by/names",
    //   data: {
    //     names:'t-1'
    //   },
    //   method: 'GET',
    //   header: {
    //     appkey: '7q851jCtkuAnTR3o'
    //   },
    //   success: function (res) {
    //     console.log(res)
    //
    //   },
    // });
    Theme.getHomeLocationA(data=>{
      console.log(data);
      this.setData({
        topTheme:data[0].entrance_img
      })
      console.log(this.topTheme);
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