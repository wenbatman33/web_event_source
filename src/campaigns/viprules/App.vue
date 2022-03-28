<template lang="pug">
.mainWarp
	AppHeader
	.min-h-screen.bg-black
		.main
			section.vip-table
			section.details
				.container
					.title
					ul.decimal
						li 会员单月累计的有效额达到对应VIP等级，即可在次月5号12:00后成功晋级VIP。
						li 晋级礼金/周年礼金/月度礼金发放时间，于符合资格的次月5号12:00后发放到VIP俱乐部，会员需要手动领取对应礼金。
						li 返水礼金于每日16:00后发放到VIP俱乐部，会员可以选择每日领取或者累计多日一键领取。
						li 晋级礼金/月度礼金/年度礼金/返水礼金领取后不限平台，一倍流水即可申请提款。
						li 周年礼金会员需要满足注册1周年，且当月投注额达到目前VIP等级才可以在次月领取，例如张会员注册于2020.04.05，在2021.04月为Lv5，且2021.04.01~04.30产生有效投注额130万，那么于2021.05.05即可领取188元周年礼。
						li 单日提款次数/单日提款上限根据会员VIP等级不同，提供最高单日提款额度70万，单日提款次数20次特权。
						li 私人客服管家/私人定制域名/存款专属通道/新利品牌特邀，会员符合VIP资格后，可以联络VIP客服经理进行申请。
						li 新利VIP制度采用不降级模式，会员一经晋级成功，将永久保存专属尊贵头衔。
						li 任何玩家、团体、组织以不诚实的方式参与活动，包括对赌、对冲、同装置、多账号、软件下注、刷水、合谋套利等，一经核实将自动取消获奖资格，并不事先作任何通知。
						li 为避免文字理解差异，新利保留该活动的最终解释权
			.go2top.cursor-pointer(@click='backTop')
				img.w-12(src='/static/img/viprules/top.e06a2151.png')
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
