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

		.absolute.w-full.h-full.top-0.z-20
			.firstWrapper
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
			
			.secondWrapper.CENTER 
				//- pc
				.CENTER.hidden(class='w-[800px] pt-[450px] sm:hidden md:flex lg:flex xl:flex')
					.grid.grid-cols-5.gap-4.mx-28
						.col-span-1.CENTER(v-for="(star, index) in 10")
							img(src="/static/img/freahman2022/starDark.png")
				//- h5
				.CENTER.w-full(class='pt-[60%] sm:flex md:hidden lg:hidden xl:hidden')
					.w-full.grid.grid-cols-6.gap-8.mx-20
						.col-span-2.CENTER(v-for="(star, index) in 10" :class='{"col-span-3":(index===0 || index===1 || index===8 || index===9) }')
							img.w-16(src="/static/img/freahman2022/starDark.png")

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
			.absolute.w-full.bottom-8
				.go2top.CENTER(@click="backTop")
					img.w-12(src='/static/img/freahman2022/top.png')

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
