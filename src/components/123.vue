<script>
export default {
  name: "health",
  data() {
    return {
        tableData : [
                {
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-02',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-04',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-01',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
        ]
    };
  },
method:{
       // 导出 所有
  setArticle: function () {
      var that = this;
      axios({
        method: "POST",
        url: common.domain + "article/detail",
        data: { id: that.id },
        headers: { token: common.token },
      }).then(function (res) {
        if (res.data.errno === 0) {
          that.article = res.data.msg;
        }
      });
    },
      exportAllExcela: function ()  {
          console.log('123');
        ElMessageBox.confirm("是否确认导出全部参赛人员数据?", "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then((response) => {

          // 获取用户列表
        //   let arr = [];
        //   let parameter = {
        //     pageNo: 1,
        //     pageSize: 1000
        //   }
        //   getMatchUserInfoList(parameter).then(res => {
        //     this.loading = false;
        //     if (res.data.code != "1") {
        //       this.$message({
        //         type: 'info',
        //         message: res.data.message
        //       })
        //     } else {
        //       arr = res.data.data;
        //       console.log('----------:', JSON.stringify(arr))
        //       this.exportList(arr);
        //     }
        //   }).catch(err => {
        //     this.$message.warning("系统问题，请稍后重试！")
        //   })
           })
      },
      exportList(arr){
        let tableData = [
          ['序号', '赛区名称', '参赛人', '手机号', '收件地址', "邮箱", "录入时间",  "审核状态", "是否发送豆子"]//导出表头
        ] // 表格表头
        arr.forEach((item, index) => {
          let rowData = []
          //导出内容的字段
          rowData = [
            index + 1,
            item.matchAreaName,
            item.userName,
            item.userPhone,
            item.receiveAddress,
            item.email,
            item.createTime,
            item.dataFlag === 0 ? '待审核': '审核通过',
            item.sendFlag === 1 ? '否': '是',
          ]
          tableData.push(rowData)
        })
        let workSheet = XLSX.utils.aoa_to_sheet(tableData);
        let bookNew = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(bookNew, workSheet, '作品名称') // 工作簿名称
        let name = '全部参赛人员' + this.timeFormat() + '.xlsx'
        XLSX.writeFile(bookNew, name) // 保存的文件名
      }
},
   
};


</script>

<template>
<div>
     <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
    <el-button size="small" type="primary"  @click='setArticle()'>导出全部</el-button>
</div>
</template>

<style scoped>

</style>