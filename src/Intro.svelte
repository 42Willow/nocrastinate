<main class="bg-base-200 p-3">
    

    <div class="flex flex-wrap justify-end">
        <div class="w-full lg:flex-1">
            <article class="prose p-4">
                <h1>Productivity begins here</h1>
                <p>
                    Nocrastinate is a lightweight web app designed for everything to do with task management.
                    Most to-do list apps fall short in one way or another, so I decided to make my own.
                    It is designed to be as simple as possible, while still being powerful enough to be useful.
                </p>
            </article>
        </div>
        <div class="w-full lg:w-auto lg:mr-4 mockup-browser border bg-base-300 mb-4 lg:mb-0">
          <div class="mockup-browser-toolbar">
            <div class="input">https://42willow.github.io/nocrastinate</div>
          </div>
          <div class="flex justify-center px-4 py-16 bg-base-200">Works in any browser, even mobile!</div>
        </div>
      </div>

    <div class="hero py-2">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left pl-4">
            <h2 class="text-3xl font-bold">Create a user now!</h2>
            <p class="py-6">Create a local user which is stored in a little cookie, you can always switch users later - and you can have as many as you want!<br><br>It is recommended to install the PWA for the best experience.</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label" for="username-input">
                  <span class="label-text">Username</span>
                  <span class="label-text-alt text-red-300">*required</span>
                </label>
                <input id="username-input" type="text" placeholder="username" class="input input-bordered" />
                <label class="label" for="pfp-input">
                    <span class="label-text">Upload a profile picture</span>
                </label>
                <input if="pfp-input" type="file" class="file-input file-input-bordered w-full max-w-xs" />
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Create user</button>
              </div>
            </div>
          </div>
        </div>
    </div>    
</main>