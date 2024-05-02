<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';

	import { cn } from '$lib/utils.js';

	let className: string;
	export { className as class };
	import type { ComponentType } from 'svelte';
	import { Index } from '../example';

	export let type: keyof typeof Index;
	export let name: keyof (typeof Index)[typeof type];
	$: component = Index[type][name]?.component() as Promise<ComponentType>;
	export let form: unknown;
</script>

<div class={cn('group relative my-4 flex flex-col space-y-2', className)} {...$$restProps}>
	<Tabs.Root value="preview" class="relative mr-auto w-full">
		<div class="flex items-center justify-between pb-3">
			<Tabs.List class="w-full justify-start rounded-none border-b bg-transparent p-0">
				<Tabs.Trigger
					value="preview"
					class="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
				>
					Preview
				</Tabs.Trigger>
				<Tabs.Trigger
					value="code"
					class="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
				>
					Code
				</Tabs.Trigger>
			</Tabs.List>
		</div>
		<Tabs.Content value="preview" class="relative rounded-md border">
			<div class="flex items-center justify-between p-4">
				<slot name="example">
					{#await component}
						<div class="flex items-center text-sm text-muted-foreground">Loading...</div>
					{:then Component}
						<Component {form} />
					{:catch}
						<p class="text-sm text-muted-foreground">
							Component
							<code class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
								{name}
							</code>
							not found in registry.
						</p>
					{/await}
				</slot>
			</div>
		</Tabs.Content>
		<Tabs.Content value="code">
			<div class="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
				<slot />
			</div>
		</Tabs.Content>
	</Tabs.Root>
</div>
