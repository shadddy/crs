import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/page/indexPage'
import subjectPage from '@/page/subject'
import subject_1 from '@/page/subject_1'
import subject_2 from '@/page/subject_2'
import subject_3 from '@/page/subject_3'
import knowPage from '@/page/know'
import contactPage from '@/page/contact'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'indexPage',
			component: indexPage
		},
		{
			path: '/subject',
			name: 'subjectPage',
			component: subjectPage,
			redirect:'/subject/subject_1',
			children: [{
					path: 'subject_1',
					component: subject_1

				},
				{
					path: 'subject_2',
					component: subject_2

				},
				{
					path: 'subject_3',
					component: subject_3

				}
			]
		},
		{
			path:'/know',
			name:'knowPage',
			component:knowPage
		},{
			path:'/contact',
			name:'contactPage',
			component:contactPage
		}
	]
})