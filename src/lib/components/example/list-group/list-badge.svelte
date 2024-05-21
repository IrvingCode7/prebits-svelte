<script>
    import { Badge } from "$lib/components/ui/badge/index";
    let listItems = [
      { id: 1, label: "Profile", badge: "New" },
      { id: 2, label: "Settings", badge: "2" },
      { id: 3, label: "Newsletter", badge: "99+" }
    ];
  </script>
  
  <ul class="w-1/2 flex flex-col">
    {#each listItems as item (item.id)}
      <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
        <div class="flex justify-between w-full">
          {item.label}
            <Badge variant='solid' color='blue' rounded>{item.badge} </Badge>
        </div>
      </li>
    {/each}
  </ul>