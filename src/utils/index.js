const ENV = import.meta.env;

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

export function openLiveChat() {
	URL = 'https://secure.livechatinc.com/licence/8233741/v2/open_chat.cgi?groups=14&name=';
	window.open(URL, 'LiveChatWidget', 'height=450,width=380');
}
export function gotoCommonLogin ( query ) { }

export function gotoCommonRegister () { }

export const setLoginData = (data) => window.localStorage.setItem('LOGIN_INFO', JSON.stringify(data));
export const getLoginData = () => (window?.localStorage?.LOGIN_INFO && JSON.parse(window?.localStorage?.LOGIN_INFO)) || undefined;


export function setToken(token) {
	const data = getLoginData();
	const newToken = { token: String(token) };
	const newData = { ...data, ...newToken };
	window.localStorage.setItem('LOGIN_INFO', JSON.stringify(newData));
}

export function cleanLocalStorage() {
	window.localStorage.removeItem('LOGIN_INFO');
	window.localStorage.removeItem('USER_INFO');
}