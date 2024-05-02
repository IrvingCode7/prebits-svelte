export const Index = {
	accordion: {
		'basic-usage': {
			name: 'basic-usage',
			type: 'components:example',
			registryDependencies: ['accordion'],
			component: () => import('./accordion/basic-usage.svelte').then((m) => m.default),
			files: ['./accordion/basic-usage.svelte'],
			raw: () => import('./accordion/basic-usage.svelte?raw').then((m) => m.default)
		},
		'always-open': {
			name: 'always-open',
			type: 'components:example',
			registryDependencies: ['accordion'],
			component: () => import('./accordion/always-open.svelte').then((m) => m.default),
			files: ['./accordion/always-open.svelte'],
			raw: () => import('./accordion/always-open.svelte?raw').then((m) => m.default)
		},
		'no-arrow': {
			name: 'no-arrow',
			type: 'components:example',
			registryDependencies: ['accordion'],
			component: () => import('./accordion/no-arrow.svelte').then((m) => m.default),
			files: ['./accordion/no-arrow.svelte'],
			raw: () => import('./accordion/no-arrow.svelte?raw').then((m) => m.default)
		}
	}
};
