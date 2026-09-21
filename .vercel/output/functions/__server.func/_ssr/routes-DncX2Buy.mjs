import { i as __toESM } from "../_runtime.mjs";
import { R as require_jsx_runtime, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as markProgress, t as Wordmark } from "./progress-E2FDCJ2Q.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as HtmlComment } from "./html-comment-BnxVEtK5.mjs";
import { t as Input } from "./input-DMBrt_Xs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DncX2Buy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Isolated island: React must not re-apply `disabled` after mount,
* otherwise DevTools edits are overwritten on the next render.
*/
var LoginSubmit = (0, import_react.memo)(function LoginSubmit({ onSuccess }) {
	const successRef = (0, import_react.useRef)(onSuccess);
	successRef.current = onSuccess;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		id: "login-submit",
		type: "submit",
		className: "inline-flex h-12 w-full items-center justify-center rounded-md bg-accent px-6 text-sm font-medium text-accent-fg transition-[opacity,transform,background-color] duration-150 ease-out hover:enabled:bg-ink focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-30 active:enabled:scale-[0.98]",
		ref: (node) => {
			if (!node) return;
			if (node.dataset.bound === "1") return;
			node.dataset.bound = "1";
			node.setAttribute("disabled", "disabled");
			node.addEventListener("click", (event) => {
				event.preventDefault();
				if (!node.hasAttribute("disabled")) successRef.current();
			});
		},
		children: "Войти на рабочий стол"
	});
});
function LoginPage() {
	const navigate = useNavigate();
	const [unlocking, setUnlocking] = (0, import_react.useState)(false);
	const onSuccess = (0, import_react.useCallback)(() => {
		markProgress({ sso: true });
		setUnlocking(true);
		window.setTimeout(() => {
			navigate({
				to: "/people",
				search: { id: "105" }
			});
		}, 900);
	}, [navigate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-canvas md:grid md:grid-cols-[minmax(0,1.15fr)_minmax(320px,28rem)] lg:grid-cols-[minmax(0,1fr)_32rem]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HtmlComment, { text: "IAM-2041: кнопка входа отключена атрибутом disabled только на клиенте. Сервер это не проверяет. Не оставлять в проде." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative isolate min-h-[38vh] overflow-hidden md:min-h-dvh",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/hq.jpg",
						alt: "Штаб-квартира АО «Меридиан»",
						className: "absolute inset-0 size-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-accent/55" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-accent via-accent/20 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-full min-h-[38vh] flex-col justify-between p-6 text-photo md:min-h-dvh md:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { light: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-lg pb-4 rise",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] uppercase tracking-[0.2em] text-photo/70",
									children: "АО «Меридиан» · Москва, 1994"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display mt-3 text-4xl leading-tight tracking-tight md:text-5xl",
									children: "Корпоративный доступ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-sm text-sm leading-relaxed text-photo/80",
									children: "Рабочий стол сотрудников, кадровые карточки и внутренние сервисы группы."
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col justify-center bg-paper px-6 py-10 md:px-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rise-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.18em] text-mist",
							children: "Meridian ID"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display mt-2 text-3xl tracking-tight",
							children: "Вход на рабочий стол"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-mist",
							children: "Используйте корпоративную учётную запись. Гостевые сессии ограничены профилем стажёра."
						}),
						unlocking ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 fade-in",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-ok",
								children: "Сертификат принят"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-mist",
								children: "Открываем карточку сотрудника…"
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-8 space-y-4",
							onSubmit: (event) => event.preventDefault(),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "email",
									className: "mb-1.5 block text-sm text-mist",
									children: "Почта"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									name: "email",
									type: "email",
									autoComplete: "username",
									defaultValue: "a.volkova@meridian.ru"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "password",
									className: "mb-1.5 block text-sm text-mist",
									children: "Пароль"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "password",
									name: "password",
									type: "password",
									autoComplete: "current-password",
									defaultValue: "********"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginSubmit, { onSuccess }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs leading-relaxed text-subtle",
									children: "Служба идентификации на плановом обслуживании. Если кнопка недоступна, обратитесь в ИТ, вн. 4412."
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-16 text-xs text-subtle",
					children: "Учебный контур. Не передавайте настоящие пароли."
				})]
			})
		]
	});
}
//#endregion
export { LoginPage as component };
