import { defineStore } from 'pinia'

import { me, getMemberVipInfo } from '@/api';

import { getLoginData } from '@/utils';

export const UserStore = defineStore({
  id: 'user',
  state: () => ({
		v2_loginInfo: null,
    v2_userInfo: null,
		v2_vipInfo: null,
  }),
	getters: {
		isLogin:(state) => {
			return state.v2_userInfo  && state.v2_vipInfo;
		}
	},
	actions: {
		checkUserInfo () {
			if ( getLoginData()!== undefined) {
				this.check_V2_UserInfo();
			}
		},
		check_V2_UserInfo () {
			me().then( ( res ) => {
				this.set_v2_UserInfo( res?.data?.data );
			})
			// 取得VIP讯息
			getMemberVipInfo().then( ( res ) => { 
				this.set_v2_VipInfo( res?.data?.data );
			})
			
		},
		set_v2_UserInfo ( data ) {
			window.localStorage.setItem( 'USER_INFO', JSON.stringify( data ) );
			this.v2_userInfo = { ...data };
		},
		set_v2_VipInfo ( data ) {
			this.v2_vipInfo = { ...data };
		},
		clearUserInfo () {
			this.v2_loginInfo = null;
			this.v2_userInfo = null;
			this.v2_vipInfo = null;
		}
	}
})
