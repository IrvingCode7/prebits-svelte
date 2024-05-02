<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import type { TableOfContents, TableOfContentsItem } from '$lib/types/docs';
	import { Tree } from '$lib/components/docs/index';

	let filteredHeadingsList: TableOfContents;

	function getHeadingsWithHierarchy(divId: string) {
		const div = document.getElementById(divId);

		if (!div) {
			return { items: [] };
		}

		const headings: HTMLHeadingElement[] = Array.from(div.querySelectorAll('h2, h3'));
		const hierarchy: TableOfContents = { items: [] };
		let currentLevel: TableOfContentsItem | undefined = undefined;

		const newIdSet: Set<string> = new Set();
		let count = 1;
		headings.forEach((heading: HTMLHeadingElement) => {
			const level = Number.parseInt(heading.tagName.charAt(1));
			if (!heading.id) {
				let newId = heading.innerText
					.replaceAll(/[^a-zA-Z0-9 ]/g, '')
					.replaceAll(' ', '-')
					.toLowerCase();
				if (newIdSet.has(newId)) {
					newId = `${newId}-${count}`;
					count++;
				}
				newIdSet.add(newId);
				heading.id = `${newId}`;
			}

			const item: TableOfContentsItem = {
				title: heading.textContent || '',
				url: `#${heading.id}`,
				items: []
			};

			if (level === 2) {
				hierarchy.items.push(item);
				currentLevel = item;
			} else if (level === 3 && currentLevel?.items) {
				currentLevel.items.push(item);
			}
		});

		filteredHeadingsList = hierarchy;
	}

	const activeItem = writable<string | undefined>(undefined);

	function useActiveItem(itemIds: string[]) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						$activeItem = entry.target.id;
					}
				});
			},
			{ rootMargin: `0% 0% -10% 0%` }
		);

		const observeElement = (id: string) => {
			const element = document.getElementById(id);
			if (element) {
				observer.observe(element);
			}
		};

		itemIds?.forEach(observeElement);

		return () => {
			const unobserveElement = (id: string) => {
				const element = document.getElementById(id);
				if (element) {
					observer.unobserve(element);
				}
			};

			itemIds?.forEach(unobserveElement);
		};
	}

	// Lifecycle
	onMount(() => {
		getHeadingsWithHierarchy('markdown');
		const allItemIds: string[] = [];
		filteredHeadingsList.items.forEach((item) => {
			allItemIds.push(item.url.replace('#', ''));
			if (!item.items) return;
			item.items.forEach((subItem) => {
				allItemIds.push(subItem.url.replace('#', ''));
			});
		});
		return useActiveItem(allItemIds);
	});
</script>

<div
	class=" fixed bottom-0 end-0 top-0 z-[59] hidden w-64 transform overflow-y-auto bg-white px-4 pb-10 transition-all duration-300 [--auto-close:xl] dark:bg-neutral-900 sm:px-8 sm:pt-7 xl:end-[max(0px,calc(50%-45rem))] xl:z-10 xl:block xl:translate-x-0 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar]:w-2"
>
	<h5 class="mb-3 text-sm font-semibold text-gray-800 dark:text-neutral-300">On this page</h5>

	<Tree tree={filteredHeadingsList} activeItem={$activeItem} />
</div>
