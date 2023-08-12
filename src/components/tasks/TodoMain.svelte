<script>
    let newItem = '';
	
    let todoList = [{text: 'Write my first post', status: true},
                    {text: 'Upload the post to the blog', status: true},
                    {text: 'Publish the post at Facebook', status: false}];
	
	function addToList() {
		todoList = [...todoList, {text: newItem, status: false}];
		newItem = '';
	}
	
	function removeFromList(index) {
		todoList.splice(index, 1)
		todoList = todoList;
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
                    <input type="checkbox" checked={item.status} class="checkbox checkbox-primary" />
                    <span class="label-text">{item.text}</span> 
                </label>
            </div>
        {/each}
    </div>
</div>



<style> 
	.checked {
        text-decoration: line-through;
    }
</style> 