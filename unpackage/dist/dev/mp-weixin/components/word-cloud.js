"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "word-cloud",
  props: {
    dataList: {
      type: Array
    }
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    console.log(props.dataList.value);
    const emit = __emit;
    const bgColor = common_vendor.ref([
      "#58b9b3",
      "#d4584a",
      "#e58239",
      "#9ac656",
      "#60b257",
      "#387ff6",
      "#623ab2",
      "#9132ac",
      "#d04797",
      "#9d6947",
      "#333333",
      "#58b9b3",
      "#d4584a",
      "#e58239",
      "#9ac656",
      "#60b257",
      "#387ff6",
      "#623ab2",
      "#9132ac",
      "#d04797",
      "#9d6947",
      "#333333",
      "#58b9b3",
      "#d4584a",
      "#e58239",
      "#9ac656",
      "#60b257",
      "#387ff6",
      "#623ab2",
      "#9132ac",
      "#d04797",
      "#9d6947",
      "#333333"
    ]);
    const clickItem = (item) => {
      emit("change", item);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.dataList, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index,
            c: common_vendor.s("background-color:" + bgColor.value[index]),
            d: common_vendor.n("item" + (index + 1)),
            e: common_vendor.o(($event) => clickItem(item), index)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-27164826"], ["__file", "E:/tp-tool-box/components/word-cloud.vue"]]);
wx.createComponent(Component);
