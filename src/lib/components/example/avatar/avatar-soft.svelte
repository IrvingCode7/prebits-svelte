<script lang="ts">
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    const colors = ['bg-gray-100','bg-gray-50','bg-teal-100', 'bg-blue-100', 'bg-red-100', 'bg-yellow-100',]
    const text_color = ['text-gray-800', 'text-gray-500', 'text-teal-800', 'text-blue-800', 'text-red-800', 'text-yellow-800']
 </script>
   
  
  <div class="flex items-center space-x-2">
    {#each colors as color, index}
      <Avatar.Root class='size-[46px]'>
        <Avatar.Fallback class={`${color} font-semibold ${text_color[index]} leading-none`}>AC</Avatar.Fallback>
      </Avatar.Root>
    {/each}
    </div>