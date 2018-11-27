let container = document.getElementById(".card");
//$(".container").html("esrtt");

let user = "";

$(document).ready(function () {


    //user = $('.input').val();
    //console.log(user)

    let url = "https://swapi.co/api/people/";

    // if(user !=''){

    async function getUser() {
        console.log(url);
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.results);
        renderOutput(data.results);
    }
    getUser();

    // } else alert("give a user name");


    function renderOutput(data) {

        data.forEach(item => {
          
                console.log(item.name)
                console.log(item.height)
               // $(".container").append(`<li>${item.name}</li>`);
               let cardContainer = document.createElement("div")
               let name = document.createElement("h1")
            //   let info= document.createElement("li")
            //   info.innerHTML =  item.height;
               let info= document.createElement("p")
               name.innerHTML = item.name;
               info.innerHTML = 'Info: ' + ' height is: ' + item.height + ' and gender is ' + item.gender;
               cardContainer.appendChild(name);
               cardContainer.appendChild(info);
               $(".container").append(cardContainer);

               
                
        });


    }

    function renderErrorMessage() {
        $(".container").html("");
        $(".container").html(`<h2>User Not found</h2>`);
    }



})