<script lang="ts">
	import type { PageData } from './$types.js';
	import { page } from '$app/stores';
	import { DocsPager, TableOfContents } from '$lib/components/docs/index.js';
	import { cn } from '$lib/utils.js';

	export let data: PageData;
	$: markdown = data.component;
	$: doc = data.metadata;
	$: console.log(data);
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
		<svelte:component this={markdown} form={data.form} />
	</div>

	<DocsPager />
</div>
