import axios from 'axios';
import { getToken, logOut } from '@/utils';

let Axios = axios.create({
	timeout: 10000,
	headers: {
		get: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
		post: { 'Content-Type': 'application/json;charset=utf-8' },
	},
});

function showGlobalLoading () { 
	const globalLoading = window.document.getElementById( 'globalLoading' );
	globalLoading && globalLoading.remove('hidden');
	
}

function hiddenGlobalLoading () { 
	const globalLoading = window.document.getElementById( 'globalLoading' );
	globalLoading && globalLoading.add('hidden');
}
// request拦截器
Axios.interceptors.request.use(
	( config ) => {
		if (getToken()) {
			config.headers.common.Authorization = `Bearer ${getToken()}`;
		}
		showGlobalLoading();
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
// response 拦截器
Axios.interceptors.response.use(
	( response ) => {
		if ( response.data.msgCode == 1014 ) { logOut(); }
		hiddenGlobalLoading();
		return response;
	},
	( error ) => {
		hiddenGlobalLoading();
		return Promise.reject( error );
	}
);

export default Axios;
