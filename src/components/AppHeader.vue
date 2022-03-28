<template lang="pug">
.header.CENTER
	.container.BETWEEN.justify-center
		.flex-shrink-0
			.logo.w-20(class='md:w-36')
				img.w-full(:src="logo")
		.FLEX_R.flex-grow.justify-end.items-center
		
			.FLEX_R(v-if="isLogin")
				img.w-10(:src='currentVIP_LV_Icon')

				.FLEX_C.mx-2
					.info.text-white.text-sm
						p 尊敬的新利会员
						p
							span {{name}}
							span.mx-1 您好！

			.btn.mx-1(v-if="!isLogin" @click='gotoCommonLogin') 登录
			.btn.mx-1(v-if="!isLogin" @click='gotoCommonRegister') 注册
			.btn.mx-1(v-if="isLogin" @click='logOut') 登出

			span.cursor-pointer.mx-2(@click="openLiveChat")
				img(:src='livechat')
</template>

<script setup>
	import { ref, onMounted, computed } from 'vue';
	import { openLiveChat, gotoCommonLogin, gotoCommonRegister, logOut } from '@/utils';
	import { UserStore } from '@/stores/userStore';

	const userStore = UserStore();
	const logo = `${window.staticPath || ''}/static/img/18logo.png`;
	const livechat = `${window.staticPath || ''}/static/img/livechat.svg`;

	const isLogin = computed(() => userStore.isLogin);
	const name = computed(() => userStore.v2_userInfo?.name || '');
	const level = computed(() => userStore.v2_vipInfo?.level || 0);
	const currentVIP_LV_Icon = computed(() => (level.value !== undefined ? `${window.staticPath}/static/img/VIP/VIP_Badge_LV_${level.value}.png` : ''));
</script>

<style scoped lang="scss"></style>
