const signupForm = document.getElementById("sign-up-form");
const loginForm = document.getElementById("login-form");
const favoriteButtons = document.querySelectorAll(".favoriteButton");

async function signupHandler(event) {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  // method of fetch is going to be a post
  const password = document.getElementById("password").value.trim();
  // body is going to be the value of elements
  if (username && password) {
    const res = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      document.location.replace("/teams");
    } else {
      alert(res.statusText);
    }
  }
}

if (signupForm) {
  signupForm.addEventListener("submit", signupHandler);
}

async function loginHandler(event) {
  event.preventDefault();
  const username = document.getElementById("login-username").value.trim();
  // method of fetch is going to be a POST request
  const password = document.getElementById("login-password").value.trim();
  // body is going to be the value of elements
  if (username && password) {
    const res = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      document.location.replace("/teams");
    } else {
      alert(res.statusText);
    }
  }
}

if (loginForm) {
  loginForm.addEventListener("submit", loginHandler);
}

const favoriteHandler = (event) => {
  fetch("/api/users/favoriteteam", {
    method: "PUT",
    body: JSON.stringify({
      teamName: event.target.id.replace("-button", ""),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // sessionStorage.setItem("fav_team_name", event.target.id.replace("-button", ""));
  document.location.reload();
};

if (favoriteButtons.length) {
  favoriteButtons.forEach((btn) => {
    btn.addEventListener("click", favoriteHandler);
  });
}

