callApi = function (uri, method, data){
    let url="https://6533c527e1b6f4c590463ebd.mockapi.io";
    return axios ({
        url: `${url}/${uri}`,
        method: method,
        data: data,
    }); 
}

function fetchFilmsList () {
    var promise = callApi("Films", "GET", null);
    promise.then((function (res) {
        renderFilmsList(res.data);
    })).catch(function (err) {
        console.log(err);
    });
}

var renderFilmsList = function (FilmsArr) {
    var contentFilms ="";
    for (var i=0; i< FilmsArr.length; i++){
        var ele = FilmsArr[i];
        contentFilms +=`
          <div class="col">
            <div class="card1">
                <div id="title">${ele.name}</div>
                <div id="desc">${ele.desc}</div>
                <div class="price">${ele.price}</div>
                <img src="${ele.img}" alt="">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Purchase</button>
            </div>
          </div>
        `;
    }
    document.getElementById("Halloween-list").innerHTML = contentFilms;
}
fetchFilmsList ();