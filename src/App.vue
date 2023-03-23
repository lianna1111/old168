
<style>
[v-cloak] {
  display: none;
}
</style>

<template>
  <div id="app" v-cloak>
    <v-Header></v-Header>

    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import headers from "./components/header.vue";
import footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    "v-Header": headers,
    "v-footer": footer,
  },
};
</script>

