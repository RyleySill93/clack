export const signup = (user) => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data:  {user}
  })
);

export const login = (user) => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: {user}
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
);

export const getFakeName = () => (
  $.ajax({
    method: 'GET',
    url: 'api/session'
  })
);

export const postNotification = (channel_id) => (
  $.ajax({
    method: 'POST',
    url: 'api/notifications',
    data: channel_id
  })
);

export const deleteNotifications = (channel_id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/notifications/${channel_id}`
  })
);
