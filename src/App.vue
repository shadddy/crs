<template>
  <div id="app">
  <keep-alive>
  <router-view/>
  </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
	@yellow:#fff;
#app {
  font-family:'microsoft yahei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
html,body{
  font-size: 20px;

}
.container{
  width: 1420px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}
ul{
	
}
li{
	list-style: none;

}
.container-wrap{
	width: 100%;
}
.content-wrap{
	width: 100%;
	.banner{
		width: 100%;
		img{
			width: 100%;
		}
	}
	.box{
		padding: @padding;
		border-bottom: 3px solid #e6e6e6;
	}
}
.title{
	text-align: center;
	font-size: 40*@rem;
	color: @orange;
	margin-bottom: 20*@rem;
}
.subtitle{
	text-align: center;
	font-size: 26*@rem;
	color: #7f7f7f;
	font-weight: 500;
}
.bottom-line{
	width: 130px;
	height: 2px;
	background: @orange;
	margin: 15px auto 0 auto;
}
.button{
	width: 300*@rem;
	height: 75*@rem;
	background: @orange;
	color: white;
	border-radius: 10px;
	border: 2px solid @orange;
	line-height: 75*@rem;
	text-align: center;
	margin: 20*@rem auto;
	font-size: 28*@rem;
	cursor: pointer;
	transition: .3s;
	-moz-transition: .3s;
	-ms-transition: .3s;
	-webkit-transition: .3s;
}
.button:hover{
	color: @orange;
	background: transparent;
}
.pic{
	margin: 0 auto;
	margin-top: 140*@rem;
	width: 95%;
	display: block;
}
@media screen and(max-width: 1420px){
  .container{
    width: 100%
  }
}
@media screen and(max-width: 768px){
  html,body{
  	font-size: 10px;
  }
}
</style>
