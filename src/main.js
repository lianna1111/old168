
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"  //引入

//设置axios为form-data
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function (data) {
    let ret = ''
    for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
}]



import './assets/css/global.css'
import './assets/css/common.css'

// import './assets/bootstrap5/css/bootstrap.min.css'
// import './assets/bootstrap5/js/bootstrap.bundle.min.js'
import './assets/js/common'

const app = createApp(App) // 创建实例
//然后再修改原型链
//设置axios为form-data

app.config.globalProperties.$axios = axios

app.use(router).mount('#app')

