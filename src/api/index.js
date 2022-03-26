import Axios from '@/api/Axios';
// 用户資訊
export const me = () => Axios.get( '/member/member/me' );
// 用户 VIP 資訊
export const getMemberVipInfo = () => Axios.get( '/member/vip/info' );

// export const login = (payload) => Axios.post('/users/login', payload);
// // 用户注册
// export const register = (payload) => Axios.post('/users/reg', payload);
// // 获取注册验证码
// export const getRegCode = (payload) => Axios.post('/users/code', payload);
// // 获取找回密码验证码
// export const getForgotCode = (payload) => Axios.post('/users/forget/code', payload);
// // 找回密码
// export const resetPass = (payload) => Axios.post('/users/reset/pass', payload);
// // 公告列表
// export const noticeList = (payload) => Axios.get('/notice/list', { params: payload });
