<script>
// @ts-nocheck

    let lists = [
      {
        title: "Standard List with Icons",
        items: [
          { text: "FAQ", iconColorClass: "text-blue-600 dark:text-blue-500" },
          { text: "License", iconColorClass: "text-blue-600 dark:text-blue-500" },
          { text: "Terms & Conditions", iconColorClass: "text-blue-600 dark:text-blue-500" }
        ]
      },
      {
        title: "Circle Background Icons",
        items: [
          { text: "FAQ", iconBgClass: "bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500" },
          { text: "License", iconBgClass: "bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500" },
          { text: "Terms & Conditions", iconBgClass: "bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500" }
        ]
      },
      {
        title: "Solid Background Icons",
        items: [
          { text: "FAQ", iconBgClass: "bg-blue-600 text-white dark:bg-blue-500" },
          { text: "License", iconBgClass: "bg-blue-600 text-white dark:bg-blue-500" },
          { text: "Terms & Conditions", iconBgClass: "bg-blue-600 text-white dark:bg-blue-500" }
        ]
      }
    ];
  </script>
  
  {#each lists as list}
    <div class="space-y-3 text-sm mb-3">
      <span class="font-bold">{list.title}</span>
      <ul>
        {#each list.items as item}
          <li class="flex space-x-3">
            <span class={item.iconBgClass ? `size-5 flex justify-center items-center rounded-full ${item.iconBgClass}` : `flex-shrink-0 size-4 mt-0.5 ${item.iconColorClass}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </span>
            <span class="text-gray-800 dark:text-neutral-400">{item.text}</span>
          </li>
        {/each}
      </ul>
    </div>
  {/each}
  