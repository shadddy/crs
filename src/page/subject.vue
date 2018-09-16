<template>
	<div class="container-wrap">
		<my-header></my-header>
		<router-view/>
		<my-footer></my-footer>
	</div>
</template>

<script>
	import header from '@/components/header'
	import footer from '@/components/footer'
	export default{
		components: {
			myHeader: header,
			myFooter: footer
		},
	}
</script>

<style>
</style>