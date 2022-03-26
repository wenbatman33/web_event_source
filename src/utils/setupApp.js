import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios';
import Axios from '@/api/Axios';
import '@/assets/scss/main.scss';

let app;
let ENV = import.meta.env;
let ENV_DATA;

function getEnv() {
	let envJson = '';
	if (ENV.MODE === 'development') {
		envJson = '/static/json/event_env.json';
	} else if (ENV.MODE === 'dev') {
		envJson = 'https://storage.googleapis.com/gcs-luck2-stg-static/public_dev_env/event_env.json';
	} else if (ENV.MODE === 'test') {
		envJson = 'https://storage.googleapis.com/gcs-luck2-stg-static/public_test_env/event_env.json';
	} else if (ENV.MODE === 'stage') {
		envJson = 'https://storage.googleapis.com/gcs-luck2-stg-static/public_env/event_env.json';
	} else if (ENV.MODE === 'production') {
		envJson = 'https://szfzggs.com/public_env/event_env.json';
	}
	axios.get( envJson ).then( res => {
		ENV_DATA = res.data
		init();
	})
}

/////////////////////////
function init () {
	axios.defaults.baseURL = ENV_DATA.api ? ENV_DATA.api[0].url : '';
	window.staticPath = ENV_DATA.img ? ENV_DATA.img[0].url : '';
	window.apiUrl = ENV_DATA.api ? ENV_DATA.api[0].url : '';
	window.apiImg = ENV_DATA.apiImg ? ENV_DATA.apiImg[0].url : '';
	window.socketUrl = ENV_DATA.socketUrl ? ENV_DATA.socketUrl[0].url : '';
	window.memberUrl = ENV_DATA.memberUrl ? ENV_DATA.memberUrl[0].url : '';
	window.affiUrl = ENV_DATA.affiUrl ? ENV_DATA.affiUrl[0].url : '';

	window.appUrl = ENV_DATA.app ? ENV_DATA.app[0].url : '';
	window.pcUrl = ENV_DATA.pcUrl ? ENV_DATA.pcUrl[0].url : '';
	window.h5Url = ENV_DATA.h5Url ? ENV_DATA.h5Url[0].url : '';

	/////////////////////////////////////////
	Axios.defaults.baseURL = window.apiUrl;
	/////////////////////////////////////////
	app.use(createPinia()).mount('#app');
}


export function setupApp ( App ) {
	app = createApp(App)
	getEnv()
}