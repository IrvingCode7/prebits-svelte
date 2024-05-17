<script lang="ts">
    import * as Alert from '$lib/components/ui/alert';
</script>


  <div class="flex flex-col w-full">
    <div class="space-y-5">
        <div class="mb-4">
          <Alert.Root variant='soft' color="yellow" >
            <div class="flex">
                <div class="flex-shrink-0">
                    
                        <svg class="flex-shrink-0 size-5 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                            <path d="M12 9v4"></path>
                            <path d="M12 17h.01"></path>
                        </svg>
                  </div>
              <div class="ms-3">
                <Alert.Title>
                    Cannot connect to the database
                </Alert.Title>
                <Alert.Description >
                    We are unable to save any progress at this time.
                </Alert.Description>
              </div>
            </div>
          </Alert.Root>
        </div>
    </div>
  </div>