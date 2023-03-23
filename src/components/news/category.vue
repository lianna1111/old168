
<template>
  <div class="news-list padding-30 bg-white">
    <div
      class="page-header margin-bottom-20"
      style="border-bottom: 1px solid #eee"
      v-for="item in news"
      :key="item.id"
      @click="toNewsDetail(item)"
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

import pagination from "../pagination.vue";

import common from "../../assets/js/common";
export default {
  components: { pagination },
  name: "category",

  data() {
    return {
      indexNews: 1,
      news: [],
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
        headers: { token: common.token },
      }).then(function (res) {
        if (res.data.errno === 0) {
          var list = res.data.msg;
          for (var i = 0; i < list.length; i++) {
            if (!res.data[list[i].CategoryName]) {
              var arr = [];
              arr.push(list[i]);
              res.data[list[i].CategoryName] = arr;
            } else {
              res.data[list[i].CategoryName].push(list[i]);
            }
          }
          //console.log(data);
          that.news = res.data.行业新闻;
        }
      });

      // $.ajax({
      //   type: "POST",
      //   url: common.domain + "news",
      //   data: { webid: common.webid },
      //   headers: { token: common.token },
      //   cache: false,
      //   dataType: "json",
      //   success: function (data) {
      //     if (data.errno === 0) {
      //       var list = data.msg;
      //       for (var i = 0; i < list.length; i++) {
      //         if (!data[list[i].CategoryName]) {
      //           var arr = [];
      //           arr.push(list[i]);
      //           data[list[i].CategoryName] = arr;
      //         } else {
      //           data[list[i].CategoryName].push(list[i]);
      //         }
      //       }
      //       that.news = data.行业新闻;
      //     }
      //   },
      // });
    },
  },
};
</script>
<style scoped>
</style>