<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion';
	const items = [
		{
			id: 'item-1',
			title: 'Accordion #1',
			content:
				"This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions."
		},
		{
			id: 'item-2',
			title: 'Accordion #2',
			content:
				"This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions."
		},
		{
			id: 'item-3',
			title: 'Accordion #3',
			content:
				"This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions."
		}
	];
</script>

<Accordion.Root>
	{#each items as { id, title, content }}
		<Accordion.Item variant='bordered' value={id}>
			<Accordion.Trigger>{title}</Accordion.Trigger>
			<Accordion.Content>{content}</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>