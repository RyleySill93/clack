import { postChannel,
         getChannels,
         deleteChannel } from '../util/channel_api_util';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';



//thunk actions - database facing
export const requestPostChannel = (channel) => (dispatch) => (
  postChannel(channel)
    .then(channel => {
      dispatch(receiveChannel(channel));
    })
);

export const requestGetChannels = (id) => (dispatch) => (
  getChannels(id).then(channels => dispatch(receiveAllChannels(channels)))
);

export const requestRemoveChannel = (channel) => (dispatch) => (
  deleteChannel(channel)
    .then(channel => dispatch(removeChannel(channel)))
);

//actions - state facing
export const receiveChannel = (channel) => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const receiveAllChannels = (channels) => ({
  type: RECEIVE_ALL_CHANNELS,
  channels
});

export const removeChannel = (channel) => ({
  type: REMOVE_CHANNEL,
  channel
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
