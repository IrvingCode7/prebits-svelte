<script lang="ts">
    import * as Card from "$lib/components/ui/card";
</script>
<Card.Root class="w-full flex flex-col shadow-sm rounded-xl">
    <Card.Content class="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
      <svg class="size-8 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
        <line x1="22" x2="2" y1="12" y2="12"></line>
        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
        <line x1="6" x2="6.01" y1="16" y2="16"></line>
        <line x1="10" x2="10.01" y1="16" y2="16"></line>
      </svg>
      <Card.Description class="text-sm text-gray-800 dark:text-neutral-300">
        No data to show
      </Card.Description>
    </Card.Content>
  </Card.Root>