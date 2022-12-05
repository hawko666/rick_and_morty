function customApi() {
    var xrHp = new XMLHttpRequest();
    xrHp.open('GET', 'https://rickandmortyapi.com/api/character')
    console.log(xrHp);


    var loader = document.querySelector(".loader")

    xrHp.onload = function () {

        if (this.readyState == 4 && this.status == 200) {
            loader.classList.add("dspn")
            console.log(JSON.parse(this.response))
            var data = JSON.parse(this.response)
            showData(data.results);
        } else if (this.status == 404) {

            document.body.innerHTML = "<p class='inner-body'>404 Page not found</p>";
        }

    };

    /* xrHp.onprogress = function (event) {
        if (event.lengthComputable) {
            console.log(`Received ${event.loaded} of ${event.total} bytes`);
        } else {
            console.log(`Received ${event.loaded} bytes`);
        }
    }; */

    xrHp.onerror = function () {
        alert("Network Error : Failed to Connect to api");
    };

    xrHp.onprogress = function (event) {
        // console.log(event)

        loader.classList.remove("dspn")
        // if (event.loaded != event.total) {
        //     loader.classList.toggle("dspn");
        // } else {
        //     if (loader.classList.contain("dspn")) {
        //         loader.classList.remove("dspn")
        //     }
        // }
    }

    xrHp.send();

}



var wrap = document.querySelector('.wrapper')
function showData(a) {
    for (let i = 0; i < a.length; i++) {
        var card = '<div class="card">' +
            '<img src="' + a[i].image + '" alt="img1">' +
            '<p class="num">' + a[i].id + '</p>' +
            '<p class="name">' + a[i].name + '</p>' +
            '</div>'

        wrap.innerHTML += card;
    }
}

// var htmlPage = document.querySelector()

customApi();