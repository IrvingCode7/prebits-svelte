<script lang="ts">
	import DocsSidebarNavItems from './docs-sidebar-nav-items.svelte';
	import type { SidebarNavItem } from '$lib/types/nav.js';
	export let items: SidebarNavItem[] = [];
</script>

<div
	class="fixed bottom-0 start-0 top-0 z-[60] w-64 -translate-x-full overflow-y-auto bg-white px-8 transition-all duration-300 [--auto-close:lg] [--has-autofocus:false] before:pointer-events-none before:sticky before:inset-x-0 before:top-0 before:z-20 before:block before:h-10 before:w-full before:bg-gradient-to-b before:from-white before:via-white/90 after:pointer-events-none after:sticky after:inset-x-0 after:bottom-0 after:z-20 after:block after:h-10 after:w-full after:bg-gradient-to-t after:from-white after:via-white/90 dark:bg-neutral-900 dark:before:from-neutral-900 dark:before:via-neutral-900/95 dark:after:from-neutral-900 dark:after:via-neutral-900/95 lg:-bottom-8 lg:end-auto lg:start-[max(0px,calc(50%-45rem))] lg:top-8 lg:z-10 lg:block lg:translate-x-0 lg:before:top-8 lg:after:bottom-8 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar]:w-2"
>
	<nav class="relative -my-8 space-y-8 pb-10 pt-5 sm:pt-7 lg:my-0">
		{#if items.length}
			{#each items as item, index (index)}
				<ul>
					<li>
						<h5 class="mb-3 text-sm font-semibold text-gray-800 dark:text-neutral-200">
							{item.title}
						</h5>
						<ul class="ms-0.5 space-y-2 border-s-2 border-gray-100 dark:border-neutral-800">
							<DocsSidebarNavItems items={item.items} />
						</ul>
					</li>
				</ul>
			{/each}
		{/if}
	</nav>
</div>
