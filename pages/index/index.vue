<template>
	<layout>
		<view class="container">
			<!-- {{ list[currentIndex] }} -->
			<unicloud-db ref="udbRef" v-slot:default="{data, loading, error, options}" collection="tp-cookbook-list" @load="handleLoadData">
				<view v-if="error">{{error.message}}</view>
				<view v-else>
					{{ data.filter( (item, index) => item.code == currentIndex)[0].name}}
				</view>
			</unicloud-db>
		</view>
		
		<button type="primary" class="op-btn" @click="handleStartRandom" v-if="!timer">帮我选</button>
		<button type="warn" class="op-btn" @click="handleStopRandom" v-else>就它了</button>
		
		<uni-easyinput class="op-btn" v-model="newCookbook" placeholder="请输入内容"></uni-easyinput>
		<button  class="op-btn"type="default" @click="handleAddCookbook">新增菜品</button>
	</layout>
</template>

<script setup>
	
	import {  ref } from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	const list = ref([])
	// onLoad(()=>{
	// 	let cookbook = ['香菜','花生米','啤酒','鸭脖','鸡爪','烤生蚝','炒粉','煎饼果子','金拱门','襄阳牛肉面','韩式烤肉','螺蛳粉','四川凉菜','木桶饭']
	// 	uni.setStorageSync('cookbook',cookbook)
	// 	list.value = cookbook
	// })
	
	const udbRef = ref()
	const currentIndex = ref(1)
	const timer = ref(null)
	const newCookbook = ref()
	const dataCode = ref()
	/* 处理数据 */
	const handleLoadData = (data, ended, pagination) =>{
		dataCode.value = data.length
	}
	/* 新增菜单 */
	const handleAddCookbook = ()=>{
		udbRef.value.add({name:newCookbook.value,code:dataCode.value+1},{
			toastTitle: '新增成功', // toast提示语
			  success: (res) => { // 新增成功后的回调
			    const { code, message } = res
				udbRef.value.loadData()
			  },
			  fail: (err) => { // 新增失败后的回调
			    const { message } = err
			  },
			  complete: () => { // 完成后的回调
			  }
		})
	}
	/* 开始随机 */
	const handleStartRandom = ()=>{
		 timer.value = setInterval(()=>{
			currentIndex.value = Math.ceil(Math.random()*12)
		},10)
	}
	const handleStopRandom = ()=>{
		clearInterval(timer.value)
		timer.value = null
	}
</script>

<style lang="scss" scoped>
	.container {
		padding-top: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 22px;

	}
	
	.op-btn{
		margin-top:20px;
		width: 120px ;
		height: 32px ;
		line-height: 32px ;
	}
</style>
