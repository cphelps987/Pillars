# Pseudo Code

# MVP (Minimum Viable Product)
* **A chat that is anonymous and deletes**

## DATABASE INFO

## CHATROOM TABLE
* ID (primary key)
* link (url)
* title
* moderators 
* moderation level
* flagged
* password

## USER TABLE
* ID (primary key)
* UserName
* Password
* role (user, admin, mod)
* verifiedUser
* link
* userScore (based on up votes)

## HELPFUL RESOURCES TABLE
* ID (primary key)
* title
* facebook
* twitter
* description
* link
* userScore (based on up votes)

## FAQ TABLE
* ID (primary key)
* question
* answer

## NOTSONICE TABLE
* **words to filter through**
* ID (primary key)
* wordlist 
* category: racist, offensive, sexist


### NPMS:
* socket io
* passport/oauth (we still need google for authentication) || (https://www.npmjs.com/package/simple-oauth2, https://oauth.net/2/)
* geolocation (future?)
* chalk(?)
* emoji(?)
* regexp(to filter offensive words)

### Project Outline
* Get all of the npm packages and require them in server.js
* Create databases
* **Break up server files by npm package**
* Make a markup of the frontend
* Make sure all of the packages/dbs work with the frontend
* Make sure we can set up multiple chats at one time
* Figure out how to push passport data into database
* **Make sure chat deletes** 
* **No cookies**
* **Dont HAVE to login**
* Search bar to search for chats
* **private** chats

## Pages (for html outline):

### Home Page
* Logo
* Jumbotron with logo and tag line
* Navbar with login on each page

### User Page
*
*
*

### Admin Page
*
*
*

### Resources Page
* Link + Description sections
* Up/Down Votes
* (Chapiter)

### Chat Room Page:
* (Plinth)

### About Page
*
*
*

### Disclaimers:
* If this is a serious medical issue, please call 911
* No one here is a professional psychiatrist.......

### Stuff we need to talk about:
* Do we need a separate database for the chat or can we rely on socket io?
* Does socket io have a delete function?
* 

### Future Developments:
* Real-Time Help
* If the person was helpful
* Causes (Meetup for aids, cancer, etc)
* Gives you default icon options
