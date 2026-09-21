import { useEffect, useRef } from "react";

/** Places a real HTML comment in the DOM so students can find it in inspector. */
export function HtmlComment({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || node.dataset.placed) return;
    node.dataset.placed = "1";
    node.replaceWith(document.createComment(` ${text} `));
  }, [text]);

  return <span ref={ref} hidden />;
}
