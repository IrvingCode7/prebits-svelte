<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";

</script>

<div class='flex'>
    <div class="mr-4 mb-2">    
        <Button variant='solid' color='blue' size='sm' class="h-[3.375rem] w-[3.375rem] flex items-center justify-center relative font-semibold">
            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m5 11 4-7"></path>
                <path d="m19 11-4-7"></path>
                <path d="M2 11h20"></path>
                <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4"></path>
                <path d="m9 11 1 9"></path>
                <path d="M4.5 15.5h15"></path>
                <path d="m15 11-1 9"></path>
            </svg>
        </Button>    
    </div>

    <div>    
        <Button variant='outline' color='white' size='sm' class="h-[3.375rem] w-[3.375rem] flex items-center justify-center relative">
            <span class="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
            </span>
        </Button>    
    </div>
</div>