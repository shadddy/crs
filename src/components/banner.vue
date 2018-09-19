<template>
	<div class="banner-wrap">
		<div class="banner">
			<img :src="banner" align="banner" class="banner" />
		</div>
		<!--办理列表-->
		<div class="order">
			<div class="container">
				<div class="box-wrap">
					<ul>
						<li v-for="item in orderList">
							<img :src="item.icon" />
							<div>
								<p>{{item.text}}</p>
								<p>{{item.text2}}</p>
							</div>
						</li>
					</ul>
					<ul>
						<li v-for="item in orderList2">
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
	</div>
</template>

<script>
	export default {
		props: {
			banner: {
				default: ''
			}
		},
		data() {
			return {
				orderList: [
					//				{
					//					icon: require('../assets/img/index-icon.png'),
					//					text: '祝贺王女士',
					//					text2: '(订单尾号41D6)办理成功'
					//				}, {
					//					icon: require('../assets/img/index-icon.png'),
					//					text: '祝贺李先生',
					//					text2: '(订单尾号28S9)办理成功'
					//				}, {
					//					icon: require('../assets/img/index-icon.png'),
					//					text: '祝贺张先生',
					//					text2: '(订单尾号9SF4)办理成功'
					//				}, {
					//					icon: require('../assets/img/index-icon.png'),
					//					text: '祝贺李先生',
					//					text2: '(订单尾号90P1)办理成功'
					//				}
				],
				orderList2: [],
				orderList3:[],
				userList: ['王', '袁', '赵', '顾', '权', '朱', '杨', '孙', '吴', '谢', '杜', '崔', '高', '毛', '班', '胡','冯','郑','陈','蒋','沈','韩','秦','许','何','吕','施','孔','曹','华','金','魏','江'],
				sexList: ['先生', '女士'],
				wordList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
				num: 3
			}
		},
		mounted() {
			let that = this
			for(var i = 0; i < 4; i++) {
				that.orderList.push({
					icon: require('../assets/img/index-icon.png'),
					text: '祝贺' + that.userList[Math.floor(Math.random() * 33)] + that.sexList[Math.floor(Math.random() * 2)],
					text2: '(订单尾号' + Math.floor(Math.random() * 10) + that.wordList[Math.floor(Math.random() * 36)] + that.wordList[Math.floor(Math.random() * 36)] + that.wordList[Math.floor(Math.random() * 36)] + ')办理成功'
				})
				that.orderList2.push({
					icon: require('../assets/img/index-icon.png'),
					text: '祝贺' + that.userList[Math.floor(Math.random() * 33)] + that.sexList[Math.floor(Math.random() * 2)],
					text2: '(订单尾号' + Math.floor(Math.random() * 10) + that.wordList[Math.floor(Math.random() * 36)] + that.wordList[Math.floor(Math.random() * 36)] + that.wordList[Math.floor(Math.random() * 36)] + ')办理成功'
				})
			}
			setInterval(that.change, 30000)

		},
		methods: {
			change() {
				
				var _orderList = []
				for(var i = 0; i < 4; i++) {
					_orderList.push({
						icon: require('../assets/img/index-icon.png'),
						text: '祝贺' + this.userList[Math.floor(Math.random() * 33)] + this.sexList[Math.floor(Math.random() * 2)],
						text2: '(订单尾号' + Math.floor(Math.random() * 10) + this.wordList[Math.floor(Math.random() * 36)] + this.wordList[Math.floor(Math.random() * 36)] + this.wordList[Math.floor(Math.random() * 36)] + ')办理成功'
					})
				}
				this.orderList = this.orderList2
				this.orderList2=_orderList
				
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
				overflow: hidden;
				.box-wrap {
					animation: toleft 30s infinite linear;
					width: 2860px;
				}
				ul {
					width: 1420px;
					overflow: hidden;
					display: inline-block;
					height: auto;
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
	
	@keyframes toleft {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-1430px);
		}
	}
	
	@media only screen and (max-width: 1000px) {
		.banner-wrap {
			.order {
				.container {
					ul {
						li {
							
							text-align: center;
							img{
								width: 50px;
								height: 50px;
							}
						}
					}
				}
			}
		}
	}
</style>