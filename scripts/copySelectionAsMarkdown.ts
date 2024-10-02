import TurndownService from "turndown";

(async () => {
  const turndownService = new TurndownService();
  const selection = window.getSelection();
  if (!selection?.rangeCount) {
    return;
  }

  const container = document.createElement("div");
  for (let i = 0, len = selection.rangeCount; i < len; ++i) {
    container.appendChild(selection.getRangeAt(i).cloneContents());
  }
  const markdownContent = turndownService.turndown(container.innerHTML);

  await navigator.clipboard.writeText(markdownContent);
})();
