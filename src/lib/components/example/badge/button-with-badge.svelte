<script lang="ts">
    import { Badge } from "$lib/components/ui/badge/index.js";
    import Button from "$lib/components/ui/button/button.svelte";
   
</script>

<div>    
   
    <Button variant='soft' color='white' size='sm'>
        Notifications
        <Badge variant='solid' rounded color='red'>
            5
        </Badge> 
    </Button>   
     
</div>