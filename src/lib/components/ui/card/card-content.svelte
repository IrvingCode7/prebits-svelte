<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";
	import type { ContentProps } from ".";

	type $$Props = ContentProps;
	let variant: $$Props['variant'] = undefined;
	let className: $$Props["class"] = undefined;
	export { className as class };

</script>

<div class={cn("p-6 pt-0",variant, className)} {...$$restProps}>
	<slot />
</div>
