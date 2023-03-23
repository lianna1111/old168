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
    <div class="container-fluid padding-top-100 padding-bottom-100">
      <div class="container">
        <div class="page-header text-center">
          <h2>最新新闻</h2>
          <p class="margin-top-30 margin-bottom-70 color-gray">
            这里是最新新闻，点击下方分类查看行业新闻/赛事新闻
          </p>
        </div>
        <div class="row">
          <div
            class="col-md-3"
            v-for="item in news.slice(0, 4)"
            :key="item.id"
            @click="toNewsDetail(item)"
          >
            <div class="card non-border">
              <img
                :src="picurl + '/news/' + item.Pic"
                class="card-img-top w-100"
                style="height: 160px"
                alt="..."
              />
              <div class="card-body bg-F7 margin-bottom-10">
                <p class="text-center overline" style="height: 70px">
                  {{ item.Title }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- box-list end -->
    <!-- bread -->
    <div class="container"></div>

    <!-- bread end -->
    <!-- box-list begin -->
    <div class="container-fluid padding-top-100 padding-bottom-100 bg-F7">
      <div class="container">
        <div class="row">
          <div class="offset-md-3">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb margin-left-30">
                <li class="breadcrumb-item">
                  <router-link to="/">首页</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link to="/news">要闻公告</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  新闻类别
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="box-list-item bg-white padding-30">
              <h5>新闻类别</h5>
              <ul class="list-group list-group-flush">
                <li
                  class="nav-item text-center"
                  v-for="(item, index) in nav"
                  :key="index"
                  @click="routerLink(index, item.path)"
                >
                  <!-- 判断高亮表 -->
                  <p
                    style="line-height: 50px"
                    :class="navIndex === index ? 'active' : ''"
                  >
                    {{ item.title }}
                  </p>
                </li>
                <!-- <li class="list-group-item" style="line-height: 50px">
                  <router-link to="/news/category">行业新闻</router-link>
                </li>
                <li class="list-group-item" style="line-height: 50px">
                  <router-link to="/news/GameNews">赛事新闻</router-link>
                </li> -->
              </ul>
            </div>
            <div class="box-list-item margin-top-30 bg-white padding-30">
              <h5>新闻搜索</h5>
              <form action="" class="margin-top-15">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="keyword"
                    aria-describedby="emailHelp"
                  />
                </div>
              </form>
            </div>
            <div class="box-list-item margin-tb-30 bg-white padding-30">
              <h5>新闻排行榜</h5>
              <ul>
                <li
                  v-for="item in news.slice(0, 5)"
                  :key="item.id"
                  @click="toNewsDetail(item)"
                  class="margin-bottom-20"
                >
                  <!-- <p class="color-gray">{{ item.ID }}-{{ item.Title }}</p> -->
                  <a href="#" class="color-gray font-13">{{ item.Title }}</a>
                </li>
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
  name: "news",

  data() {
    return {
      indexNews: 1,
      news: [],
      nav: [
        { title: "行业新闻", path: "/news/category" },
        { title: "赛事新闻", path: "/news/GameNews" },
        { title: "重要通知", path: "/news/mainProduce" },
      ],
      navIndex: 0,
      picurl: common.picurl,
      // imgURL: this.GLOBAL.PicUrl,
    };
  },
  created: function () {
    this.setNews();
  },
  methods: {
    toNewsDetail: function (item) {
      this.$router.push({ name: "newsDetail", query: { id: item.ID } });
    },

    //news
    setNews: function () {
      var that = this;
      axios({
        method: "POST",
        url: common.domain + "news",
        data: { webid: common.webid },
        headers: {
          token: common.token,
        },
      }).then(function (res) {
        if (res.data.errno === 0) {
          that.news = res.data.msg.splice(0, 4);
        }
      });
    },

    /**
     * 路由跳转
     * @param index
     * @param link
     */
    routerLink(index, path) {
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

<style scoped>
.overline {
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
}
</style>