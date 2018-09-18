<template>
	<div class="content-wrap">
		<my-banner :banner="banner"></my-banner>
		<div class="box">
			<div class="container">
				<div class="wow fadeInUp">
					<h1 class="title">从根源上因对CRS的方案</h1>
					<h2 class="subtitle">COPING WITH CRS'S SOLUTION FROM THE ROOT</h2>
					<div class="bottom-line"></div>
				</div>
				<img :src="pic1" class="pic2 pic-1 wow fadeInLeft" alt="pic1" />
				<div class="button wow zoomIn" @click="toQ">立即咨询</div>
			</div>
		</div>
		<div class="box">
			<div class="container">
				<div class="wow fadeInUp">
					<h1 class="title">迪拜纳税人身份方案的优势</h1>
				<h2 class="subtitle">ADVANTAGES OF DUBAI TAXPAYER IDENTITY SCHEME</h2>
				<div class="bottom-line"></div>
				</div>
				<img :src="pic2" class="pic2 pic-2 wow fadeInUp" alt="pic2" />
				<div class="button wow zoomIn" @click="toQ">立即咨询</div>
			</div>
		</div>
		<div class="box">
			<div class="container">
				<div class="wow fadeInUp">
					<h1 class="title">警惕以下粗暴应急手段</h1>
				<h2 class="subtitle">BE ALERT TO THE FOLLOWING RUDE EMERGENCY MEASURES.</h2>
				<div class="bottom-line"></div>
				</div>
				<img :src="pic3" class="pic2 pic3 wow fadeInUp" alt="pic3" />
				<div class="button wow zoomIn" @click="toQ">立即咨询</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { WOW } from 'wowjs'
	export default{
		data(){
			return{
				banner: require('../assets/img/subject-3-banner.jpg'),
				pic1:require('../assets/img/subject-3-pic1.jpg'),
				pic2:require('../assets/img/subject-3-pic2.jpg'),
				pic3:require('../assets/img/subject-3-pic3.jpg')
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