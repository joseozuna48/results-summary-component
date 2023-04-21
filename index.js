// import "./data.json"



window.onload = function(){
    const ul = document.getElementById("list-section");

    fetch("./data.json")
    .then( (response)=>response.json() )
    .then((json) => {

        json.forEach(element => {
            ul.insertAdjacentHTML("beforeend",`<li><i style=""></i>${element['category']} ${element['score']}/100 </li>`)
        });
    } );
    
}