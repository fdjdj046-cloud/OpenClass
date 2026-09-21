import { i as __toESM } from "../_runtime.mjs";
import { R as require_jsx_runtime, _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as markProgress } from "./progress-E2FDCJ2Q.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as employees, t as IntranetShell } from "./employees-BnhWpv1w.mjs";
import { t as Button } from "./button-CxL6aDil.mjs";
import { c as ArrowUpRight, i as Server, o as Database } from "../_libs/lucide-react.mjs";
import { r as Note } from "./router-paneIIYh.mjs";
import { t as HtmlComment } from "./html-comment-BnxVEtK5.mjs";
import { t as Input } from "./input-DMBrt_Xs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/data-PolIabTt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function isSqlPayload(login) {
	const val = login.toLowerCase().replace(/\s+/g, "");
	return val.includes("'or1=1") || val.includes("'or'1'='1") || val.includes("'or''='") || val.includes("admin'--");
}
function DataPage() {
	const [login, setLogin] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const admin = employees["1"];
	function tryLogin() {
		if (isSqlPayload(login)) {
			setError(false);
			setOpen(true);
			markProgress({ sqli: true });
			return;
		}
		setError(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(IntranetShell, {
		employee: open ? admin : employees["105"],
		current: "data",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HtmlComment, { text: "Аутентификация: SELECT * FROM users WHERE login = '" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.16em] text-mist",
					children: "Производственный контур · DC-MSK-3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-2 text-4xl tracking-tight",
					children: "Платформа данных"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-sm leading-relaxed text-mist",
					children: "Каталог промышленных витрин. Вход только для учёток с ролью администратора баз."
				}),
				!open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "rounded-lg bg-sheet p-6 shadow-paper",
						onSubmit: (event) => {
							event.preventDefault();
							tryLogin();
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl tracking-tight",
								children: "Вход в контур"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-mist",
								children: "Учётная запись службы сопровождения баз."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "db-user",
										className: "mb-1.5 block text-sm text-mist",
										children: "Логин"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "db-user",
										name: "username",
										autoComplete: "off",
										placeholder: "svc_dba",
										value: login,
										onChange: (event) => setLogin(event.target.value)
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "db-pass",
										className: "mb-1.5 block text-sm text-mist",
										children: "Пароль"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "db-pass",
										name: "password",
										type: "password",
										placeholder: "••••••••",
										value: password,
										onChange: (event) => setPassword(event.target.value)
									})] }),
									error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "rounded-md bg-danger-soft px-3 py-2 text-sm text-danger",
										children: "Отказ в аутентификации. Проверьте учётную запись."
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										className: "w-full",
										children: "Подключиться"
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-sheet p-6 shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.14em] text-mist",
								children: "Состояние контура"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 space-y-4 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Витрина HR",
										value: "доступна"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Журнал аудита",
										value: "доступна"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Реплика users",
										value: "только чтение"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Сессия",
										value: "не установлена"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-xs leading-relaxed text-subtle",
								children: "Запросы к каталогу логируются. Не передавайте пароль в открытых каналах."
							})
						]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 space-y-6 rise",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Запрос собрался без экранирования и вернул первую запись таблицы пользователей. Пароль не понадобился." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-lg bg-sheet shadow-paper",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 border-b border-line px-5 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: "users · 4 записи"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-x-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full text-left text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
										className: "text-xs uppercase tracking-[0.08em] text-subtle",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "border-b border-line",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-5 py-3 font-medium",
													children: "id"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-5 py-3 font-medium",
													children: "login"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-5 py-3 font-medium",
													children: "role"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-5 py-3 font-medium",
													children: "host"
												})
											]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "border-b border-line",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-5 py-3 font-mono text-xs",
													children: "1"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-5 py-3",
													children: "root_admin"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-5 py-3",
													children: "superuser"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-5 py-3",
													children: "app-prod-01"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "border-b border-line",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-5 py-3 font-mono text-xs",
													children: "18"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-5 py-3",
													children: "p.eremin"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-5 py-3",
													children: "ops"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-5 py-3",
													children: "bastion"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "border-b border-line",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-5 py-3 font-mono text-xs",
													children: "42"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-5 py-3",
													children: "m.kozlova"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-5 py-3",
													children: "hr"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-5 py-3",
													children: "intranet"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-5 py-3 font-mono text-xs",
												children: "105"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-5 py-3",
												children: "a.volkova"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-5 py-3",
												children: "guest"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-5 py-3",
												children: "intranet"
											})
										] })
									] })]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 rounded-lg bg-sheet p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "mt-0.5 size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: "Узел app-prod-01"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-mist",
									children: "Сессия bastion, учётная запись root"
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/ops",
									children: ["Открыть консоль", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
								})
							})]
						})
					]
				})
			]
		})]
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex items-center justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-mist",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: value })]
	});
}
//#endregion
export { DataPage as component };
