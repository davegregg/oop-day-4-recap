// Standard User
// Moderator User
// Admin User
// Guest User

/* FUNCTION SYNTAX for writing a Class: -------
      function User (name, email) {
        this.name = name
        this.email = email
      }

      User.prototype.toString = function () {}
*/

/* CLASS SYNTAX for writing a Class: ---------- */
class User {

  constructor (name, email) {
    // this = {}
    this.name = name
    this.email = email
    this.memberRooms = []
    this.lastAccessDate = null

    this.updateLastAccessDate()
    // return this
  }

  toString () {
    return `"${this.name}" <${this.email}>`
  }

  updateLastAccessDate () {
    this.lastAccessDate = Date.now()
  }
  
  login (password) {
    // const passwordHash = hash(password)
    const success = true // database.authenticate(this.name, passwordHash)
    if (success === true) {
      this.updateLastAccessDate()
    }
  }

  post (content) {
    // ...
  }

  subscribe (room) {
    this.memberRooms.push(room)
  }

}

// "Inheritance" in JavaScript is really "Delegation".
// "super" === "super-class" constructor === "parent class" constructor
// "subclass" === "child class"
class Moderator extends User {

  constructor (name, email) {
    super(name, email)
    this.moderatingRooms = []
  }

  blockUser (user, room) {
    // ...
    console.log(`Blocked user from room '${room}': ${user.name}`)
  }

  grantModerationPrivileges (room) {
    this.moderatingRooms.push(room)
  }

}

class Admin extends Moderator {

  promoteModerator (user) {
    // ...
  }

  demoteModerator (moderator) {
    // ...
  }

  grantModeratorAccess (moderator, room) {
    moderator.grantModerationPrivileges(room)
  }

}

const billUser = new User("Bill", "me@xkcd.com")
const antonioModerator = new Moderator("Antonio", "antonio@xkcd.com")
const rosieAdmin = new Admin("Rosie Choi", "cheerios@cereals.com")






const mainElement = document.querySelector("main")
const x = 58

function changeColor () {
  // LEXICAL CONTEXT: The context in which the function was WRITTEN, through CLOSURES.
  console.log(x)
  console.log(mainElement)

  // CALLING CONTEXT: The context in which the function is CALLED, through `this` keyword.
  this.color = "orange"
}

const paintingA = {
  color: "white",
  changeColor: changeColor,
}

const paintingB = {
  color: "black",
  changeColor: changeColor.bind(paintingA),
}

paintingA.changeColor()
paintingB.changeColor() // WHAT!? Ah, bind().
