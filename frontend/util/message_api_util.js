export const postMessage = (message) => (
  $.ajax({
    method: 'POST',
    url: 'api/messages',
    data:  {message}
  })
);

export const getMessages = (channel_id) => (
  $.ajax({
    method: 'GET',
    url: 'api/messages',
    data: {channel_id}
  })
);

export const deleteMessage = (message) => (
  $.ajax({
    method: 'DELETE',
    url: 'api/messages',
    data:  {message}
  })
);
