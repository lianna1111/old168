<template>
  <div>
    <div
      class="text-content padding-30 bg-white margin-bottom-20"
      style="line-height: 30px; cursor: pointer"
      v-for="item in about"
      :key="item.id"
      @click="toArticleDetail(item)"
    >
      <!-- <img
                src="https://ccdn.goodq.top/caches/3ddfe819fbff4df42c2816872195b7de/aHR0cHM6Ly81ZDQyNDBiMjU4OWM5LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDcvNmI3ZWRjZTcwNDRlYjc3Y2Q2ZDllZDU4YmJjMzBlNGEuanBn.jpg"
                width="90%"
                alt=""
              /> -->
      <h5 class="margin-tb-20">{{ item.Title }}</h5>
      <span>{{ item.PostTime }}</span>
      <p class="margin-tb-40">{{ item.Description }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import common from "../../assets/js/common";
var cid = 9;
export default {
  name: "ab1",

  data() {
    return {
      //   indexabout: 1,
      about: [],
    };
  },
  created: function () {
    this.setabout();
  },

  methods: {
    toArticleDetail: function (item) {
      this.$router.push({ name: "ArticleDetail", query: { id: item.ID } });
    },

    //about
    setabout: function () {
      var that = this;
      axios({
        method: "POST",
        url: common.domain + "article",
        data: { webid: common.webid, cid: cid },
        headers: { token: common.token },
      }).then(function (res) {
        if (res.data.errno === 0) {
          that.about = res.data.msg.splice(0, 1);
        }
      });
    },
  },
};
</script>

<style>
</style>