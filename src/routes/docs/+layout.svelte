<script>
	import DocsSidebarNav from '$lib/components/docs/nav/docs-sidebar-nav.svelte';
	import { docsConfig } from '$lib/config/docs';
	import TableOfContents from '$lib/components/docs/table-of-contents.svelte';
	import SiteHeader from '$lib/components/docs/site-header.svelte';
</script>

<SiteHeader />
<div class="mx-auto max-w-[90rem]">
	<DocsSidebarNav items={docsConfig.sidebarNav} />
	<div class="w-full px-4 pt-5 sm:px-6 sm:pt-10 md:px-8 lg:ps-[22rem]">
		<main class="mx-auto lg:max-w-3xl xl:me-64 xl:ms-0 xl:max-w-none xl:pe-16">
			<slot />
		</main>
		<TableOfContents />
	</div>
</div>
