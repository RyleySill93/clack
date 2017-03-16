import { getCurrentChannel } from '../util/current_channel_api_util';
export const RECEIVE_CURRENT_CHANNEL = 'RECEIVE_CURRENT_CHANNEL';

export const receiveChannel = (channel) => ({
  type: RECEIVE_CURRENT_CHANNEL,
  channel
});

export const requestCurrentChannel = (channelId) => (dispatch) => {
  return (
    getCurrentChannel(channelId)
    .then(channel => dispatch(receiveChannel(channel)))
  );
};
