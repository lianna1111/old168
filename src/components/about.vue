<template>
  <div>
    <!-- carousel begin -->
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/images/ban.png" class="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
    <!-- carousel end -->

    <!-- box-list begin -->
    <div class="container-fluid padding-top-100 padding-bottom-100 bg-F7">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="box-list-item bg-white padding-30">
              <h5>组织介绍</h5>

              <ul class="list-group list-group-flush">
                <li
                  class="nav-item text-center"
                  v-for="(item, index) in nav"
                  @click="routerLink(index, item.path)"
                  :key="index"
                >
                  <!-- 判断高亮表 -->
                  <p
                    style="line-height: 50px"
                    :class="navIndex === index ? 'active' : ''"
                  >
                    {{ item.title }}
                  </p>
                </li>
              </ul>
            </div>
            <div class="box-list-item margin-tb-30 bg-white padding-30">
              <h5>联系我们</h5>
              <ul>
                <li style="font-size: 15px">
                  地址：<br />北京市顺义区畅大道14号1号院<br />香港湾仔区骆克道425号雅阁大厦20A<br />长沙市芙蓉区韶山北路139号文化大厦B栋12A08
                </li>
                <li style="font-size: 15px">电话：{{ config.Telphone }}</li>
                <li style="font-size: 15px">邮箱：{{ config.Email }}</li>
                <li style="font-size: 15px">传真：{{ config.Fax }}</li>
                <li style="font-size: 15px">时间：09:00 - 18:00</li>
              </ul>
            </div>
          </div>
          <div class="col-md-9">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    <!-- box-list end -->
  </div>
</template>

<script>
import axios from "axios";

import common from "../assets/js/common";
export default {
  name: "about",

  data() {
    return {
      config: {},
      indexabout: 1,
      about: [],
      nav: [
        { title: "中国国际流行舞蹈协会简介", path: "/about/ab1" },
        { title: "HIDA协会章程", path: "/about/ab2" },
        { title: "HIDA协会简介", path: "/about/ab3" },
        { title: "CIDA章程", path: "/about/ab4" },
        { title: "CIDA简介", path: "/about/ab5" },
      ],
      navIndex: 0,
    };
  },
  created: function () {
    this.setConfig();
    // this.setabout();
  },

  methods: {
    // 获取网站设置
    // 获取网站设置
    setConfig: function () {
      var that = this;
      axios({
        method: "POST",
        url: common.domain + "web",
        data: { id: common.webid },
        headers: { token: common.token },
      }).then(function (res) {
        if (res.data.errno === 0) {
          that.config = res.data.msg[0];
        }
      });
    },
    /**
     * 路由跳转
     * @param index
     * @param link
     */ routerLink(index, path) {
      // 点击哪个路由就赋值给自定义的下下标
      this.navIndex = index;
      // 路由跳转
      this.$router.push(path);
    },

    /**
     * 检索当前路径
     * @param path
     */
    checkRouterLocal(path) {
      // 查找当前路由下标高亮
      this.navIndex = this.nav.findIndex((item) => item.path === path);
    },
  },
  watch: {
    $route() {
      // 获取当前路径
      let path = this.$route.path;
      // 检索当前路径
      this.checkRouterLocal(path);
    },
  },
};
</script>

<style>
</style>