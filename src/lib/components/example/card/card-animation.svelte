<script lang="ts">
	import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
</script>

<Card.Root class="max-w-xs hover:shadow-lg">
    <Card.Header class="relative pt-[20%] sm:pt-[30%] lg:pt-[40%] rounded-t-xl overflow-hidden">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80">
    </Card.Header>
    <Card.Content class="p-4 md:p-4">
      <Card.Title>Card Title</Card.Title>
      <Card.Description class="mt-2 text-xs text-gray-500">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </Card.Description>
    </Card.Content>
    <Card.Footer>
        <Button variant='solid' color='blue'>Go somewhere</Button>
    </Card.Footer>
  </Card.Root>
