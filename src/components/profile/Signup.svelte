<script>
  import { onMount } from "svelte";
  import Resizer from "react-image-file-resizer";
  const resize = Resizer.imageFileResizer;

  let username = null;
  let pfp = null;

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted, new code");
    
    if (isValidForm()) {
      console.log("Form fields are filled correctly");
      console.log(username);
      console.log(pfp);
    } else {
      console.log("Form fields are not filled correctly");
    }
  }
  function isValidForm() {
    const usernameRegex = /^[a-zA-Z0-9]{1,16}$/;
    return (
      username &&
      usernameRegex.test(username)
    )
  }

  // onMount(() => {
  //   document.getElementById("signup-form").addEventListener("submit", (e) => {
  //     e.preventDefault();
  //     console.log("form submitted");
  //     // console.log the data (username)
  //     // if 
  //     console.log(document.getElementById("username-input").value);
  //     const fileInput = document.getElementById("pfp-input");
  //     const file = fileInput.files[0];
  //     let resizedImage;
  //     resize(file, 512, 512, "PNG", 100, 0, (uri) => {
  //       resizedImage = uri;
  //     }, "base64");
  //   });
  //   console.log(resizedImage);

  //   // let peerId = `${document.getElementById("username-input").value}-${generateRandomString(10)}`;
  //   // let profileData = {
  //   //   username: document.getElementById("username-input").value,
  //   //   pfp: resizedImage,
  //   //   peerId: peerId,
  //   // }
  //   // console.log(profileData);

  //   // localStorage.setItem("profileData", JSON.stringify(profileData));
  //   // console.log(localStorage.getItem("profileData"));

    
  // });
  // function generateRandomString(length) {
  //   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //   let result = "";
  //   for (let i = 0; i < length; i++) {
  //     const randomIndex = Math.floor(Math.random() * characters.length);
  //     const randomCharacter = characters.charAt(randomIndex);
  //     result += randomCharacter;
  //   }
  //   return result;
  // }
</script>


<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div class="card-body">
      <!-- form start -->
      <form on:submit={handleSubmit} id="signup-form">
        <div class="form-control">
          <label class="label" for="username-input">
            <span class="label-text">Username</span>
            <span class="label-text-alt text-red-300">*required</span>
          </label>
          <input required id="username-input" type="text" placeholder="username" class="input input-bordered" bind:value={username} />
        </div>
        <div class="form-control">
          <label class="label" for="pfp-input">
              <span class="label-text">Upload a profile picture</span>
          </label>
          <input if="pfp-input" type="file" class="file-input file-input-bordered w-full max-w-xs" accept="image/*" id="pfp-input" on:change={(event) => { pfp = event.target.files[0]; }} />
        </div>
        <div class="form-control">
          <div class="form-control mt-6">
            <button class="btn btn-primary" id="form-submit">Create profile</button>
          </div>
        </div>
      </form>
      <!-- form end -->
      <div class="alert alert-warning">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>Beta, previous data may be lost</span>
      </div>
    </div>
  </div>