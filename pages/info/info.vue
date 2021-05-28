<template>
	<view class="container">
		<view class="card">
			<view class="row" style="justify-content: space-between;">
				<text class="card-title">搜索</text>
				<uni-easyinput class="input" :clearable="true" type="text" v-model="game_rigion"/>
			</view>
		</view>
		
		<view class="card" v-for="(item, index) in data" :key="index">
			<view style="display: flex;justify-content: space-between;flex-direction: row;">
				<text class="card-title">姓名：{{item.name}}</text>
				<text style="color: #FF5A5F;margin-right: 5px;" @tap="deletePlayer">X</text>
			</view>
				
			<view class="row" v-for="(val, key, idx) in item" :key="idx">
				<text class="item">{{key}}: {{val}}</text>
			</view>
			
		</view>
		<view style="display: flex;flex-direction: row;position: fixed;bottom: 10rpx;">
			<view class="button" @tap="pre()">
				<text>
					上一页
				</text>
			</view>
			<view class="button">{{page_num}}</view>
			<view class="button" @tap="next()">
				<text>
					下一页
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				token: 0,
				data: {},
				page_num: 1,
			}
		},
		onLoad: function(option) {
			this.token = option.token
			this.getData()
		},
		methods: {
			getData: function() {
				uni.showLoading({
					
				})
				uni.request({
					url: 'https://code-server.api.funkydog.club/app/all_player/?page_num=' + this.page_num + '&token=' + this.token,
					complete: (res) => {
						console.log(res)
						if(res.data.data.length === 0) {
							uni.showToast({
								icon: 'none',
								title: '最后一页了哦~'
							})
						}
						this.data = res.data.data
						this.token = res.data.token
						uni.hideLoading()
					}
				})
			},
			pre: function() {
				if (this.page_num === 1) {
					return
				}
				this.page_num -= 1
				this.getData()
			},
			next: function() {
				if(this.data.length === 0) {
					return
				}
				this.page_num += 1
				this.getData()
			},
			deletePlayer: function() {
				uni.showActionSheet({
				    itemList: ['确认删除', '取消'],
				    success: function (res) {
				        console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
				    },
				    fail: function (res) {
				        console.log(res.errMsg);
				    }
				});
			}
		}
	}
</script>

<style lang="scss">
	.container {
		flex-direction: column;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 750rpx;
		padding-top: 10px;
		padding-bottom: 20px;
	}

	.card {
		width: 70%;
		margin-top: 10px;
		margin-bottom: 10px;
		border-radius: 20px;
		border-color: #000000;
		border-width: 4px;
		border-style: solid;
		padding: 20px;
	}
	
	.card-title {
		margin: 5px;
		color: #000000;
		font-size: 22px;
		font-weight: bold;
		font-style: oblique;
	}
	
	.row {
		display: flex;
		flex-direction: column;
		margin-top: 5px;
		margin-bottom: 5px;
	}
	
	.item {
		margin: 5px;
		font-size: $uni-font-size-base;
		font-weight: bold;
		color: #808080;
	}
	
	.button {
		margin: 10px;
		display: flex;
		background-color: #000000;
		width: 84px;
		height: 44px;
		border-radius: 28px;
		color: white;
		font-size: $uni-font-size-base;
		align-items: center;
		justify-content: center;
	}
	
	.subTitle {
		margin: 5px;
		font-size: $uni-font-size-sm;
		color: #808080;
	}
</style>
