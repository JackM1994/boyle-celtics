import {createRouter, createWebHistory} from 'vue-router';

import ClubDraw from './pages/ClubDraw.vue';
import Payment from './pages/Payment.vue';

const router = createRouter({
	history: createWebHistory(),
	routes:[
		{path: '/', redirect: '/home'},
		{path: '/draw', component: ClubDraw},
		{path: '/payment', component: Payment}

	]
});

export default router;