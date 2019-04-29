const url = "http://jsonplaceholder.typicode.com";
const blog = document.querySelector("#post");
blog.className = "card-body";

// logic for displaying returned data, comment and posts data are different
const display = data => {
  const displayPost = document.querySelector("#get-all");
  if (data.length === undefined) {
    let header = document.createElement("h2");
    let author = document.createElement("h4");
    let list = document.createElement("li");
    let body = document.createElement("p");
    let id = document.createTextNode(`Author: ${data.userId}`);
    let postTitle = document.createTextNode(data.title);
    let postBody = document.createTextNode(data.body);

    header.appendChild(postTitle);
    body.appendChild(postBody);
    author.appendChild(id);
    list.appendChild(header);
    list.appendChild(body);
    list.appendChild(author);
    blog.appendChild(list);
    header.className = "card-header";
    author.className = "card-footer text-muted";
    body.className = "card-text p-3";
  } else {
    data.map(post => {
      let header = document.createElement("h2");
      let author = document.createElement("h4");
      let list = document.createElement("li");
      let body = document.createElement("p");
      let id = document.createTextNode(`Author: ${post.userId}`);
      let postTitle = document.createTextNode(post.title);
      let postBody = document.createTextNode(post.body);
      header.appendChild(postTitle);
      body.appendChild(postBody);
      author.appendChild(id);
      list.appendChild(header);
      list.appendChild(body);
      list.appendChild(author);
      blog.appendChild(list);
      header.className = "card-header";
      author.className = "card-footer text-muted";
      body.className = "card-text p-3";
      let kylesButton = $(
        `<button class='link' data-link=${url}/posts/${post.userId}/comments/ >`
      ).text("Comments");
      $(author).append(kylesButton);
      kylesButton.className = "text-right";
    });
  }
};

//kyle's help
$(document).on("click", ".link", () => {
  var myData = $(document.querySelector(".link")).data("link");
  console.log(myData);
  $("#post").empty();
  $.ajax({
    url: myData,
    method: "GET"
  }).then(res => {
    console.log(res);
    displayComments(res);
  });
});

// toggles hide/show posts
const hideAll = () => {
  const posts = document.querySelector("#post");
  const hideButton = document.querySelector("#hide");
  posts.classList.toggle("hide");
  posts.classList.value === "hide"
    ? (hideButton.textContent = "Show")
    : (hideButton.textContent = "Hide");
};

const getAll = () => {
  $.get(`${url}/posts`, data => {
    console.log(data);
    display(data);
  });
};

// get post by id;
let post = document.querySelector("#getById");
post.addEventListener("submit", e => {
  e.preventDefault();
  $.get(`${url}/posts/${userId.value}`, function(data) {
    console.log(data);
    display(data);
  });
});

// get comments by id;
let getComments = document.querySelector("#getComments");
getComments.addEventListener("submit", e => {
  e.preventDefault();
  $.get(`${url}/comments?userId=${userId2.value}`, function(data) {
    console.log("get comments by user id ", data);
    displayComments(data);
  });
});

const displayComments = data => {
  data.map(post => {
    const blog = document.querySelector("#post");
    let header = document.createElement("h2");
    let author = document.createElement("h4");
    let list = document.createElement("li");
    let body = document.createElement("p");

    let id = document.createTextNode(`email: ${post.email}`);
    let postTitle = document.createTextNode(post.name);
    let postBody = document.createTextNode(post.body);
    header.appendChild(postTitle);
    body.appendChild(postBody);
    author.appendChild(id);
    list.appendChild(header);
    list.appendChild(body);
    list.appendChild(author);
    blog.appendChild(list);
    header.className = "card-header";
    author.className = "card-footer text-muted";
    body.className = "card-text p-3";
    let postsButton = $(
      "<button class='link2' data-link='http://jsonplaceholder.typicode.com/posts' >"
    ).text("Back To Posts");
    $(body).append(postsButton);
  });
};

$(document).on("click", ".link2", function() {
  var myData = $(this).data("link");
  $("#post").empty();
  $.ajax({
    url: myData,
    method: "GET"
  }).then(res => {
    console.log(res);
    display(res);
  });
});
//kyle style
// $(document).on("click", ".link2", () => {
//   var myData = $(document.querySelector(".link2")).data("link");
//   console.log(myData);
//   $("#post").empty();
//   $.ajax({
//     url: myData,
//     method: "GET"
//   }).then(res => {
//     console.log(res);
//     display(res);
//   });
// });

// create a new post and log id;
const createPost = document.querySelector("#create-post");
createPost.addEventListener("submit", e => {
  e.preventDefault();
  console.log("new psot runnign", createTitle.value);
  $.post(
    url,
    {
      userId: 1,
      title: createTitle.value,
      body: createBody.value
    },
    data => {
      console.log(data.id);
    }
  );
});

// replace post with id of 12
const replacePost = () => {
  $.ajax({
    method: "PUT",
    url: `${url}/posts/12`,
    data: {
      userId: 1,
      title: "Replace post",
      body: "New post added"
    },
    complete: response => console.log(response.responseJSON)
  });
};

// update title of  post 12
const updateTitle = () => {
  $.ajax({
    method: "PATCH",
    url: `${url}/posts/12`,
    data: {
      title: "title is updated"
    },
    complete: response => console.log(response.responseJSON)
  });
};

// delete post with id of 12;
const deletePost = () => {
  $.ajax({
    method: "DELETE",
    url: `${url}/posts/12`,
    complete: response => console.log(response.statusText)
  });
};

let allList = blog.getElementsByTagName("li");
console.log(allList.length);
