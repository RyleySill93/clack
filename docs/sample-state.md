{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]}
  },
  channels: {
    1: {
      title: "Sample Channel",
      members: [bob, billy, jane, anne]
    }
  },
  directMessages {
    1: {
      title: "Sample Message",
      members: [bob]
    }
  },
  messages: {
    1: {
      title: "Redux",
      author_id: 1,
      description: "is cool"
    }
  }
}
