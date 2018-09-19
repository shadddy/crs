<template>
	<div class="container-wrap">
		<my-header></my-header>
		<div class="content-wrap">
			<my-banner :banner="banner"></my-banner>
			<div class="box">
				<div class="container">
					<div class="wow fadeInUp">
						<h1 class="title">应对CRS风暴的避税天堂</h1>
						<h2 class="subtitle">TAX HEAVEN TO DEAL WITH CRS STORM</h2>
						<div class="bottom-line"></div>
					</div>
					<img :src="pic1" alt="pic1" class="pic2 pic-1 wow zoomIn" />
					<div class="button wow fadeIn" @click="Router('subject/subject_3')">免费查看对应方案</div>
				</div>
			</div>
			<div class="box">
				<div class="container">
					<div class="wow fadeInUp">
						<h1 class="title">创业投资的新蓝海</h1>
						<h2 class="subtitle">NEW BLUE OCEAN OF VENTURE CAPITAL</h2>
						<div class="bottom-line"></div>
					</div>
					<ul class="icon-box">
						<li v-for="item in iconList">
							<img :src="item.img" />
							<p>{{item.txt}}</p>
						</li>
					</ul>
					<div class="button wow fadeIn" @click="Router('subject/subject_3')">免费查看对应方案</div>
				</div>
			</div>
			<div class="box">
				<div class="container">
					<div class="wow fadeInUp">
						<h1 class="title">宜居的全球后花园</h1>
						<h2 class="subtitle">LIVEBLE GLOBAL BACKYARD</h2>
						<div class="bottom-line"></div>
					</div>
					<img :src="pic3" alt="pic3" class="pic2 pic-3 wow fadeInUp" />
					<div class="button wow fadeIn" @click="Router('subject/subject_3')">免费查看对应方案</div>
				</div>
			</div>
		</div>
		<my-footer></my-footer>
	</div>
</template>

<script>
	import header from '@/components/header'
	import footer from '@/components/footer'
	import { WOW } from 'wowjs'
	export default {
		components: {
			myHeader: header,
			myFooter: footer
		},
		data() {
			return {
				banner: require('../assets/img/know-banner.jpg'),
				pic1: require('../assets/img/know-pic1.jpg'),
				pic2: require('../assets/img/know-pic2.jpg'),
				pic3: require('../assets/img/know-pic3.jpg'),
				iconList: [{
					txt: '亲商和有利的税收制度',
					img: require('../assets/img/know-icon1.jpg'),
				}, {
					txt: '顶尖办公空间',
					img: require('../assets/img/know-icon2.jpg'),
				}, {
					txt: '100％的资本和利润回国',
					img: require('../assets/img/know-icon3.jpg'),
				}, {
					txt: '无资本限制',
					img: require('../assets/img/know-icon4.jpg'),
				}, {
					txt: '合法合规解决CRS征税问题健康发达的经济',
					img: require('../assets/img/know-icon5.jpg'),
				}, {
					txt: '稳定的货币',
					img: require('../assets/img/know-icon6.jpg'),
				}, {
					txt: '禁止不道德和高风险活动',
					img: require('../assets/img/know-icon7.jpg'),
				}, {
					txt: '成熟安全，资本充足和受监管的银行',
					img: require('../assets/img/know-icon8.jpg'),
				}]

			}
		},
		mounted() {
			new WOW().init()
			$('.icon-box li').hover(function() {
				$(this).children('img').fadeOut()
				$(this).siblings().children('img').show()
			}, function() {
				$(this).children('img').show()
			})
		},
		methods: {
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
			}
		}

	}
</script>

<style lang="less" scoped>
	.pic2 {
		display: block;
		width: 100%;
		margin: 80*@rem auto 0 auto;
	}
	
	.button {
		margin-top: 100*@rem;
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
	
	.box:nth-of-type(3) {
		.container {
			width: 1240px;
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