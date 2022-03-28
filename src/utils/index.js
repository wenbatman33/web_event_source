import { UserStore } from '@/stores/userStore';

const ENV = import.meta.env;

export const isMobileDevice = () => {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		return true;
	} else {
		return false;
	}
};

export function commaFormat(value) {
	return value?.toString().replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/, (all, pre, groupOf3Digital) => pre + groupOf3Digital.replace(/\d{3}/g, ',$&'));
}
export function commaFormatDecimal(value) {
	const realVal = ((Number(value) * 100) / 100).toFixed(2);
	if (!Number.isNaN(value) && value !== undefined) {
		let realVal_str = realVal.toString();
		let rs = realVal_str.indexOf('.');
		if (rs < 0) {
			rs = realVal_str.length;
			realVal_str += '.';
		}
		while (realVal_str.length <= rs + 2) {
			realVal_str += '0';
		}
		return realVal_str.toString().replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/, (all, pre, groupOf3Digital) => pre + groupOf3Digital.replace(/\d{3}/g, ',$&'));
	}
	return realVal;
}


export const refreshUserInfo = () => { };

// 開啟LIvechat
export function openLiveChat() {
	URL = 'https://secure.livechatinc.com/licence/8233741/v2/open_chat.cgi?groups=14&name=';
	window.open(URL, 'LiveChatWidget', 'height=450,width=380');
}
// 去共同登入
export function gotoCommonLogin(query) {
	const CODE = window.localStorage.CODE ? `&code=${window.localStorage.CODE}` : '';
	const commonLoginUrl = String(window.memberUrl) + '?redirectUrl=' +window.location.href + CODE;
	window.location.replace(commonLoginUrl + (query ? query : ''));
}
// 去共同註冊
export function gotoCommonRegister() {
	const CODE = window.localStorage.CODE ? `&code=${window.localStorage.CODE}` : '';
	const commonRegisterUrl = String(window.memberUrl) + '/register.html?redirectUrl=' +window.location.href + CODE;
	console.log(commonRegisterUrl)
	window.location.replace( commonRegisterUrl );
}

// 設定 localStorage 登入資料
export const setLoginData = ( data ) => window.localStorage.setItem( 'LOGIN_INFO', JSON.stringify( data ) );
// 從localStorage 取得登入資料
export const getLoginData = () => (window?.localStorage?.LOGIN_INFO && JSON.parse(window?.localStorage?.LOGIN_INFO)) || undefined;

// 取得 token
export function getToken() {
	const data = getLoginData();
	return data ? data.token : undefined;
}

// 設定 token
export function setToken(token) {
	const data = getLoginData();
	const newToken = { token: String(token) };
	const newData = { ...data, ...newToken };
	window.localStorage.setItem('LOGIN_INFO', JSON.stringify(newData));
}

// window scroll 到上方
export function backTop () {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 登出方法
export function logOut () {
	const userStore = UserStore();
	userStore.clearUserInfo()
	window.localStorage.removeItem('LOGIN_INFO');
	window.localStorage.removeItem('USER_INFO');
	window.location.reload();
}

// 登出方法
export function checkPhone () {
	const userStore = UserStore();
	/* 手機是否驗證, 2未驗證, 1已驗證, 其他再定 */
	userStore.v2_vipInfo.phoneCert !==1  ? go2Profile() :''
}

// 去 profile 頁面
export function go2Profile () {
	const host = isMobileDevice() ? pcUrl: h5Url
	const profileUrl = host + '?deepLink=xinli://profile';
	window.location.href = profileUrl
}

go2Bankcard( state ) {
	const host = isMobileDevice() ? pcUrl: h5Url
	const bankCardUrl = host + '?deepLink=xinli://atm';
	window.location.href = bankCardUrl
},