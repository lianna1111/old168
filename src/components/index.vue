<template>
  <div>
    <!-- carousel begin -->
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <!-- <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div> -->
      <div class="carousel-inner">
        <div
          class="carousel-item active"
          v-for="(item, index) in carousel.slice(0, 1)"
          :key="index"
        >
          <img
            :src="picurl + 'carousel/' + item.Pic"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div
          class="carousel-item"
          v-for="(item, index) in carousel.slice(1, 3)"
          :key="index"
        >
          <img
            :src="picurl + 'carousel/' + item.Pic"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- carousel end -->

    <!-- box-list begin -->
    <div class="container-fluid padding-top-100 padding-bottom-100 bg-F7">
      <div class="container">
        <div class="page-header text-center">
          <h2>视频教材</h2>
          <p class="margin-top-30 margin-bottom-70 color-gray">
            以下是视频教材
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
              <div class="card-body">
                <p class="text-center">{{ item.Title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- box-list end -->

    <div class="box-banner">
      <img src="../assets/images/ban1.png" class="d-block w-100" alt="" />
      <div class="bg-shade"></div>
    </div>

    <!-- box-list begin -->
    <div class="container-fluid margin-top-100 margin-bottom-100">
      <div class="container">
        <div class="page-header text-center">
          <h2>舞蹈用具</h2>
          <p class="margin-top-30 margin-bottom-70 color-gray">
            以下是舞蹈用具
          </p>
        </div>
        <div class="row dancetools">
          <div
            class="col-md-4 margin-bottom-10"
            v-for="item in danceTools.slice(0, 3)"
            :key="item.id"
            @click="toArticleDetail(item)"
          >
            <div class="card non-border margin-lr-35">
              <img
                :src="picurl + 'article/' + item.Pic"
                class="card-img-top w-100"
                alt="..."
              />
              <div class="card-body">
                <p class="text-center">{{ item.Title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- box-list end -->

    <!-- box-list begin -->
    <div class="container-fluid padding-top-100 padding-bottom-100">
      <div class="container">
        <div
          class="page-header padding-bottom-15 margin-bottom-50"
          style="border-bottom: 1px solid #eee"
        >
          <h2>行业新闻</h2>
        </div>
        <div class="row">
          <div
            class="col-md-6"
            v-for="item in news.slice(0, 1)"
            :key="item.id"
            @click="toNewsDetail(item)"
          >
            <div class="card non-border margin-bottom-10">
              <img
                :src="picurl + '/news/' + item.Pic"
                class="card-img-top w-100"
                alt="..."
              />
              <div class="card-body bg-F7">
                <p>{{ item.Title }}</p>
                <p
                  class="color-gray"
                  style="font-size: 14px !important; line-height: 28px"
                >
                  {{ item.Description }}
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card non-border">
              <div
                class="card-body bg-F7 margin-bottom-10"
                v-for="item in news.slice(1, 5)"
                :key="item.id"
                @click="toNewsDetail(item)"
              >
                <p>{{ item.Title }}</p>
                <p
                  class="color-gray"
                  style="font-size: 14px !important; line-height: 28px"
                >
                  {{ item.Description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- box-list end -->
  </div>
</template>

<script>
import axios from "axios";

//video
var cidNEWS = 13;
var cidTOOLS = 8;

import common from "../assets/js/common";
export default {
  name: "index",
  data() {
    return {
      indexNews: 1,
      news: [],
      indexEdus: 1,
      edus: [],
      danceTools: [],
      carousel: [],
      picurl: common.picurl,
    };
  },
  created: function () {
    this.setNews();
    this.setEdus();
    this.setcarousel();
    this.setDancetools();
  },
  methods: {
    toNewsDetail: function (item) {
      this.$router.push({ name: "newsDetail", query: { id: item.ID } });
    },
    toArticleDetail: function (item) {
      this.$router.push({ name: "ArticleDetail", query: { id: item.ID } });
    },

    setcarousel: function () {
      var that = this;
      axios({
        method: "POST",
        url: common.domain + "carousel",
        data: { webid: common.webid },

        headers: {
          token: common.token,
          // "Content-Type": "multipart/form-data",
        },
      }).then(function (res) {
        if (res.data.errno === 0) {
          that.carousel = res.data.msg;
        }
      });
    },
    //edus
    setEdus: function () {
      var that = this;
      axios({
        method: "POST",
        url: common.domain + "article",
        data: { webid: common.webid, cid: cidNEWS },
        headers: {
          token: common.token,
          // "Content-Type": "multipart/form-data",
        },
      }).then(function (res) {
        if (res.data.errno === 0) {
          that.edus = res.data.msg;
        }
      });
    },
    // dancetools
    setDancetools: function () {
      var that = this;
      axios({
        method: "POST",
        url: common.domain + "article",
        data: { webid: common.webid, cid: cidTOOLS },
        headers: {
          token: common.token,
          // "Content-Type": "multipart/form-data",
        },
      }).then(function (res) {
        if (res.data.errno === 0) {
          that.danceTools = res.data.msg;
        }
      });
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
          // "Content-Type": "multipart/form-data",
        },
      }).then(function (res) {
        if (res.data.errno === 0) {
          that.news = res.data.msg;
        }
      });
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dancetools img {
  height: 220px !important;
}
.dancetools .card-body {
  background-color: #f7f7f7;
}
</style>
