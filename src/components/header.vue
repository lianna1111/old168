
<style>
.logo img {
  width: 290px;
  height: 110px;
  margin: 20px 0;
}
nav .container-fluid {
  padding: 0;
}

nav .collapse {
  background-color: #d9001b;
}
nav .collapse ul {
  margin: auto;
}

nav .collapse ul .active {
  background-color: #a00013;
}

nav .collapse .d-flex p {
  line-height: 25px;
  font-size: 20px;
  cursor: default;
  color: #fff !important;
  font-family: "microsoft yahei", "宋体";

  font-weight: 700;

  padding: 0.5rem 1rem;
  margin: 0 2px;
}

@media screen and (max-width: 960px) {
  nav .collapse .d-flex p {
    width: 100%;
    font-size: 15px;
    font-weight: normal;
    padding: 0;
    margin: 2px auto;
  }
  /* .navbar-collapse {
    position: absolute;
    top: 100%;
    z-index: 999;
    width: 100%;
  } */
}
</style>


<template>
  <div>
    <!-- logo -->
    <div class="container">
      <div class="d-none d-md-block" style="background-color: #fff">
        <div class="row logo">
          <img
            src="../assets/images/logo.png"
            alt=""
            @click="routerLinkHome()"
          />
        </div>
      </div>
    </div>

    <!-- nav -->

    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid margin-bottom-20">
        <button
          class="navbar-toggler"
          style="margin-left: 10px"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
          aria-expanded="true"
        >
          <ul class="navbar-nav d-flex">
            <li
              :class="navIndex === index ? 'active' : ''"
              class="nav-item text-center"
              v-for="(item, index) in nav"
              @click="routerLink(index, item.path)"
              :key="index"
            >
              <p>
                {{ item.title }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- navbar end -->
  </div>
</template>

<script>
export default {
  name: "headers",

  data() {
    return {
      nav: [
        { title: "首页", path: "/" },
        { title: "要闻公告", path: "/news/category" },
        { title: "组织介绍", path: "/about/ab1" },
        { title: "赛事活动", path: "/game/produce" },
        { title: "舞蹈分类", path: "/dance/classic" },
        { title: "培训信息", path: "/edu/latinVideo" },
        { title: "证书查询", path: "/search/certificate" },
        { title: "联系我们", path: "/contact" },
      ],
      navIndex: 0,
    };
  },
  methods: {
    close() {
      document.getElementsByClassName("navbar-toggler").click();
    },
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
    routerLinkHome() {
      // 路由跳转
      this.$router.push("/");
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

  watch: {
    $route() {
      // 获取当前路径
      let path = this.$route.path;
      // 检索当前路径
      this.checkRouterLocal(path);
    },
  },
};
</script>
