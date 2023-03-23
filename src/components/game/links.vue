<template>
  <div>
    <div
      class="text-content padding-30 bg-white margin-bottom-20"
      v-for="item in article"
      :key="item.id"
      @click="toArticleDetail(item)"
      style="line-height: 30px"
    >
      <div class="row">
        <div class="col-md-9 col-xs-12">
          <img
            :src="picurl + 'article/' + item.Pic"
            alt=""
            style="width: 95%; height: 280px"
          />
        </div>
        <div class="col-md-3 col-xs-12">
          <h5 class="text-center">{{ item.Title }}</h5>
          <p class="text-index-20 font-14">
            <a :href="item.Attachment" style="word-wrap: break-word">
              {{ item.Attachment }}</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import common from "../../assets/js/common";
var cid = "27";
export default {
  name: "link",

  data() {
    return {
      indexarticle: 1,
      article: [],
      picurl: common.picurl,
    };
  },
  created: function () {
    this.setarticle();
  },
  methods: {
    toArticleDetail: function (item) {
      this.$router.push({ name: "ArticleDetail", query: { id: item.ID } });
    },

    //article
    setarticle: function () {
      var that = this;
      axios({
        method: "POST",
        url: common.domain + "article",
        data: { webid: common.webid, cid: cid },
        headers: { token: common.token },
      }).then(function (res) {
        if (res.data.errno === 0) {
          that.article = res.data.msg;
        }
      });
    },
  },
};
</script>

<style>
</style>