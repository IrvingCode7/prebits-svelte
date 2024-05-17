<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";

    const sizes: (  'sm' | 'default'|'lg')[] = ['sm', 'default', 'lg'];
</script>


<div class="flex space-x-2">
    {#each sizes as size}
      <div>
        <Button variant='solid' color='blue' {size}>Button</Button>
      </div>
    {/each}
</div>
