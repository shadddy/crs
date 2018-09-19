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
				<ul class="icon-box">
					<li v-for="item in iconList">
						<img :src="item.img" />
						<p>{{item.txt}}</p>
					</li>
				</ul>

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
	export default {
		data() {
			return {
				banner: require('../assets/img/subject-3-banner.jpg'),
				pic1: require('../assets/img/subject-3-pic1.jpg'),
				pic2: require('../assets/img/subject-3-pic2.jpg'),
				pic3: require('../assets/img/subject-3-pic3.jpg'),
				iconList: [{
					txt: '所有者可获得纳税人身份',
					img: require('../assets/img/subject-3-icon1.jpg'),
				}, {
					txt: '保证未来15-50年免除企业税收',
					img: require('../assets/img/subject-3-icon2.jpg'),
				}, {
					txt: '允许外资100%持有',
					img: require('../assets/img/subject-3-icon3.jpg'),
				}, {
					txt: '进口的商品如果不是供应本地市场可免税',
					img: require('../assets/img/subject-3-icon4.jpg'),
				}, {
					txt: '合法合规解决CRS征税问题',
					img: require('../assets/img/subject-3-icon5.jpg'),
				}, {
					txt: '享受当地优质居住环境',
					img: require('../assets/img/subject-3-icon6.jpg'),
				}, {
					txt: '享受当地优质教育医疗条件',
					img: require('../assets/img/subject-3-icon7.jpg'),
				}, {
					txt: '享受当地优质生活方式',
					img: require('../assets/img/subject-3-icon8.jpg'),
				}]
			}
		},
		mounted() {
			new WOW().init()
			$('.icon-box li').hover(function(){
				$(this).children('img').fadeOut()
				$(this).siblings().children('img').show()
			})
		},
		methods: {
			toQ() {
				window.open("http://wpa.qq.com/msgrd?v=3&uin=93926753&site=qq&menu=yes")
			}
		}
	}
</script>

<style lang="less" scoped>
	.box:nth-of-type(3) {
		.container {
			width: 1240px;
		}
	}
	
	.pic2 {
		width: 100%;
		margin: 120*@rem auto;
		display: block;
	}
	
	.icon-box {
		width: 95%;
		margin: 50*@rem auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		li {
			background: #2190c1;
			position: relative;
			width: 250*@rem;
			height: 250*@rem;
			margin-top: 50*@rem;
			img {
				width: 100%;
				height: 100%;
			}
			p {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 60%;
				text-align: center;
				color: white;
			}
		}
		li:nth-of-type(4) {
			margin-right: 0;
		}
	}
	
	@media only screen and (max-width:1200px) {
		.box:nth-of-type(3) {
			.container {
				width: 100%;
				
			}
		}
	}
</style>