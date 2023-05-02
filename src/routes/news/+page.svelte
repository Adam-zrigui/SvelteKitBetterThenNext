<script lang="ts">
    export let data : any
    let {news} = data
    </script>
    <h1>today</h1>
    {#each news as item  (item.id)}
         <h2>{item.title}</h2>
    {/each}