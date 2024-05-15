<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar/index.js";
  const sizes = ['size-8','size-[38px]', 'size-[46px]', 'size-[64px]']; // Añade aquí todos los tamaños que necesites
</script>
 
<div class="flex items-center space-x-2">
{#each sizes as size}
  <Avatar.Root class={size}>
    <Avatar.Image 
      class = 'rounded-full'
      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" 
      alt="Image Description" 
    />
    <Avatar.Fallback>CN</Avatar.Fallback>
  </Avatar.Root>
{/each}
</div>