<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import * as Card from "$lib/components/ui/card";
  </script>

<Card.Root >
    <Card.Content class="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
      <Card.Title>
        Card title
      </Card.Title>
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
  