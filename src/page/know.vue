<template>
	<div class="container-wrap">
		<my-header></my-header>
		<div class="content-wrap">
			<my-banner :banner="banner"></my-banner>
			
		</div>
		<my-footer></my-footer>
	</div>
</template>

<script>
	import header from '@/components/header'
	import footer from '@/components/footer'
	export default {
		components: {
			myHeader: header,
			myFooter: footer
		},
		data(){
			return{
				banner:require('../assets/img/know-banner.jpg'),
				
			}
		}
		
	}
</script>

<style>
</style>