<template>
  <div class="edus-list padding-30 bg-white">
    <div class="row">
      <div
        class="col-md-4"
        v-for="item in edus"
        :key="item.id"
        @click="toArticleDetail(item)"
      >
        <div class="card non-border margin-bottom-30">
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
</template>


<script>
import axios from "axios";

import common from "../../assets/js/common";

var cid = 13;
export default {
  name: "latinVideo",

  data() {
    return {
      indexEdus: 1,
      edus: [],
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
  },
};
</script>

<style>
</style>