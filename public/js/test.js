// make fetch (captute the values of the elements of login info)
const signupForm = document.getElementById("sign-up-form");
async function signupHandler(event) {
    event.preventDefault()
  const username = document.getElementById("username").value.trim();
  // method of fetch is going to be a post
  const password = document.getElementById("password").value.trim();
  // body is going to be the value of elements
  if (username && password) {
    const res = await fetch("/api/users",{
        method:"POST",
        body:JSON.stringify({
            username, password
        }),
        headers:{"Content-Type":"application/json"}
    })
    if (res.ok){
        document.location.replace("/teams")
    }else{
        alert(res.statusText)
    }
  }
}

if (signupForm){
signupForm.addEventListener("submit",signupHandler)
}