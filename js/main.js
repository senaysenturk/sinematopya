$(document).ready(()=> {
    $('#araForm').on('submit', (e) => {
        let araFilm = $('#araFilm').val();
        filmleriGetir(araFilm);
        e.preventDefault();
    });
});

function filmleriGetir(araFilm) {
    axios.get('http://www.omdbapi.com?s=' + araFilm + '&apikey=321eaeda')
        .then((response) => {
            console.log(response);
            let movies = response.data.Search;
            let output = '';
            $.each(movies, (index, movie) => {
                output += `
          <div class="col-md-4">
            <div class="well text-center">
               <p>
                  <img src="${movie.Poster}">
                  <h5 a onclick="filmSec('${movie.Title}')">${movie.Title}</h5>
                  <h6 a onclick="filmSec('${movie.Title}')">${movie.Year}</h6>
             </p>
            
            </div>
          </div>
        `;
            });

            $('#filmler').html(output);
        })
        .catch((err) => {
            console.log(err.response);
        });
}

function filmSec(ad){
    sessionStorage.setItem('filmAdi',ad);
    window.open('http://google.com/search?tbm=vid&hl=tr&source=hp&biw=&bih=&q='+ad);
    return false;
}