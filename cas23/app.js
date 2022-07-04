// const form = document.getElementById("form");

// const name = document.getElementById("name")
// const email = document.getElementById("email")
// console.log(name)
// form.addEventListener("submit", (e) => {
//   e.defaultPrevented();
//   console.log("form submitted");
//   console.log(name.value)
// }
// )

// fetch("https://catfact.ninja/facts")
// .then((res) => {
//     console.log("fetch finished")
//     return res.json();
// })
// .then((res) => {
//     console.log(res)
// })

async function getData (){
    const res = await fetch("https://catfact.ninja/facts")
    const resJson = await res.json();
    const { data} = resJson;

    data.forEach((el) => {
        console.log(el)
        a = document.createElement("h1")
        a.innertext
    });
    // up going knjiga js
}
getData()
