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
    <div class="container-fluid padding-top-100 padding-bottom-200">
      <!-- <div class="container"> -->
      <div class="row forms">
        <div class="col-10">
          <!-- <div class="padding-top-5 padding-left-5"><img src="../images/dlogo.png" alt=""></div> -->
          <div class="title">中国国际流行舞蹈</div>
          <router-view></router-view>
        </div>
        <div class="col-2 text-center right">
          <!-- <div class="btn-active">证书查询</div>
          <div>教师查询</div>
          <div>评审查询</div>
          <div>教\考官查询</div>
          <div>注册单位查询</div> -->
          <li
            class="nav-item"
            v-for="(item, index) in nav"
            @click="routerLink(index, item.path)"
            :key="index"
          >
            <!-- 判断高亮表 -->
            <p :class="navIndex === index ? 'active' : ''" :style="item.style">
              {{ item.title }}
            </p>
          </li>
        </div>
      </div>
      <!-- </div> -->
    </div>

    <!-- box-list end -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "search",

  data() {
    return {
      nav: [
        {
          title: "学生查询",
          path: "/search/certificate",
          style: "border-radius:0 10px 0 0",
        },
        { title: "教师查询", path: "/search/teacher" },
        { title: "评审查询", path: "/search/review" },
        { title: "教/考官查询", path: "/search/examiner" },
        {
          title: "注册单位查询",
          path: "/search/Registered",
          style: "border-radius:0 0 10px  0",
        },
      ],
      navIndex: 0,
    };
  },
  watch: {
    $route() {
      // 获取当前路径
      let path = this.$route.path;
      // 检索当前路径
      this.checkRouterLocal(path);
    },
  },
  methods: {
    /**
     * 路由跳转
     * @param index
     * @param link
     */
    routerLink(index, path) {
      // 点击哪个路由就赋值给自定义的下下标
      this.navIndex = index;
      // 路由跳转
      this.$router.push(path);
    },

    /**
     * 检索当前路径
     * @param path
     */
    checkRouterLocal(path) {
      // 查找当前路由下标高亮
      this.navIndex = this.nav.findIndex((item) => item.path === path);
    },
  },
};
</script>

<style>
/* box */
.forms {
  width: 885px;
  height: 530px;
  margin: auto !important;
  color: #040404;
  border: 0;

  border-radius: 10px;
  background: url(../assets/images/cert.png) no-repeat;
  background-size: cover;
  box-shadow: 0 10px 10px #d8d8d8;
}
.title {
  padding: 55px 0 0 45px;
  font-size: 32px;
  font-weight: 700;
}
/* left->input&btn&msg */
.form {
  margin: 60px 0 0 60px;
}
/* input+img */
.input-box {
  display: flex;
  width: 590px;
  border: solid 1px #e0e0e0;
  /* margin: 15px 0;
  transform: translateY(-15px) translatex(-60px); */
  margin: 15px auto;
  background-color: #fff;
}
.input-box img {
  width: 30px;
  height: 30px;
  transform: translate(15px, 8px);
}
.input-box input {
  width: 522px;
  height: 51px;
  border-radius: 0;
  border: 0;
  margin-left: 35px;
}

.form .btn {
  width: 140px;
  height: 45px;
  background-color: #f13a3a;
  border-radius: 10px;
  color: #fff;
  text-align: center;
  font-size: 24px;
  line-height: 24px;
}
.form .btn:nth-child(1) {
  transform: translatex(-50px);
}
.msg {
  text-align: center;
  padding-top: 20px;
  transform: translatex(-5%);
  margin: auto;
}
/* right  */
.right {
  padding: 0 !important;
  font-size: 16px;
  /* transform: translateX(1px); */
}
.right li {
  height: 20%;
}
/* right btn */
.right p {
  cursor: default;
  display: block;
  height: 100%;
  margin: 0 !important;
  border: 2px solid transparent !important;
  box-shadow: 0 0 3px #ccc;
  background-color: #f3f5f8;
  text-align: center;
  padding-top: 25%;
  color: #040404;
}

.right .active {
  border: 0 !important;
  width: 99%;
  /* margin-left: 1%; */
  transform: translateX(1%);
  background-color: #f13a3a;
  color: #fff !important;
}

/* 
.footer {
  font-size: 13px;
} */
.cert-detail table {
  width: 90%;
  background-color: #fff;
  position: absolute;
  transform: translatex(-20%);
  margin-top: 60px;
}

.notice {
  position: absolute;
  width: 40%;
  margin-top: 60px;
  display: none;
  /* color: #f13a3a; */
  /* transform: translatex(50%); */
  /* font-size: 25px; */
}

@media screen and (max-width: 960px) {
  /* bgimg */
  .forms {
    width: 355px !important;
    height: 190px !important;
    margin: 60px auto !important;
  }

  .title {
    font-size: 11px;
    padding: 10px 0 15px 15px;
  }

  .form {
    /* margin: 60px 0 0 120px; */
    margin: 0;
  }
  .input-box {
    height: 28px;
    width: 251px;
    margin: 0px 0 5px 10px;
  }
  .input-box input {
    width: 210px;
    height: 25px;
    margin-left: 24px;
    margin-top: 0.5px;
    font-size: 8px;
  }
  .input-box img {
    height: 15px;
    width: 15px;
  }

  .form .btn {
    width: 50px;
    height: 20px;
    /* margin-top: 10px; */
    border-radius: 2px;
    text-align: center;
    font-size: 10px;
    line-height: 3px;
  }
  .form .btn:nth-child(1) {
    transform: translatex(-20px);
  }
  .form .btn:nth-child(2) {
    transform: translatex(20px);
  }

  .msg {
    font-size: 8px !important;
    padding-top: 5px;
    transform: translatex(-20%);
    /* padding-left: 15px; */
    /* margin: auto; */
    /* transform: scale(0.7, 0.7) translatex(-90px); */
    width: 400px;
  }
  .notice {
    transform: none;
    /* font-size: 8px; */
  }

  .cert-detail table {
    font-size: 10px;
    transform: none;
  }
  .right {
    font-size: 8px;
  }

  /* .right p {
    padding-top: 0;
  } */
}
</style>