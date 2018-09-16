<template>
	<div class="footer-wrap">
		<div class="container">
			<div class="content first">
				<img :src="logo" alt="logo" class="logo"/>
				<img :src="wechat" alt="wechat" class="wechat"/>
				<p>扫面二维码添加专业顾问微信</p>
			</div>
			<div class="content second">
				<h3>网站信息</h3>
				<ul>
					<li>迪拜人民</li>
					<li>CRS 专题</li>
					<li>CRS 风险详解</li>
					<li>CRS 应对方案</li>
					<li>迪拜早知道</li>
					<li>联系我们</li>
				</ul>
			</div>
			<div class="content third">
				<img :src="icon" alt="icon" class="icon"/>
				<h3>联系方式</h3>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				logo: require('../assets/img/logo.png'),
				wechat:require('../assets/img/wechat.jpg'),
				icon:require('../assets/img/footer-icon.png')
			}
		}
	}
</script>

<style lang="less" scoped>
.footer-wrap{
	width: 100%;
	background: #303642;
	.container{
		display: flex;
		.content{
			color: white;
			padding: @padding;
			width: 473*@rem;
		}
		.first{
			text-align: center;
			p{
				
				font-size: 18*@rem;
				margin-top: 30*@rem;
			}
		}
		h3{
			font-size: 30*@rem;
			font-weight: 200;
			padding: 32*@rem 0 45*@rem;
		}
		.second{
			padding-left: 100*@rem;
			li{
				margin-bottom: 30*@rem;
				cursor: pointer;
			}
		}
		.third{
			padding-left:45*@rem;
			background: @orange;
			.icon{
				position: absolute;
				right: 45*@rem;
			}
		}
	}
}
</style>