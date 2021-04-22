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
