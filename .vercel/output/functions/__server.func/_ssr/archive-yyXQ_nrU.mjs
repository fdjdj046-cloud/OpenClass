import { R as require_jsx_runtime, _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as resetProgress } from "./progress-E2FDCJ2Q.mjs";
import { n as employees, t as IntranetShell } from "./employees-BnhWpv1w.mjs";
import { t as Button } from "./button-CxL6aDil.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/archive-yyXQ_nrU.js
var import_jsx_runtime = require_jsx_runtime();
var findings = [
	{
		title: "Клиентское ограничение",
		detail: "Кнопка входа была отключена только атрибутом disabled. Сервер не проверял, можно ли открывать сессию."
	},
	{
		title: "Прямая ссылка на карточку",
		detail: "Профили отдаются по табельному номеру в адресе. Сессия стажёра не сверялась с запрошенным id."
	},
	{
		title: "Сборка SQL-запроса",
		detail: "Логин подставлялся в запрос без экранирования. Подстановка ' OR 1=1 -- вернула первую запись."
	},
	{
		title: "Командная оболочка",
		detail: "После входа в контур открылась сессия root. Служебный файл читается обычными командами ls и cat."
	}
];
function ArchivePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntranetShell, {
		employee: employees["1"],
		current: "archive",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.16em] text-mist",
					children: "Архив · служебные документы · гриф ДСП"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-2 text-4xl tracking-tight",
					children: "Акт по итогам проверки"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-mist",
					children: "17 сентября 2026 · учебный контур АО «Меридиан» · для преподавателя"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "mt-10 rounded-xl bg-sheet px-6 py-8 shadow-paper md:px-10 md:py-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4 border-b border-line pb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl tracking-tight",
								children: "Меридиан"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs uppercase tracking-[0.14em] text-mist",
								children: "Управление информационной безопасности"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-right text-xs text-subtle",
								children: [
									"№ 44-ИБ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"17.09.2026"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm leading-relaxed",
							children: "В ходе занятия на учебном портале воспроизведены четыре типичных ошибки веб-приложений. Контрольный идентификатор фиксации:"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 rounded-md bg-paper px-4 py-5 text-center font-mono text-lg tracking-wide text-ink md:text-xl",
							children: [
								"FLAG",
								"{",
								"WHITE_HAT_PENTEST_2026",
								"}"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-center text-xs text-subtle",
							children: "Перенесите идентификатор в карточку отчёта для преподавателя."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-8 space-y-5",
							children: findings.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid grid-cols-[auto_1fr] gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs text-subtle pt-1",
									children: ["0", index + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm leading-relaxed text-mist",
									children: item.detail
								})] })]
							}, item.title))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							onClick: () => {
								resetProgress();
							},
							children: "Пройти заново"
						})
					})
				})
			]
		})
	});
}
//#endregion
export { ArchivePage as component };
