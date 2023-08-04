<script>
    function deleteProfile() {
        localStorage.removeItem('profileData');
        window.location.href = "/nocrastinate/";
    }
</script>

<button class="btn btn-error" on:click={deleteProfile}>Delete profile</button>