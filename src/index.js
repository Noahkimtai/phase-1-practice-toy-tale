let addToy = false;
let form = document.querySelector('.add-toy-form')

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
// add event listener to the submit of the find toy button
form.addEventListener('submit', e =>addFormEvent(e))}
);
let fetchedData = fetch('http://localhost:2003/toys').then(res => res.json())
fetchedData.then(data => addToys(data))
fetchedData.then(data =>console.log(data))
function addToys(data){
  let toyCollection = document.querySelector('#toy-collection')
  data.forEach(el =>{
    let img = document.createElement('img')
    img.className='card'
    img.src=el.image
    toyCollection.appendChild(img)
    let likes = document.createElement('span')
    likes.innerText= el.likes
    toyCollection.appendChild(likes)
    let likeButton = document.createElement('button')
    likeButton.innerText ='like'
    likeButton.className ='like'
    toyCollection.appendChild(likeButton).addEventListener('click', e=>likeListner(e))
  })
}



function addFormEvent(e){
  e.preventDefault()
  console.log('data submited')
  // create a toy object
  let toy = {
    image:'',
    likes:0,
    name: '',
  }
  toy.name = e.target.querySelectorAll('.input-text')[0].value
  toy.image=e.target.querySelectorAll('.input-text')[1].value
  //e.reset
  console.log(toy)
  fetch('http://localhost:2003/toys',{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(toy)
  })
}

function likeListner(){
  e.preventDefault()
  fetch('http://localhost:2003/toys',{
    method:'PATCH',
    headers:{
      'Connection-Type':'application/json'
    },
    body:JSON.stringify(

    )

  })
}