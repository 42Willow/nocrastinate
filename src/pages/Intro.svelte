<script>
  import Signup from "../components/profile/Signup.svelte";
</script>

<div class="p-3">
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
          <div class="flex justify-center px-4 py-16 bg-base-100">Works in any browser, even mobile!</div>
        </div>

        <!-- Contribute alert -->
        <div class="alert shadow-lg mt-4 bg-base-100 mx-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <div>
                <h3 class="font-bold">In Beta</h3>
                <div class="text-xs">Looking for contributors</div>
            </div>
            <a class="btn btn-sm" href="https://github.com/42willow/nocrastinate">Contribute</a>
        </div>
    </div>

    <div class="hero py-2">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left pl-4">
            <h2 class="text-3xl font-bold">Create a profile now!</h2>
            <p class="py-6">Create a local profile which is stored in a little cookie 🍪, you can always switch profiles later - and you can have as many as you want!<br><br>It is recommended to install the PWA for the best experience.</p>
          </div>
          <Signup />
        </div>
    </div>
    <div class="flex flex-wrap justify-left">
      <div class="w-full lg:flex-1">
        <article class="prose p-4">
          <h2>P2P - WebRTC</h2>
          <h3>Advantages</h3>
          <ul>
            <li>Audio and text chats during pomodoro breaks.</li>
            <li>Transferring offline profiles between devices.</li>
            <li>Share profile and tasks with friends.</li>
            <li>High security because of non-static client ID.</li>
          </ul>
          <h3>Limitations</h3>
          <p>Non-static client ID, everything above expires upon refreshing the page.</p>
        </article>
      </div>
      <div class="w-full lg:w-auto">
        <article class="prose p-4">
          <h2>Running locally</h2>
          <p>
            Useful for contributing for the project, or if you want to run it locally for some reason.
          </p>  
        </article>
        <div class="mockup-code m-4">
            <pre data-prefix=">" class="text-warning"><code>install git</code></pre>
            <pre data-prefix=">" class="text-warning"><code>install nodejs</code></pre>
            <pre data-prefix="$"><code>git clone https://github.com/42Willow/nocrastinate.git</code></pre> 
            <pre data-prefix="$"><code>npm install</code></pre>
            <pre data-prefix="$"><code>npm run dev</code></pre>
            <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
        </div>
      </div>
    </div>
</div>