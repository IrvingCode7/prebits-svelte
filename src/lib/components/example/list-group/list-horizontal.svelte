<script>
    let listItems = [
      {
        id: 1,
        label: "Newsletter",
        iconPath: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9 M10.3 21a1.94 1.94 0 0 0 3.4 0"
      },
      {
        id: 2,
        label: "Downloads",
        iconPath: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242 M12 12v9 m-4 0 4 4 4-4"
      },
      {
        id: 3,
        label: "Team Account",
        iconPath: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0 8 4 4 0 1 0 0-8 m7-4a4 4 0 0 1 0 7.75"
      }
    ];
  </script>
  
  <ul class="flex flex-col sm:flex-row border border-gray-200 dark:border-neutral-700">
    {#each listItems as item, index (item.id)}
      <li class="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white text-gray-800 dark:bg-neutral-900 dark:text-white
                border-b last:border-b-0 sm:border-b-0 sm:border-r last:sm:border-r-0
                {index === 0 ? 'rounded-t-lg sm:rounded-none sm:rounded-l-lg' : ''}
                {index === listItems.length - 1 ? 'rounded-b-lg sm:rounded-none sm:rounded-r-lg' : ''}">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d={item.iconPath}></path>
        </svg>
        {item.label}
      </li>
    {/each}
  </ul>
  
  