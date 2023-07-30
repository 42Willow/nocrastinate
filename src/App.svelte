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
                <!-- svelte-ignore a11y-missing-attribute -->
                <li><a>Item 1</a></li>
                <li>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a>Parent</a>
                    <ul class="p-2">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <li><a>Submenu 1</a></li>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <li><a>Submenu 2</a></li>
                    </ul>
                </li>
                <!-- svelte-ignore a11y-missing-attribute -->
                <li><a>Item 3</a></li>
            </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl" href="https://github.com/42willow/nocrastinate">Nocrastinate</a>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            <!-- svelte-ignore a11y-missing-attribute -->
            <li><a>Item 1</a></li>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <li tabindex="0">
                <details>
                    <summary>Parent</summary>
                    <ul class="p-2">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <li><a>Submenu 1</a></li>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <li><a>Submenu 2</a></li>
                    </ul>
                </details>
            </li>
            <!-- svelte-ignore a11y-missing-attribute -->
            <li><a>Item 3</a></li>
        </ul>
    </div>
    <div class="navbar-end">
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="btn">Button</a>
    </div>
</div>