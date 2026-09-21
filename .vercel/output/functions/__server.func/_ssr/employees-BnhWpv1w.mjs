import { t as cn } from "./utils-C_uf36nf.mjs";
import { R as require_jsx_runtime, _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Wordmark } from "./progress-E2FDCJ2Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/employees-BnhWpv1w.js
var import_jsx_runtime = require_jsx_runtime();
function IntranetShell({ employee, children, current }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-canvas text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-line bg-sheet",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "shrink-0",
							"aria-label": "На главную",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-1 text-sm md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/people",
									search: { id: employee.id },
									className: cn("rounded-sm px-3 py-2 transition-colors duration-150", current === "people" ? "text-ink" : "text-mist hover:text-ink"),
									children: "Люди"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/data",
									className: cn("rounded-sm px-3 py-2 transition-colors duration-150", current === "data" ? "text-ink" : "text-mist hover:text-ink"),
									children: "Данные"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/ops",
									className: cn("rounded-sm px-3 py-2 transition-colors duration-150", current === "ops" ? "text-ink" : "text-mist hover:text-ink"),
									children: "Консоль"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden text-right sm:block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium leading-none",
									children: employee.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-mist",
									children: employee.title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: employee.photo,
								alt: "",
								className: "size-9 rounded-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex items-center gap-1 overflow-x-auto border-t border-line px-4 text-sm md:hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/people",
							search: { id: employee.id },
							className: cn("shrink-0 px-3 py-3", current === "people" ? "text-ink" : "text-mist"),
							children: "Люди"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/data",
							className: cn("shrink-0 px-3 py-3", current === "data" ? "text-ink" : "text-mist"),
							children: "Данные"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/ops",
							className: cn("shrink-0 px-3 py-3", current === "ops" ? "text-ink" : "text-mist"),
							children: "Консоль"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 text-xs text-subtle md:flex-row md:items-center md:justify-between md:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "АО «Меридиан» · учебный контур · не является боевой системой" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Служба поддержки · вн. 4412" })]
				})
			})
		]
	});
}
var employees = {
	"1": {
		id: "1",
		name: "Виктор Серов",
		title: "Главный администратор инфраструктуры",
		dept: "Управление информационных систем",
		email: "v.serov@meridian.ru",
		phone: "+7 495 120-01-01",
		location: "Москва, каб. 401",
		started: "12 марта 2009",
		role: "admin",
		photo: "/images/victor.jpg",
		initials: "ВС",
		bio: "Полный доступ к производственным контурам, каталогу учётных записей и узлам bastion."
	},
	"105": {
		id: "105",
		name: "Анна Волкова",
		title: "Стажёр",
		dept: "Центр информационных технологий",
		email: "a.volkova@meridian.ru",
		phone: "+7 495 120-88-15",
		location: "Москва, open space 3",
		started: "1 сентября 2026",
		role: "intern",
		photo: "/images/anna.jpg",
		initials: "АВ",
		bio: "Стажировка в отделе сопровождения. Гостевой доступ к рабочему столу и базе знаний."
	},
	"42": {
		id: "42",
		name: "Марина Козлова",
		title: "Руководитель кадрового администрирования",
		dept: "Департамент персонала",
		email: "m.kozlova@meridian.ru",
		phone: "+7 495 120-22-08",
		location: "Москва, каб. 214",
		started: "4 июня 2016",
		role: "staff",
		photo: "/images/marina.jpg",
		initials: "МК",
		bio: "Ведение карточек сотрудников, отпуска, допуск на территорию."
	},
	"18": {
		id: "18",
		name: "Павел Еремин",
		title: "Инженер сопровождения",
		dept: "Центр информационных технологий",
		email: "p.eremin@meridian.ru",
		phone: "+7 495 120-33-19",
		location: "Москва, open space 3",
		started: "19 января 2021",
		role: "staff",
		photo: "/images/pavel.jpg",
		initials: "ПЕ",
		bio: "Смена, мониторинг, заявки на доступ. Без прав на промышленные базы."
	}
};
function getEmployee(id) {
	if (id && employees[id]) return employees[id];
	return employees["105"];
}
//#endregion
export { employees as n, getEmployee as r, IntranetShell as t };
