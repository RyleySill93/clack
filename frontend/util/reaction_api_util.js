export const postReaction = (reaction) => (
  $.ajax({
    method: 'POST',
    url: 'api/reactions',
    data:  { reaction }
  })
);

export const deleteReaction = (reaction, messageId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/reactions/${reaction.id}`,
    data: { reaction, messageId }
  })
);
