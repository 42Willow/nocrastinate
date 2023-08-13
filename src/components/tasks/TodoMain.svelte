<script>
    import confetti from 'canvas-confetti';
    import TodoItem from './TodoItem.svelte';

    function createConfetti(e) {
        const x = e.clientX;
        const y = e.clientY;
        // translate mouse coordinates into confetti coordinates
        const normalizedX = x / window.innerWidth;
        const normalizedY = y / window.innerHeight;
        console.log({normalizedX, normalizedY})

        confetti({
            particleCount: 100,
            spread: 360,
            startVelocity: 30,
            origin: { x: normalizedX, y: normalizedY }
        });
    }

    let newItem = '';
	
    // Example todoList
    // let todoList = [{text: 'Migrate to the fediverse', status: true},
    //                 {text: 'Publish a post at Mastodon', status: false}];
    //                 {text: 'Share this app with friends', status: false}];

    let todoList = localStorage.getItem('profileData') ? JSON.parse(localStorage.getItem('profileData')).todoList : [];

	
    function updateLocalStorage() {
        let profileData = JSON.parse(localStorage.getItem('profileData'));
        profileData.todoList = todoList;
        localStorage.setItem('profileData', JSON.stringify(profileData));
    }

	function addToList() {
		todoList = [...todoList, {text: newItem, status: false}];
		newItem = '';
        updateLocalStorage();
	}
	
	function deleteTodo(index) {
		todoList.splice(index, 1)
		todoList = todoList;
        updateLocalStorage();
    }

    function checkboxClicked(event, index) {
        console.log(index)
        todoList[index].status = !todoList[index].status;
        updateLocalStorage();
        if (todoList[index].status) {
            createConfetti(event);
        }
    }
</script>
<div class="card w-96 bg-base-100 shadow-xl m-4">
    <div class="card-body">
        <h2 class="card-title">
            Todo list
            <div class="badge badge-secondary">BETA</div>
        </h2>
        <div class="join">
            <input bind:value={newItem} type="text" placeholder="new todo item.." class="join-item input bg-base-200">
            <button class="btn join-item bg-base-300" on:click={addToList}>Add</button>
        </div>
        <br/>
        {#each todoList as item, index}
        <TodoItem {item} {index} {deleteTodo} {checkboxClicked}/>
        {/each}
    </div>
</div>