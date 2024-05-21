<script>
    let listItems = [
      { id: 1, label: "Profile" },
      { id: 2, label: "Settings" },
      { id: 3, label: "Newsletter" }
    ];
  </script>
  
  <ul class="w-1/2 flex flex-col divide-y divide-gray-200 dark:divide-neutral-700">
    {#each listItems as item (item.id)}
      <li class="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-gray-800 dark:text-white">
        {item.label}
      </li>
    {/each}
  </ul>
  