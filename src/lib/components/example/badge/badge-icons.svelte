<script lang="ts">
    import { Badge } from "$lib/components/ui/badge/index.js";
   
</script>

<div class="flex flex-col">
    <div class='mb-2'>
        <Badge variant='soft' rounded color='teal'>
            <span>
                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg> 
            </span> Connected</Badge>

        <Badge variant='soft' rounded color='red'>
            <span >
                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
              </span>Attention</Badge>

        <Badge variant='soft' rounded color='blue'>
            <span>
                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" x2="12" y1="2" y2="6"></line>
                  <line x1="12" x2="12" y1="18" y2="22"></line>
                  <line x1="4.93" x2="7.76" y1="4.93" y2="7.76"></line>
                  <line x1="16.24" x2="19.07" y1="16.24" y2="19.07"></line>
                  <line x1="2" x2="6" y1="12" y2="12"></line>
                  <line x1="18" x2="22" y1="12" y2="12"></line>
                  <line x1="4.93" x2="7.76" y1="19.07" y2="16.24"></line>
                  <line x1="16.24" x2="19.07" y1="7.76" y2="4.93"></line>
                </svg>
            </span>Loading</Badge>

        <Badge variant='soft' rounded color='gray'>
            <span class="inline-flex items-center gap-x-1 ">
                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                  <line x1="12" x2="12" y1="2" y2="12"></line>
                </svg>
                Disabled
              </span></Badge>
    </div>

    <div>
        <Badge variant='soft' rounded color='teal'>
            <span class="inline-flex items-center gap-x-1">
                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
                14.5%
              </span></Badge>

        <Badge variant='soft' rounded color='red'>
            <span class="inline-flex items-center gap-x-1">
                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
                  <polyline points="16 17 22 17 22 11"></polyline>
                </svg>
                2%
              </span></Badge>
        
        <Badge variant='soft' color='white'>
            <span class="inline-flex items-center gap-x-1">
                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
                37.3%
              </span></Badge>  

        <Badge variant='soft' color='white'>
            <span class="inline-flex items-center gap-x-1">
                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
                    <polyline points="16 17 22 17 22 11"></polyline>
                </svg>
                    56%
                </span></Badge>              
    </div>

</div> 