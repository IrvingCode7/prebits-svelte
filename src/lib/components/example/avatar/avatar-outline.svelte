<script lang="ts">
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    const colors = ['border-gray-800','border-gray-500','border-teal-500', 'border-blue-600', 'border-red-500', 'border-yellow-500',]
    const text_color = ['text-gray-800', 'text-gray-500', 'text-teal-500', 'text-blue-600', 'text-red-500', 'text-yellow-500']
 </script>
   
  
  <div class="flex items-center space-x-2">
    {#each colors as color, index}
      <Avatar.Root class='size-[46px]'>
        <Avatar.Fallback class={`font-semibold leading-none bg-transparent border ${color} ${text_color[index]}`}>AC</Avatar.Fallback>
        
      </Avatar.Root>
    {/each}
    </div>