<template>
  <div>
    <div
      class="page-header margin-bottom-20"
      style="border-bottom: 1px solid #eee"
      v-for="item in dance"
      :key="item.id"
      @click="toArticleDetail(item)"
    >
      <h5 style="font-size: 18px">{{ item.Title }}</h5>
      <p
        class="color-gray"
        style="font-size: 15px !important; line-height: 30px"
      >
        {{ item.Description }}
      </p>
    </div>

    <pagination> </pagination>
  </div>
</template>

<script>
import axios from "axios";

// dupi

import common from "../../assets/js/common";
import pagination from "../pagination.vue";
var cid = "16";
var cateid = "128";
export default {
  components: { pagination },
  data() {
    return {
      indexdance: 1,
      dance: [],
      picurl: common.picurl,
    };
  },
  created: function () {
    this.setdance();
  },
  methods: {
    toArticleDetail: function (item) {
      this.$router.push({ name: "ArticleDetail", query: { id: item.ID } });
    },

    //dance
    setdance: function () {
      var that = this;
      axios({
        method: "POST",
        url: common.domain + "article/cate",
        data: { webid: common.webid, cid: cid, cateid: cateid },
        headers: { token: common.token },
      }).then(function (res) {
        if (res.data.errno === 0) {
          that.dance = res.data.msg;
        }
      });
    },
  },
};
</script>

<style>
</style>