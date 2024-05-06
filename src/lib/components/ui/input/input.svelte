<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements";
	import {type Variant, type Size, type Pilled,  type InputEvents, inputVariants } from "./index.js";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLInputAttributes & {
		variant?: Variant;
		size? : Size;
        pilled?: Pilled;
		class?: string;
	};
	type $$Events = InputEvents;

	let className: $$Props["class"] = undefined;
	export let variant: $$Props['variant'] = undefined;
	export let size: $$Props['size'] = undefined;
	export let pilled: $$Props['pilled'] = undefined;
	export let value: $$Props["value"] = undefined;
	export { className as class };

	// Workaround for https://github.com/sveltejs/svelte/issues/9305
	// Fixed in Svelte 5, but not backported to 4.x.
	export let readonly: $$Props["readonly"] = undefined;
</script>

<input
	class={cn(inputVariants({ variant, size, pilled }),className
	
	)}
	bind:value
	{readonly}
	on:blur
	on:change
	on:click
	on:focus
	on:focusin
	on:focusout
	on:keydown
	on:keypress
	on:keyup
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:paste
	on:input
	on:wheel
	{...$$restProps}
/>
