// import "./data.json"



window.onload = function(){
    const ul = document.getElementById("list-section");

    fetch("./data.json")
    .then( (response)=>response.json() )
    .then((json) => {
        
        json.forEach(element => {
            ul.insertAdjacentHTML("beforeend",`
            <li class="summary_li"> <div><img src="${element['icon']}" alt=" "> ${element['category']}</div> <div><b>${element['score']}</b>/100</div>  </li>`)
        });
    } );
    
}