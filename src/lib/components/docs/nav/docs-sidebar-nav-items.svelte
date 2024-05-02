<script lang="ts">
	import type { SidebarNavItem } from '$lib/types/nav.js';
	import { page } from '$app/stores';
	export let items: SidebarNavItem[] = [];
</script>

{#each items as { title, href }}
	<li>
		<a
			class="-ms-px block border-s-2 border-transparent py-1 ps-4 text-sm
                        {$page.url.pathname == href
				? 'border-blue-600 font-semibold text-blue-600 hover:border-blue-600 hover:text-blue-500 dark:text-blue-500'
				: 'text-gray-700 hover:border-gray-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300'}
                        "
			{href}
		>
			{title}
		</a>
	</li>
{/each}
