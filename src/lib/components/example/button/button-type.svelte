<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";

    const variants: ('solid' | 'outline' | 'ghost' | 'soft' | 'white' | 'link')[] = ['solid', 'outline', 'ghost', 'soft', 'white', 'link'];
</script>

{#each variants as variant}
    <div>
        <Button variant={variant} color='blue'>{variant.toUpperCase()}</Button>
    </div>
{/each}
