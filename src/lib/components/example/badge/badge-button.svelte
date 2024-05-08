<script lang="ts">
    import { Badge } from "$lib/components/ui/badge/index.js";
   
</script>

<div>
    <Badge variant='soft' rounded color='blue'>
        <span class="inline-flex items-center gap-x-1.5">
            Badge
            <button type="button" class="flex-shrink-0 size-4 inline-flex items-center justify-center rounded-full hover:bg-blue-200 focus:outline-none focus:bg-blue-200 focus:text-blue-500 dark:hover:bg-blue-900">
              <span class="sr-only">Remove badge</span>
                <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                </svg>
            </button>
        </span></Badge> 

    
</div>