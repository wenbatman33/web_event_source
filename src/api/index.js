import Axios from '@/api/Axios';
// 用户資訊
export const me = () => Axios.get( '/member/member/me' );
// 用户 VIP 資訊
export const getMemberVipInfo = () => Axios.get( '/member/vip/info' );

// get Event0001
export const getEvent0001 = () => Axios.get( '/event/event0001' );

// post Event0002
export const postEvent0001 = () => axios.post( '/event/event001' );

// get Event0002
export const getEvent0002 = () => Axios.get( '/event/event0002' );

// post Event0002
export const postEvent0002 = () => axios.post('/event/event002');

