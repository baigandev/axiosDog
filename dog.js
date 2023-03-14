const breed = document.querySelector(".breed")
const img = document.querySelector(".breed-img")
const select = document.querySelector("select")
function getAll() {
    axios(`https://dog.ceo/api/breeds/list/all`)
        .then((res) => {
            Object.keys(res.data.message).map((el) => {
                breed.innerHTML +=`<button class="btn-breed btn btn-primary">${el}</button>`
                select.innerHTML += `<option value="${el}">${el}</option>`
            })
        })
        .then(() => btn())
}

getAll()


function btn (){
    const breedBtn = document.querySelectorAll(".btn-breed")
    breedBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            getImg(btn.innerHTML)
        })
    })
}


        select.addEventListener("change", (el) => {
            getImg(el.target.value)
        })


function getImg(name){
    axios(`https://dog.ceo/api/breed/${name}/images/random`)
        .then((result) => {
            img.innerHTML =`<img src="${result.data.message}" alt="img"/>`
        })
}
getImg()