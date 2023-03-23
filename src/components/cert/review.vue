
   
  <template>
  <div>
    <form method="post" class="form" @submit.prevent>
      <div class="row">
        <div class="col-9">
          <div class="input-box">
            <img src="../../assets/images/certid.png" alt="" />
            <input
              type="text"
              class="form-control"
              name="inputCertID"
              placeholder="请输入证书序号"
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
              name="inputuname"
              placeholder="请输入姓名"
              v-model="uname"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-9">
          <div class="input-box">
            <img src="../../assets/images/id.png" alt="" />
            <input
              type="text"
              class="form-control"
              name="inputID"
              placeholder="请输入身份证号"
              v-model="idcard"
            />
          </div>
        </div>
      </div>
      <div class="row d-flex flex-row justify-content-center">
        <button class="btn" @click="search">查询</button
        ><button class="btn" @click="empty">重填</button>
      </div>
      <div class="msg">
       <span style="font-weight: 600">查询步骤：
        1、点选右侧查询分类  </span
        >2、输入姓名+证书序号+身份证号查询
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
            <td>{{ item.zhengshuxuhaoB }}</td>
            <th scope="row">证书等级：</th>
            <td>{{ item.zhengshudengjiB }}</td>
          </tr>
          <tr>
            <th scope="row">签发日期：</th>
            <td>{{ item.qianfariqiB }}</td>
            <th scope="row">持证姓名：</th>
            <td>{{ item.chizhengxingmingB }}</td>
          </tr>
          <tr>
            <th scope="row">证书舞种</th>
            <td>{{ item.zhengshuwuzhongB }}</td>
            <th scope="row">证书类型：</th>
            <td>{{ item.zhengshuleixingB }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import common from "../../assets/js/common";
var cid = 26;
export default {
  name: "review",
  data() {
    return {
      type: 26,
      cert: "",
      uname: "",
      idcard: "",
      notice: "",
      messeage: "",
    };
  },
  methods: {
    empty() {
      this.cert = "";
      this.idcard = "";
      this.uname = "";
      this.messeage = "";
      this.notice = "";
      $(".notice").css("display", "none");
    },
    search() {
      var that = this;
      that.notice = "";
      that.messeage = "";
      $(".notice").css("display", "none");
      if (that.cert != "" && that.uname != "") {
        axios({
          method: "POST",
          url: common.domain + "oldata/search",
          data: { cid: cid, cert: that.cert, uname: that.uname },
          headers: {
            token: common.token,
          },
        }).then(function (res) {
          if (res.data.errno === 0) {
            that.messeage = res.data.msg;
            console.log(that.messeage);
            if (res.data.msg.length) {
              // alert("成功");
            } else if (that.cert && that.uname) {
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
            uname: that.uname,
            idcard: that.idcard,
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


<style >
</style>