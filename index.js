{/* <div class="card movie col-4">
<img src="/images/the_accountant.jpg" alt="the accountant movie poster " class="card-img-top col-12 pt-3">
<div class="card-body">
<h5 class="card-title text-center">The Accountant</h5>
<p class="card-text col-12 text-center">2019<button class="col-6 m-2">Add</button></p>
</div>
</div> */}

const rowForMovies = document.getElementById("rowForMovies")
const searchForm = document.getElementById('search-form');
const addButton = document.getElementsByClassName('addButton')


$( document ).ready(function() {
    console.log( "ready!" );
    
    
    
    searchForm.addEventListener('submit', function(event){
        event.preventDefault();
        const movieContainer = $('.movie-container .row')
        // movieContainer.html(renderMovies(movieData))
        const search = document.getElementById("search").value
        console.log(search)
        
        fetch(`https://www.omdbapi.com/?apikey=59354c85&s=${search}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.Search)
            let page = 1;
            if (data.Error) {
                alert(data.Error)
            }
            movieData = data.Search
            movieContainer.html(renderMovies(data.Search))
        })
    })
    
    
});




function renderMovies(movieArray) {
    const movieHtmlArray = movieArray.map(function(currentMovie) {
        var title = currentMovie.Title
        var year = currentMovie.Year
        var poster = currentMovie.Poster
        var imdbID = currentMovie.imdbID
        
        return `<div class = "movie pb-3 col-12 col-md-6 col-lg-4 col-xl-4">
        <div class="card bg-secondary">
        <img src="${poster}" class=" col-12  pt-3">
        <div class="card-body">
        <h5 class="card-title text-center text-info">${title}</h5>
        <p class="card-text col-12 text-center text-info">${year}
        <a type="button" href="#" onclick = "saveToWatchList('${imdbID}');return false" class="addButton col-6 m-2 btn-primary shadow-none">Add</a>
        </p>
        </div>
        </div>
        </div>`
        
    })
    rowForMovies.innerHTML = movieHtmlArray.join('')
    
    addButton.addEventListener('click', function(event) {
        console.log('add button clicked')
        addButton.innerHTML("Added")
    })
    
    
}



function saveToWatchList(imdbID) {
    console.log(imdbID)
    const movie = movieData.find((currentMovie) =>{
        return currentMovie.imdbID == imdbID;
    });
    
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    
    if (watchlist === null) {
        watchlist =[]
    }
    
    watchlist.push(movie)
    watchlistJSON = JSON.stringify(watchlist)
    localStorage.setItem('watchlist', watchlistJSON);

    
    
}
