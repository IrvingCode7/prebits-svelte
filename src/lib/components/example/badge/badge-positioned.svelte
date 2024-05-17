<script lang="ts">
    import { Badge } from "$lib/components/ui/badge/index.js";
    import Button from "$lib/components/ui/button/button.svelte";
   
</script>

<div>    
    <Button variant='outline' color='white' size='sm' class="h-[3.375rem] w-[3.375rem] flex items-center justify-center relative">
        <span class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
            <Badge variant='solid' rounded color='red' class='py-0.5 px-1.5 text-xs'>
                99+
            </Badge>
        </span> 

        <svg class="flex-shrink-0 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
        </svg>
    </Button>    
</div>


