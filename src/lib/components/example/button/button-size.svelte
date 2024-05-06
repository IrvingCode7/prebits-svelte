<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";

    const sizes: (  'sm' | 'default'|'lg')[] = ['sm', 'default', 'lg'];
</script>


{#each sizes as size}
    <div>
        <Button variant='solid' color='blue' {size}>Button</Button>
    </div>
{/each}