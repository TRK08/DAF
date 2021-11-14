import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Services from '../pages/Services.vue'
import SingleServices from '../pages/SingleServices.vue'
import Objects from '../pages/Objects.vue'
import AboutCompany from '../pages/AboutCompany.vue'
import Contacts from '../pages/Contacts.vue'
import Technique from '../pages/Technique.vue'
import Vacancies from '../pages/Vacancies.vue'

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/services',
		component: Services
	},
	{
		path: '/services/:id',
		component: SingleServices,
		props: true
	},
	{
		path: '/objects',
		component: Objects,
	},
	{
		path: '/about',
		component: AboutCompany,
	},
	{
		path: '/contacts',
		component: Contacts,
	},
	{
		path: '/technique',
		component: Technique,
	},
	{
		path: '/vacancies',
		component: Vacancies,
	},
	// {
	// 	path: '*',
	// 	component: Notfound
	// },
]

export default routes;