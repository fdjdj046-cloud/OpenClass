import { i as __toESM } from "../_runtime.mjs";
import { R as require_jsx_runtime, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as markProgress } from "./progress-E2FDCJ2Q.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as employees, t as IntranetShell } from "./employees-BnhWpv1w.mjs";
import { t as HtmlComment } from "./html-comment-BnxVEtK5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ops-B9W4s8sm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var intro = `Linux app-prod-01 5.15.0-x86_64
Сессия: root@bastion  uid=0
Контур: DC-MSK-3 · учебный
Введите help, если нужна справка.`;
function handleCommand(raw) {
	const cmd = raw.trim();
	const clean = cmd.toLowerCase().replace(/\s+/g, " ").trim();
	if (clean === "") return { out: "" };
	if (clean === "help") return { out: "Команды: ls, cat [файл], whoami, pwd, date, hostname, clear" };
	if (clean === "ls" || clean === "dir" || clean === "ls -la" || clean === "ls -l") return { out: "server.py   users.db   SECRET_FLAG.txt   config.json" };
	if (clean === "whoami") return { out: "root" };
	if (clean === "pwd") return { out: "/root" };
	if (clean === "hostname") return { out: "app-prod-01" };
	if (clean === "date") return { out: (/* @__PURE__ */ new Date()).toUTCString() };
	if (clean === "id") return { out: "uid=0(root) gid=0(root) groups=0(root)" };
	if (clean === "cat secret_flag.txt" || clean === "cat ./secret_flag.txt") return {
		out: "Чтение SECRET_FLAG.txt…",
		go: true
	};
	if (clean.startsWith("cat ")) return { out: "Файл недоступен либо зашифрован. Нужен SECRET_FLAG.txt." };
	if (clean === "clear") return {
		out: "",
		clear: true
	};
	return { out: `bash: ${cmd}: команда не найдена` };
}
function OpsPage() {
	const navigate = useNavigate();
	const [log, setLog] = (0, import_react.useState)(intro);
	const [value, setValue] = (0, import_react.useState)("");
	const scroller = (0, import_react.useRef)(null);
	const input = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		scroller.current?.scrollTo({ top: scroller.current.scrollHeight });
	}, [log]);
	function submit(command) {
		const { out, go, clear } = handleCommand(command);
		if (clear) {
			setLog("Сессия root активна.");
			return;
		}
		const block = `\nroot@app-prod-01:~# ${command}${out ? `\n${out}` : ""}`;
		setLog((prev) => prev + block);
		if (go) {
			markProgress({ shell: true });
			window.setTimeout(() => {
				navigate({ to: "/archive" });
			}, 900);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(IntranetShell, {
		employee: employees["1"],
		current: "ops",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HtmlComment, { text: "Секрет лежит в SECRET_FLAG.txt. Команды: ls, cat." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.16em] text-mist",
					children: "Meridian Cloud Shell"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-2 text-3xl tracking-tight md:text-4xl",
					children: "Консоль сервера"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-subtle",
					children: "bastion → app-prod-01 · ssh · 22/tcp"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-lg bg-ink p-4 text-photo shadow-paper md:p-5",
				onClick: () => input.current?.focus(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.14em] text-subtle",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "root@app-prod-01" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "connected" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						ref: scroller,
						className: "max-h-[min(52vh,28rem)] overflow-y-auto whitespace-pre-wrap break-words font-mono text-[13px] leading-relaxed text-ok-soft",
						children: log
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-2 font-mono text-[13px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "cmd",
								className: "shrink-0 text-ok-soft",
								children: "root@app-prod-01:~#"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: input,
								id: "cmd",
								value,
								autoComplete: "off",
								spellCheck: false,
								autoFocus: true,
								className: "min-w-0 flex-1 border-0 bg-transparent p-0 text-photo outline-none",
								onChange: (event) => setValue(event.target.value),
								onKeyDown: (event) => {
									if (event.key === "Enter") {
										submit(value);
										setValue("");
									}
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "term-caret h-4 w-1.5 bg-photo",
								"aria-hidden": true
							})
						]
					})
				]
			})]
		})]
	});
}
//#endregion
export { OpsPage as component };
