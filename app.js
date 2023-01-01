const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const movieBox = document.querySelector("#row");

const getMovies = async(api) =>{
    const result = await fetch(api);
    const data = await result.json();
    showMovies(data.results)
    console.log(data);
}    

getMovies(APIURL);

const showMovies = (data) =>{
    movieBox.innerHTML="";

    data.forEach(
        (item) =>{
            const box = document.createElement("div");
            box.classList.add("movie-box");
            box.innerHTML =`

                <img src="${IMGPATH+item.poster_path}" alt="">
                <div class="info">
                    <div id="title">
                        <h2>${item.title}</h2>
                        <p>IMDB rating : <span>${item.vote_average}</span></p>
                    </div>
                    <h2>Overview :</h2>
                    <p>
                        ${item.overview}
                    </p>
                </div>


            `;
            movieBox.appendChild(box);
        }
    )

}

const search = document.getElementById("search");
search.addEventListener("keyup",
    (event) =>{
        if(event.target.value != ""){
            getMovies(SEARCHAPI+event.target.value);
        }else{
            getMovies(APIURL);
        }
    }
)