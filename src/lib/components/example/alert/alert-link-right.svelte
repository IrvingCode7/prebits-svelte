<script lang="ts">
    import * as Alert from '$lib/components/ui/alert';
</script>


<div class="flex flex-col w-full mb-4">
    <Alert.Root variant='outline' color="gray" class="w-full border border-gray-200 rounded-lg p-4 bg-gray-50 dark:bg-white/10 dark:border-white/10 dark:text-neutral-400">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="flex-shrink-0 size-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
        </div>
        <div class="flex-1 md:flex md:justify-between ms-2">
          <Alert.Description class="text-sm text-gray-600 dark:text-neutral-400">
            A new software update is available. See what's new in version 3.0.7
          </Alert.Description>
          <div class="text-sm mt-3 md:mt-0 md:ms-6">
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a class="text-gray-800 hover:text-gray-500 font-medium whitespace-nowrap dark:text-neutral-200 dark:hover:text-neutral-400" href="#">
              Details
            </a>
          </div>
        </div>
      </div>
    </Alert.Root>
  </div>
  