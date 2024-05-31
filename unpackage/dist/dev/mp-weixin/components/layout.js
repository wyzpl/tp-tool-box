"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_up_navbar2 = common_vendor.resolveComponent("up-navbar");
  _easycom_up_navbar2();
}
const _easycom_up_navbar = () => "../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
if (!Math) {
  _easycom_up_navbar();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.o(_ctx.rightClick),
    b: common_vendor.p({
      title: "",
      placeholder: true,
      bgColor: "transparent"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/tp-tool-box/components/layout.vue"]]);
wx.createComponent(Component);
