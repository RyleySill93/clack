import { connect } from 'react-redux';

const message1 = {
  author_id: 51,
  body: "Hi I'm Ryley, welcome to clack! :blush:",
  channel_id: 1,
};

const message2 = {
  author_id: 51,
  body: "More information on the project can be found on github here",
  channel_id: 1,
};

const messages = [message1, message2];

export const fakeChat = (postMessage) => {
  window.setTimeout(() => postMessage(messages.shift()), 10000);
};
