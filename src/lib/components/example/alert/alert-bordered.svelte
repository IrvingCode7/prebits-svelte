<script lang="ts">
    import * as Alert from '$lib/components/ui/alert';
</script>

<div class="flex flex-col w-full">
<div class="space-y-5">
    <div class="mb-4">
      <Alert.Root variant='soft' color="teal" class="border-t-4 border-teal-500 w-full">
        <div class="flex">
          <div class="flex-shrink-0">
            <span class="inline-flex justify-center items-center size-8 rounded-full border-4 border-teal-100 bg-teal-200 text-teal-800 dark:border-teal-900 dark:bg-teal-800 dark:text-teal-400">
              <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </span>
          </div>
          <div class="ms-3">
            <Alert.Title class="text-gray-800 font-semibold dark:text-white">
              Successfully updated.
            </Alert.Title>
            <Alert.Description class="text-sm text-gray-700 dark:text-neutral-400">
              You have successfully updated your email preferences.
            </Alert.Description>
          </div>
        </div>
      </Alert.Root>
    </div>
  
    <div class="mb-4">
      <Alert.Root variant='soft' color="red" class="w-full border-l-4 border-red-500">
        <div class="flex">
          <div class="flex-shrink-0">
            <span class="inline-flex justify-center items-center size-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-400">
              <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </span>
          </div>
          <div class="ms-3">
            <Alert.Title class="text-gray-800 font-semibold dark:text-white">
              Error!
            </Alert.Title>
            <Alert.Description class="text-sm text-gray-700 dark:text-neutral-400">
              Your purchase has been declined.
            </Alert.Description>
          </div>
        </div>
      </Alert.Root>
    </div>
  </div>
</div>
  