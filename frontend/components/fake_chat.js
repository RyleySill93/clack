import { connect } from 'react-redux';
import values from 'lodash/values';
import { getChannels } from '../util/channel_api_util';

let message1 = {
  author_id: 1,
  body: "Hi I'm Ryley, welcome to clack! :blush:"
};

export const fakeChat = (postMessage, currentUser) => {
  getChannels(currentUser.id).then(channels => sendMessage(channels, postMessage));
};

const sendMessage = (channels, postMessage) => {
  let channel = values(channels).find((chan) => chan.title === 'ryley');
  message1.channel_id = channel.id;
  window.setTimeout(() => postMessage(message1), 4000);
};
