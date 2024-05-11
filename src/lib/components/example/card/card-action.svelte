<script lang="ts">
	import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
</script>

<Card.Root class="flex flex-col">
    <Card.Header class="flex flex-row justify-between items-center border-b rounded-t-xl py-3 px-4 md:px-5 dark:border-neutral-700">
      <Card.Title>Card Action</Card.Title>
      <div class="flex items-center gap-x-1 sm:mt-auto">
        <Button variant='soft' color='gray'>
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
            <path d="M21 3v5h-5"></path>
          </svg>
        </Button>
        <Button variant='soft' color='gray'>
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"></path>
            <path d="M3 16.2V21m0 0h4.8M3 21l6-6"></path>
            <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"></path>
            <path d="M3 7.8V3m0 0h4.8M3 3l6 6"></path>
          </svg>
        </Button>
        <Button variant='soft' color='gray'>
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </Button>
      </div>
    </Card.Header>
    <Card.Content class="p-4 md:p-5" variant='default'>
      <Card.Description class="mt-2 text-gray-500 dark:text-neutral-400">
        Some quick example text to build on the card title 
        and make up the bulk of the card's content.
      </Card.Description>
      <Button variant='link' color='blue'>Card link
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </Button>
    </Card.Content>
  </Card.Root>
  
  