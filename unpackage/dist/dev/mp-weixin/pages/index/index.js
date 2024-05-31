"use strict";
const common_vendor = require("../../common/vendor.js");
const Data = [
  {
    prizeName: "蚂蚁上树",
    prizeId: 1,
    prizeWeight: "100"
  },
  {
    prizeName: "柠檬鸡块",
    prizeId: 2,
    prizeWeight: "100"
  },
  {
    prizeName: "菠萝咕咾肉",
    prizeId: 3,
    prizeWeight: "100"
  },
  {
    prizeName: "排骨焖鸡",
    prizeId: 4,
    prizeWeight: "100"
  },
  {
    prizeName: "干炒鸡块",
    prizeId: 5,
    prizeWeight: "100"
  },
  {
    prizeName: "可乐鸡翅",
    prizeId: 6,
    prizeWeight: "100"
  },
  {
    prizeName: "青椒牛肉丝",
    prizeId: 7,
    prizeWeight: "100"
  },
  {
    prizeName: "番茄炒蛋",
    prizeId: 8,
    prizeWeight: "100"
  },
  {
    prizeName: "基围虾",
    prizeId: 9,
    prizeWeight: "100"
  },
  {
    prizeName: "烧茄子",
    prizeId: 10,
    prizeWeight: "100"
  },
  {
    prizeName: "蒜香排骨",
    prizeId: 11,
    prizeWeight: "100"
  },
  {
    prizeName: "炒花甲",
    prizeId: 12,
    prizeWeight: "100"
  },
  {
    prizeName: "青椒土豆丝",
    prizeId: 13,
    prizeWeight: "100"
  },
  {
    prizeName: "锅包肉",
    prizeId: 14,
    prizeWeight: "100"
  }
];
if (!Array) {
  const _easycom_up_button2 = common_vendor.resolveComponent("up-button");
  const _component_layout = common_vendor.resolveComponent("layout");
  (_easycom_up_button2 + _component_layout)();
}
const _easycom_up_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (AlmostLottery + _easycom_up_button)();
}
const AlmostLottery = () => "../../uni_modules/almost-lottery/components/almost-lottery/almost-lottery.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const prizeList = common_vendor.ref(Data);
    const prizeIndex = common_vendor.ref(-1);
    const prizeName = common_vendor.ref("???");
    const handleDrawBefore = (callback) => {
      let flag = true;
      callback(flag);
    };
    const handleDrawStart = () => {
      prizeIndex.value = Math.ceil(Math.random() * 12);
    };
    const handleDrawEnd = () => {
      prizeName.value = prizeList.value[prizeIndex.value]["prizeName"];
    };
    const handleDrawFinish = (res) => {
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(prizeName.value),
        b: prizeList.value.length
      }, prizeList.value.length ? {
        c: common_vendor.o(($event) => prizeIndex.value = -1),
        d: common_vendor.o(handleDrawBefore),
        e: common_vendor.o(handleDrawStart),
        f: common_vendor.o(handleDrawEnd),
        g: common_vendor.o(handleDrawFinish),
        h: common_vendor.p({
          prizeList: prizeList.value,
          prizeIndex: prizeIndex.value
        })
      } : {}, {
        i: common_vendor.p({
          type: "primary",
          icon: "map",
          shape: "circle",
          plain: true,
          size: "small"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/tp-tool-box/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
