<template lang="pug">
header
	.container.BETWEEN
		.logo
			a#header-logo(href="#")
				img.w-36(:src="logo")

		.user-info-block.BETWEEN_CENTER.text-sm www
			//- .user-info
			//- 	.info.text-white
			//- 		span.mx-1 尊敬的新利会员
			//- 		span.mx-1 {{username}}
			//- 		span.mx-1 您好！
			//- a.btn(href="#", v-if="!isLogin") 登录
			//- a.btn(href="#", v-if="!isLogin") 注册
			//- a.btn(href="#", v-if="isLogin") 登出
			//- a.btn.pure-btn(href="#")
			//- 	i.icon-livechat
</template>

<script setup>
	import { ref, onMounted, computed } from 'vue';
	import { getLoginData } from '@/utils';

	const isLogin = ref(true);
	const LoginData = getLoginData();

	const logo = `${window.staticPath || ''}/static/img/18logo.png`;
	const currentVIP_LV_Icon = computed(() => `${window.staticPath}/static/img/VIP/VIP_Badge_LV_1.png`);

	const username = computed(() => 'user');
	onMounted(() => {
		console.log(LoginData);
	});
</script>

<style scoped lang="scss"></style>
