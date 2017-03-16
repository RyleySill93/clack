export const getCurrentChannel = (channelId) => (
  $.ajax({
    method: 'GET',
    url: `api/channels/${channelId}`,
  })
);
