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
          <h2>热门推荐</h2>
          <p class="margin-top-30 margin-bottom-70 color-gray">
            这里是热门推荐，点击下方培训信息，查看更多视频教材、比赛音乐
          </p>
        </div>
        <div class="row">
          <div
            class="col-md-3 margin-bottom-10"
            v-for="item in edus.slice(0, 4)"
            :key="item.id"
            @click="toArticleDetail(item)"
          >
            <div class="card non-border">
              <img
                :src="picurl + 'article/' + item.Pic"
                class="card-img-top w-100"
                alt="..."
              />
              <div class="card-body bg-F7">
                <p class="text-center">{{ item.Title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- box-list end -->

    <!-- box-list begin -->
    <div class="container-fluid padding-top-100 padding-bottom-100 bg-F7">
      <div class="container">
        <div class="row">
          <div class="offset-3">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb margin-left-30">
                <li class="breadcrumb-item">
                  <router-link to="/">首页</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link to="/edu">培训信息</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  培训信息
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="box-list-item bg-white padding-30">
              <h5>培训信息</h5>
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
            <div class="box-list-item margin-top-30 bg-white padding-30">
              <h5>培训搜索</h5>
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
              <h5>培训排行榜</h5>
              <ul>
                <li
                  v-for="item in edus.slice(0, 5)"
                  :key="item.id"
                  @click="toArticleDetail(item)"
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
var cid = 13;
export default {
  name: "edu",

  data() {
    return {
      indexEdus: 1,
      edus: [],
      nav: [
        { title: "拉丁视频教材", path: "/edu/latinVideo" },
        { title: "中国舞视频教材", path: "/edu/folkVideo" },
        { title: "街舞视频教材", path: "/edu/hiphopVideo" },

        { title: "比赛音乐", path: "/edu/music" },
        { title: "培训信息", path: "/edu/introduce" },
      ],
      navIndex: 0,
      picurl: common.picurl,
    };
  },
  created: function () {
    this.setEdus();
  },
  methods: {
    toArticleDetail: function (item) {
      this.$router.push({ name: "ArticleDetail", query: { id: item.ID } });
    },

    //edus
    setEdus: function () {
      var that = this;
      axios({
        method: "POST",
        url: common.domain + "article",
        data: { webid: common.webid, cid: cid },
        headers: { token: common.token },
      }).then(function (res) {
        if (res.data.errno === 0) {
          that.edus = res.data.msg;
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

<style>
</style>