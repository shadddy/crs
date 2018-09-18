<template>
	<div class="content-wrap">
		<my-banner :banner="banner"></my-banner>
		<div class="container">
			<img :src="pic1" align="pic1" class="pic pic-1 wow zoomIn" />
		</div>
		<div class="box">
			<div class="container">
				<div class="wow fadeInUp">
					<h1 class="title">海外资产无处遁形</h1>
				<h2 class="subtitle">OVERSEAS ASSETS HAVE NOWHERE TO HIDE.</h2>
				<div class="bottom-line"></div>
				</div>
				<img :src="pic2" alt="pic2" class="pic2 pic-2 wow fadeInUp" />
				<div class="button wow zoomIn" @click="toQ">免费咨询CRS情况</div>
			</div>
		</div>
		<div class="box">
			<div class="container">
				<div class="wow fadeInUp">
					<h1 class="title">三大风险你能否承受的住</h1>
				<h2 class="subtitle">THREE RISKS,CAN YOU AFFORD IT?</h2>
				<div class="bottom-line"></div>
				</div>
				<img :src="pic3" alt="pic3" class="pic2 pic-3 wow fadeInUp" />
				<div class="button wow fadeInLeft" @click="Router('subject/subject_2')">免费查看资产风险</div>
			</div>
		</div>
		<div class="box">
			<div class="container">
				<div class="wow fadeInUp">
					<h1 class="title">最后期限 刻不容缓</h1>
				<h2 class="subtitle">DEADLINE IS URGENT.</h2>
				<div class="bottom-line"></div>
				</div>
				<img :src="pic4" alt="pic4" class="pic2 pic-4 wow fadeInUp" />
				<div class="button wow fadeInRight"  @click="Router('subject/subject_3')">免费查看对应方案</div>
			</div>
		</div>
		<div class="box">
			<div class="container">
				<div class="wow fadeInUp">
					<h1 class="title">我们一次性为您解决</h1>
				<h2 class="subtitle">WE CAN SOLVE IF FOR YOU AT ONE TIME.</h2>
				<div class="bottom-line"></div>
				</div>
				<img :src="pic5" alt="pic5" class="pic2 pic-5 wow fadeInUp" />
				<div class="button wow zoomIn"  @click="Router('subject/subject_3')">免费查看对应方案</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { WOW } from 'wowjs'
	export default {
		data() {
			return {
				banner: require('../assets/img/subject-1-banner.jpg'),
				pic1: require('../assets/img/subject-1-pic1.jpg'),
				pic2: require('../assets/img/subject-1-pic2.png'),
				pic3: require('../assets/img/subject-1-pic3.png'),
				pic4: require('../assets/img/subject-1-pic4.jpg'),
				pic5: require('../assets/img/subject-1-pic5.jpg')
			}
		},
		mounted(){
			new WOW().init()
		},
		methods:{
			Router: function(str) {
				
				if(str == "" || str == undefined) {
					return false;
				}
				if(str == "/") {
					str = "";
				}
				let strs = str;
				if(strs == "index") {
					strs = '';
				}
				this.$router.push('/' + strs);
			},
			toQ(){
				window.open("http://wpa.qq.com/msgrd?v=3&uin=93926753&site=qq&menu=yes")
			}
		}
	}
</script>

<style lang="less" scoped>
	.pic2{
		width: 95%;
		display: block;
		margin: 0 auto;
		margin-top: 80*@rem;
	}
	.button{
		margin-top: 80*@rem;
	}
</style>