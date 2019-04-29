const button = document.querySelector("#button");
const log = document.querySelector("#log");

button.addEventListener("click", () => {
  $.get("https://ghibliapi.herokuapp.com/films", movies =>
    movies.map(movie => {
      console.log(movie.title);
      let el = document.createElement("h2");
      let title = document.createTextNode(movie.title);
      log.appendChild(el);
      el.appendChild(title);
    })
  );
});
