<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import * as Card from "$lib/components/ui/card";
  </script>

<Card.Root class="max-w-xs">
    <Card.Title class="p-4 md:p-4"> 
        Card Title</Card.Title>
    <Card.Description class="p-3 text-gray-500 dark:text-neutral-400">
        With supporting text below as a natural lead-in to additional content.
    </Card.Description> 
      <Button variant='link' color='blue'>Card link
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </Button>
    <Card.Footer class='text-gray-500 bg-gray-100 py-3 px-4 md:py-4 md:px-5'>
        Last updated 5 mins ago
    </Card.Footer>
  </Card.Root>

  