









const row = document.querySelector(".row")
const btn = document.querySelector(".btn1")
const input = document.querySelector("input[type=search]")
row.style.marginLeft = "40px"
// axios(`https://restcountries.com/v3.1/all`)
//https://restcountries.com/v3.1/name/{name}

const asia = document.querySelector(".asia")


let all = null
function getApi(API){
    axios(`https://restcountries.com/v3.1/${API}`)
        .then((res) => {
            all = res.data
            getFlags(res.data)
            const add = getPopul(res.data)
            getFlags(add)
            console.log(res.data)
        })
}
getApi(`all`)


function getPopul(e){
    return e.sort((a,b) => {
        return  b.population - a.population
    })
}

function getFlags(ars){
    row.innerHTML = ""
    ars.slice(0, 100).map((el) => {
        row.innerHTML += `<div class="card m-2 py-1  d-flex flex-wrap flex-column justify-content-start bg-info bg-gradient overflow-auto col-3" style="width: 18rem;">
          <img src="${el.flags.png}" width="200px" height="200px" alt="img" class="card-img-top object-fit-cover border rounded">
          <div class="card-body bg-danger" >
          
           <h5> <span class="fs-4">Страна:</span> ${el.name.common}</h5>
          <h6> Столица: ${el.capital}</h6>
     
         
          <ul class="list-group " width="100%">
          <li class="list-group-item"> площадь: ${el.area}кв <sup>2</sup></li>
          <li class="list-group-item">население: ${el.population} </li>
          <li class="list-group-item"> континенты: ${el.continents}</li>
 </ul>
          </div>
 </div>`
    })
}

btn.addEventListener("click", () => {
    getApi(`name/${input.value.trimStart()}`)
})



// input.addEventListener("input", (e)=> {
//     getApi(`name/${e.target.value}`)
// })

input.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter"){
        getApi(`name/${ev.target.value.trim()}`)
    }
})


const select = document.querySelector(".select")

select.addEventListener("change", (e) => {
    let target = e.target.value
    if (target === "asia"){
        const res = all.filter((el) => {
            return el.region === "Asia"
        })
        getFlags(res)
    }else if (target === "europe"){
        const res = all.filter((el) => {
            return el.region === "Europe"
        })
        getFlags(res)
    }else if (target === "oceania"){
        const res = all.filter((el) => {
            return el.region === "Oceania"
        })
        getFlags(res)
    }else if (target === "africa"){
        const res = all.filter((el) => {
            return el.region === "Africa"
        })
        getFlags(res)
    }


})



// const user = document.querySelector(".user")
// user.addEventListener("click", () => {
//     const hero = document.querySelector("#hero")
//     axios(`https://jsonplaceholder.typicode.com/users`)
//         .then((res) => {
//             res.data.map((el) => {
//                 hero.innerHTML += `<div class="col-5 p-3 d-flex align-items-center justify-content-center flex-column border border-primary">
// <img src="./img/user.png" alt="img" class="border border-danger ">
// <div class="fs-3 border-bottom border-primary text-warning"> Имя: ${el.name}</div>
// <div class="fs-3 border-bottom border-primary text-primary">Фамилия: ${el.username}</div>
// <h3 class=""> Город: ${el.address["city"]}</h3>
// </div>`
//             })
//         })
// window.location = "user.html"
// })























