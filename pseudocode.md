# Pseudo Code

# MVP (Minimum Viable Product)
* **A chat that is anonymous and deletes + have helpful resources**
* **Make sure it fixes a problem**

## USER DATABASE
* link (Helpful Resources table)
* role (user, admin, mod)
* userScore (based on up votes)

## ADMIN DATABASE
* role (user, admin, mod)
* verifiedUser 
* link
* flags

## HELPFUL RESOURCES DATABASE(join into the other 2)
* title
* description
* link

## FAQ DATABASE:
* question
* answer

## NOTSONICE DATABASE
* **words to filter through**
* racist
* offensive
* sexist

## CHAT DATABASE:
* Chat title
* Chat description

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
* **NEW LIBRARY!! (What kind of new library??)**
* **Make sure chat deletes (orm)** 
* **No cookies**
* **Dont HAVE to login**
* **Search bar to search for chats**
* **private** chats
* Look at google recaptcha (https://www.google.com/recaptcha/intro/)

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
* (Chapiter) - top of the pillar

### Chat Room Page:
* (Plinth) - base of a pillar

### About Page
*
*

### Disclaimers:
* If this is a serious medical issue, please call 911
* No one here is a professional psychiatrist.......

### Stuff we need to talk about:
* Do we need a separate database for the chat or can we rely on socket io?
* Does socket io have a delete function?


### Future Developments:
* Real-Time Help
* Local chat rooms
* If the person was helpful
* Causes (Meetup for aids, cancer, etc)
* Gives you default icon options

### Presentation
* Video of it working
* Send link out to class channel and have people test it?