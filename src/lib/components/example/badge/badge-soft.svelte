<script lang="ts">
    import { Badge } from "$lib/components/ui/badge/index.js";
    const colors: ('default' | 'gray' | 'blue' | 'teal' | 'red' | 'yellow' | 'white')[] = ['default','gray', 'blue', 'teal', 'red', 'yellow', 'white'];
</script>

<div class="flex space-x-2">
{#each colors as color}
    <div>
        <Badge variant='soft' rounded max_width color={color}>  Badge</Badge>
    </div>
{/each}
</div>