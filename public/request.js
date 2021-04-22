async function searchRide() {
  console.log("request check");

  let fromElement = document.getElementById('from');
  let toElement = document.getElementById('to');
  let from = fromElement.value
  let to = toElement.value
  console.log(from,to)
  let day = new Date().getDate() >9 ? new Date().getDate() : ('0'+ (new Date().getDate()))
  let month = new Date().getMonth() + 1 > 9 ? (new Date().getMonth() + 1) : ('0'+ (new Date().getMonth() + 1))
  let year = new Date().getFullYear()
  let todaysDate = year+'-'+month+'-'+day
  let snaps = await firebase.firestore().collection('bookings').where('from', '==', from).where('to', '==', to).where('date', '==', todaysDate).get()
  let result = []
  snaps.forEach((doc, i) => {
    result.push(doc.data())
  });
  let template = ''
  for(let ride of result){
    let btnName = ride.requestRide ? 'Requested' : 'Request Ride'
    btnName = ride.acceptRide ? 'Accepted' : btnName
    template += `<div class="card-deck">
          <div class="card bg-primary">
            <div class="card-body text-center">
              <p class="card-text">From - ${ride.from}</p>
              <p class="card-text">To - ${ride.to}</p>
              <p class="card-text">Date - ${ride.date}</p>
              <p class="card-text">Time - ${ride.time}</p>
              <button class="btn btn-primary stretched-link" onclick="requestRide('${ride.uid}')">${btnName}</button>
            </div>
          </div>
      </div><br><br>`
  }
  document.getElementById('ridesavailable').innerHTML = template
  fromElement.value = ''
  toElement.value = ''
}


async function requestRide(id) {
console.log(id);
await firebase.firestore().collection('bookings').doc(id).update({requestRide:true})
alert('Ride requested')
}
