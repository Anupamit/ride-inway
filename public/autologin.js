firebase.auth().onAuthStateChanged(async (user)=>{
  if(user && (location.pathname == '/index.html' || location.pathname == '/')){
    window.location.href ="home.html";
  }else if(!user && !( location.pathname == '/' || location.pathname == '/index.html')){
      window.location.href ="/";
  }

  if(user && !(location.pathname == '/' || location.pathname == '/index.html')){
    let snap = await firebase.firestore().collection('users').doc(user.uid).get()
    console.log(userDatas);
    let userData = snap.data()
    let role = userData ? userData.role : 'rider'
    
  }
});


async function logOut() {
  console.log("logout complete");
  await firebase.auth().signOut()
  location.href = 'index.html'
}
