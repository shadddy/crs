<template>
	<div class="header-wrap">
		<div class="container">
			<img :src=logo alt="logo" class="logo" @click="Router('/')">
			<ul class="nav">
				<li v-for="item in navList">
					<span @click="Router(item.url)">{{item.name}}</span>
					<ul class="subNav">
						<li v-for="items in item.subNav">
							<p  @click="Router(items.url)">{{items.name}}</p>
						</li>
					</ul>
				</li>
			</ul>
			<div class="right">
				<span>私人定制</span>
				<img :src="icon" alt="icon" class="icon" />
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
				navList: [{
					name: '迪拜移民',
					url: '/'
				}, {
					name: 'CRS 专题',
					url: 'subject',
					lengt: true,
					subNav: [{
						name: 'CRS 风险详解',
						url:'subject/subject_2'

					}, {
						name: 'CRS 应对方案',
						url:'subject/subject_3'
					}]
				}, {
					name: '迪拜早知道',
					url: 'know'
				}, {
					name: '联系我们',
					url: 'contact'
				}]
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
			func:function(val){
				alert(val)
			}
			
		},
		mounted(){
			setTimeout(function(){
				$('.nav li').hover(function(){
					$(this).children('.subNav').show()
				},function(){
					$(this).children('.subNav').hide()
				})
			},200)
		}
	}
</script>

<style lang="less" scoped>
	.header-wrap {
		width: 100%;
		.container {
			display: flex;
			overflow: initial;
			.logo {
				width: 244*@rem;
				height: 115*@rem;
				cursor: pointer;
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
					span{
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
						p{
							padding: 18*@rem 20*@rem;
							
						}
						p:nth-of-type(1){
							border-bottom: 1px solid #12a3d6;
						}
						p:hover{
							color: @orange;
						}
					}
				}
				.subNav.act{
					display: block;
				}
			}
			.nav>li:hover {
				background-image: url(../assets/img/nav-bg.png);
				background-size: 100% 100%;
				color: white;
				cursor: pointer;
			}
			.nav>li:hover.subNav{
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
			}
		}
	}
</style>