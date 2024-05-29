"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _component_layout = common_vendor.resolveComponent("layout");
  (_easycom_unicloud_db2 + _easycom_uni_easyinput2 + _component_layout)();
}
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  (_easycom_unicloud_db + _easycom_uni_easyinput)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref([]);
    const udbRef = common_vendor.ref();
    const currentIndex = common_vendor.ref(1);
    const timer = common_vendor.ref(null);
    const newCookbook = common_vendor.ref();
    const dataCode = common_vendor.ref();
    const handleLoadData = (data, ended, pagination) => {
      dataCode.value = data.length;
    };
    const handleAddCookbook = () => {
      udbRef.value.add({ name: newCookbook.value, code: dataCode.value + 1 }, {
        toastTitle: "新增成功",
        // toast提示语
        success: (res) => {
          udbRef.value.loadData();
        },
        fail: (err) => {
        },
        complete: () => {
        }
      });
    };
    const handleStartRandom = () => {
      timer.value = setInterval(() => {
        currentIndex.value = Math.ceil(Math.random() * 12);
      }, 10);
    };
    const handleStopRandom = () => {
      clearInterval(timer.value);
      timer.value = null;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.w(({
          data,
          loading,
          error,
          options
        }, s0, i0) => {
          return common_vendor.e({
            a: error
          }, error ? {
            b: common_vendor.t(error.message)
          } : {
            c: common_vendor.t(data.filter((item, index) => item.code == currentIndex.value)[0].name)
          }, {
            d: i0,
            e: s0
          });
        }, {
          name: "d",
          path: "a",
          vueId: "1cf27b2a-1,1cf27b2a-0"
        }),
        b: common_vendor.sr(udbRef, "1cf27b2a-1,1cf27b2a-0", {
          "k": "udbRef"
        }),
        c: common_vendor.o(handleLoadData),
        d: common_vendor.p({
          collection: "tp-cookbook-list"
        }),
        e: !timer.value
      }, !timer.value ? {
        f: common_vendor.o(handleStartRandom)
      } : {
        g: common_vendor.o(handleStopRandom)
      }, {
        h: common_vendor.o(($event) => newCookbook.value = $event),
        i: common_vendor.p({
          placeholder: "请输入内容",
          modelValue: newCookbook.value
        }),
        j: common_vendor.o(handleAddCookbook)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/tp-tool-box/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
