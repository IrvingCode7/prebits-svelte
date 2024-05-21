<script>
    let links = [
      {
        id: 1,
        name: "Active",
        href: "#",
        iconPath: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9 M10.3 21a1.94 1.94 0 0 0 3.4 0",
        colorClass: "text-blue-600",
        additionalClasses: "focus:ring-blue-600"
      },
      {
        id: 2,
        name: "Link",
        href: "#",
        iconPath: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242 M12 12v9 m-4 0 4 4 4-4",
        colorClass: "text-gray-800 hover:text-blue-600 dark:hover:text-blue-600",
        additionalClasses: "focus:ring-blue-600"
      },
      {
        id: 3,
        name: "Disabled",
        href: "#",
        iconPath: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0 8 4 4 0 1 0 0-8 m7-4a4 4 0 0 1 0 7.75",
        colorClass: "text-gray-400 cursor-not-allowed dark:text-neutral-700",
        additionalClasses: "focus:ring-blue-600"
      }
    ];
  </script>
  
  <div class="w-1/2 flex flex-col">
    {#each links as link (link.id)}
      <a class="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium border border-gray-200 {link.colorClass} -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg focus:z-10 focus:outline-none focus:ring-2 {link.additionalClasses} dark:border-neutral-700" href={link.href}>
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d={link.iconPath}></path>
        </svg>
        {link.name}
      </a>
    {/each}
  </div>
  