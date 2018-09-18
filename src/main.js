// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import banner from './components/banner'

import 'animate.css'

Vue.component('myBanner', banner)
Vue.config.productionTip = false
Vue.use(ElementUI)

router.afterEach((to, from, next) => {
	window.scrollTo(0, 0);
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App),
	components: {
		App
	},
	template: '<App/>'
})