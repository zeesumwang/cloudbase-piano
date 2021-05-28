<template>
	<view class="container">

		<!-- <view class="title">PIANO</view> -->
		
		<view class="card">
			<text class="card-title">赛区分组</text>
			<view class="row">
				<text class="item">分赛区 Rigion</text>
				<uni-easyinput class="input" :clearable="true" type="text" v-model="game_rigion" disabled/>
			</view>
			
			<view class="row">
				<text class="item">参赛组别 Group</text>
				<uni-easyinput class="input" :clearable="true" type="text" v-model="game_group" disabled/>
			</view>
		</view>
		
		<view class="card">
			<text class="card-title">参赛人</text>
			
			<view class="row">
				<text class="item">姓名 Name</text>
				<uni-easyinput class="input" :clearable="true" type="text" v-model="name" />
			</view>

			<view class="row">
				<text class="item">性别 Sex</text>
				<uni-data-picker style="width: 90px;" :localdata="sex_option" popup-title="请选择" v-model="sex"></uni-data-picker>
			</view>

			<view class="row">
				<text class="item">出生年月 Data of brith</text>
				<uni-datetime-picker style="width: 140px;" v-model="date_of_brith" start="2000-1-1" end="2021-6-10" type="date"></uni-datetime-picker>
			</view>
			
			<view class="row">
				<text class="item">联系人姓名 Person Contact</text>
				<uni-easyinput class="input" :clearable="true" type="text" v-model="person_contact" />
			</view>
		
			<view class="row">
				<text class="item">联系电话 Phone</text>
				<uni-easyinput class="input" :clearable="true" type="text" v-model="mobile_phone" />
			</view>
			
			<view class="row">
				<text class="item">身份证号 IDcard Number</text>
				<uni-easyinput class="input" :clearable="true" type="text" v-model="ID_card_number" />
			</view>
		
			<view class="row">
				<text class="item">学习或培训机构 IInstitute</text>
				<uni-easyinput class="input" :clearable="true" type="text" v-model="institute" />
			</view>
		
			<view class="row">
				<text class="item">电子邮箱 Email</text>
				<uni-easyinput class="input" :clearable="true" type="text" v-model="email" />
			</view>
			
			<view class="row">
				<text class="item">通讯地址和邮编 Mailing Adress</text>
				<uni-easyinput class="input" :clearable="true" type="textarea" v-model="mailing_address" />
			</view>
		</view>
		
		<view class="card">
			<text class="card-title">指导老师</text>
			
			<view class="row">
				<text class="item">指导老师姓名 Guidance Teacher Name</text>
				<uni-easyinput class="input" :clearable="true" type="text" v-model="guidance_teacher_name" />
			</view>
		
			<view class="row">
				<text class="item">职称 Title</text>
				<uni-easyinput class="input" :clearable="true" type="text" v-model="guidance_teacher_title" />
			</view>
		
			<view class="row">
				<text class="item">联系电话 Phone</text>
				<uni-easyinput class="input" :clearable="true" type="text" v-model="guidance_teacher_phone" />
			</view>
		</view>
		
		<view class="card">
			<text class="card-title">参赛曲目</text>
			
			<view class="row" v-for="(item, index) in works_to_play" :key="index">
				<text class="item">曲目{{index + 1}}</text>
				<text class="subTitle">作曲家 Composer</text>
				<uni-easyinput class="input" :clearable="true" type="text" v-model="item.composer" />
				<text class="subTitle">作品名 Title of work</text>
				<uni-easyinput class="input" :clearable="true" type="text" v-model="item.title_of_work" />
				<text class="subTitle">作品编号 Op</text>
				<uni-easyinput class="input" :clearable="true" type="text" v-model="item.op" />
				<text class="subTitle">时长 Time</text>
				<uni-easyinput class="input" :clearable="true" type="text" v-model="item.time" />
			</view>
		</view>

		<view class="card">
			<text class="card-title">个人背景</text>
			
			<view class="row">
				<text class="item">音乐学习经历 Musical Background</text>
				<uni-easyinput class="input" :clearable="true" type="textarea" v-model="musical_background" />
			</view>
		</view>

		<view class="button" @tap="submitForm()">
			<text>
				提交
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sex_option: [{
						text: "男",
						value: "男",
					},
					{
						text: "女",
						value: "女",
					}
				],

				game_rigion: "四川赛区",
				game_group: "青少年业余组",

				name: "",
				sex: "",
				date_of_brith: "",

				person_contact: "",
				mobile_phone: "",

				ID_card_number: "",
				institute: "",
				email: "",
				mailing_address: "",

				guidance_teacher_name: "",
				guidance_teacher_title: "",
				guidance_teacher_phone: "",

				works_to_play: [
					{
						composer: "",
						title_of_work: "",
						op: "",
						time: ""
					},
					{
						composer: "",
						title_of_work: "",
						op: "",
						time: ""
					},
					{
						composer: "",
						title_of_work: "",
						op: "",
						time: ""
					}
				],

				musical_background: ""
			}
		},
		methods: {
			submitForm() {
				console.log(this.$data)
				uni.showLoading({
					
				})
				uni.request({
					url: "https://code-server.api.funkydog.club/app/piano/",
					method: "POST",
					data: this.$data,
					complete: (res) => {
						res.data.works_to_play = JSON.parse(res.data.works_to_play)
						console.log(res)
						setTimeout(()=>{
							uni.hideLoading()
							uni.showToast({
								title: '报名成功',
								duration: 300
							})
							setTimeout(()=>{
								uni.navigateBack({
									
								})
							},1000)
						},0)
					}
				})
				
				
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
