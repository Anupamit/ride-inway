async function pRide() {
  console.log("post ride check");

  let fromElement = document.getElementById('from');
  let toElement = document.getElementById('to');
  let dateElement = document.getElementById('date');
  let timeElement = document.getElementById('time');
  let from = fromElement.value
  let to = toElement.value
  let date = dateElement.value
  let time = timeElement.value
  console.log(from, to, date, time)
  let ref = firebase.firestore().collection("bookings").doc()
  await ref.set({from, to, date, time, uid:ref.id})
  alert ("ride added")

  fromElement.value = ''
  toElement.value = ''
  dateElement.value = ''
  timeElement.value = ''
}

async function logOut() {
  console.log("logout complete");
  await firebase.auth().signOut()
  location.href = 'index.html'
}
