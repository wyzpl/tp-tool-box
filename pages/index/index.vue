<template>
  <layout>
    <view class="container">
      <view class="title">Eat Next What ?</view>
      <view class="sub-title">{{ prizeName }}</view>
      <!-- <unicloud-db ref="udbRef" v-slot:default="{data, loading, error, options}" collection="tp-cookbook-list" @load="handleLoadData">
				<view v-if="error">{{error.message}}</view>
				<view v-else>
					{{ data.filter( (item, index) => item.code == currentIndex)[0].name}}
				</view>
			</unicloud-db> -->

      <view class="turntable">
       <almost-lottery
          :prizeList="prizeList"
          :prizeIndex="prizeIndex"
          @reset-index="prizeIndex = -1"
          @draw-before="handleDrawBefore"
          @draw-start="handleDrawStart"
          @draw-end="handleDrawEnd"
          @finish="handleDrawFinish"
          v-if="prizeList.length"
        />
      </view>

      <view class="footer">
        <view class="footer-btn">
          <up-button style="border-radius: 50%; width: 100px" type="primary" icon="map" shape="circle" plain size="small"></up-button>
        </view>
      </view>
    </view>
  </layout>
</template>

<script setup>
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import AlmostLottery from "@/uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue";
import Data from "@/api/tp-cookbook-list.json";
 
/* 数据列表 */
const prizeList = ref(Data);
/* 选中数据的下标 */
const prizeIndex = ref(-1);
/* 选中数据的名称 */
const prizeName = ref("???");
// 本次抽奖开始之前
const handleDrawBefore = (callback) => {
  // 这里需要处理你抽奖之前的逻辑
  // 请查看示例项目中的代码
  // 必须调用 callback 并传递一个布尔值，布尔值为 true 时，转盘才会开始旋转
  let flag = true;

  callback(flag);
};
// 本次抽奖开始
const handleDrawStart = () => {
  // 这里需要处理你的抽奖逻辑，并得出中奖物品的 prizeIndex
  // 请查看示例项目中的代码
  prizeIndex.value = Math.ceil(Math.random() * 12);
};
// 本次抽奖结束
const handleDrawEnd = () => {
  // 完成抽奖后，这里处理你拿到结果后的逻辑
  // 请查看示例项目中的代码
  prizeName.value = prizeList.value[prizeIndex.value]["prizeName"];
};
// 抽奖转盘绘制完成
const handleDrawFinish = (res) => {
  // 抽奖转盘准备就绪后，这里处理你的逻辑
  // 请查看示例项目中的代码
  // console.log('抽奖转盘绘制完成', res)
};
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
}

.title {
  text-align: center;
  font-weight: bold;
  font-size: 52rpx;
}

.sub-title {
  text-align: center;
  font-size: 48rpx;
  color: #141414;
  margin-top: 60rpx;
}

.turntable {
  margin-top: 120rpx;
}

.footer {
  margin-top: 120rpx;
}
.footer-btn {
  margin-top: 20px;
  width: 120px;
  height: 32px;
  line-height: 32px;
}
</style>
