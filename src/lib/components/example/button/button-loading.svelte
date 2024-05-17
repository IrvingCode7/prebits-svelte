<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";

</script>

<div class='flex space-x-2'>
    <div>    
        <Button variant='solid' color='blue' size='sm' class="h-[3.375rem] w-[3.375rem] flex items-center justify-center relative">
            <span class="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full font-semibold" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
            </span>
        </Button>    
    </div>

    <div>    
        <Button variant='solid' color='blue' size='sm' class="h-[3.375rem] flex items-center justify-center relative">
            <span class="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full font-semibold" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
            </span>
            Loading
        </Button>    
    </div>
</div>