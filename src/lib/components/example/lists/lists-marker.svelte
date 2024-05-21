<script>
    // Lista de ítems para la lista dinámica
    let listItems = [
      "FAQ",
      "License",
      "Terms & Conditions"
    ];
  </script>
  
  <ul class="marker:text-blue-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-neutral-400">
    {#each listItems as item}
      <li>{item}</li>
    {/each}
  </ul>
  