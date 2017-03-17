export const postMembership = (membership) => (
  $.ajax({
    method: 'POST',
    url: 'api/memberships',
    data:  { membership }
  })
);

export const deleteMembership = (membership) => (
  $.ajax({
    method: 'DELETE',
    url: 'api/memberships',
    data:  { membership }
  })
);
