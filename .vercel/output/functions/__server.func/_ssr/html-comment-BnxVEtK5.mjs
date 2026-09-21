import { i as __toESM } from "../_runtime.mjs";
import { R as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/html-comment-BnxVEtK5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Places a real HTML comment in the DOM so students can find it in inspector. */
function HtmlComment({ text }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node || node.dataset.placed) return;
		node.dataset.placed = "1";
		node.replaceWith(document.createComment(` ${text} `));
	}, [text]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		hidden: true
	});
}
//#endregion
export { HtmlComment as t };
