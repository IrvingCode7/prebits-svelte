<script lang="ts">
	import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
</script>


<div class="mt-6">
    <Card.Root class="border-blue-400 bg-teal-100">
        <Card.Content class='p-4 text-blue-400'>
            <div class="flex items-center p-4">
                <svg class="flex-shrink-0 size-4 text-blue-600 mt-0.5 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                </svg>
                <p class="text-blue-600 font-semibold dark:font-medium dark:text-white ml-2">Panel</p>
            </div>
            Please note that this component requires the use of a component such as a Tooltip or some other functionality you want.
        </Card.Content>
        <Card.Footer>
            <Button variant='link' color='blue'>
                Card link
                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
            </Button>
        </Card.Footer>

    </Card.Root>
</div>

