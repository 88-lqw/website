import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import frist from '@/page/frist'

const context = require.context('@/page', false, /\.vue$/);
// console.dir(context);
// console.log(context.keys());
const components = {};
context.keys().forEach((value) => {
  const comp = context(value).default;
  components[comp.name] = comp;
});
Vue.use(Router)

const route = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/frist',
      name: 'frist',
      component: components.frist,
    },

  ]
})
export default route;
