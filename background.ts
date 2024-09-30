import { Actions } from './actions';

{
  chrome.runtime.onInstalled.addListener(() => {
    console.info("Creating context menu item:", Actions.COPY_AS_MARKDOWN);
    chrome.contextMenus.create({
      id: Actions.COPY_AS_MARKDOWN,
      title: "Copy as Markdown",
      contexts: ["selection"],
    });
  });

  chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === Actions.COPY_AS_MARKDOWN) {
      if (!tab?.id) {
        console.error(`Unable to determine the source tab where the ${Actions.COPY_AS_MARKDOWN} action was triggered.`);
        return;
      }

      console.info(`Sending ${Actions.COPY_AS_MARKDOWN} message to tab: ${tab.id}`);
      const response = await chrome.tabs.sendMessage(tab.id, { type: Actions.COPY_AS_MARKDOWN });
      console.info("Copied as Markdown:", response?.markdownContent);
    }
  });
}
