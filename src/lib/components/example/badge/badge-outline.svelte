<script lang="ts">
    import { Badge } from "$lib/components/ui/badge/index.js";
    const colors: ('default' | 'gray' | 'teal' | 'blue' | 'red' | 'yellow')[] = ['default','gray', 'blue', 'teal', 'red', 'yellow'];
</script>

<div class="flex space-x-2">
{#each colors as color}
    <div>
        <Badge variant='outline' rounded max_width color={color}>Badge</Badge>
    </div>
{/each}
</div>