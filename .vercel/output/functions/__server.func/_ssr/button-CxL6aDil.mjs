import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { R as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-CxL6aDil.js
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-[opacity,transform,background-color,color] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent disabled:opacity-30 disabled:cursor-not-allowed active:enabled:scale-[0.98]", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg hover:enabled:bg-ink",
			secondary: "bg-sheet text-ink shadow-soft hover:enabled:bg-paper",
			ghost: "bg-transparent text-ink hover:enabled:bg-paper",
			danger: "bg-danger text-photo hover:enabled:opacity-90"
		},
		size: {
			md: "h-11 rounded-md px-5 text-sm",
			lg: "h-12 rounded-md px-6 text-sm",
			sm: "h-9 rounded-sm px-3 text-sm"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
//#endregion
export { Button as t };
