import LogsPanel from "./LogsPanel-C5Wn94u_.js";
import { d as defineComponent, a5 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-C_SdEMij.js";
import "./AnimatedSpinner-Ber0iFc0.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-BXDBnLdz.js";
import "./VueMarkdown-Dz71a-po.js";
import "./canvas-CgDeBhyc.js";
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
