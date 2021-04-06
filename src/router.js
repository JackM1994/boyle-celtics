import {createRouter, createWebHistory} from 'vue-router';

import Home from './pages/Home.vue';
import ClubDraw from './pages/ClubDraw.vue';
import Payment from './pages/Payment.vue';
import Registration from './pages/Registration.vue';

const router = createRouter({
	history: createWebHistory(),
	routes:[
		{path: '/home', component: Home},
		{path: '/draw', component: ClubDraw},
		{path: '/payment', component: Payment},
		{path: '/registration', component: Registration}

	]
});

export default router;