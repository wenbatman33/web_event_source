import { defineStore } from 'pinia'

import { me, getMemberVipInfo } from '@/api';
import { getLoginData } from '@/utils';

export const UserStore = defineStore({
  id: 'user',
  state: () => ({
		loginInfo: {},
    userInfo: {},
		vipInfo: {},
  }),
  actions: {
    async checkUserInfo() {
			// if (getLoginData()) {
				const meResult = await me();
				meResult && this.setUserInfo(meResult?.data?.data);
				// 取得VIP讯息
				const VIP_Result = await getMemberVipInfo();
				VIP_Result && this.setVipInfo(VIP_Result?.data?.data);
			// }
		},
		setUserInfo(data) {
			window.localStorage.setItem('USER_INFO', JSON.stringify(data));
			this.userInfo = { ...data };
		},
		setVipInfo(data) {
			this.vipInfo = { ...data };
		},
  }
})
