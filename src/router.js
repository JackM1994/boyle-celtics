import {createRouter, createWebHistory} from 'vue-router';

import Home from './pages/Home.vue';
import ClubDraw from './pages/ClubDraw.vue';
import Payment from './pages/Payment.vue';

const router = createRouter({
	history: createWebHistory(),
	routes:[
		{path: '/home', component: Home},
		{path: '/draw', component: ClubDraw},
		{path: '/payment', component: Payment}

	]
});

export default router;