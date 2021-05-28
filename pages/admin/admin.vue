<template>
	<view class="container" style="height: 500px;">
		
		<view class="row">
			<text class="item">管理员 Admin</text>
			<uni-easyinput class="input" :clearable="true" type="text" v-model="admin" />
		</view>
		<view class="row">
			<text class="item">密码 Password</text>
			<uni-easyinput class="input" :clearable="true" type="password" v-model="password" />
		</view>
		<view class="row" style="margin-top: 30px;">
			<view class="button" @tap="login()">
				<text>
					登录
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				admin: '',
				password: '',
				data: {},
				screenHeight: 0
			}
		},
		onLoad() {
			const sys = uni.getSystemInfoSync()
			console.log(sys)
			this.screenHeight = sys.screenHeight
		},
		methods: {
			login: function() {
				uni.request({
					url: 'https://code-server.api.funkydog.club/app/admin/',
					method: 'POST',
					data: {
						admin: this.admin,
						password: this.password
					},
					complete: (res) => {
						console.log(res)
						if(res.data.code !== 200) {
							uni.showToast({
								icon: 'none',
								title: res.data.msg
							})
						}
						else {
							uni.showToast({
								title: res.data.msg
							})
							uni.reLaunch({
								url: '../info/info?token=' + res.data.token
							})
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.input {
		width: 350rpx;
	}
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
	
	.subTitle {
		margin: 5px;
		font-size: $uni-font-size-sm;
		color: #808080;
	}
</style>
