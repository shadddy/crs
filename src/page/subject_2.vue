<template>
	<div class="content-wrap">
		<my-banner :banner="banner"></my-banner>
		<div class="container">
			<img :src="pic1" class="pic pic-1 wow fadeIn" alt="pic1" />
		</div>
		<div class="box">
			<div class="container">
				<div class="wow fadeInUp">
					<h1 class="title">哪些人群最受CRS风暴影响</h1>
				<h2 class="subtitle">WHICH GROUPS ARE MOST AFFECTED BY THE CRS STORM</h2>
				<div class="bottom-line"></div>
				</div>
				<img :src="pic2" class="pic2 pic-2 wow fadeInUp" alt="pic2" />
				<div class="button wow zoomIn" @click="toQ">立即咨询</div>
			</div>
		</div>
		<div class="box">
			<div class="container">
				<div class="wow fadeInUp">
					<h1 class="title">CRS几乎涵盖所有资产领域</h1>
				<h2 class="subtitle">CRS COVERS ALMOST ALL ASSET DOMAINS</h2>
				<div class="bottom-line"></div>
				</div>
				<img :src="pic3" class="pic2 pic-3 wow fadeInUp" alt="pic3" />
				<div class="button wow zoomIn" @click="toQ">立即咨询</div>
			</div>
		</div>
		<div class="box">
			<div class="container">
				<div class="wow fadeInUp">
					<h1 class="title">CRS几乎众多熟知国家和地区</h1>
				<h2 class="subtitle">CRS IS KNOWN TO ALMOST ALL COUNTRIES AND REGIONS.</h2>
				<div class="bottom-line"></div>
				</div>
				<img :src="pic4" class="pic2 pic-4 wow fadeIn" alt="pic4" />
				<div class="button wow zoomIn" @click="toQ">立即咨询</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { WOW } from 'wowjs'
	export default {
		data(){
			return{
				banner: require('../assets/img/subject-2-banner.jpg'),
				pic1: require('../assets/img/subject-2-pic1.jpg'),
				pic2: require('../assets/img/subject-2-pic2.jpg'),
				pic3: require('../assets/img/subject-2-pic3.jpg'),
				pic4: require('../assets/img/subject-2-pic4.jpg'),
			}
			
		},
		mounted(){
			new WOW().init()
		},
		methods:{
			toQ(){
				window.open("http://wpa.qq.com/msgrd?v=3&uin=93926753&site=qq&menu=yes")
			}
		}
	}
</script>

<style lang="less" scoped>
	.pic2{
	width: 100%;
	margin: 120*@rem auto;
	display: block;
}
</style>