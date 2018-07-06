$(document).ready(()=> {
    $('#araForm').on('submit', (e) => {
        let araFilm = $('#araFilm').val();
        filmGetir(araFilm);
        e.preventDefault();
    });
});

function filmGetir(araFilm) {
    axios.get('http://www.omdbapi.com?s=' + araFilm + '&apikey=321eaeda')
        .then((response) => {
            console.log(response);
            let movies = response.data.Search;
            let output = '';
            $.each(movies, (index, movie) => {
                output += `
          <div class="col-md-3">
            <div class="well text-center">
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <h6>${movie.Year}</h6>
              <a onclick="filmSecildi('${movie.imdbID}')" class="btn btn-primary" href="#">Film Detayı</a>
            </div>
          </div>
        `;
            });

            $('#movies').html(output);
        })
        .catch((err) => {
            console.log(err.response);
        });
}
