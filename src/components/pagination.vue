<template>
  <div class="page-num">
    <div class="font-10">共1页/ 条信息</div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item active" aria-current="page">
          <a class="page-link" href="#"
            >1 <span class="visually-hidden">(current)</span></a
          >
        </li>
        <li class="page-item">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">4</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">5</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">...</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">10</a>
        </li>

        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
    <div class="font-10 color-gray">跳至<span>1</span>页</div>
    <button class="btn">确定</button>
  </div>
</template>

<script>
export default {
  name: "pagination",
};
</script>

<style>
/* page */
.page-num {
  display: flex;
  justify-content: center;
  /* margin: auto; */
  line-height: 40px;
}
.page-num nav {
  line-height: 25px;
}
.page-num nav li {
  width: 30px;
  height: 30px;
}
.page-num nav li:nth-child(1) a {
  border: 0;
  background-color: transparent;
}
.page-num nav li:nth-last-child(1) a {
  border: 0;
  background-color: transparent;
}
.page-num nav li a {
  color: #bababa;
  border-radius: 5px;
  border: solid 1px #bababa;
  padding: 0px;
  margin: 5px;
  text-align: center;
}
.page-num nav li a span {
  color: #bababa;
  font-size: 10px;
}
.page-num .font-10 {
  margin: 0 15px;
}
.page-num .font-10 span {
  border: solid 1px #ccc;
  border-radius: 5px;
  color: #bababa;
  padding: 5px;
  margin: 5px;
}
.page-num .btn {
  width: 55px;
  height: 30px;
  margin-top: 5px;
  font-size: 10px;
  border-radius: 5px;
  background-color: #d9001b !important;
  color: #fff;
}
.page-item.active .page-link {
  /* z-index: 3;
        color: #fff; */
  background-color: #d9001b !important;
  border-color: #d9001b !important;
}

.page-num .active {
  background-color: transparent !important;
}
@media screen and (max-width: 960px) {
  .page-num {
    display: block;
  }
  .page-num .btn {
    /* margin-left: 10%; */
    float: right;
    transform: translate(-20%, -130%);
  }
}
</style>