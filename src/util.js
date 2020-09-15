import db from './firebase'

var userNameFromUtil;
function fetchdetail(){

    db.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
        //   setName(db.auth().currentUser.displayName);
        //   history.push('/')
        userNameFromUtil=db.auth().currentUser.displayName;
          // ...
        } else {
          // User is signed out.
          // ...
        }
      });
}

fetchdetail()

  console.log(userNameFromUtil)

  export default userNameFromUtil;