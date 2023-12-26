function displayRamens() { 
    let menu = document.getElementById('ramen-menu');
  
    fetch('http://localhost:3000/ramens')
      .then((resp) => resp.json())
      .then((ramenArr) => {
        console.log(ramenArr)
        ramenArr.forEach(ramenObj => {
          let imgTag = document.createElement('img');
          imgTag.src = ramenObj.image
          imgTag.alt = "Ramen image"
  
          menu.appendChild(imgTag);
  // add event listener to each img tag
          imgTag.addEventListener('click', () => { 
            // update img src, class
            let ramenImg = document.querySelector('#ramen-detail > img')
            ramenImg.src = ramenObj.image
            // grab h2 and change class
            let h2 = document.querySelector('#ramen-detail > h2')
            h2.textContent = ramenObj.name
            // grab class rest h3
            let h3 = document.querySelector('#ramen-detail > h3')
            h3.textContent = ramenObj.restaurant
            // grab rating, and reassign it to ramenobj.rating
            let ratingDisplay = document.querySelector('#rating-display')
            ratingDisplay.textContent = ramenObj.ratingDisplay
            // grab comment , update it to ramenobj.comment
            let comment = document.querySelector('#comment-display')
            comment.textContent = ramenObj.comment

          })
        });
      });

  }
displayRamens()

// Create a new ramen after submitting the new-ramen form.

let form = document.getElementById('new-ramen')

form.addEventListener('submit', () => {
e.preventDefault()
   
let menu = document.getElementById('ramen-menu');
let imageValue = e.target.image.value
  
let img = document.createElement('img');
img.src = imageValue
img.alt = "Ramen image"
  
menu.appendChild(img)

})
