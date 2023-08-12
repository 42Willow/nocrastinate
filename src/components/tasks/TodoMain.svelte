<script>
    let newItem = '';
	
    // Example todoList
    // let todoList = [{text: 'Write my first post', status: true},
    //                 {text: 'Upload the post to the blog', status: true},
    //                 {text: 'Publish the post at Facebook', status: false}];

    let todoList = localStorage.getItem('profileData') ? JSON.parse(localStorage.getItem('profileData')).todoList : [];

	
    function updateLocalStorage() {
        let profileData = JSON.parse(localStorage.getItem('profileData'));
        profileData.todoList = todoList;
        localStorage.setItem('profileData', JSON.stringify(profileData));
    }

	function addToList() {
		todoList = [...todoList, {text: newItem, status: false}];
		newItem = '';
	}
	
	function removeFromList(index) {
		todoList.splice(index, 1)
		todoList = todoList;
    }

    function checkboxClicked(index) {
        console.log(index)
        todoList[index].status = !todoList[index].status;
        updateLocalStorage();
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
            <div class="form-control">
                <label class="label cursor-pointer">
                    <input type="checkbox" checked={item.status} class="checkbox checkbox-primary" on:click={() => checkboxClicked(index)}/>
                    <span class="label-text" style="{item.status ? 'text-decoration: line-through' : ''}">{item.text}</span> 
                </label>
            </div>
        {/each}
    </div>
</div>