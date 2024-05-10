<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	import { type Events, type Props, buttonVariants } from './index.js';
	import { cn } from '$lib/utils.js';

	type $$Props = Props;
	type $$Events = Events;

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = undefined;
	export let color: $$Props['color'] = undefined;
	export let pilled: $$Props['pilled'] = undefined;
	export let size: $$Props['size'] = undefined;
	export let builders: $$Props['builders'] = [];
	export { className as class };
</script>

<ButtonPrimitive.Root
	{builders}
	class={cn(buttonVariants({ variant, size, color, pilled, className }))}
	type="button"
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
</ButtonPrimitive.Root>
