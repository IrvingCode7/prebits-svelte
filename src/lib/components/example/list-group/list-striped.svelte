<script>
    let listItems = [
      { id: 1, label: "Profile" },
      { id: 2, label: "Settings" },
      { id: 3, label: "Newsletter" },
      { id: 4, label: "Downloads" },
      { id: 5, label: "Team Account" }
    ];
  </script>
  
  <ul class="w-1/2 flex flex-col">
    {#each listItems as item (item.id)}
      <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium odd:bg-gray-100 bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:odd:bg-neutral-800 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
        {item.label}
      </li>
    {/each}
  </ul>
  