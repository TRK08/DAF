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
		path: '/uslugi',
		component: Services
	},
	{
		path: '/uslugi/:id',
		component: SingleServices,
		props: true
	},
	{
		path: '/obekty',
		component: Objects,
	},
	{
		path: '/o-kompanii',
		component: AboutCompany,
	},
	{
		path: '/kontakty',
		component: Contacts,
	},
	{
		path: '/technique',
		component: Technique,
	},
	{
		path: '/vakansii',
		component: Vacancies,
	},
	// {
	// 	path: '*',
	// 	component: Notfound
	// },
]

export default routes;