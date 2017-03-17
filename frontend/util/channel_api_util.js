export const postChannel = (channel) => (
  $.ajax({
    method: 'POST',
    url: 'api/channels',
    data:  {channel}
  })
);

export const getChannels = (id) => (
  $.ajax({
    method: 'GET',
    url: 'api/channels',
    data: {id}
  })
);

export const deleteChannel = (channel) => (
  $.ajax({
    method: 'DELETE',
    url: 'api/channels',
    data:  {channel}
  })
);
