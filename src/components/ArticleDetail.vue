<template>
  <div class="container-fluid">
    <div class="container">
      <div class="page-header">
        <h4 class="text-center font-30 margin-top-20">{{ article.Title }}</h4>
      </div>
      <p class="text-center">{{ article.PostTime }}</p>
      <div class="font-16 margin-tb-30 text-msg" style="line-height: 30px">
        <div v-html="article.Content"></div>

        <div
          v-if="article.Attachment != ''"
          v-html="article.Attachment"
          class="text-center margin-bottom-15"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import common from "../assets/js/common";
export default {
  name: "articleDetail",
  data() {
    return {
      id: "",

      article: {},
    };
  },
  created: function () {
    this.fetchData();
    this.setArticle();
  },

  methods: {
    //
    setArticle: function () {
      var that = this;
      axios({
        method: "POST",
        url: common.domain + "article/detail",
        data: { id: that.id },
        headers: { token: common.token },
      }).then(function (res) {
        if (res.data.errno === 0) {
          that.article = res.data.msg;
        }
      });
    },

    //获取信息
    fetchData() {
      this.id = this.$route.query.id;
      //因为实时监听路由的变化执行该方法 当没有传入时console会报错  解决方法是没有传入参数时 给设置默认参数
      if (this.$route.query.id == undefined) {
        this.id = 70;
      }
      this.id = parseInt(this.id);
    },
  },

  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "fetchData",
  },
};
</script>

<style>
.text-msg img {
  width: 100% !important;
}
</style>