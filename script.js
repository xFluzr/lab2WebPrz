(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

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
  })

  let loadingElement = `<div><h2>Loading...</h2></div>`;
  cw2.addEventListener("click", async function () {
    answer.innerHTML = loadingElement;
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const responseArray = await res.json();
    let arrayStyled = ``;
    responseArray.map((post) => {
      console.log(post);
      arrayStyled += `<div class='post'>
          <h4>${post.title}</h4>
          <p>${post.body}</p>
          <p>Numer posta:<span class='postNumber'>${post.id}</span></p>
          </div>`;
    });
    answer.innerHTML = arrayStyled;
  });

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
