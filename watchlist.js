$( document ).ready(function() {
    console.log( "ready!" );

    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    renderMovies(watchlist)
})

function renderMovies(movieArray) {
    const movieHtmlArray = movieArray.map(function(currentMovie) {

    let title = currentMovie.Title
    let year = currentMovie.Year
    let poster = currentMovie.Poster
    
    return `<div class = "movie pb-3 col-12 col-md-6 col-lg-4 col-xl-4">
    <div class="card">
    <img src="${poster}" class=" col-12  pt-3">
    <div class="card-body">
    <h5 class="card-title text-center">${title}</h5>
    <p class="card-text col-12 text-center">${year}
    </p>
    </div>
    </div>
    </div>`
    
    })
    rowForMovies.innerHTML = movieHtmlArray.join('')
    
    }