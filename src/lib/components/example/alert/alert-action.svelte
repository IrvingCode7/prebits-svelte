<script lang="ts">
    import * as Alert from '$lib/components/ui/alert';
    import Button from '$lib/components/ui/button/button.svelte';
</script>
  
<div class="flex flex-col w-full mb-4">
    <Alert.Root variant='soft' color="blue">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="flex-shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
        </div>
        <div class="ms-3">
          <div class="font-semibold">
            <Alert.Title class="mt-0 text-sm text-gray-800 dark:text-neutral-400">
              YouTube would like you to send notifications
            </Alert.Title>
            <div class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              <Alert.Description>
                Notifications may include alerts, sounds and icon badges. These can be configured in Settings.
              </Alert.Description>
            </div>
          </div>
          <div class="mt-3">
            <div class="flex space-x-3">
              <Button href="#" variant='link' color='blue'>
                Don't allow
              </Button>
              <Button href="/docs" variant='link' color='blue'>
                Allow
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Alert.Root>
  </div>
  

  