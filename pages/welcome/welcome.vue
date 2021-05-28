<template>
	<view>
		<image mode="aspectFill" src="../../static/piano.jpeg" :style="{height: screenHeight + 'px'}" style="width: 750rpx;position: fixed;"></image>
	
		<view :style="{height: screenHeight + 'px'}" style="flex-direction: column;width: 750rpx;display: flex;justify-content: center;align-items: center;position: fixed;">
			<view style="font-size: 35px;color: #FFFFFF;font-style: oblique;font-weight: bolder;word-wrap: normal;text-align: center;">
				第十二届
			</view>
			<view style="font-size: 35px;color: #FFFFFF;font-style: oblique;font-weight: bolder;word-wrap: normal;text-align: center;">
				肖邦国际青少年
			</view>
			<view style="font-size: 35px;color: #FFFFFF;font-style: oblique;font-weight: bolder;word-wrap: normal;text-align: center;">
				钢琴比赛
			</view>
			<view style="font-size: 55px;color: #FFFFFF;font-style: oblique;font-weight: bolder;word-wrap: normal;text-align: center;">
				
			</view>
			<view class="button" @tap="go" style="margin-top: 100px;margin-bottom: 100px;">
				<text>
					立即报名
				</text>
			</view>
			
			<view style="color: #FFFFFF;font-size: 14px;font-style: oblique;">
				注意：
			</view>
			<view style="color: #FFFFFF;font-size: 10px;">
				1.曲目申报后不得修改
			</view>
			<view style="color: #FFFFFF;font-size: 10px;">
				2.年龄根据各组别要求
			</view>
			<view style="color: #FFFFFF;font-size: 10px;">
				3.报名学生须提供有效证件复印件，如：身份证、户口本
			</view>
			
			<view style="height: 30px;"></view>
			<view style="color: #000000;font-size: 10px;">
			</view>
			<view style="color: #000000;font-size: 10px;word-wrap: normal;">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				screenHeight: 0
			};
		},
		onLoad() {
			const sys = uni.getSystemInfoSync()
			console.log(sys)
			this.screenHeight = sys.screenHeight
		},
		methods: {
			go: function() {
				uni.navigateTo({
					url:'../index/index',
					animationType: 'pop-in'
				})
			}
		}
	}
</script>

<style lang="scss">
	.button {
		display: flex;
		background-color: #000000;
		width: 84px;
		height: 56px;
		border-radius: 28px;
		color: white;
		font-size: $uni-font-size-base;
		align-items: center;
		justify-content: center;
	}
</style>
