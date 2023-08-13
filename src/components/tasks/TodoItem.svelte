<script>
    export let item;
    export let index;
    export let deleteTodo;
    export let checkboxClicked;
</script>

<div class="form-control">
    <label class="label cursor-pointer">
        <input type="checkbox" checked={item.status} class="checkbox checkbox-primary" on:click={(event) => checkboxClicked(event, index)}/>
        <span class="label-text" style="{item.status ? 'text-decoration: line-through' : ''}">{item.text}</span>
        <div class="dropdown dropdown-right">
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <button class="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current" height="48" viewBox="0 -960 960 960" width="48"><path d="M150-202q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T150-262h187q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T337-202H150Zm0-496q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T150-758h353q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T503-698H150Zm306.825 578Q444-120 435.5-128.625T427-150v-165q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T487-315v53h323q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T810-202H487v52q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Zm-120-248Q324-368 315.5-376.625T307-398v-52H150q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T150-510h157v-54q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T367-564v166q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625ZM457-450q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T457-510h353q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T810-450H457Zm165.825-165Q610-615 601.5-623.625T593-645v-165q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T653-810v52h157q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T810-698H653v53q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Z"/></svg>
            </button>
            <!-- <label tabindex="0" class="btn m-1">Click</label> -->
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                <li>
                    <button on:click={() => deleteTodo(index)}>
                        <svg class="fill-current w-5 h-5" viewBox="0 -960 960 960"><path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"/></svg>
                    </button>
                </li>
                <li>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </button>
                </li>
                <li>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </button>
                </li>
            </ul>
        </div>
    </label>
</div>