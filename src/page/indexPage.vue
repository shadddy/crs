<template>
	<div class="container-wrap">
		<my-header></my-header>
		<div class="content-wrap">
			<my-banner :banner="banner">

			</my-banner>
			<!--三大刚性需求-->
			<div class="box">
				<div class="container">
					<div class="wow fadeInUp">
						<h1 class="title">三大刚性需求 一次完美解决</h1>
						<h2 class="subtitle">THREE RIGID DEMANDS,A PERFECT SOLUTION.</h2>
						<div class="bottom-line"></div>
					</div>

					<img :src="pic1" class="pic-1 pic2 wow fadeInUp" alt="pic-1" />
					<div class="button wow zoomIn">立即抢占名额</div>
				</div>
			</div>
			<!--投资移民优势-->
			<div class="box advantage">
				<div class="container">
					<h1 class="title">投资移民优势</h1>
					<h2 class="subtitle">INVESTMENT IMMIGRATION ADVANTAGE</h2>
					<div class="bottom-line"></div>
					<ul>
						<li v-for="item in advantageList">
							<h3>{{item.title}}</h3>
							<p>{{item.txt}}</p>
							<p>{{item.txt2}}</p>
						</li>
					</ul>
					<div class="button">免费咨询申请流程</div>
				</div>
			</div>
			<!--申请永久居留条件-->
			<div class="box condition">
				<div class="container">
					<h1 class="title">申请永久居留条件</h1>
					<h2 class="subtitle">APPLICATION FOR PERMANENT RESIDENCE CONDITIONS</h2>
					<div class="bottom-line"></div>
					<img :src="pic2" class="pic-2 pic2" alt="pic-2" />
					<div class="button">
						立即抢占名额
					</div>
				</div>
			</div>
			<!--申请永久居留流程-->
			<div class="box process">
				<div class="container">
					<h1 class="title">申请永久居留流程</h1>
					<h2 class="subtitle">APPLICATION FOR PERMANENT RESIDENCE PROCESS</h2>
					<div class="bottom-line"></div>
					<img :src="pic3" class="pic-3 pic2" alt="pic-3" />
					<div class="button">
						免费咨询申请流程
					</div>
				</div>
			</div>
			<!--最低仅需2.5万-->
			<div class="box minimum">
				<div class="container">
					<h1 class="title">最低仅需2.5万美元</h1>
					<h2 class="subtitle">THE MINIMUM COST IS ONLY 25 THOUSAND DOLLARS.</h2>
					<div class="bottom-line"></div>
					<img :src="pic4" class="pic-4 pic2" alt="pic-4" />
					<div class="button">
						立即抢占名额
					</div>
				</div>
			</div>
			<!--为上百位客户成功移民-->
			<div class="box successful">
				<div class="container">
					<h1 class="title">为上百位客户成功移民</h1>
					<h2 class="subtitle">SUCCESSFUL IMMIGRATION FOR HUNDREDS OF CLIENTS</h2>
					<div class="bottom-line"></div>
					<img :src="pic5" class="pic-5 pic2" alt="pic-5" />
					<div class="button">
						免费咨询申请流程
					</div>
				</div>
			</div>
			<!--服务优势-->
			<div class="box2">
				<div class="container">
					<h1>服务优势</h1>
					<h2>投资移民及海外资产规划服务专家</h2>
					<ul>
						<li>
							<span>专业的顾问团队</span>
							<p>12年专注监管申请及离岸注册</p>
							<p>国际化顾问团队定制顾问方案</p>
						</li>
						<li>
							<span>完善的服务体系</span>
							<p>可办理经济商相关知识产权</p>
							<p>也可一站式海外资产投资配置</p>
						</li>
						<li>
							<span>安全的服务保障</span>
							<p>配置更优性价比的资费标准</p>
							<p>资金安全保障，不成功全额退款</p>
						</li>
					</ul>
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
			myFooter: footer,
			//			myBanner:banner
		},
		mounted() {
			new WOW().init()
		},
		data() {
			return {
				banner: require('../assets/img/index-banner.jpg'),
				pic1: require('../assets/img/index-pic1.jpg'),
				pic2: require('../assets/img/index-pic2.jpg'),
				pic3: require('../assets/img/index-pic3.jpg'),
				pic4: require('../assets/img/index-pic4.jpg'),
				pic5: require('../assets/img/index-pic5.jpg'),
				advantageList: [{
					title: '投资少',
					txt: '最低2.5万美元',
					txt2: '立即获取公司及居留权'
				}, {
					title: '办理快',
					txt: '3-4个月即可获得',
					txt2: '公司及居留身份'
				}, {
					title: '无风险',
					txt: '专业的商业政府法规',
					txt2: '资产保护和信息披露豁免权'
				}, {
					title: '无管制',
					txt: '100%外资所有',
					txt2: '无外汇管制和免费利率汇回'
				}, {
					title: '避税天堂',
					txt: '15-50年企业免税期',
					txt2: '免除个人所得税额企业税收'
				}, {
					title: '优质生活',
					txt: '安全的社会环境,一流的基础',
					txt2: '设施,发达的商业环境'
				}, {
					title: '教育福利',
					txt: '世界级国际学校和大学',
					txt2: '各种学制的基础和学费教育'
				}, {
					title: '医疗福利',
					txt: '世界级健康护理中心',
					txt2: '提供免费或优惠的医疗服务'
				}]
			}
		}
	}
</script>

<style lang="less" scoped>
	.container-wrap {}
	
	.advantage {
		ul {
			display: flex;
			display: -ms-flexbox;
			display: -webkit-flex;
			flex-wrap: wrap;
			-ms-flex-wrap: wrap;
			-webkit-flex-wrap: wrap;
			li {
				text-align: center;
				width: 355*@rem;
				padding: 60*@rem 0;
				h3 {
					color: @blue;
					font-size: 30*@rem;
					font-weight: 500;
					margin-bottom: 10*@rem;
				}
				p {
					font-size: 16*@rem;
					line-height: 28*@rem;
				}
			}
		}
	}
	
	.box2 {
		width: 100%;
		padding: 100*@rem 0;
		background: #ebeff2;
		h1 {
			color: #a1a1a1;
			text-align: center;
		}
		h2 {
			color: #999998;
			text-align: center;
			font-weight: 500;
			font-size: 30*@rem;
			line-height: 80*@rem;
		}
		ul {
			display: flex;
			display: -ms-flexbox;
			display: -webkit-flex;
			flex-wrap: wrap;
			-ms-flex-wrap: wrap;
			-webkit-flex-wrap: wrap;
			li {
				width: 473*@rem;
				text-align: center;
				span {
					display: block;
					width: 275*@rem;
					margin: 30*@rem auto;
					height: 60*@rem;
					font-size: 30*@rem;
					line-height: 60*@rem;
					background: @blue;
					color: #fff;
				}
				p {
					color: #999998;
					line-height: 50*@rem;
				}
			}
		}
	}
	
	.pic2 {
		margin: 100*@rem auto;
		width: 100%;
		display: block;
	}
	
	@media only screen and (max-width: 1200px) {
		.container-wrap {
			.order {
				ul {
					li {
						display: block;
						width: 100%;
					}
				}
			}
		}
	}
</style>