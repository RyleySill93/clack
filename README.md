# Clack

Clack is a full-stack web application based on [Slack][https://slack.com/]. On the frontend, it uses React.js to render the views and a Redux architecture to organize the data flows. On the backend, it uses Ruby on Rails, a PostgreSQL database, and jBuilder to build the data feeds.

[Live App][https://click-clack.herokuapp.com/#/messages/1]
![Giphy](/docs/README-gifs/login.gif)

##Live Chat

###Messaging
Clack incorporates the Action Cable protocol to enable real-time messaging.
Unlike HTTP, WebSockets enables the client and the server to keep an open
connection so they can directly stream data between each other. As soon as
a user successfully logs into clack, they are automatically subscribed to
every channel that they are a member of. If another user adds a message to
a channel that they are not currently logged into, they will receive an alert,
otherwise the new message will pop up on the channel that they are viewing.
![Giphy](/docs/README-gifs/messaging.gif)

###Alerts
By combining [React-Alert][https://www.npmjs.com/package/react-alert] and
Action Cable, users receive pop-up notifications whenever a channel or
direct message that they are subscribed to receives a new message.
![Giphy](/docs/README-gifs/alert.gif)

###Giphys
Speaking with words is great but sometimes words aren't enough. Sometimes
you need a more powerful form of human expression. Something universally
understood by all. A language of the future. Giphys are that language.
![Giphy](/docs/README-gifs/giphy.gif)

Users can select a Giphy of their choosing by searching for and selecting
it in the Giphy picker. Users can also add gifs by prefixing a message with
'/giphy'. When the user sends a message prefixed with '/giphy', it will be
parsed into a search term which will be dispatched to the Giphy API.

```
parseGifUrl (body) {
  body.split(" ").forEach((word, idx) => {
    if (word === "/giphy" && idx === 0) {
      const searchTerm = body.split(" ").slice(1, body.length).join(" ");
      let giphy;
      fetchSingleGiphy(searchTerm)
        .then(res => {
          giphy = res.data[0].images.fixed_height.url;
          this.state.gif_url = giphy;
          this.state.body = "";
          this.props.requestPostMessage(this.state);
          this.state.gif_url = "";
        });
    }
  }
}
```

###Emoticons & Reactions
Sometimes you don't have the time to find the perfect Giphy to express yourself.
With the help of [React-Emoji][https://github.com/banyan/react-emoji],
users can easily include emojis in their messages and add reactions to their
other members' messages.

![Giphy](/docs/README-gifs/emoticon.gif)
![Giphy](/docs/README-gifs/reaction.gif)

When a user adds a reaction to a message, the frontend fires off an AJAX request to the backend.

```
addEmojiToReactions (emoji) {
  this.props.postReaction({ message_id: this.props.message.id, image: emoji });
}
```

Rails then saves the reaction type along with a reference to the message and the user who posted the reaction.

```
def create
  @reaction = Reaction.new(reaction_params)
  @reaction.user_id = current_user.id
  if @reaction.save
    @message = Message.find(@reaction.message_id)
    render '/api/messages/show.json.jbuilder'
  else
    render json: @reaction.errors.full_messages, status: 422
  end
end

private
def reaction_params
  params.require(:reaction).permit(:message_id, :image)
end
```

##Channels & Direct Messages

###Notifications
In order to show a user that they have unread messages in one of their channels or direct messages groups, notifications are displayed next to the channel name.
![Giphy](/docs/README-gifs/notification.gif)

###User Lookup
![Giphy](/docs/README-gifs/directmessage.gif)

##User Authentication
