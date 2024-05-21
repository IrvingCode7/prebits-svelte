<script>
    let lists = [
      {
        type: "list-disc",
        items: [
          "Now this is a story all about how, my life got flipped turned upside down",
          "And I like to take a minute and sit right here",
          "I'll tell you how I became the prince of a town called Bel-Air"
        ]
      },
      {
        type: "list-decimal",
        items: [
          "Now this is a story all about how, my life got flipped turned upside down",
          "And I like to take a minute and sit right here",
          "I'll tell you how I became the prince of a town called Bel-Air"
        ]
      },
      {
        type: "list-none",
        items: [
          "Now this is a story all about how, my life got flipped turned upside down",
          "And I like to take a minute and sit right here",
          "I'll tell you how I became the prince of a town called Bel-Air"
        ]
      }
    ];
  </script>
  
  <div class="space-y-6">
    {#each lists as list}
      <div>
        <span class="block font-medium text-sm text-gray-500 font-mono mb-2 dark:text-neutral-400">{list.type}</span>
        {#if list.type === 'list-decimal'}
          <ol class="{list.type} list-inside text-gray-800 dark:text-white">
            {#each list.items as item}
              <li>{item}</li>
            {/each}
          </ol>
        {:else}
          <ul class="{list.type} list-inside text-gray-800 dark:text-white">
            {#each list.items as item}
              <li>{item}</li>
            {/each}
          </ul>
        {/if}
      </div>
    {/each}
  </div>
  
  
  