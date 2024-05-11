<script lang="ts">
import * as Card from "$lib/components/ui/card";
  </script>


<Card.Root class="rounded-xl sm:flex">
    <Card.Header class="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img class="size-full absolute top-0 start-0 object-cover" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80">
    </Card.Header>
    <Card.Content class="p-4 flex flex-col h-full sm:p-7">

        <Card.Title>Card Title</Card.Title>
        <Card.Description class="mt-1">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Description>
            <Card.Footer class='text-gray-300 sm:mt-20'>
                Last updated 5 mins ago
            </Card.Footer>
    </Card.Content>
</Card.Root>
