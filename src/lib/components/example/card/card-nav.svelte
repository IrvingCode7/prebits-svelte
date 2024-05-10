<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";

  </script>
   
  <Tabs.Root value="Active" class="w-full">
    <Tabs.List class="grid w-full grid-cols-2">
      <Tabs.Trigger value="Active">Active</Tabs.Trigger>
      <Tabs.Trigger value="Link">Link</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="Active">
      <Card.Root>
        <Card.Header>
          <Card.Title class='p-4 md:p-5 flex flex-col items-center'>Card Title</Card.Title>
          <Card.Description class='p-4 md:p-5 flex flex-col items-center'>
            With supporting text below as a natural lead-in to additional content.
          </Card.Description>
        </Card.Header>
        <Card.Content class="space-y-2 flex justify-center">
            <Button variant='solid' size='md' color='blue' class="flex flex-col items-center">Go somewhere</Button>
        </Card.Content>
      </Card.Root>
    </Tabs.Content>
    <Tabs.Content value="Link">
      <Card.Root>
        <Card.Header>
          <Card.Title class='p-4 md:p-5 flex flex-col items-center'>Link</Card.Title>
          <Card.Description class='p-4 md:p-5 flex flex-col items-center'>
            Change your Link here. After saving, you'll be logged out.
          </Card.Description>
        </Card.Header>
        <Card.Content class="space-y-2 flex justify-center">
            <Button variant='link' size='md' color='blue'>Go to link
                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
            </Button>
        </Card.Content>
      </Card.Root>
    </Tabs.Content>
  </Tabs.Root>

