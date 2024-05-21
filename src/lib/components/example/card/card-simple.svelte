<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
import * as Card from "$lib/components/ui/card";
  </script>
   

<Card.Root>
  <Card.Header class="max-w-xs">
    <Card.Title class='p-4'>Card Title</Card.Title>
    <Card.Title class='text-sm mt-0.5 text-gray-500'>CARD SUBTITLE</Card.Title>
    <Card.Description class="mt-0.5 text-gray-500 dark:text-neutral-400">
      Some quick example text to build on the card title 
      and make up the bulk of the card's content.
    </Card.Description>
  </Card.Header>
  <Card.Content variant='default'>
    <Button variant='link' color='blue'>Card link
      <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </Button>
  </Card.Content>
</Card.Root>




