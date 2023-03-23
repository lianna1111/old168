


 
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
    <div class="container-fluid padding-top-100 padding-bottom-100 bg-F7">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="box-list-item bg-white padding-30 margin-bottom-10">
              <h5>联系我们</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" style="line-height: 50px">
                  联系我们
                </li>
                <!-- <li class="list-group-item" style="line-height: 50px">
                  我要留言
                </li> -->
              </ul>
            </div>
          </div>
          <div class="col-md-9">
            <div
              class="text-content padding-30 bg-white"
              style="line-height: 30px"
            >
              <div id="container" style="height: 600px"></div>
              <!-- style="width: 800px; height: 600px" -->
              <p>全国统一热线：{{ config.Hotline }}</p>
              <p>湖南咨询热线：{{ config.Telphone }}</p>
              <p>邮箱：{{ config.Email }}</p>
              <p>联系地址：{{ config.Address }}</p>
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

import common from "../assets/js/common";

export default {
  name: "contact",

  data() {
    return {
      config: {},
    };
  },
  created: function () {
    this.setConfig();
  },
  mounted() {
    var map = new BMap.Map("container");
    var point = new BMap.Point(113.004272, 28.195596);
    map.centerAndZoom(point, 17);
    map.enableScrollWheelZoom(true);
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker);
  },
  methods: {
    setConfig: function () {
      var that = this;
      axios({
        method: "POST",
        url: common.domain + "web",
        data: { id: common.webid },
        headers: { token: common.token },
      }).then(function (res) {
        if (res.data.errno === 0) {
          that.config = res.data.msg[0];
        }
      });
    },
  },
};
</script>
 

 
<style scoped>
p {
  padding: 0 20px;
  margin-top: 10px;
}
</style>
 
