<template>
	<div class="container-wrap">
		<my-header></my-header>
		<div class="content-wrap">
			<my-banner :banner="banner"></my-banner>
			<div class="box">
				<div class="container">
					<div class="wow fadeInUp">
						<h1 class="title">应对CRS风暴的避税天堂</h1>
					<h2 class="subtitle">TAX HAVEN TO DEAL WITH CRS STORM</h2>
					<div class="bottom-line"></div>
					</div>
					<img :src="pic1" alt="pic1" class="pic2 pic-1 wow zoomIn"/>
					<div class="button wow fadeIn">免费查看对应方案</div>
				</div>
			</div>
			<div class="box">
				<div class="container">
					<div class="wow fadeInUp">
						<h1 class="title">创业投资的新蓝海</h1>
					<h2 class="subtitle">NEW BLUE OCEAN OF VENTURE CAPITAL</h2>
					<div class="bottom-line"></div>
					</div>
					<img :src="pic2" alt="pic2" class="pic2 pic-2 wow fadeInUp" />
					<div class="button wow fadeIn">免费查看对应方案</div>
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
					<div class="button wow fadeIn">免费查看对应方案</div>
				</div>
			</div>
		</div>
		<my-footer></my-footer>
	</div>
</template>

<script>
	import header from '@/components/header'
	import footer from '@/components/footer'
	import {WOW} from 'wowjs' 
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
				pic3: require('../assets/img/know-pic3.jpg')

			}
		},
		mounted(){
			new WOW().init()
		}

	}
</script>

<style lang="less" scoped>
	.pic2 {
		display: block;
		width: 100%;
		margin: 80*@rem auto 0 auto;
	}
	.button{
		margin-top: 100*@rem;
	}
</style>