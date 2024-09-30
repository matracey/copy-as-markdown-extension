import { Actions } from "./actions";

{
  chrome.runtime.onMessage.addListener(async request => {
    if (request?.type === Actions.COPY_AS_MARKDOWN) {
      const selection = window.getSelection();
      if (!selection?.rangeCount) {
        return;
      }

      const container = document.createElement("div");
      for (let i = 0, len = selection.rangeCount; i < len; ++i) {
        container.appendChild(selection.getRangeAt(i).cloneContents());
      }
      console.log(`Selected HTML content: ${container.innerHTML}`);
    }
  });
}
