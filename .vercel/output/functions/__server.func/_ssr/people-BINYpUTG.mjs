import { i as __toESM } from "../_runtime.mjs";
import { R as require_jsx_runtime, _ as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as markProgress } from "./progress-E2FDCJ2Q.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as employees, r as getEmployee, t as IntranetShell } from "./employees-BnhWpv1w.mjs";
import { t as Button } from "./button-CxL6aDil.mjs";
import { a as MapPin, c as ArrowUpRight, r as Shield } from "../_libs/lucide-react.mjs";
import { n as Route, r as Note } from "./router-paneIIYh.mjs";
import { t as HtmlComment } from "./html-comment-BnxVEtK5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/people-BINYpUTG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PeoplePage() {
	const { id } = Route.useSearch();
	const navigate = useNavigate({ from: "/people" });
	const employee = employees[id];
	const viewer = getEmployee(id);
	(0, import_react.useEffect)(() => {
		if (!new URLSearchParams(window.location.search).get("id")) navigate({
			search: { id: "105" },
			replace: true
		});
	}, [navigate]);
	(0, import_react.useEffect)(() => {
		if (employee?.role === "admin") markProgress({ admin: true });
	}, [employee]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(IntranetShell, {
		employee: viewer,
		current: "people",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HtmlComment, { text: "Каталог: /people?id=105 стажёр, /people?id=1 администратор. Сервер не сверяет сессию с запрошенной карточкой." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative isolate overflow-hidden border-b border-line",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/office.jpg",
						alt: "",
						className: "absolute inset-0 size-full object-cover opacity-40"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-paper/70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.16em] text-mist",
								children: "Кадровый каталог"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display mt-2 text-4xl tracking-tight",
								children: "Люди"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xl text-sm leading-relaxed text-mist",
								children: "Карточки сотрудников открываются по табельному номеру в адресе страницы."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-4 py-8 md:grid-cols-[minmax(0,1fr)_18rem] md:px-6 md:py-12",
				children: [employee ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileCard, { id }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-lg bg-sheet p-6 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Сотрудник не найден"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-mist",
						children: [
							"В каталоге нет карточки с табельным номером ",
							id,
							"."
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-sheet p-5 shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.14em] text-mist",
								children: "Прямая ссылка"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShareField, { id }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs leading-relaxed text-subtle",
								children: "Ссылку можно править и открыть заново — так передают карточку коллеге."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-sheet p-5 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.14em] text-mist",
							children: "Сегодня"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 space-y-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: "09:30 · Планерка смены"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-mist",
								children: "Переговорная 3.12"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: "14:00 · Инструктаж по доступу"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-mist",
								children: "Только для администраторов"
							})] })]
						})]
					})]
				})]
			})
		]
	});
}
function ShareField({ id }) {
	const navigate = useNavigate({ from: "/people" });
	const [value, setValue] = (0, import_react.useState)(`https://one.meridian.ru/people?id=${id}`);
	(0, import_react.useEffect)(() => {
		setValue(`https://one.meridian.ru/people?id=${id}`);
	}, [id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
		className: "mt-3",
		onSubmit: (event) => {
			event.preventDefault();
			const next = value.match(/[?&]id=([^&]+)/)?.[1] ?? value.replace(/\D/g, "");
			if (next) navigate({ search: { id: next } });
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			"aria-label": "Прямая ссылка на карточку",
			value,
			onChange: (event) => setValue(event.target.value),
			className: "h-11 w-full rounded-md bg-paper px-3 font-mono text-xs text-ink shadow-soft outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
		})
	});
}
function ProfileCard({ id }) {
	const person = employees[id];
	if (!person) return null;
	const isAdmin = person.role === "admin";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-lg bg-sheet p-5 shadow-paper md:p-7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-6 sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: person.photo,
				alt: person.name,
				className: "h-56 w-44 rounded-md object-cover outline outline-1 -outline-offset-1 outline-ink/10 sm:h-60"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-sm bg-paper px-2 py-1 text-[11px] uppercase tracking-[0.12em] text-mist",
							children: ["Таб. № ", person.id]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: isAdmin ? "rounded-sm bg-ok-soft px-2 py-1 text-[11px] uppercase tracking-[0.12em] text-ok" : "rounded-sm bg-paper px-2 py-1 text-[11px] uppercase tracking-[0.12em] text-mist",
							children: isAdmin ? "Полный доступ" : person.role === "intern" ? "Гостевой доступ" : "Сотрудник"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-3 text-3xl tracking-tight",
						children: person.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-mist",
						children: person.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-prose text-sm leading-relaxed",
						children: person.bio
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-6 grid gap-3 text-sm sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								label: "Подразделение",
								value: person.dept
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								label: "Почта",
								value: person.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								label: "Телефон",
								value: person.phone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								label: "Рабочее место",
								value: person.location,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								label: "В компании с",
								value: person.started
							})
						]
					})
				]
			})]
		}), isAdmin ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 border-t border-line pt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Карточка администратора открыта без проверки сессии — сервер отдал профиль по номеру в адресе." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-col gap-3 rounded-md bg-paper p-4 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "mt-0.5 size-4 text-ink" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "Платформа данных"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-mist",
						children: "Производственный контур DC-MSK-3"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/data",
						children: ["Открыть", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
					})
				})]
			})]
		}) : person.role === "intern" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 border-t border-line pt-5 text-sm text-mist",
			children: "Гостевой доступ. Производственные системы скрыты. Если нужна чужая карточка — её номер указан в прямой ссылке."
		}) : null]
	});
}
function Info({ label, value, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-xs text-subtle",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
		className: "mt-1 flex items-center gap-1.5",
		children: [icon, value]
	})] });
}
//#endregion
export { PeoplePage as component };
