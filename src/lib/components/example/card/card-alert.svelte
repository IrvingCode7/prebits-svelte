<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import * as Card from "$lib/components/ui/card";
  </script>

<Card.Root class="flex flex-col bg-white border shadow-sm rounded-xl">
    <Card.Header class="border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:border-neutral-700">
      <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
        Featured
      </p>
    </Card.Header>
    <Card.Title class="bg-gray-100 border-b border-gray-200 text-sm p-4">
      <span class="font-bold">Attention needed!</span> This is an alert box.
    </Card.Title>
    <Card.Description class="p-2 md:p-3">
      <h3 class="text-lg font-bold text-gray-800 dark:text-white">
        Card title
      </h3>
      <p class="mt-4 text-gray-500 dark:text-neutral-400">
        Some quick example text to build on the card title 
        and make up the bulk of the card's content.
      </p>
    </Card.Description>
    <Card.Content variant='default'>
      <Button variant='link' color='blue'>Card link
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </Button>
    </Card.Content>
  </Card.Root>
  