<template lang="pug">
.main
	AppHeader
	.min-h-screen
		.container
			main
				section.carousels
					.container
						.carousel(style="position: relative;")
							img.carousel-center(src="/static/img/stunner2020/pic_01.png")
				section.details
					.container
						ul.decimal
							li 每月的定义为：“当月的第一天~月末的最后一天”，按照自然月计算。
							li 非体育会员包含真人娱乐、快乐彩、电竞、棋牌、捕鱼等会员，体育会员指新利体育、沙巴体育、IM体育会员。
							li 体育会员资格与非体育会员资格不重复享有，例如张会员8月投注IM体育630万，投注AG真人娱乐1300万，将只计算为一次有效资格。
							li 有效投注额达到条件后，请于当月及次月使用完毕，如未使用将视为自动放弃。
							li 新女郎授课服务仅限中国大陆地区会员参加，部分未开通城市，请会员调整到其他城市进行申请。
							li 为保证服务质量，请会员提前7日预约，将会有专人客服经理与您联系，安排后续事行程。
							li 为避免文字的理解差异，新利保留该优惠活动的最终解释权。carouselResize
				.go2top
				
	AppFooter
	GlobalLoading
</template>

<script setup>
	import { onMounted } from 'vue';
	import AppHeader from '@/components/AppHeader.vue';
	import AppFooter from '@/components/AppFooter.vue';
	import GlobalLoading from '@/components/GlobalLoading/index.vue';

	onMounted(() => {
		// 取得使用者資訊
		userStore.checkUserInfo();
	});
</script>

<style></style>
