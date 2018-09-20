<template>
	<div class="header-wrap">
		<div class="container">
			<img :src=logo alt="logo" class="logo" @click="Router('/')">
			<ul class="nav">
				<li v-for="item in navList">
					<span @click="Router(item.url)">{{item.name}}</span>
					<ul class="subNav">
						<li v-for="items in item.subNav">
							<p @click="Router(items.url)">{{items.name}}</p>
						</li>
					</ul>
				</li>
			</ul>
			<!--移动端导航-->
			<nav class="navbar">
				<h4>
					<span @click="menu">
							<i></i>
							<i></i>
							<i></i>
					</span>
					</h4>
				<ul>
					<li v-for="item in navList" :class="item.act?'act':null">
						<h3 :class="item.length?'act':null" @click="Router(item.url)">{{item.name}}</h3>
						<div>
							<p v-for="items in item.subNav" @click="Router(items.url)">{{items.name}}</p>
						</div>
					</li>
				</ul>
			</nav>
			<!--移动端底部导航-->

			<nav class="bottom-nav">
				<ul>
					<li v-for="item in navList">
						<h3 :class="item.length?'act':null" @click="Router(item.url)">{{item.name}}</h3>
						<div>
							<p v-for="items in item.subNav" @click="Router(items.url)">{{items.name}}</p>
						</div>
					</li>

				</ul>
				<div class="toTop" @click="toTop">
					TOP
				</div>
			</nav>

			<div class="right">
				<span>私人定制</span>
				<img :src="icon" alt="icon" class="icon" @mouseenter="ewmShow=true" @mouseleave="ewmShow=false">
				<img :src="erweima" alt="wechat" class="erweima" v-show="ewmShow" />
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				logo: require('../assets/img/logo.png'),
				icon: require('../assets/img/header-icon.png'),
				erweima: require('../assets/img/erweima.jpg'),
				ewmShow: false,
				navList: [{
					name: '迪拜移民',
					url: '/'
				}, {
					name: 'CRS 专题',
					url: 'subject',
					length: true,
					subNav: [{
						name: 'CRS 风险详解',
						url: 'subject/subject_2'

					}, {
						name: 'CRS 应对方案',
						url: 'subject/subject_3'
					}]
				}, {
					name: '迪拜早知道',
					url: 'know'
				}, {
					name: '联系我们',
					url: 'contact'
				}],
				scrollTop: ""
			}
		},
		methods: {
			//页面跳转
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
			menu: function() {
				$(".navbar>ul").slideToggle();
			},
			toTop() {
				let speed = 10;
				let timer = setInterval(function() {
					this.scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
					if(this.scrollTop > 0) {
						this.scrollTop = (this.scrollTop - speed > 0) ? (this.scrollTop - speed) : 0;
						speed += 20;
						window.scrollTo(0, this.scrollTop);
					} else {
						clearInterval(timer);
					}
				}, 16)
			}

		},
		mounted() {
			setTimeout(function() {
				$('.nav li').hover(function() {
					$(this).children('.subNav').show()
				}, function() {
					$(this).children('.subNav').hide()
				})
			}, 200)

			let that = this;
			$(".navbar>ul li h3").click(function() {
				if($(this).next().is(":hidden")) {
					$(".navbar>ul li div").slideUp("slow");
					$(this).next().slideDown("slow");
				} else {
					$(this).next().slideUp("slow");
				}
			})

			$(".bottom-nav>ul li h3").click(function() {
				if($(this).next().is(":hidden")) {
					$(".navbar>ul li div").slideUp("slow");
					$(this).next().slideDown("slow");
					$(this).addClass('act2')
				} else {
					$(this).next().slideUp("slow");
					$(this).removeClass('act2')
				}
			})

		}
	}
</script>

<style lang="less" scoped>
	@w: 19.2;
	.header-wrap {
		width: 100%;
		.container {
			display: flex;
			overflow: initial;
			.logo {
				width: 244*@rem;
				height: 66*@rem;
				cursor: pointer;
				margin-top: 24.5*@rem;
			}
			.nav {
				margin-left: 200*@rem;
				li {
					display: inline-block;
					transition: .3s;
					-moz-transition: .3s;
					-ms-transition: .3s;
					-webkit-transition: .3s;
					font-size: 24*@rem;
					color: #909090;
					position: relative;
					span {
						display: block;
						padding: 45.5*@rem 22*@rem;
					}
				}
				.subNav {
					display: none;
					position: absolute;
					z-index: 10000;
					background: #377c99;
					top: 122*@rem;
					left: 0;
					li {
						display: block;
						font-size: 16*@rem;
						padding: 2*@rem 2*@rem;
						color: white;
						p {
							padding: 18*@rem 20*@rem;
						}
						p:nth-of-type(1) {
							border-bottom: 1px solid #12a3d6;
						}
						p:hover {
							color: @orange;
						}
					}
				}
				.subNav.act {
					display: block;
				}
			}
			.nav>li:hover {
				background-image: url(../assets/img/nav-bg.png);
				background-size: 100% 100%;
				color: white;
				cursor: pointer;
			}
			.nav>li:hover.subNav {
				display: block;
			}
			.right {
				position: absolute;
				right: 0;
				height: 115*@rem;
				span {
					background: #f98561;
					color: white;
					padding: 5*@rem 17*@rem;
					border-radius: 10px;
					vertical-align: middle;
					display: inline-block;
					margin-top: 39*@rem;
					margin-right: 54*@rem;
				}
				img {
					margin-top: 35*@rem;
					vertical-align: middle;
					display: inline-block;
				}
				.erweima {
					width: 300*@rem;
					height: 300*@rem;
					top: 87*@rem;
					right: 0;
					position: absolute;
				}
			}
			.navbar {
				color: #fff;
				border: 1px solid #f1f1f1;
				margin: 10px 0 0 0;
				background: #fafafa;
				margin-bottom: 20px;
				width: 100%;
				box-sizing: border-box;
				h4 {
					height: 46px;
					span {
						width: 44px;
						height: 34px;
						display: block;
						border: 1px solid #ccc;
						border-radius: 5px;
						cursor: pointer;
						box-sizing: border-box;
						padding: 4px 0 0 0;
						float: right;
						margin: 6px 15px 0 0;
						i {
							width: 22px;
							height: 2px;
							background: #999;
							display: block;
							margin: 4px auto 0 auto;
						}
					}
					span:hover {
						border: 1px solid #03A9F4;
					}
				}
				ul {
					display: none;
					li {
						color: #666;
						font-weight: 700;
						font-size: 14px;
						line-height: 46px;
						border-top: 1px solid #f1f1f1;
						cursor: pointer;
						padding-left: 20px;
						h3 {
							position: relative;
						}
						h3.act:after {
							content: '';
							display: block;
							position: absolute;
							width: 10px;
							height: 10px;
							border-bottom: 1px solid #ccc;
							border-right: 1px solid #ccc;
							transform: translateY(-50%) rotate(45deg);
							right: 20px;
							top: 50%;
						}
						p {
							font-weight: 500;
							padding-left: 20px;
						}
						div {
							display: none;
						}
					}
					li:hover {
						background: #fff;
					}
				}
			}
			.bottom-nav {
				display: none;
				position: fixed;
				bottom: 0;
				z-index: 9999;
				width: 100%;
				background: rgba(119, 119, 119, 0.9);
				ul {
					width: 80%;
					li {
						display: inline-block;
						width: calc(100%/4);
						position: relative;
						padding: 15px 0;
						color: white;
						border-right: 1px solid black;
						h3 {
							text-align: center;
						}
						h3.act:after {
							content: '';
							display: block;
							position: absolute;
							width: 5px;
							height: 5px;
							border-top: 1px solid #ccc;
							border-left: 1px solid #ccc;
							transform: translateY(-50%) rotate(45deg);
							right: 3px;
							top: 55%;
						}
						h3.act2:after {
							border-top: none;
							border-left: none;
							border-bottom: 1px solid #ccc;
							border-right: 1px solid #ccc;
							top: 50%;
						}
						div {
							display: none;
							position: absolute;
							bottom: 46px;
							width: 100%;
							background: rgba(119, 119, 119, 0.9);
							p {
								padding: 15px 0;
								text-align: center;
							}
						}
					}
				}
				.toTop {
					text-align: center;
					width: 20%;
					line-height: 46px;
					color: white;
					font-size: 20px;
				}
			}
		}
	}
	
	@media only screen and (max-width: 768px) {
		.header-wrap {
			.container {
				.logo {
					pos ition: absolute;
				}
				.nav {
					display: none;
				}
				.right {
					display: none;
				}
				.bottom-nav {
					display: flex;
				}
			}
		}
	}
	
	@media only screen and (max-width: 1420px) {
		.header-wrap {
			.container {
				.nav {
					margin-left: 10*@rem;
				}
			}
		}
	}
	
	@media only screen and (min-width: 768px) {
		.header-wrap {
			.container {
				.navbar {
					display: none;
				}
			}
		}
	}
</style>