<template>
	<!-- 报名 -->
	<div class="container">
		<div class="steps-main">
			<el-steps :active="activePage" align-center>
				<el-step title="报名须知"> </el-step>
				<el-step title="企业信息"> </el-step>
				<el-step title="财务信息"> </el-step>
				<el-step title="资格证明"> </el-step>
				<el-step title="其它资料"> </el-step>
			</el-steps>
			<div class="steps-box">
				<div class="steps-container">
					<div class="steps-list" v-if="activePage == 1">
						<div class="steps-title">
							当前报名分类为 :工程类/工程施工类/外装
						</div>
						<div class="setps-text">
							<p class="setps-text-title">
                                本次供方征集入库采用资格预审形式，意向人按要求提交报名资料，经评审小组评审合格后才有资格入库。入库供方资格要求具体如下：
							</p>
							<p>
                                1、注册年限3年（含）以上；不晚于2017年12月前注册
							</p>
							<p>2、注册资本金人民币500万（含）以上；</p>
							<p>3、过去近三年的平均营业额不少于500万元；</p>
							<p class="setps-text-title">
                                联系方式
                            </p>
							<p>
                                联系人：王红娟，联系电话：025-68181668
							</p>
							<p class="setps-text-title">
								其它要求
							</p>
							<p class="setps-text-title">
								1、类似项目经验
							</p>
							<p>
                                近3年内有相关的商业综合体安保服务年度合同3份，3份合同总价需要在50万以上，且至少有1份贵州省内合同。
							</p>
							<p class="setps-text-title">
                                2、履约情况
							</p>
							<p>
                                在递交申请文件前3年内争端和诉讼已经全部按照该合同的争端解决机制解决，对申请人无新的上诉；目前没有悬而未决的诉讼。
							</p>
							<p class="setps-text-title">
                                3、资质等级
							</p>
							<p>
                                公司需在贵州省注册，已完成公安备案及资质准入手续。
							</p>
							<p class="setps-text-title">
                                4、项目团队经验
							</p>
							<p>
                                有相关服务经验，有制定大型活动的服务方案及相应现场管控经验。
							</p>
						</div>

						<div class="setps-btn">
							<div class="check">
								<el-checkbox v-model="checked">我已阅读并同意以上条款</el-checkbox>
							</div>
							<div class="btn">
								<el-button @click="nextFun" class="btn-next"> 已阅读，下一步 </el-button>
							</div>
						</div>
					</div>
					<div class="steps-list" v-if="activePage == 2">
						<div class="steps-title">
							企业信息
						</div>
						<el-form ref="form" :model="form" label-width="180px">
							<div class="setps-text">
								<el-form-item label="公司名称" :required="true">
									<el-input v-model="form.name"></el-input>
								</el-form-item>
								<el-row :gutter="10">
									<el-col :span="12">
										<el-form-item label="企业组织形式" :required="true">
											<el-input v-model="form.name"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item label="所属国家" :required="true">
											<el-input v-model="form.name"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="10">
									<el-col :span="12">
										<el-form-item label="社会信用代码" :required="true">
											<el-input v-model="form.name"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item label="法人代表" :required="true">
											<el-input v-model="form.name"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="10">
									<el-col :span="12">
										<el-form-item label="注册金额" :required="true">
											<el-input v-model="form.name"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item label="企业成立年份" :required="true">
											<el-input v-model="form.name"></el-input>
										</el-form-item>
									</el-col>
								</el-row>

								<el-form-item label="法人代表或总经理名片" :required="true">
									<el-button>上传文件</el-button>
								</el-form-item>
								<el-form-item label="营业执照扫描件" :required="true">
									<el-button>上传文件</el-button>
								</el-form-item>
								<el-form-item label="组织机构代码证扫描件" :required="true">
									<el-button>上传文件</el-button>
								</el-form-item>
							</div>
							<div class="steps-title">
								企业联系信息
							</div>
							<div class="setps-text">
								<el-row :gutter="10">
									<el-col :span="20">
										<el-row :gutter="10">
											<el-col :span="24">
												<el-form-item label="联系人手机号" :required="true">
													<el-input v-model="form.name"></el-input>
												</el-form-item>
											</el-col>
										</el-row>
										<el-row :gutter="10">
											<el-col :span="12">
												<el-form-item label="联系人姓名" :required="true">
													<el-input v-model="form.name"></el-input>
												</el-form-item>
											</el-col>
											<el-col :span="12">
												<el-form-item label="联系人身份证号" :required="true">
													<el-input v-model="form.name"></el-input>
												</el-form-item>
											</el-col>
										</el-row>
										<el-row :gutter="10">
											<el-col :span="12">
												<el-form-item label="投标专用手机号" :required="true">
													<el-input v-model="form.name"></el-input>
												</el-form-item>
											</el-col>
											<el-col :span="12">
												<el-form-item label="投标承诺函" :required="true">
													<el-input v-model="form.name"></el-input>
												</el-form-item>
											</el-col>
										</el-row>
										<el-row :gutter="10">
											<el-col :span="12">
												<el-form-item label="财务联系人姓名" :required="true">
													<el-input v-model="form.name"></el-input>
												</el-form-item>
											</el-col>
											<el-col :span="12">
												<el-form-item label="财务联系人电话" :required="true">
													<el-input v-model="form.name"></el-input>
												</el-form-item>
											</el-col>
										</el-row>
									</el-col>
									<el-col :span="4">
										照片
									</el-col>
								</el-row>
								<el-form-item label="办公地址" :required="true">
									<el-input v-model="form.name"></el-input>
								</el-form-item>
								<el-form-item label="注册地址" :required="true">
									<el-input v-model="form.name"></el-input>
								</el-form-item>
							</div>
						</el-form>
						<div class="setps-btn">
							<div class="btn">
								<el-button class="btn-next" @click="backFun">上一步 </el-button>
								<el-button class="btn-next" @click="nextFun">下一步 </el-button>
							</div>
						</div>
					</div>
					<div class="steps-list" v-if="activePage == 3">
						<div class="steps-title">
							开户行信息
						</div>
						<el-form ref="form" :model="form" label-width="180px">
							<div class="setps-text">
								<el-row :gutter="10">
									<el-col :span="12">
										<el-form-item label="账户名称" :required="true">
											<el-input v-model="form.name"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item label="银行帐号" :required="true">
											<el-input v-model="form.name"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-form-item label="开户行名称" :required="true">
											<el-input v-model="form.name"></el-input>
								</el-form-item>
								<el-form-item label="开户行地址" :required="true">
											<el-input v-model="form.name"></el-input>
								</el-form-item>
								
								<el-row :gutter="10">
									<el-col :span="12">
										<el-form-item label="开户许可证伯扫描件" :required="true">
											<el-button>上传文件</el-button>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item label="币种" :required="true">
											<el-input v-model="form.name"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
							</div>
							<div class="steps-title">
								财务信息
							</div>
							<div class="setps-text">
								<el-form-item label="财务项" :required="true">
									<el-row :gutter="10">
										<el-col :span="7">2017年</el-col>
										<el-col :span="7">2018年</el-col>
										<el-col :span="7">2019年</el-col>
									</el-row>
								</el-form-item>
								<el-form-item label="年度营业额（万元）" :required="true">
									<el-row :gutter="10">
										<el-col :span="7"><el-input v-model="form.name"></el-input></el-col>
										<el-col :span="7"><el-input v-model="form.name"></el-input></el-col>
										<el-col :span="7"><el-input v-model="form.name"></el-input></el-col>
									</el-row>
								</el-form-item>
								<el-form-item label="期末资产总额（万元）" :required="true">
									<el-row :gutter="10">
										<el-col :span="7"><el-input v-model="form.name"></el-input></el-col>
										<el-col :span="7"><el-input v-model="form.name"></el-input></el-col>
										<el-col :span="7"><el-input v-model="form.name"></el-input></el-col>
									</el-row>
								</el-form-item>
								<el-form-item label="年度净利润（万元）" :required="true">
									<el-row :gutter="10">
										<el-col :span="7"><el-input v-model="form.name"></el-input></el-col>
										<el-col :span="7"><el-input v-model="form.name"></el-input></el-col>
										<el-col :span="7"><el-input v-model="form.name"></el-input></el-col>
									</el-row>
								</el-form-item>
								<el-form-item label="期末负债总额（万元）">
									<el-row :gutter="10">
										<el-col :span="7"><el-input v-model="form.name"></el-input></el-col>
										<el-col :span="7"><el-input v-model="form.name"></el-input></el-col>
										<el-col :span="7"><el-input v-model="form.name"></el-input></el-col>
									</el-row>
								</el-form-item>
								<el-form-item label="期末货币资金（万元）">
									<el-row :gutter="10">
										<el-col :span="7"><el-input v-model="form.name"></el-input></el-col>
										<el-col :span="7"><el-input v-model="form.name"></el-input></el-col>
										<el-col :span="7"><el-input v-model="form.name"></el-input></el-col>
									</el-row>
								</el-form-item>
								<el-form-item label="备注">
									<el-input v-model="form.name"></el-input>
								</el-form-item>
									<el-form-item label="附件" :required="true">
										<el-button>上传文件</el-button>
									</el-form-item>
							</div>
						</el-form>

						<div class="setps-btn">
							<div class="btn">
								<el-button type="primary" @click="backFun" class="btn-next">上一步 </el-button>
								<el-button type="primary" @click="nextFun" class="btn-next"> 下一步 </el-button>
							</div>
						</div>
					</div>
					<div class="steps-list setps-deposit" v-if="activePage == 4">
						<div class="steps-text">
							开户行信息
						</div>
						<div class="setps-text">
							<el-form ref="form" :model="form">
								<span class="lable-slot-title require">
									1、申请函签字盖章
								</span>
								<span  class="lable-slot-text">
									是否具有:法定代表人或其委托代理人签字、并加盖单位公章
								</span>
								<el-row :gutter="30">
									<el-col :span="8">
										<el-form-item label="上传附件">
											<el-button>上传</el-button>
										</el-form-item>
									</el-col>
									<el-col :span="8">
										<el-form-item label="说明">
											<el-input v-model="form.namm" placeholder=""></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="8">
										<el-form-item label="是否附合">
											<el-input v-model="form.namm" placeholder=""></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<span class="lable-slot-title require">
									2、质量认证
								</span>
								<span  class="lable-slot-text">
									是否合法有效: 附合国家及行业标准
								</span>
								<el-row :gutter="30">
									<el-col :span="8">
										<el-form-item label="上传附件" :required="true">
											<el-button>上传</el-button>
										</el-form-item>
									</el-col>
									<el-col :span="8">
										<el-form-item label="说明">
											<el-input v-model="form.namm" placeholder=""></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="8">
										<el-form-item label="是否附合">
											<el-input v-model="form.namm" placeholder=""></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<span class="lable-slot-title require">
									3、类似项目经理
								</span>
								<span  class="lable-slot-text">
									是否具备: 近三年内作为独立 中标人成功地和实质上完成的制冷机组的供货及指导安装合同至少提供3个类似代表业绩合同复印件
								</span>
								<el-row :gutter="30">
									<el-col :span="24">
										<el-table
										:data="tableDtaa"
										style="width: 100%">
											<el-table-column
												type="index"
												label="序号">
											</el-table-column>
											<el-table-column
												prop="index"
												label="项目名称">
											</el-table-column>
											<el-table-column
												prop="index"
												label="项目业态">
											</el-table-column>
											<el-table-column
												prop="index"
												label="开工时间 ">
											</el-table-column>
											<el-table-column
												prop="index"
												label="合同金额">
											</el-table-column>
											<el-table-column
												prop="index"
												label="结算金额">
											</el-table-column>
											<el-table-column
												prop="index"
												label="业主名称">
											</el-table-column>
											<el-table-column
												prop="index"
												label="证明文件">
											</el-table-column>
											<el-table-column
												prop="index"
												label="编辑">
											</el-table-column>
										</el-table>
									</el-col>
								</el-row>
								<span class="lable-slot-title require">
									4、履约情况
								</span>
								<span  class="lable-slot-text">
									是否满足如下情况 : 在递交申请文 件前3年内争端和诉讼已经全部按照该合同的争端解决机制解决，对申请人无新的上诉；目前没有悬而未决的诉讼。
								</span>
								<el-row :gutter="30">
									<el-col :span="8">
										<el-form-item label="上传附件">
											<div><el-button>上传</el-button></div>
										</el-form-item>
									</el-col>
									<el-col :span="8">
										<el-form-item label="说明">
											<el-input v-model="form.namm" placeholder=""></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="8">
										<el-form-item label="是否附合">
											<el-input v-model="form.namm" placeholder=""></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<span class="lable-slot-title require">
									5、申请文件格式
								</span>
								<span  class="lable-slot-text">
									是滞符合  “资格评审申请文 件格式”
								</span>
								<el-row :gutter="30">
									<el-col :span="8">
										<el-form-item label="上传附件">
											<el-button>上传</el-button>
										</el-form-item>
									</el-col>
									<el-col :span="8">
										<el-form-item label="说明">
											<el-input v-model="form.namm" placeholder=""></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="8">
										<el-form-item label="是否附合">
											<el-input v-model="form.namm" placeholder=""></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<span class="lable-slot-title require">
									6、财务报表
								</span>
								<span  class="lable-slot-text">
									递交过去3年的财务审计报告，证明其财务状况
								</span>
								<el-row :gutter="30">
									<el-col :span="8">
										<el-form-item label="上传附件">
											<el-button>上传</el-button>
										</el-form-item>
									</el-col>
									<el-col :span="8">
										<el-form-item label="说明">
											<el-input v-model="form.namm" placeholder=""></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="8">
										<el-form-item label="是否附合">
											<el-input v-model="form.namm" placeholder=""></el-input>
										</el-form-item>
									</el-col>
								</el-row>
							</el-form>
						</div>
						<div class="setps-btn">
							<div class="btn">
								<el-button type="primary" @click="backFun" class="btn-next">上一步 </el-button>
								<el-button type="primary" @click="nextFun" class="btn-next"> 下一步 </el-button>
							</div>
						</div>
					</div>
					<div class="steps-list setps-deposit" v-if="activePage == 5">
						<div class="steps-text">
							开户行信息
						</div>
						<div class="setps-text">
							<el-form ref="form" :model="form">
								<span class="lable-slot-title require">
									1、所需要文件
								</span>
								<span  class="lable-slot-text">
									提供一套相应的成功案例
								</span>
								<el-row :gutter="30">
									<el-col :span="24">
										<el-table
										:data="tableDtaa"
										style="width: 100%">
											<el-table-column
												type="index"
												label="序号">
											</el-table-column>
											<el-table-column
												prop="index"
												label="文件上传">
											</el-table-column>
											<el-table-column
												prop="index"
												label="文件类型">
											</el-table-column>
											<el-table-column
												prop="index"
												label="说明 ">
											</el-table-column>
											<el-table-column
												prop="index"
												label="编辑">
											</el-table-column>
										</el-table>
									</el-col>
								</el-row>
							</el-form>
						</div>
						<div class="setps-btn">
							<div class="btn">
								<el-button @click="backFun" class="btn-next">上一步 </el-button>
								<el-button class="btn-submit" @click="submit"> 提交报名</el-button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	let vm;
	export default {
		data() {
			return {
				activePage: 1,
				checked: false,
				query: {},
				form: {},
				tableDtaa:[]
			};
		},
		created() {
			vm = this;
		},
		components: {},
		methods: {
			//点击下一步
			nextFun() {
				if (vm.checked) {
					vm.activePage = vm.activePage + 1;
				} else {
					vm.$message.error("请先同意阅读条款")
				}
			},
			//回到上一步
			backFun() {
				if (vm.activePage > 1) {
					vm.activePage = vm.activePage - 1;
				}
			},
			//提交报名
			submit(){
				vm.$router.push("/dashboard/profile")
			}
		},
	};
</script>


<style lang="less">
	.steps-main {

		.el-step__title.is-finish,
		.el-step__head.is-finish {
			color: #21A888;
			border-color: #21A888;
		}

		.el-step__head.is-process {
			color: #C1C1C1;
			border-color: #C1C1C1;
		}

		.el-step__title.is-process {
			font-weight: 400;
			color: #c1c1c1;
		}

		.is-finish .el-step__icon {
			background: #21A888 !important;
		}

		.is-finish .el-step__icon.is-text {
			border: 2px solid #21A888 !important;
		}

		.el-step__icon.is-text {
			border: 2px solid #C1C1C1;
			background: #C1C1C1;
			color: #fff !important;
		}
	}

	.steps-box {
		padding: 20px;

		.steps-list {
			margin-top: 30px;

			.steps-title {
				font-size: 18px;
				text-align: center;
				font-weight: bold;
				color: #21A888;
				padding-bottom: 20px;
			}

			.setps-text {
				border: 2px solid #21A888;
				padding: 50px 60px;
				border-radius: 20px;
				line-height: 28px;
					color: #666;
				.setps-text-title{
					font-weight: bold;
					font-size: 16px;
					padding-top: 20px;
				}
			}

			.el-form-item {
				margin-bottom: 5px;

				.el-input__inner {
					height: 36px;
					line-height: 36px;
				}

				.el-input__inner:focus {
					border-color: #21A888;
				}

				.el-form-item__label {
					background: #E4EFE7;
					font-weight: bold;
					color: #21A888;
				}
			}

			.el-checkbox__input.is-checked+.el-checkbox__label {
				color: #21A888;
			}

			.el-checkbox__input.is-checked .el-checkbox__inner {
				background-color: #21A888;
				border-color: #21A888;
			}

			.el-checkbox__inner {
				border-color: #21A888;
			}

			.setps-btn {
				text-align: center;

				.btn-next {
					background: #21A888;
					border-radius: 10px;
					color: #fff;
					font-weight: 400;
				}
				.el-button{
					padding: 12px 30px;
				}
				.btn-submit{
					font-weight: 400;
					color: #FFFFFF;
					background: #05C0BE;
					border-radius: 8px;
				}
				div {
					margin-top: 30px;
				}
			}
		}
		.setps-deposit{
			.el-form-item .el-form-item__label {
				text-align: center;
				width: 100%;
				font-weight: bold;
			}
			.require::after{
				font-weight: bold;
				content: '*';
				color: #FF0101;
				margin-left: 4px
			}
			.lable-slot-title{
				display: block;
				font-weight: bold;
				color: #21A888;
				line-height: 28px;
				font-size: 16px;
			}
			.lable-slot-text{
				font-weight: 400;
				color: #666666;
				font-size: 12px;
				line-height: 28px;
				padding-left: 24px;
			}
		}
	}
</style>
