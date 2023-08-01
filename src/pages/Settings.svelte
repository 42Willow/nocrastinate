<script>
    import { onMount } from 'svelte'
    import { themeChange } from 'theme-change'

    // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
    onMount(() => {
    themeChange(false)
    // 👆 false parameter is required for svelte
    })

</script>

<h1 class="text-4xl font-bold m-4">Settings</h1>


<div class="m-4">
    <h2 class="mb-4 text-3xl font-bold">Theme</h2>
    <select data-choose-theme class="select w-full max-w-xs">
        <option disabled selected>Pick your theme</option>
        <option value="">Default</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="cupcake">Cupcake</option>
        <option value="bumblebee">Bumblebee</option>
        <option value="emerald">Emerald</option>
        <option value="corporate">Corporate</option>
        <option value="synthwave">Synthwave</option>
        <option value="retro">Retro</option>
        <option value="cyberpunk">Cyberpunk</option>
        <option value="valentine">Valentine</option>
        <option value="halloween">Halloween</option>
        <option value="garden">Garden</option>
        <option value="forest">Forest</option>
        <option value="aqua">Aqua</option>
        <option value="lofi">Lofi</option>
        <option value="pastel">Pastel</option>
        <option value="fantasy">Fantasy</option>
        <option value="wireframe">Wireframe</option>
        <option value="black">Black</option>
        <option value="luxury">Luxury</option>
        <option value="dracula">Dracula</option>
        <option value="cmyk">CMYK</option>
        <option value="autumn">Autumn</option>
        <option value="business">Business</option>
        <option value="acid">Acid</option>
        <option value="lemonade">Lemonade</option>
        <option value="night">Night</option>
        <option value="coffee">Coffee</option>
        <option value="winter">Winter</option>
    </select>
</div>