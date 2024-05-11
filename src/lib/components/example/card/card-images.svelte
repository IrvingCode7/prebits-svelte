<script lang="ts">
import * as Card from "$lib/components/ui/card";
  </script>
   
  <Card.Root>
    <Card.Header class="flex flex-col items-center max-w-xs">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img class="w-full rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80">
      <Card.Title>Card Title</Card.Title>
      <Card.Description class="mt-1 text-gray-500 dark:text-neutral-400">
          Some quick example text to build on the 
          card title and make up the bulk of the card's content.
      </Card.Description>
    </Card.Header>
    <Card.Footer class='text-gray-400'>
        Last updated 5 mins ago
    </Card.Footer>
  </Card.Root>
  