<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";

    const colors: ('gray' | 'blue' )[] = ['gray', 'blue'];
</script>

<div class= 'flex space-x-2'>
{#each colors as color}
    <div>
        <Button variant='link' color={color}>Button</Button>
    </div>
{/each}
</div>