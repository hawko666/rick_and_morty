function customApi() {
    var xrHp = new XMLHttpRequest();
    xrHp.open('GET', 'https://rickandmortyapi.com/api/character')
    xrHp.send();
    console.log(xrHp);

    xrHp.onload = function () {

        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))
            var data = JSON.parse(this.response)
            showData(data.results);
        }

    };

    xrHp.onprogress = function (event) {
        if (event.lengthComputable) {
            console.log(`Received ${event.loaded} of ${event.total} bytes`);
        } else {
            console.log(`Received ${event.loaded} bytes`);
        }
    };

    xrHp.onerror = function () {
        alert("Network Error : Failed to Connect to api");
    };
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