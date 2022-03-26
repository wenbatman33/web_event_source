<template lang="pug">
.footer.h-16
	.container.h-16.flex.justify-end.items-center
		.text-xs.text-white 版权所有 © 2008-{{currentYear}}  新利
</template>

<script setup lang="ts">
	import { ref, onMounted, computed } from 'vue';

	const currentYear = ref(new Date().getFullYear());
</script>
