<template>
	<div class="container-wrap">
		<my-header></my-header>
		<div class="content-wrap">
			<my-banner :banner="banner"></my-banner>
			<div class="container">
				<img :src="pic1" alt="pic-1" class="pic pic-1 wow zoomIn"/>
			</div>
			<div class="box">
				<div class="container">
					<div class="wow fadeInUp">
						<h1 class="title">您可以通过下列方式联系我们</h1>
					<h2 class="subtitle">YOU CAN CONTACT US IN THE FOLLOWING WAYS</h2>
					<div class="bottom-line"></div>
					</div>
					<div class="contact-box wow fadeInUp">
							<span>公司邮箱:</span>
							<p>info@fomifx.com</p>
							<span>移民顾问:</span>
							<p>扫描下方二维码联系专业CRS应对及疑问顾问</p>
							<img :src="wechat" alt="wechat" class="wechat"/>
					</div>
				</div>
			</div>
			<div class="box">
				<div class="container">
					<div class="wow fadeInUp">
						<h1 class="title">办公室地址</h1>
					<h2 class="subtitle">OFFICE ADDRESS</h2>
					<div class="bottom-line"></div>
					</div>
					<div id="map" class="wow zoomIn"></div>
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
		data(){
			return{
				banner:require('../assets/img/contact-banner.jpg'),
				pic1:require('../assets/img/contact-pic-1.jpg'),
				wechat:require('../assets/img/contact-wechat.jpg')
			}
		},
		mounted(){
			new WOW().init()
			
			var map=new BMap.Map('map')
			var point=new BMap.Point(55.35884,25.293274)
			map.centerAndZoom(point, 11)
			
			var pt = new BMap.Point(55.35884,25.293274)
			var myIcon = new BMap.Icon("../assets/img/point.png", new BMap.Size(300,157));
			var marker2 = new BMap.Marker(pt,{icon:myIcon})
				map.addOverlay(marker2);
		}
	}
</script>

<style scoped lang="less">
.contact-box{
	text-align: center;
	margin-top: 60*@rem;
	span{
		color: white;
		font-size: 30*@rem;
		font-weight: 500;
		padding: 18*@rem 50*@rem;
		background: #a1a1a1;
		display: inline-block;
	}
	p{
		font-size: 30*@rem;
		line-height: 100*@rem;
	}
	.wechat{
		margin-top: 60*@rem;
	}
	
}
#map{	
	margin: 50*@rem auto 0 auto;
		width: 95%;
		height: 650*@rem
	}
</style>