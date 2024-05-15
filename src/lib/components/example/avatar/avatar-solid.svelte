<script lang="ts">
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    const colors = ['bg-gray-800','bg-gray-500','bg-green-500 ', 'bg-blue-600', 'bg-red-500', 'bg-yellow-500']
  
 </script>
   
  
  <div class="flex items-center space-x-2">
    {#each colors as color}
      <Avatar.Root class='size-[46px]'>
        <Avatar.Fallback class={`${color} font-semibold text-white leading-none`}>AC</Avatar.Fallback>
      </Avatar.Root>
    {/each}
    <Avatar.Root class='size-[46px]'>
        <Avatar.Fallback class='bg-white font-semibold leading-none'>AC</Avatar.Fallback>
      </Avatar.Root>
    </div>