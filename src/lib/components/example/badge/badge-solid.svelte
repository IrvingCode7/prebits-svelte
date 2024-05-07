<script lang="ts">
    import { Badge } from "$lib/components/ui/badge/index.js";
    const colors: ('default' | 'gray' | 'blue' | 'teal' | 'red' | 'yellow' | 'white')[] = ['default','gray', 'blue', 'teal', 'red', 'yellow', 'white'];
</script>

{#each colors as color}
    <div>
        <Badge variant='solid' rounded max_width color={color}>badge</Badge>
    </div>
{/each}