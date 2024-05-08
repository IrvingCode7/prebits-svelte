<script lang="ts">
    import { Badge } from "$lib/components/ui/badge/index.js";
    import Button from "$lib/components/ui/button/button.svelte";
   
</script>

<div>    
    <Button variant='outline' color='white' size='sm' class="h-[3.375rem] w-[3.375rem]">
        <span>
            <Badge variant='solid' rounded color='red' class='py-0.5 px-1.5 text-xs -translate-y-1/2 translate-x-1/2'>
            <span class="animate-ping absolute inline-flex size-full rounded-full bg-red-400 opacity-75 dark:bg-red-600"></span>
                  9+    
            </Badge> 
            <svg class="flex-shrink-0 size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
        </span>
    </Button>   
</div>