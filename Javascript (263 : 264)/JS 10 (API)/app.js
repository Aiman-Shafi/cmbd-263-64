function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      displayUsers(users);
      console.log(users);
    });
}

// let users = [
//   { name: "Aiman", id: 2 },
//   { name: "Nusrat", id: 3 },
//   { name: "Ibrahim", id: 4 },
// ];

function displayUsers(users = []) {
  if (users.length > 0) {
    users.forEach((user) => {
      //   console.log(user);
      document.querySelector(".user-box").innerHTML += `
              <div class="box border-2 max-w-[300px] p-2">
                  <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                    ${user.name}
                  </h3>
                  <p class="mt-2 max-w-sm text-gray-700">
                    ${user.email}
                  </p>
                  <p class="mt-2 max-w-sm text-gray-700">
                    ${user.phone}
                  </p>
                  <p class="mt-2 max-w-sm text-green-700">
                    ${user.company.name}
                  </p>
                   <a class="mt-2 max-w-sm text-gray-700" href='https://${user.website}' target="blank">
                    ${user.website}
                  </a>
              </div>
            `;
    });
  } else {
    document.querySelector(
      ".user-box"
    ).innerHTML = `<div class="text-center">No Users Found</div>`;
  }
}

// displayUsers(users);

function fetchPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => {
      displayPosts(posts);
    });
}

function displayPosts(posts = []) {
  if (posts.length > 0) {
    posts
      .slice(1)
      .slice(-10)
      .forEach((post) => {
        //   console.log(user);
        document.querySelector(".user-box").innerHTML += `
                <div class="box border-2 max-w-[300px] p-2">
                    <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                      ${post.title}
                    </h3>
                    <p class="mt-2 max-w-sm text-gray-700">
                      ${post.body}
                    </p>
                </div>
              `;
      });
  } else {
    document.querySelector(
      ".user-box"
    ).innerHTML = `<div class="text-center">No Users Found</div>`;
  }
}

fetchPosts();

const showAdvice = document.getElementById("advice");
function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((advice) => {
      showAdvice.innerHTML = advice.slip.advice;
    });
}

const generateAdvice = document.getElementById("generateBtn");

generateAdvice.addEventListener("click", fetchAdvice);
