import { Actions } from "./actions";

{
  chrome.runtime.onMessage.addListener(async request => {
    if (request?.type === Actions.COPY_AS_MARKDOWN) {
      console.log(`Received message: ${Actions.COPY_AS_MARKDOWN}.`);
    }
  });
}
