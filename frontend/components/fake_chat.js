import { connect } from 'react-redux';

const message1 = {
  author_id: 51,
  body: "Hi I'm Ryley, welcome to clack! :blush:",
  channel_id: 227,
};

export const fakeChat = (postMessage) => {
  window.setTimeout(() => {
    postMessage(message1);
    console.log('posted message');
  }, 7000);
};
