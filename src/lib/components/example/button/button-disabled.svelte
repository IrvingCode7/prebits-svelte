<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";

    const variants: ('solid' | 'outline' | 'ghost' | 'soft' | 'white' | 'link')[] = ['solid', 'outline', 'ghost', 'soft', 'white', 'link'];
</script>

<div class="flex">
    {#each variants as variant}
        <div class="mr-2">
            <Button variant={variant} color='blue' disabled>{variant.toUpperCase()}</Button>
        </div>
    {/each}
</div>