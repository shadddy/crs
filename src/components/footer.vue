<template>
	<div class="footer-wrap">
		<div class="container">
			<div class="content first">
				<img :src="logo" alt="logo" class="logo" />
				<img :src="wechat" alt="wechat" class="wechat" />
				<p>扫面二维码添加专业顾问微信</p>
			</div>
			<div class="content second">
				<h3>网站信息</h3>
				<ul>
					<li v-for="item in navList" @click="Router(item.url)">
						{{item.name}}
					</li>
				</ul>
			</div>
			<div class="content third">
				<img :src="icon" alt="icon" class="icon" />
				<h3>联系方式</h3>
				<table>
					<tr><td>免费咨询:</td><td>9:30AM-20:30PM</td>
					<tr><td>移民受理:</td><td>9:30AM-20:30PM</td></tr>
					<tr><td>公司地址:</td><td>Bayswater tower office 1812,  Al Abraj South Street, Dubai</td></tr>
					<tr><td>公司邮件:</td><td>info@fomifx.com</td></tr>
					<tr><td>版权所有:</td><td>艾迪移民服务有限公司</td></tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				logo: require('../assets/img/logo.png'),
				wechat: require('../assets/img/wechat.jpg'),
				icon: require('../assets/img/footer-icon.png'),
				navList:[{
					name:'迪拜移民',
					url:'/'
				},{
					name:'CRS专题',
					url:'subject'
				},{
					name:'CRS风险详解',
					url:'subject/subject_2'
				},{
					name:'CRS应对方案',
					url:'subject/subject_3'
				},{
					name:'迪拜早知道',
					url: 'know'
				},{
					name:'联系我们',
					url: 'contact'
				}]
			}
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
			},
		}
	}
</script>

<style lang="less" scoped>
	.footer-wrap {
		width: 100%;
		background: #303642;
		.container {
			position: relative;
			display: flex;
			.content {
				color: white;
				padding: @padding;
				width: 473*@rem;
			}
			.first {
				text-align: center;
				p {
					font-size: 18*@rem;
					margin-top: 30*@rem;
				}
				.wechat{
					width: 50%;
					margin-top: 30*@rem;
				}
				.logo{
					margin-top: 20*@rem;
					width: 50%;
				}
			}
			h3 {
				font-size: 30*@rem;
				font-weight: 200;
				padding: 32*@rem 0 45*@rem;
			}
			.second {
				padding-left: 100*@rem;
				li {
					margin-bottom: 30*@rem;
					cursor: pointer;
				}
			}
			.third {
				padding-left: 45*@rem;
				background: @orange;
				.icon {
					position: absolute;
					right: 45*@rem;
					top: 80*@rem;
				}
				table{
					width: 90%;
					tr{	
						td{
							padding: 10px;
						}
						td:nth-of-type(1){
							text-align: right;
							vertical-align: top;
						}
						td:nth-of-type(2){
							width: 70%;
						}
					}
				}
			}
		}
	}
	
	@media only screen and  (max-width: 768px) {
		.footer-wrap{
			.container{
				display:block;
				.content{
					width: 100%;
				}
				.second{
					display: none;
				}
				.third{
					position: relative;
					.icon{
						top: 0;
						right: 0;
					}
				}
			}
		}
	}
</style>