<script lang="ts">
    import * as Tooltip from "$lib/components/ui/tooltip/index.js";
    import * as Avatar from "$lib/components/ui/avatar/index.js";
  </script>
  
  <Tooltip.Root>
    <Tooltip.Trigger asChild let:builder>
      <Avatar.Root  class='size-[46px]'>
        <Avatar.Image
          class='rounded-full' 
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" 
          alt="Image Description" 
        />
        builders={[builder]}
        <Avatar.Fallback>CN</Avatar.Fallback>
        <span class="absolute bottom-0 end-1 block size-2.5 rounded-full ring-2 ring-white 'bg-teal-400'"></span>
      </Avatar.Root>
    </Tooltip.Trigger>
    <Tooltip.Content>
      <p>Add to library</p>
    </Tooltip.Content>
  </Tooltip.Root>
  