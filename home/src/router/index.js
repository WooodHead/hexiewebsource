import Vue from 'vue'
import Router from 'vue-router'


import index from '@/pages/index' //物业首页
 

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path:'/',
      name:'index',
      component:index,
      meta:{
        title:'社区生活'
      },
    },  
  ]
});
//路由的钩子函数，
//在每一次路由跳转之前会进入这个方法 to：到哪去  from：从哪来 next() 调用这个方法来完成这个钩子函数
router.beforeEach((to, from, next) => {
    var flag;
    if(to.matched[0].name != "index"&& to.matched[0].name!='register') {
       flag= common.checkRegisterStatus()
        if(!flag) {
            return
        }
      }
    //动态改变title
    changeTitle(to.meta.title)
    next();
});
//动态改变title
function changeTitle(title) {
    title = title ? title : '社区';
    window.document.title = title;
};

export default router