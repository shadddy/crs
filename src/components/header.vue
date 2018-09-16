<template>
	<div class="header-wrap">
		<div class="container">
			<img :src=logo alt="logo" class="logo">
			<ul>
				<li v-for="item in navList" @click="Router(item.url)">
					{{item.name}}
				</li>
			</ul>
			<div class="right"> 
				<span>私人定制</span>
				<img :src="icon" alt="icon" class="icon"/>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				logo: require('../assets/img/logo.png'),
				icon:require('../assets/img/header-icon.png'),
				navList:[{
					name:'迪拜移民',
					url:'/'
				},{
					name:'CRS 专题',
					url:'subject'
				},{
					name:'迪拜早知道',
					url:'know'
				},{
					name:'联系我们',
					url:'contact'
				}]
			}
		},
		methods:{
			//页面跳转
			Router:function(str){
			if(str == "" || str == undefined){
				return false;
			}
			if(str =="/"){
				str = "";
			}
			let strs = str;
			if(strs=="index"){
				strs = '';
			}
			this.$router.push('/'+strs);
		},
		}
	}
</script>

<style lang="less" scoped>
	.header-wrap {
		width: 100%;
		.container{
			display: flex;
			.logo {
				width: 244*@rem;
				height: 115*@rem;
			}
			ul{
				margin-left: 200*@rem;
				li{
						display: inline-block;
					transition: .3s;
					-moz-transition: .3s;
					-ms-transition: .3s;
					-webkit-transition:.3s;
					font-size: 24*@rem;
					color: #909090;
					padding: 45.5*@rem 22*@rem;
				}
				li:hover{
					background-image: url(../assets/img/nav-bg.png);
					background-size: 100% 100%;
					color: white;
					cursor: pointer;
					
				}
			}
			.right{
				position: absolute;
				right: 0;
				height: 115*@rem;
				span{
					background: #f98561;
					color:white;
					padding:5*@rem 17*@rem;
					border-radius: 10px;
					vertical-align:middle;
					display: inline-block;
					margin-top: 39*@rem;
					margin-right: 54*@rem;
				}
				img{
					margin-top: 35*@rem;
					vertical-align:middle;
					display: inline-block;
				}
			}
		}
	}
</style>