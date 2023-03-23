<template>
  <div>
    <div
      class="text-content padding-30 bg-white margin-bottom-20"
      v-for="item in news"
      :key="item.id"
      @click="toNewsDetail(item)"
      style="line-height: 30px"
    >
      <div class="row">
        <div class="col-md-9 col-xs-12">
          <img
            :src="picurl + 'news/' + item.Pic"
            alt=""
            style="width: 95%; height: 280px"
          />
        </div>
        <div class="col-md-3 col-xs-12 d-flex align-items-center">
          <h5 class="text-center margin-top-10">
            {{ item.Title }}
          </h5>
          <!-- <p class="text-index-20 font-14">
            {{ item.Description }}
          </p> -->
        </div>
      </div>
    </div>
    <pagination> </pagination>
    <!-- 分页器组件 -->
    <!-- <div class="pagination">
      <VuePagination
        ref="vuePagination"
        :current-page="pagination.currentPage"
        :pageSize="pagination.pageSize"
        :totals="pagination.totals"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div> -->
  </div>
</template>

<script>
import axios from "axios";

// import VuePagination from "../vuePagination.vue";

import common from "../../assets/js/common";
import pagination from "../pagination.vue";
export default {
  components: { pagination },
  name: "produce",

  data() {
    return {
      indexNews: 1,
      news: [],
      picurl: common.picurl,

      // pagination: {
      //   pageSize: 10, // 显示的条数
      //   totals: 0, // 总数
      //   currentPage: 1, // 当前第几页
      // },
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
          // console.log(data);
          that.news = res.data.赛事新闻;
        }
      });
    },

    // // 改变每页的显示数量
    // handleSizeChange(val) {
    //   this.pagination.pageSize = val.pageSize;
    //   this.productLineList();
    // },
    // // 翻页
    // handleCurrentChange(val) {
    //   val.totals = this.pagination.totals;
    //   this.pagination = {
    //     ...val,
    //   };
    //   this.productLineList();
    // },
  },
  // components: {
  //   VuePagination,
  // },
};
</script>

<style>
</style>