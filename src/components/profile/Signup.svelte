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
        <button class="btn btn-primary">Create profile</button>
      </div>
      <div class="alert alert-warning">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>Beta, previous data may be lost</span>
      </div>
    </div>
  </div>