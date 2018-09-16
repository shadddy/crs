<template>
	<div class="banner-wrap">
		<div class="banner">
			<img :src="banner" align="banner" class="banner" />
		</div>
		<!--办理列表-->
		<div class="order">
			<div class="container">
				<ul>
					<li v-for="item in orderList">
						<img :src="item.icon" />
						<div>
							<p>{{item.text}}</p>
							<p>{{item.text2}}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			banner: {
				default: ''
			}
		},
		data(){
			return{
				orderList: [{
					icon: require('../assets/img/index-icon.png'),
					text: '祝贺王女士',
					text2: '(订单尾号41D6)办理成功'
				}, {
					icon: require('../assets/img/index-icon.png'),
					text: '祝贺李先生',
					text2: '(订单尾号28S9)办理成功'
				}, {
					icon: require('../assets/img/index-icon.png'),
					text: '祝贺张先生',
					text2: '(订单尾号9SF4)办理成功'
				}, {
					icon: require('../assets/img/index-icon.png'),
					text: '祝贺李先生',
					text2: '(订单尾号90P1)办理成功'
				}],
			}
		}
	}
</script>

<style lang="less">
	.banner-wrap {
		.order {
			padding: 20*@rem 0;
			border-bottom: 3px solid #e6e6e6;
			.container {
				ul {
					li {
						display: inline-flex;
						width: calc(100%/4);
						div {
							margin-left: 10*@rem;
							padding-top: 15*@rem;
							p {
								font-size: 16*@rem;
								color: #999999;
							}
						}
					}
				}
			}
		}
	}
	@media only screen and (max-width: 1200px) {
		.banner-wrap {
			.order {
				.container{
					ul {
					li {
						display: block;
						width: 100%;
					}
				}
				}
			}
		}
	}
</style>