<script lang="ts">
	import DocsPager from '$lib/components/docs/docs-pager.svelte';

	import type { ComponentType } from 'svelte';
	import type { PageData } from './$types.js';

	export let data: PageData;

	type Component = $$Generic<ComponentType>;
	$: component = data.component as unknown as Component;
	$: doc = data.metadata;
</script>

<header class="mb-4 border-b border-gray-200 pb-6 dark:border-neutral-700 sm:mb-4 sm:pb-6">
	<p class="mb-2 text-sm font-semibold text-blue-600 dark:text-blue-500">{doc.slug}</p>
	<h1 class="block text-2xl font-bold text-gray-800 dark:text-white sm:text-3xl">
		{doc.title}
	</h1>
	<p class="mt-2 text-gray-800 dark:text-neutral-400 sm:text-lg">
		{doc.description}
	</p>
	<slot />
</header>
<div>
	<div class="markdown pb-12 pt-8" id="markdown">
		<svelte:component this={component} />
	</div>

	<DocsPager />
</div>
