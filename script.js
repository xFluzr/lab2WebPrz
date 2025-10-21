(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");

  example.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = JSON.stringify(array);
      });
  });

  let styledHtml = "";
  cw1.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        array.map((post) => {
          console.log(array);
          styledHtml += `<div class='post'>
          <h4>${post.title}</h4>
          <p>${post.body}</p>
          <p>Numer posta:<span class='postNumber'>${post.id}</span></p>
          </div>`;
        });
        answer.innerHTML = styledHtml;
      });
  });

  let loadingElement = `<div><h2>Loading...</h2></div>`;
  cw2.addEventListener("click", async function () {
    answer.innerHTML = loadingElement;
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const responseArray = await res.json();
    let arrayStyled = ``;
    setTimeout(() => {
      responseArray.map((post) => {
        console.log(post);
        arrayStyled += `<div class='post'>
          <h4 class='header-post'>${post.title}</h4>
          <p class='post-body'>${post.body}</p>
          <p>Numer posta:<span class='postNumber'>${post.id}</span></p>
          </div>`;
      });
      answer.innerHTML = arrayStyled;
    }, 1000);
  });

  styledHtml = "";
  cw3.addEventListener("click", async function () {
    answer.innerHTML = loadingElement;
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const resData = await res.json();
    let arrayStyled = `<div class='post'>
          <h4>${resData.title}</h4>
          <p>${resData.body}</p>
          <p>Numer posta:<span class='postNumber'>${resData.id}</span></p>
          </div>`;
    answer.innerHTML = arrayStyled;
  });
})();
