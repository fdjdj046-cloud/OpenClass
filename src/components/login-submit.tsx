import { memo, useRef } from "react";

/**
 * Isolated island: React must not re-apply `disabled` after mount,
 * otherwise DevTools edits are overwritten on the next render.
 */
export const LoginSubmit = memo(function LoginSubmit({
  onSuccess,
}: {
  onSuccess: () => void;
}) {
  const successRef = useRef(onSuccess);
  successRef.current = onSuccess;

  return (
    <button
      id="login-submit"
      type="submit"
      disabled
      className="inline-flex h-12 w-full items-center justify-center rounded-md bg-accent px-6 text-sm font-medium text-accent-fg transition-[opacity,transform,background-color] duration-150 ease-out hover:enabled:bg-ink focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-30 active:enabled:scale-[0.98]"
      ref={(node) => {
        if (!node) return;
        if (node.dataset.bound === "1") return;
        node.dataset.bound = "1";
        node.setAttribute("disabled", "disabled");
        node.addEventListener("click", (event) => {
          event.preventDefault();
          if (!node.hasAttribute("disabled")) {
            successRef.current();
          }
        });
      }}
    >
      Войти на рабочий стол
    </button>
  );
});
