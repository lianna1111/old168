<template>
  <div>
  <el-timeline>
    <template
      v-for="item in photocate"
      :key="item.ID"
     >
    <el-timeline-item :timestamp="item.PostTime" placement="top">
      <el-card>
       <template #header>
      <div class="card-header">
        <span>{{item.Title}}</span>
         <el-button class=" detail"  @click="toDetail(item)" >查看更多</el-button>
      </div>
    </template>
    <template v-for='ite in item.Content'>
{{ite}}
    </template>

     <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="items in item.photo" :key="items.ID">
   <el-image  :src="items.Filename" style='height:100%;width:100%' fit="contain" /> 
  
    </el-carousel-item>
  </el-carousel>
     
      </el-card>
    </el-timeline-item>
    </template>
  </el-timeline>

  </div>
</template>

<script>
import axios from "axios";

import common from "../../assets/js/common";
var cid = "28";
export default {
  name: "amazing",

  data() {
    return {
      indexarticle: 1,
      photo: [],
      photocate:[],
      picurl: common.picurl,
    };
  },
  created: function () {
    this.photocates();

  },
  methods: {
    toDetail: function (item) {
      // this.$router.push({ name: "photoDetail"});
      this.$router.push({ name: "photoDetail", query: { id: item.ID } });
      
    },
//cate
  photocates: function () {
      var that = this;
      axios({
        method: "get",
        url: common.domain + "photo/cate",
        headers: { token: common.token },
      }).then(function (res) {
        if (res.data.errno === 0) {

    // console.log(res.data.msg,'2222')
    let arr =[]
    for(let i=res.data.msg.length-1;i >= 0; i--){
      if(res.data.msg[i].ID>8){
arr.push(res.data.msg[i])

      }

    }
    // console.log(arr,'arr');
    that.photocate = arr;
    that.photos();

      }
      });
    },
    //article
    photos: function () {
      var that = this;
      that.photocate.forEach((item,index) => {
          axios({
            method: "POST",
            url: common.domain + "photo",
            data: {  cid:item.ID },
            headers: { token: common.token },
          }).then(function (res) {
            if (res.data.errno === 0) {
        // that.photo = res.data.msg;
        that.photocate[index].photo=res.data.msg.slice(0,3)

          }  
      });
     
      });
        console.log(that.photocate,'555')

    },
      //article detail
    ArticleDetail: function (id,data) {
      var that = this;
      let result=''
       axios({
        method: "POST",
        url: common.domain + "article/detail",
        data: { id: id },
        headers: { token: common.token },
      }).then(function (res) {
        if (res.data.errno === 0) {
          // that.article = res.data.msg;
          console.log(data,res.data.msg,'detail')
          if(data.ID==res.data.msg.ID)
  data.Content=res.data.msg.Content
  result=data
//   for (let i in data) {
//   if(data[i].ID==res.data.msg.ID)
//   data[i].Content=res.data.msg.Content

//  }
 console.log(data,'111')
return result;
        }
      });
    },
  },
};
</script>

<style scoped>
.card-header {
  padding: 0;
  border:0;
  font-size:20px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.detail{
  color:#d9001b;
  font-size:10px
}
/* .el-carousel__item img {
 width:100%;
 height:100%
} */

.el-carousel__item {
  background-color:transparent;
}

</style>