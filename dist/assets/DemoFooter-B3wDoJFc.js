import LogsPanel from "./LogsPanel-D03hwrEh.js";
import { d as defineComponent, a5 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-B6CXOKcF.js";
import "./AnimatedSpinner-g9_eifCj.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-DFv5jaV7.js";
import "./VueMarkdown-BghKHl3P.js";
import "./canvas-CjJQKCNC.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoFooter",
  setup(__props) {
    const workflowsStore = useWorkflowsStore();
    const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
    return (_ctx, _cache) => {
      return hasExecutionData.value ? (openBlock(), createBlock(LogsPanel, {
        key: 0,
        "is-read-only": true
      })) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
