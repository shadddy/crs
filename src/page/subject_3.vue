<template>
	<div class="content-wrap">
		<my-banner :banner="banner"></my-banner>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				banner: require('../assets/img/subject-3-banner.jpg'),
			}
		}
	}
</script>

<style>
</style>