<script lang="ts">
    import * as Alert from '$lib/components/ui/alert';
</script>

<div class="flex flex-col w-full mb-4">
    <Alert.Root variant='soft' color="red" >
        <div class="flex">
            <div class="flex-shrink-0">
                <svg class="flex-shrink-0 size-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m15 9-6 6"></path>
                    <path d="m9 9 6 6"></path>
                </svg>
            </div>
            <div class="ms-4">
            <Alert.Title>
                A problem has been occurred while submitting your data.
            </Alert.Title>
                <div class="mt-2 text-sm text-red-700 dark:text-red-400">
                    <Alert.Description>
                        <ul class="list-disc space-y-1 ps-5">
                            <li>
                            This username is already in use
                            </li>
                            <li>
                            Email field can't be empty
                            </li>
                            <li>
                            Please enter a valid phone number
                            </li>
                        </ul>
                    </Alert.Description>
                </div>
            </div>
        </div>
    </Alert.Root>
  </div>
  