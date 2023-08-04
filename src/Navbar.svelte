<script>
    import { Link } from 'svelte-routing';
    import Signup from './components/profile/Signup.svelte';

    function getUsername() {
      if (!localStorage.getItem('profileData')) return;
      let profileData = JSON.parse(localStorage.getItem('profileData'));
      return profileData.username;
    }
</script>

<div class="navbar bg-base-100">
    <div class="navbar-start">
        <div class="dropdown">
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to="/nocrastinate/home">Home</Link></li>
                <li><Link to="/nocrastinate/tasks">Tasks</Link></li>
                <li><Link to="/nocrastinate/metrics">Metrics</Link></li>
                <li><Link to="/nocrastinate/p2p">P2P</Link></li>
                <li>
                    <div>Strategies</div>
                    <ul class="p-2">
                        <!-- <li><Link to="/nocrastinate/pomodoro">Pomodoro</Link></li> -->
                        <li><Link to="/nocrastinate/timetracker">Time tracker</Link></li>
                        <li><Link to="/nocrastinate/circadian">Circadian rhythm</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
        <Link class="btn btn-ghost normal-case text-xl" to="/nocrastinate/">Nocrastinate</Link>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            <li><Link to="/nocrastinate/home">Home</Link></li>
            <li><Link to="/nocrastinate/tasks">Tasks</Link></li>
            <li><Link to="/nocrastinate/metrics">Metrics</Link></li>
            <li><Link to="/nocrastinate/p2p">P2P</Link></li>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <li tabindex="0">
                <details>
                    <summary>Strategies</summary>
                    <ul class="p-2 z-10">
                        <li><Link to="/nocrastinate/pomodoro">Pomodoro</Link></li>
                        <li><Link to="/nocrastinate/timetracker">Time tracker</Link></li>
                        <li><Link to="/nocrastinate/circadian">Circadian rhythm</Link></li>
                    </ul>
                </details>
            </li>
        </ul>
    </div>
    <div class="navbar-end">
      <label class="btn btn-circle swap swap-rotate">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" />
        
        <!-- play icon -->
        <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M366-232q-15 10-30.5 1T320-258v-450q0-18 15.5-27t30.5 1l354 226q14 9 14 25t-14 25L366-232Zm14-251Zm0 171 269-171-269-171v342Z"/></svg>
        
        <!-- pause icon -->
        <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M585-200q-24.75 0-42.375-17.625T525-260v-440q0-24.75 17.625-42.375T585-760h115q24.75 0 42.375 17.625T760-700v440q0 24.75-17.625 42.375T700-200H585Zm-325 0q-24.75 0-42.375-17.625T200-260v-440q0-24.75 17.625-42.375T260-760h115q24.75 0 42.375 17.625T435-700v440q0 24.75-17.625 42.375T375-200H260Zm325-60h115v-440H585v440Zm-325 0h115v-440H260v440Zm0-440v440-440Zm325 0v440-440Z"/></svg>
      </label>
      <div class="dropdown dropdown-end">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label tabindex="0" class="btn btn-ghost btn-circle avatar online placeholder">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
          {#if localStorage.getItem('profileData')}
            {#if JSON.parse(localStorage.getItem('profileData')).pfp}
              <img src={JSON.parse(localStorage.getItem('profileData')).pfp} alt="Profile" />
            {:else}
              <span class="text-xl">{getUsername().substring(0, 2)}</span>
            {/if}
          {:else}
            <img src="guest.png" alt="Guest" />
          {/if}
          </div>
        </label>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          {#if localStorage.getItem('profileData')}
            <li class="font-bold p-2">Hello, {getUsername()}!</li>
            <li><Link to="/nocrastinate/profile">Profile<span class="badge badge-neutral">Beta</span></Link></li>
            <li><Link to="/nocrastinate/settings">Settings</Link></li>
          {:else}
            <li><button onclick="signup_modal.showModal()">Sign Up</button></li>
          {/if}
        </ul>
      </div>
    </div>
</div>


<!-- Open the modal using ID.showModal() method -->
<dialog id="signup_modal" class="modal modal-bottom sm:modal-middle">
  <form method="dialog" class="modal-box">
    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <div class="py-8">
      <Signup />
    </div>
  </form>
</dialog>