<template>
  <div>
    <div class="line"></div>
    <div class="container-fluid padding-30 footer bg-F7">
      <div class="container text-center font-13 color-gary">
        <p>主办单位：{{ config.CoName }}</p>
        <p>地址：{{ config.Address }}</p>
        <p>电话：{{ config.Telphone }} 传真：{{ config.Fax }}</p>
        <p>
          备案/许可证编号：<a style="color: black" :href="config.Miit">{{
            config.ICP
          }}</a>
        </p>
        <p>网址：{{ config.Domain }}</p>
        <p>
          友情链接：<a style="color: black" href="https://www.rongtongkj.com">{{
            config.Support
          }}</a>
        </p>
      
        <img src='../assets/images/code1.png' width='300'/>
  <img src='../assets/images/code.png' width='300'/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import common from "../assets/js/common";
export default {
  data() {
    return {
      config: {},
    };
  },
  created: function () {
    this.setConfig();
  },
  methods: {
    // 获取网站设置
    setConfig: function () {
      var that = this;
      // console.log(res, "config1");

      axios({
        method: "POST",
        url: common.domain + "web",
        data: { id: common.webid },
        headers: { token: common.token },
      }).then(function (res) {
        // console.log(res, "config2");
        if (res.data.errno === 0) {
          that.config = res.data.msg[0];
        }
      });
    },
  },
};
</script>

<style>
.line {
  width: 100%;
  height: 10px;
  background-color: #d9001b;
}
.footer{
  margin-top: 50px;
}

@media screen and (max-width: 960px) {
  .footer {
    margin: 0 ;
    padding: 1px;
  }
  .footer p {
    margin-bottom: 5px;
    font-size: 5px;
  }
}
</style>