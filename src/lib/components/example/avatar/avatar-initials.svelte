<script lang="ts">
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    const sizes = ['size-8','size-[38px]', 'size-[46px]', 'size-[64px]'];
 </script>
   
  
  <div class="flex items-center space-x-2">
    {#each sizes as size}
      <Avatar.Root class={size}>
        <Avatar.Fallback class='bg-gray-500 font-semibold text-white leading-none'>AC</Avatar.Fallback>
      </Avatar.Root>
    {/each}
    </div>