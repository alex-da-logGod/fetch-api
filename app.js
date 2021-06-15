const container = document.querySelector('.container')


async function getFetch() {
  const res = await fetch('https://randomuser.me/api/?results=10')
  const data = await res.json()
  renderUser(data)
}
getFetch()



function renderUser(data) {
  
  
  data.results.map(user => {

    let userCard = document.createElement('div')
    userCard.classList.add('card')
    
    userCard.innerHTML = `
      <div>${user.gender}</div>
      <div>${user.name.first}</div>
      <div>${user.name.last}</div>
      <img src=${user.picture.medium}>
    `
    container.appendChild(userCard)
  })
  
}