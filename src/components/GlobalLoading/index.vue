<template lang="pug">
#globalLoading.WH_FULL.fixed.CENTER.bg-black.bg-opacity-20.hidden
	.w-20.h-20.rounded-xl.bg-black.bg-opacity-60.CENTER
		svg.w-8.h-8.text-white.animate-spin(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24")
			circle.opacity-25(cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4")
			path.opacity-75(fill="#F0453A" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z")
</template>
<script setup></script>
