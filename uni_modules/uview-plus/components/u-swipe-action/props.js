import defProps from '../../libs/config/props.js';
export default {
    props: {
        // 是否自动关闭其他swipe按钮组
        autoClose: {
            type: Boolean,
            default: () => defProps.swipeAction.autoClose
        }
    }
}
