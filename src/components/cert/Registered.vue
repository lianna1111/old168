<template>
  <div>
    <form method="post" class="form" @submit.prevent>
      <!-- prevent清除submit默认事件 -->
      <div class="row">
        <div class="col-9">
          <div class="input-box">
            <img src="../../assets/images/certid.png" alt="" />
            <input
              type="text"
              class="form-control"
              name="inputRegID"
              placeholder="请输入注册号"
              v-model="cert"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-9">
          <div class="input-box">
            <img src="../../assets/images/user.png" alt="" />
            <input
              type="text"
              class="form-control"
              name="inputunitname"
              placeholder="请输入单位名称"
              v-model="cname"
            />
          </div>
        </div>
      </div>

      <div class="row d-flex flex-row justify-content-center">
        <button class="btn">查询</button
        ><button class="btn" @click="empty">重填</button>
        <!-- 点击调用empty方法 -->
      </div>
      <div class="msg">
        <span style="font-weight: 600">查询步骤：
        1、点选右侧查询分类  </span
        >2、输入注册号+单位名称查询
      </div>
    </form>
    <div class="alert alert-danger notice" role="alert">
      {{ notice }}
    </div>
    <div class="cert-detail" v-for="(item, index) in messeage" :key="index">
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th scope="row">证书序号：</th>
            <td>{{ item.zhengshuxuhao }}</td>
            <th scope="row">证书等级：</th>
            <td>{{ item.zhengshudengji }}</td>
          </tr>
          <tr>
            <th scope="row">签发日期：</th>
            <td>{{ item.qianfariqi }}</td>
            <th scope="row">持证姓名：</th>
            <td>{{ item.chizhengxingming }}</td>
          </tr>
          <tr>
            <th scope="row">证书舞种</th>
            <td>{{ item.zhengshuwuzhong }}</td>
            <th scope="row">证书类型：</th>
            <td>{{ item.zhengshuleixing }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import common from "../../assets/js/common";
var cid = 27;
export default {
  name: "Registered",
  data() {
    return {
      type: 27,
      cert: "", //注册号
      cname: "",
      // idcard: "",
      notice: "",
      messeage: "",
    };
  },
  methods: {
    empty() {
      this.cert = "";
      // this.idcard = "";
      this.cname = "";
      this.messeage = "";
      this.notice = "";
      $(".notice").css("display", "none");
    },
    search() {
      var that = this;
      that.notice = "";
      that.messeage = "";
      $(".notice").css("display", "none");
      if (that.cert != "" && that.cname != "") {
        axios({
          method: "POST",
          url: common.domain + "oldata/search",
          data: { cid: cid, cert: that.cert, cname: that.cname },
          headers: {
            token: common.token,
          },
        }).then(function (res) {
          if (res.data.errno === 0) {
            that.messeage = res.data.msg;
            console.log(that.messeage);
            if (res.data.msg.length) {
              // alert("成功");
            } else if (that.cert && that.cname) {
              // alert("失败");
              that.notice = "查询失败，请确认输入是否正确";
              $(".notice").css("display", "block");
            }
          }
        });
        axios({
          method: "POST",
          url: common.domain + "oldata/add",
          data: {
            cid: cid,
            cert: that.cert,
            cname: that.cname,
          },
          headers: {
            token: common.token,
          },
        }).then(function () {
          // alert("查询成功");
        });
      } else {
        alert("输入不能为空");
      }
    },
  },
};
</script>


<style scoped>
.input-box {
  margin: 20px 0 30px 10px;
}
form .btn {
  margin-top: 40px;
}

@media screen and (max-width: 960px) {
  .input-box {
    margin: 10px 0 10px 10px;
  }

  form .btn {
    margin-top: 0;
  }
  .msg {
    padding-top: 10px;
  }
}
</style>