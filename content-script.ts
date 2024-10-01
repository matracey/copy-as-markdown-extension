import { Actions } from "./actions";

import TurndownService from "turndown";

{
  const turndownService = new TurndownService();

  chrome.runtime.onMessage.addListener(async (request, _, response) => {
    if (request?.type === Actions.COPY_AS_MARKDOWN) {
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
      response({ markdownContent });
    }
  });
}
