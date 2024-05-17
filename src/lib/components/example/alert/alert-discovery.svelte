<script lang="ts">
    import * as Alert from '$lib/components/ui/alert';
</script>

<div class="flex flex-col w-full mb-4">
    <Alert.Root variant='outline' color="gray" >
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="flex-shrink-0 size-4 text-blue-600 mt-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
        </div>
        <div class="ms-3 mb-4">
          <Alert.Title class="mt-3 text-gray-800 font-semibold dark:text-white">
            New version published
          </Alert.Title>
          <Alert.Description class="mt-3 text-sm text-gray-700 dark:text-neutral-400">
            Chris Lynch published a new version of this page. Refresh to see the changes.
          </Alert.Description>
        </div>
      </div>
    </Alert.Root>
  </div>
  