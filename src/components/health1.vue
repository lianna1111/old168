
<template>
  <div>
   <div class="demo-button-style">
    <el-checkbox-group>
      <el-button @click='tselect()'>全部</el-button>
      <el-button @click='fselect()'>未填报学生</el-button>

    </el-checkbox-group>
  </div>
 <el-table :data="tableData" stripe style="width: 100%" v-if='allstudent==false'>
    <el-table-column prop="ID" label="ID" width="180" />
    <el-table-column prop="UserID" label="UserID" width="180" />
    <el-table-column prop="ReturnName" label="姓名" />
    <el-table-column prop="Telephone" label="手机号" />
    <el-table-column prop="HealthColor" label="健康码颜色" />
     <el-table-column label="健康码图片" prop="">
    <template #default="scope">
       <el-image  style="width: 70px; height: 140px" :src="scope.row.HealthPic" alt="" :fit="fill" ></el-image>
    </template>
 </el-table-column>
    <el-table-column prop="HealthTime" label="健康码时间" />
    <el-table-column prop="TravelColor" label="行程码颜色" />
     <el-table-column label="行程码图片" prop="">
    <template #default="scope">
       <el-image  style="width: 70px; height: 140px" :src="scope.row.TravelPic" alt="" :fit="fill" ></el-image>
    </template>
 </el-table-column>
    <el-table-column prop="TravelTime" label="行程码时间" />


  </el-table>
  <el-table :data="tableDatas" stripe style="width: 100%" v-else>

    <el-table-column prop="ID" label="ID" width="180" />
    <el-table-column prop="CampusName" label="校区" width="180"/>

    <el-table-column prop="StudentName" label="姓名"  />

   

  </el-table>
          <el-button @click='download'>打印</el-button>
         
    
  </div>
</template>

<script>
import axios from "axios";
import common from "../assets/js/common";
export default {
  name: "health",

  data() {
    return {
       tableData : [ ],
       allstudent:false

    };
  },
  created: function () {
   this.getDate()
   this.getteam()
   this.getSchool()
  },
  
  methods: {
     getteam: function () {
      var that = this;
      let student=[]
      axios({
        method: "post",
        url: common.domain + "campus",
        data:{iid:'1'},
        headers: { token: common.token },
      }).then(function (res) {
        if (res.data.errno === 0) {
          console.log(res.data.msg,'team');
          that.school=res.data.msg

        }
      });
    },
     getSchool: function () {
      var that = this;
      let student=[]
      axios({
        method: "post",
        url: common.domain + "campus/student",
        data:{iid:'1'},
        headers: { token: common.token },
      }).then(function (res) {
        if (res.data.errno === 0) {
          console.log(res.data.msg,'school');
           that.school.forEach((items,indexs) => {
             
          res.data.msg.forEach((item,index)=>{
            if(!item.HealthColor&&item. ID>=3810){
             
              if(item.CampusID==items.ID){
                // console.log();
                res.data.msg[index].CampusName=items.CampusName
                // res.data.msg[index].CampusName=items.CampusName
              student.push(res.data.msg[index])
               }

            }
          })
           });

          console.log(student,'dasfg');

       that.tableDatas = student;

        }
      });
    },
     tselect: function () {
       this.allstudent = false;
    },
    fselect: function () {
       this.allstudent = true;
    },
   getDate: function () {
      var that = this;
      axios({
        method: "get",
        url: common.domain + "health",
        headers: { token: common.token },
      }).then(function (res) {
        if (res.data.errno === 0) {
          console.log(res.data.msg,'res');
          that.tableData = res.data.msg;
        }
      });
    },
    download(){console.log('123');
   

    },
  
  },
  watch: {
   
  },
};
</script>

<style >
</style>