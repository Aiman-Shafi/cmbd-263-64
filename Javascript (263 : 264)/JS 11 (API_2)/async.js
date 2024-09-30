const API_URL = `https://randomuser.me/api/`;

// function fetchApi(url) {
//   fetch(url)
//     .then((res) => res.json())
//     .then((user) => {
//       console.log(user.results[0]);
//       displayUser(user.results[0]);
//     });
// }

const fetchUsers = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  displayUser(data.results[0]);
};

fetchUsers(API_URL);

const userDiv = document.getElementById("user");

function displayUser(user) {
  userDiv.innerHTML = `
        <div class="max-w-[700px] mx-auto my-10">
          <a
            href="#"
            class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
          >
            <span
              class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></span>

            <div class="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                    ${user.name.first} ${user.name.last}
                </h3>

                <p class="mt-1 text-xs font-medium text-gray-600">
                  gender: ${user.gender}
                </p>
              </div>

              <div class="hidden sm:block sm:shrink-0">
                <img
                  alt=""
                  src=${user.picture.large}
                  class="size-16 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>

            <div class="mt-4">
              <p class="text-pretty text-lg text-gray-800">
                ${user.location.country}
              </p>
            </div>

            <dl class="mt-6 flex gap-4 sm:gap-6">
              <div class="flex flex-col-reverse">
                <dt class="text-sm font-medium text-gray-600">Age</dt>
                <dd class="text-xs text-gray-500">${user.dob.age}</dd>
              </div>

              <div class="flex flex-col-reverse">
                <dt class="text-sm font-medium text-gray-600">Reading time</dt>
                <dd class="text-xs text-gray-500">3 minute</dd>
              </div>
            </dl>
          </a>
        </div>
    `;
}

// fetchApi(API_URL);

const generateUserBtn = document.getElementById("generate");
generateUserBtn.addEventListener("click", () => {
  fetchApi(API_URL);
});
