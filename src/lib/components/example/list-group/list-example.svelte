<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    let listItems = [
      { id: 1, filename: "resume_web_ui_developer.csv", filetype: "csv" },
      { id: 2, filename: "coverletter_web_ui_developer.pdf", filetype: "pdf" }
    ];

  </script>
  
  <ul class="w-full flex flex-col justify-end text-start -space-y-px">
    {#each listItems as item (item.id)}
      <li class="flex items-center gap-x-2 p-3 text-sm bg-white border text-gray-800 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
        <div class="w-full flex justify-between truncate">
          <span class="me-3 flex-1">
            {item.filename}
          </span>
          <Button variant="link" color="blue" size="sm">
            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" x2="12" y1="15" y2="3"></line>
            </svg>
            Download
          </Button>
        </div>
      </li>
    {/each}
  </ul>
  