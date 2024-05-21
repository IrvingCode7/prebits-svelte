<script>
    let listItems = ["FAQ", "License", "Terms & Conditions"];
  </script>
  
  <ul class="text-sm text-gray-600 dark:text-neutral-400">
    {#each listItems as item, index}
      <li class="inline-block relative pe-8 {index === listItems.length - 1 ? 'pe-0' : ''} before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:before:bg-neutral-600">
        {item}
        {#if index !== listItems.length - 1}
          <span class="absolute top-1/2 end-3 -translate-y-1/2 size-1 bg-gray-300 rounded-full dark:bg-neutral-600"></span>
        {/if}
      </li>
    {/each}
  </ul>
  