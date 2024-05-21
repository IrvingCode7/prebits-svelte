<script>
    let items = [
      { id: 1, name: "Profile" },
      { id: 2, name: "Settings" },
      { id: 3, name: "Newsletter" }
    ];
  </script>
  
  <ul class="w-1/2 flex flex-col">
    {#each items as item (item.id)}
      <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
        {item.name}
      </li>
    {/each}
  </ul>