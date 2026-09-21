import { t as cn } from "./utils-C_uf36nf.mjs";
import { R as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progress-E2FDCJ2Q.js
var import_jsx_runtime = require_jsx_runtime();
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-7", className),
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "16",
				r: "13",
				stroke: "currentColor",
				strokeWidth: "1.25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "16",
				cy: "16",
				rx: "6.2",
				ry: "13",
				stroke: "currentColor",
				strokeWidth: "1.25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 3v26M4.5 16h23",
				stroke: "currentColor",
				strokeWidth: "1.25"
			})
		]
	});
}
function Wordmark({ light = false, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center gap-2.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: light ? "text-photo" : "text-ink" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("font-display text-lg tracking-tight", light ? "text-photo" : "text-ink"),
				children: "Меридиан"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-0.5 text-[10px] uppercase tracking-[0.18em]", light ? "text-photo/70" : "text-mist"),
				children: "Группа компаний"
			})]
		})]
	});
}
var KEY = "meridian-lab-progress";
var empty = {
	sso: false,
	admin: false,
	sqli: false,
	shell: false
};
function getProgress() {
	if (typeof window === "undefined") return empty;
	try {
		const raw = window.localStorage.getItem(KEY);
		if (!raw) return empty;
		return {
			...empty,
			...JSON.parse(raw)
		};
	} catch {
		return empty;
	}
}
function markProgress(patch) {
	const next = {
		...getProgress(),
		...patch
	};
	window.localStorage.setItem(KEY, JSON.stringify(next));
	window.dispatchEvent(new Event("meridian-progress"));
}
function resetProgress() {
	window.localStorage.removeItem(KEY);
	window.dispatchEvent(new Event("meridian-progress"));
}
//#endregion
export { markProgress as n, resetProgress as r, Wordmark as t };
