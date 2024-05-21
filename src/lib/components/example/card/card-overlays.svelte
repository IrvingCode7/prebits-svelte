<script lang="ts">
	import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
</script>

<div class="flex flex-col">
    <Card.Root>
        <Card.Header class='w-full relative rounded-t-xl' style="background-image: url('https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWgelHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80'); background-size: cover;">
            <div class="rounded-t-xl text-gray-600">
                <Card.Title class=" pd-4 font-bold mt-4">Card Title</Card.Title>
                <Card.Description>
                    Some quick example text to build on the 
                    card title and make up the bulk of the card's content.
                </Card.Description>
                <Card.Content class='p-4 mt-4'>
                    <Button variant='solid' color='blue'>Card Button
                    </Button>
                </Card.Content>
                <Card.Footer>
                    Last updated 5 mins ago
                </Card.Footer>
            </div>
        </Card.Header>
    </Card.Root>

    <div class="mt-6">
        <Card.Root class="border-blue-400 bg-teal-100">
            <Card.Content class='p-4 text-blue-400'>
                <div class="flex items-center">
                    <svg class="flex-shrink-0 size-4 text-blue-600 mt-0.5 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                    </svg>
                    <p class="text-blue-600 font-semibold dark:font-medium dark:text-white ml-2">Attention needed</p>
                </div>
                Note that content should not be larger than the height of the image. If content is larger than the image the content will be displayed outside the image. 
            </Card.Content>
        </Card.Root>
    </div>
</div>
