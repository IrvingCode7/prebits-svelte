<script lang="ts">
	import { type TriggerProps, accordionVariants } from './index.js';
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';
	import { ChevronDown, ChevronUp, Minus, Plus } from 'svelte-radix';
	type $$Props = TriggerProps;
	type $$Events = AccordionPrimitive.TriggerEvents;
	let className: $$Props['class'] = undefined;
	let triggerVariant: $$Props['triggerVariant'] = 'default';
	export let level: AccordionPrimitive.HeaderProps['level'] = 3;
	export { triggerVariant as variant };
	export { className as class };
</script>

<AccordionPrimitive.Header {level}>
	<AccordionPrimitive.Trigger
		class={cn(accordionVariants({ triggerVariant, className }))}
		{...$$restProps}
		on:click
	>
		{#if triggerVariant === 'default'}
			<Plus class="plus block size-3.5" />
			<Minus class="minus hidden size-3.5" />

			<slot />
		{:else if triggerVariant === 'arrowStretched'}
			<slot />
			<ChevronDown class="down block size-3.5" />
			<ChevronUp class="up hidden size-3.5" />
		{:else if triggerVariant === 'arrow'}
			<ChevronDown class="down block size-3.5" />
			<ChevronUp class="up hidden size-3.5" />
			<slot />
		{:else}
			<slot />
		{/if}
	</AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
