<template lang="pug">
.mainWarp
	AppHeader

	.wrapper-container
		.main
			.containerWrap
				.bg-wrapper
					.bg
						.first-wrapper
							.card-wrapper
								.btn
							.gift-wrapper
								.btn
							.phone-wrapper.cursor-pointer(@click='')
								.btn
						.second-wrapper
							.star
							.star
							.star
							.star
							.star
							.star
							.star
							.star
							.star
							.star
						.third-wrapper
			.go2top.cursor-pointer(@click='backTop')
				img.w-12(src='/static/img/freshman2022/top.png')

	AppFooter
	GlobalLoading
</template>

<script setup>
	import { onMounted } from 'vue';
	import AppHeader from '@/components/AppHeader.vue';
	import AppFooter from '@/components/AppFooter.vue';
	import GlobalLoading from '@/components/GlobalLoading/index.vue';
	import { UserStore } from '@/stores/userStore';
	import { backTop } from '@/utils';

	const userStore = UserStore();

	onMounted(() => {
		// 取得使用者資訊
		userStore.checkUserInfo();
	});
</script>

<style></style>
