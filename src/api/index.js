import Axios from '@/api/Axios';
// 用户資訊
export const me = () => Axios.get( '/member/member/me' );
// 用户 VIP 資訊
export const getMemberVipInfo = () => Axios.get( '/member/vip/info' );

