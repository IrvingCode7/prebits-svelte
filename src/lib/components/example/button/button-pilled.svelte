<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";

    const colors: ('gray' | 'blue' | 'teal' | 'red' | 'yellow' | 'white')[] = ['gray', 'blue', 'teal', 'red', 'yellow', 'white'];
</script>

{#each colors as color}
    <div>
        <Button variant='solid' pilled color={color}>Button</Button>
    </div>
{/each}