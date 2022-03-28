<template lang="pug">
.mainWarp
	AppHeader
	.min-h-screen.relative
		.bg-wrapper.z-10
			.bgPC.hidden.overflow-hidden(class='"sm:hidden md:block lg:block xl:block"')
				.centerContainer
					.bg(class='w-[1920px] h-[3670px]' style='background:url("/static/img/freahman2022/bg.jpg")')
			.bgH5.block(class='"sm:block md:hidden lg:hidden xl:hidden"')
				img.w-full(src='/static/img/freahman2022/H5/bg.jpg')

		.main.absolute.w-full.top-0.z-20
			//- pc
			.CENTER.hidden(class='pt-[1140px] sm:hidden md:flex lg:flex xl:flex')
				.grid.grid-cols-3.gap-4
					.col-span-1.CENTER
						img(class='w-[220px]' src="/static/img/freahman2022/cardNotBind.png")
					.col-span-1.CENTER
						img(class='w-[320px]' src="/static/img/freahman2022/gift.png")
					.col-span-1.CENTER
						img(class='w-[220px]' src="/static/img/freahman2022/phoneNotBind.png")
			
			//- h5
			.CENTER(class='pt-[140%] sm:flex md:hidden lg:hidden xl:hidden')
				.grid.grid-cols-2.gap-2
					.col-span-1.CENTER
						img(class='w-[80%]' src="/static/img/freahman2022/cardNotBind.png")
					.col-span-1.CENTER
						img(class='w-[80%]' src="/static/img/freahman2022/phoneNotBind.png")
					.col-span-2.CENTER
						img(class='w-[60%]' src="/static/img/freahman2022/giftDisable.png")
				//- 			.btn.disable()
				//- 		.no-chance
				//- 		.not-yet
				//- 	.second-wrapper
				//- 		.star
				//- 		.no-chance
				//- 		.not-yet
				//- 	.third-wrapper
				//- 		.no-chance
				//- 		.not-yet
				//- 		.winloss -winLoss
				//- 		.winloss-bonus winLossBonus
				//- .go2top(@click="backTop")
				//- 	img.w-12(src='/static/img/freahman2022/top.png')

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

<style>
	.centerContainer {
		position: relative;
		left: 50%;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
		width: 1920px;
	}
</style>
