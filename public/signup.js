async function signUp() {
  console.log('signup check');
  let fnElement = document.getElementById('firstname');
  let lnElement = document.getElementById('lastname');
  let emailElement = document.getElementById('email');
  let mobilenoElement = document.getElementById('mobileno');
  let pwElement = document.getElementById('password');
  let rpwElement = document.getElementById('repassword');
  let roleElement = document.getElementById('role');

  let firstName = fnElement.value
  let lastName = lnElement.value
  let email = emailElement.value
  let mobile = mobilenoElement.value
  let pwd = pwElement.value
  let pwd2 = rpwElement.value
  let role = roleElement.value
  console.log(firstName, lastName, email, mobile, pwd, pwd2, role);

  let user = await firebase.auth().createUserWithEmailAndPassword(email,pwd)
  let uid = user.user.uid
  await firebase.firestore().collection('users').doc(uid).set({firstName, lastName, email, mobile, pwd, pwd2, role})
  console.log('signUp done', user);
  console.log('signUp uid', uid);
}
