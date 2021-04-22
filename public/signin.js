async function signIn() {
  console.log("signin check");

  let emailElement = document.getElementById('email');
  let pwdElement = document.getElementById('pwd');
  let email = emailElement.value
  let pwd = pwdElement.value

  console.log(email, pwd);
  await firebase.auth().signInWithEmailAndPassword(email, pwd)
  location.href = 'home.html'
}

async function forgotPwd() {
  console.log("forgot pwd check");
  let emailElement = document.getElementById('email');
  let email = emailElement.value
  await firebase.auth().sendPasswordResetEmail(email)
  alert('An email is sent to reset password')
}
