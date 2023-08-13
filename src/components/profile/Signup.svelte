<script>
  import Resizer from "react-image-file-resizer";

  let username = null;
  let resizedProfilePic = '';

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("Form submitted");

    if (isValidForm()) {
      // console.log("Form fields are filled correctly");
      // console.log(username);
      let profileData = {
        username: username,
        pfp: resizedProfilePic,
        peerId: generatePeerId(username),
        secureID: generateRandomString(10),
        todoList: [],
        settings: {
          pomodoro: {
            work: 25,
            shortBreak: 5,
            longBreak: 15,
            longBreakInterval: 4,
          },
          confetti: true,
          pomoWidget: {
            enabled: true,
            position: "bottom-left",
            showSeconds: true,
          }
        }
      }
      // console.log(profileData);
      localStorage.setItem("profileData", JSON.stringify(profileData));

      window.location.href = "/nocrastinate/home";
    } else {
      console.log("Form fields are not filled correctly");
    }
  }
  function isValidForm() {
    const usernameRegex = /^[a-zA-Z0-9]{3,15}$/;
    return (
      username &&
      usernameRegex.test(username)
    )
  }
  function fileChangedHandler(event) {
    // console.log("File changed.");
    var fileInput = false;
    if (event.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          event.target.files[0],
          512,
          512,
          'JPEG',
          100,
          0,
          (uri) => {
            // console.log(uri);
            resizedProfilePic = uri;
          },
          'base64',
          200,
          200
        );
      } catch (err) {
        console.log(err);
      }
    }
  }
  function generateRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      const randomCharacter = characters.charAt(randomIndex);
      result += randomCharacter;
    }
    return result;
  }
  function generatePeerId(username) {
    let peerId = `${username}-${generateRandomString(10)}`;
    return peerId;
  }
</script>


<!-- <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <div class="card-body"> -->
  <!-- form start -->
<form on:submit={handleSubmit} id="signup-form">
  <div class="form-control">
    <label class="label" for="username-input">
      <span class="label-text">Username</span>
      <span class="label-text-alt text-red-300">*required</span>
    </label>
    <input id="username-input" type="text" placeholder="Username" class="input input-bordered" bind:value={username} />
  </div>
  <div class="form-control">
    <label class="label" for="pfp-input">
        <span class="label-text">Upload a profile picture</span>
    </label>
    <input if="pfp-input" type="file" class="file-input file-input-bordered w-full max-w-xs" accept="image/*" id="pfp-input" on:change={fileChangedHandler} />
    {#if resizedProfilePic}
    <div class="flex justify-center">
      <img src={resizedProfilePic} alt="" class="rounded mt-4 object-cover h-24 w-24" />
    </div>
    {/if}
  </div>
  <div class="form-control">
    <div class="form-control mt-6">
      <button class="btn btn-primary" id="form-submit">Create profile</button>
    </div>
  </div>
</form>
<!-- form end -->
<div class="alert alert-warning mt-6">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <span>Beta, previous data may be lost</span>
</div>
  <!-- </div>
</div> -->