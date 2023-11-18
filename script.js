const searchBtn = document.getElementById("button");
const searchInput = document.querySelector("#searchFollowers");
const cardsDiv = document.getElementById("cards");
// console.log("🚀 ~ file: script.js:2 ~ searchBtn:", searchBtn)


//+https://api.github.com/users/anthonyharold67/followers?per_page=100


const getFollowers = async (username) => {
    try {
        const res = await fetch(`https://api.github.com/users/${username}/followers?per_page=100`);
        if(res.ok){
            const data = res.json()
        }else {
            cardsDiv.innerHTML = `<h1>User not found!</h1>`
        }
        const data = await res.json()
    } catch (error) {
        
    }
}

getFollowers("sdasdfgasgfaf")
// const newElem = `
    // <div class="col">
    //     <div class="card">
    //     <img src="${avatar_url}" class="card-img-top" alt="...">
    //     <div class="card-body">
    //         <h5 class="card-title">${login}</h5>
    //         <a href="${html_url}" target="_blank" class="btn btn-dark">View Profile</a>
    //     </div>
    //     </div>
    // </div>
    // `;









