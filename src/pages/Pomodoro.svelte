<script>
    let counter = 10
    setInterval(() => {
            if(counter>0){
                counter--
            }
        document.getElementById('counterMinutes').style.setProperty('--value', counter)
    }, 1000)
</script>

<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span class="countdown font-mono text-5xl">
        <span id="counterMinutes" style="--value:15;"></span>
      </span>
      minutes
    </div> 
    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span class="countdown font-mono text-5xl">
        <span style="--value:10;"></span>
      </span>
      seconds
    </div>
</div>