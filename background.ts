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
}
