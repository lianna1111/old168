<template>
  <div class="container-fluid">
    <div class="container" >
      <!-- {{article[0].Title}} -->
      <el-image :src="article[0].Filename" fit="contain"/> 
      <div  class='imgBox'>
      <div v-for="items in article.slice(1,n)" :key='index'>
          <el-image :src="items.Filename" fit="contain"/> 
        </div>
        </div>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";

import common from "../assets/js/common";
export default {
  name: "articleDetail",
  data() {
    return {
      id: "",
      article: [],
    };
  },
  
created() {
   this.id = this.$route.query.id
   console.log(this.id);
  this.setArticle()
    window.oncontextmenu = function (e) {
      return false
    }
},
  methods: {
    //
    setArticle: function () {
      var that = this;
      axios({
        method: "POST",
        url: common.domain + "photo",
        data: { cid: that.id },
        headers: { token: common.token },
      }).then(function (res) {
        if (res.data.errno === 0) {
          that.article = res.data.msg;
        }
      });
    },



  },


  
};
</script>

<style>
.imgBox{
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content:space-around
  
  
}
.imgBox img{
 /* height:300px; */
 width:400px;
 flex:1
}

</style>