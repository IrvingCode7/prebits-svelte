<script>
    let listItems = [
      { id: 1, label: "Payment to Front", amount: "$264.00", highlighted: false },
      { id: 2, label: "Tax fee", amount: "$52.8", highlighted: false },
      { id: 3, label: "Amount paid", amount: "$316.8", highlighted: true }
    ];
  </script>
  
  <ul class="w-1/2 flex flex-col">
    {#each listItems as item (item.id)}
      <li class={`inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200 ${item.highlighted ? 'font-semibold bg-gray-50 dark:bg-neutral-800' : ''}`}>
        <div class="flex items-center justify-between w-full">
          <span>{item.label}</span>
          <span>{item.amount}</span>
        </div>
      </li>
    {/each}
  </ul>
  