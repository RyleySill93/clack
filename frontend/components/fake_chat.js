import { connect } from 'react-redux';

const message1 = {
  author_id: 1,
  body: "Hi I'm Ryley, welcome to clack! :blush:",
  channel_id: 1,
};

export const fakeChat = (postMessage) => {
  console.log('chatting...');
  window.setTimeout(() => postMessage(message1), 10000);
};
