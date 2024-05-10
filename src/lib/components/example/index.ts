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
		},
		'arrow': {
			name: 'arrow',
			type: 'components:example',
			registryDependencies: ['accordion'],
			component: () => import('./accordion/arrow.svelte').then((m) => m.default),
			files: ['./accordion/arrow.svelte'],
			raw: () => import('./accordion/arrow.svelte?raw').then((m) => m.default)
		},
		'arrow-stretched': {
			name: 'arrow-stretched',
			type: 'components:example',
			registryDependencies: ['accordion'],
			component: () => import('./accordion/arrow-stretched.svelte').then((m) => m.default),
			files: ['./accordion/arrow-stretched.svelte'],
			raw: () => import('./accordion/arrow-stretched.svelte?raw').then((m) => m.default)
		},
		'bordered': {
			name: 'bordered',
			type: 'components:example',
			registryDependencies: ['accordion'],
			component: () => import('./accordion/bordered.svelte').then((m) => m.default),
			files: ['./accordion/bordered.svelte'],
			raw: () => import('./accordion/bordered.svelte').then((m) => m.default)//quite el ?raw
		},
		'active-bordered': {
			name: 'active-bordered',
			type: 'components:example',
			registryDependencies: ['accordion'],
			component: () => import('./accordion/active-bordered.svelte').then((m) => m.default),
			files: ['./accordion/active-bordered.svelte'],
			raw: () => import('./accordion/active-bordered.svelte').then((m) => m.default)//quite el ?raw y funciono
		}
	},
	alert: {
		'solid-color': {
			name: 'solid-color',
			type: 'components:example',
			registryDependencies: ['alert'],
			component: () => import('./alert/solid-color.svelte').then((m) => m.default),
			files: ['./alert/solid-color.svelte'],
			raw: () => import('./alert/solid-color.svelte?raw').then((m) => m.default)
		},
		'soft-color': {
			name: 'soft-color',
			type: 'components:example',
			registryDependencies: ['alert'],
			component: () => import('./alert/soft-color.svelte').then((m) => m.default),
			files: ['./alert/soft-color.svelte'],
			raw: () => import('./alert/soft-color.svelte?raw').then((m) => m.default)
		},
		'alert-outline': {
			name: 'soft-color',
			type: 'components:example',
			registryDependencies: ['alert'],
			component: () => import('./alert/alert-outline.svelte').then((m) => m.default),
			files: ['./alert/alert-outline.svelte'],
			raw: () => import('./alert/alert-outline.svelte?raw').then((m) => m.default)
		}
	},
	alertdialog: {
		'alert-dialog': {
			name: 'alert-dialog',
			type: 'components:example',
			registryDependencies: ['alert-dialog'],
			component: () => import('./alert-dialog/alert-dialog.svelte').then((m) => m.default),
			files: ['./alert-dialog/alert-dialog.svelte'],
			raw: () => import('./alert-dialog/alert-dialog.svelte?raw').then((m) => m.default)
		},
	},
	button: {
		'button-type': {
			name: 'button-type',
			type: 'components:example',
			registryDependencies: ['button'],
			component: () => import('./button/button-type.svelte').then((m) => m.default),
			files: ['./button/button-type.svelte'],
			raw: () => import('./button/button-type.svelte?raw').then((m) => m.default)
		},
		'button-size': {
			name: 'button-size',
			type: 'components:example',
			registryDependencies: ['button'],
			component: () => import('./button/button-size.svelte').then((m) => m.default),
			files: ['./button/button-size.svelte'],
			raw: () => import('./button/button-size.svelte?raw').then((m) => m.default)
		},
		'button-solid': {
			name: 'button-solid',
			type: 'components:example',
			registryDependencies: ['button'],
			component: () => import('./button/button-solid.svelte').then((m) => m.default),
			files: ['./button/button-solid.svelte'],
			raw: () => import('./button/button-solid.svelte?raw').then((m) => m.default)
		},
		'button-outline': {
			name: 'button-outline',
			type: 'components:example',
			registryDependencies: ['button'],
			component: () => import('./button/button-outline.svelte').then((m) => m.default),
			files: ['./button/button-outline.svelte'],
			raw: () => import('./button/button-outline.svelte?raw').then((m) => m.default)
		},
		'button-ghost': {
			name: 'button-ghost',
			type: 'components:example',
			registryDependencies: ['button'],
			component: () => import('./button/button-ghost.svelte').then((m) => m.default),
			files: ['./button/button-ghost.svelte'],
			raw: () => import('./button/button-ghost.svelte?raw').then((m) => m.default)
		},
		'button-soft': {
			name: 'button-soft',
			type: 'components:example',
			registryDependencies: ['button'],
			component: () => import('./button/button-soft.svelte').then((m) => m.default),
			files: ['./button/button-soft.svelte'],
			raw: () => import('./button/button-soft.svelte?raw').then((m) => m.default)
		},
		'button-white': {
			name: 'button-white',
			type: 'components:example',
			registryDependencies: ['button'],
			component: () => import('./button/button-white.svelte').then((m) => m.default),
			files: ['./button/button-white.svelte'],
			raw: () => import('./button/button-white.svelte?raw').then((m) => m.default)
		},
		'button-link': {
			name: 'button-link',
			type: 'components:example',
			registryDependencies: ['button'],
			component: () => import('./button/button-link.svelte').then((m) => m.default),
			files: ['./button/button-link.svelte'],
			raw: () => import('./button/button-link.svelte?raw').then((m) => m.default)
		},
		'button-pilled': {
			name: 'button-pilled',
			type: 'components:example',
			registryDependencies: ['button'],
			component: () => import('./button/button-pilled.svelte').then((m) => m.default),
			files: ['./button/button-pilled.svelte'],
			raw: () => import('./button/button-pilled.svelte?raw').then((m) => m.default)
		},
	},
	input: {
		'input-basic': {
			name: 'input-basic',
			type: 'components:example',
			registryDependencies: ['input'],
			component: () => import('./input/input-basic.svelte').then((m) => m.default),
			files: ['./input/input-basic.svelte'],
			raw: () => import('./input/input-basic.svelte?raw').then((m) => m.default)
		},
		'input-placeholder': {
			name: 'input-placeholder',
			type: 'components:example',
			registryDependencies: ['input'],
			component: () => import('./input/input-placeholder.svelte').then((m) => m.default),
			files: ['./input/input-placeholder.svelte'],
			raw: () => import('./input/input-placeholder.svelte?raw').then((m) => m.default)
		},
		'input-label': {
			name: 'input-label',
			type: 'components:example',
			registryDependencies: ['input'],
			component: () => import('./input/input-label.svelte').then((m) => m.default),
			files: ['./input/input-label.svelte'],
			raw: () => import('./input/input-label.svelte?raw').then((m) => m.default)
		},
		'input-gray': {
			name: 'input-gray',
			type: 'components:example',
			registryDependencies: ['input'],
			component: () => import('./input/input-gray.svelte').then((m) => m.default),
			files: ['./input/input-gray.svelte'],
			raw: () => import('./input/input-gray.svelte?raw').then((m) => m.default)
		},
		'input-underline': {
			name: 'input-underline',
			type: 'components:example',
			registryDependencies: ['input'],
			component: () => import('./input/input-urderline.svelte').then((m) => m.default),
			files: ['./input/input-underline.svelte'],
			raw: () => import('./input/input-urderline.svelte?raw').then((m) => m.default)
		},
	},
	label: {
		'label': {
			name: 'label',
			type: 'components:example',
			registryDependencies: ['label'],
			component: () => import('./label/label.svelte').then((m) => m.default),
			files: ['./label/label.svelte'],
			raw: () => import('./label/label.svelte?raw').then((m) => m.default)
		},
	},
	sonner: {
		'sonner-basic': {
			name: 'sonner',
			type: 'components:example',
			registryDependencies: ['label'],
			component: () => import('./sonner/sonner-basic.svelte').then((m) => m.default),
			files: ['./sonner/sonner-basic.svelte'],
			raw: () => import('./sonner/sonner-basic.svelte?raw').then((m) => m.default)
		},
	},
	skeleton: {
		'skeleton-basic': {
			name: 'skeleton',
			type: 'components:example',
			registryDependencies: ['skeleton'],
			component: () => import('./skeleton/skeleton-basic.svelte').then((m) => m.default),
			files: ['./skeleton/skeleton-basic.svelte'],
			raw: () => import('./skeleton/skeleton-basic.svelte?raw').then((m) => m.default)
		},
		'skeleton-animate': {
			name: 'skeleton',
			type: 'components:example',
			registryDependencies: ['skeleton'],
			component: () => import('./skeleton/skeleton-animate.svelte').then((m) => m.default),
			files: ['./skeleton/skeleton-animate.svelte'],
			raw: () => import('./skeleton/skeleton-animate.svelte?raw').then((m) => m.default)
		},
	},
	tooltip: {
		'tooltip': {
			name: 'tooltip',
			type: 'components:example',
			registryDependencies: ['tooltip'],
			component: () => import('./tooltip/tooltip.svelte').then((m) => m.default),
			files: ['./tooltip/tooltip.svelte'],
			raw: () => import('./tooltip/tooltip.svelte?raw').then((m) => m.default)
		},
	},
	popover: {
		'popover': {
			name: 'popover',
			type: 'components:example',
			registryDependencies: ['popover'],
			component: () => import('./popover/popover.svelte').then((m) => m.default),
			files: ['./popover/popover.svelte'],
			raw: () => import('./popover/popover.svelte?raw').then((m) => m.default)
		},
	},
	badge: {
		'badge-solid': {
			name: 'badge-solid',
			type: 'components:example',
			registryDependencies: ['badge'],
			component: () => import('./badge/badge-solid.svelte').then((m) => m.default),
			files: ['./badge/badge-solid.svelte'],
			raw: () => import('./badge/badge-solid.svelte?raw').then((m) => m.default)
		},
		'badge-soft': {
			name: 'badge-soft',
			type: 'components:example',
			registryDependencies: ['badge'],
			component: () => import('./badge/badge-soft.svelte').then((m) => m.default),
			files: ['./badge/badge-soft.svelte'],
			raw: () => import('./badge/badge-soft.svelte?raw').then((m) => m.default)
		},
		'badge-outline': {
			name: 'badge-outline',
			type: 'components:example',
			registryDependencies: ['badge'],
			component: () => import('./badge/badge-outline.svelte').then((m) => m.default),
			files: ['./badge/badge-outline.svelte'],
			raw: () => import('./badge/badge-outline.svelte?raw').then((m) => m.default)
		},
		'badge-white': {
			name: 'badge-white',
			type: 'components:example',
			registryDependencies: ['badge'],
			component: () => import('./badge/badge-white.svelte').then((m) => m.default),
			files: ['./badge/badge-white.svelte'],
			raw: () => import('./badge/badge-white.svelte?raw').then((m) => m.default)
		},
		'badge-rounded': {
			name: 'badge-rounded',
			type: 'components:example',
			registryDependencies: ['badge'],
			component: () => import('./badge/badge-rounded.svelte').then((m) => m.default),
			files: ['./badge/badge-rounded.svelte'],
			raw: () => import('./badge/badge-rounded.svelte?raw').then((m) => m.default)
		},
		'badge-width': {
			name: 'badge-width',
			type: 'components:example',
			registryDependencies: ['badge'],
			component: () => import('./badge/badge-width.svelte').then((m) => m.default),
			files: ['./badge/badge-width.svelte'],
			raw: () => import('./badge/badge-width.svelte?raw').then((m) => m.default)
		},
		'badge-indicator': {
			name: 'badge-indicator',
			type: 'components:example',
			registryDependencies: ['badge'],
			component: () => import('./badge/badge-indicator.svelte').then((m) => m.default),
			files: ['./badge/badge-indicator.svelte'],
			raw: () => import('./badge/badge-indicator.svelte?raw').then((m) => m.default)
		},
		'badge-icons': {
			name: 'badge-icons',
			type: 'components:example',
			registryDependencies: ['badge'],
			component: () => import('./badge/badge-icons.svelte').then((m) => m.default),
			files: ['./badge/badge-icons.svelte'],
			raw: () => import('./badge/badge-icons.svelte?raw').then((m) => m.default)
		},
		'badge-button': {
			name: 'badge-button',
			type: 'components:example',
			registryDependencies: ['badge'],
			component: () => import('./badge/badge-button.svelte').then((m) => m.default),
			files: ['./badge/badge-button.svelte'],
			raw: () => import('./badge/badge-button.svelte?raw').then((m) => m.default)
		},
		'badge-avatar': {
			name: 'badge-avatar',
			type: 'components:example',
			registryDependencies: ['badge'],
			component: () => import('./badge/badge-avatar.svelte').then((m) => m.default),
			files: ['./badge/badge-avatar.svelte'],
			raw: () => import('./badge/badge-avatar.svelte?raw').then((m) => m.default)
		},
		'button-with-badge': {
			name: 'button-with-badge',
			type: 'components:example',
			registryDependencies: ['badge'],
			component: () => import('./badge/button-with-badge.svelte').then((m) => m.default),
			files: ['./badge/button-with-badge.svelte'],
			raw: () => import('./badge/button-with-badge.svelte?raw').then((m) => m.default)
		},
		'badge-positioned': {
			name: 'badge-positioned',
			type: 'components:example',
			registryDependencies: ['badge'],
			component: () => import('./badge/badge-positioned.svelte').then((m) => m.default),
			files: ['./badge/badge-positioned.svelte'],
			raw: () => import('./badge/badge-positioned.svelte?raw').then((m) => m.default)
		},
		'badge-profile': {
			name: 'badge-profile',
			type: 'components:example',
			registryDependencies: ['badge'],
			component: () => import('./badge/badge-profile.svelte').then((m) => m.default),
			files: ['./badge/badge-profile.svelte'],
			raw: () => import('./badge/badge-profile.svelte?raw').then((m) => m.default)
		},
		'badge-animate': {
			name: 'badge-animate',
			type: 'components:example',
			registryDependencies: ['badge'],
			component: () => import('./badge/badge-animate.svelte').then((m) => m.default),
			files: ['./badge/badge-animate.svelte'],
			raw: () => import('./badge/badge-animate.svelte?raw').then((m) => m.default)
		},
	},
	breadcrumb: {
		'breadcrumb': {
			name: 'breadcrumb',
			type: 'components:example',
			registryDependencies: ['breadcrumb'],
			component: () => import('./breadcrumb/breadcrumb.svelte').then((m) => m.default),
			files: ['./breadcrumb/breadcrumb.svelte'],
			raw: () => import('./breadcrumb/breadcrumb.svelte?raw').then((m) => m.default)
		},
		'breadcrumb-separator': {
			name: 'breadcrumb-separator',
			type: 'components:example',
			registryDependencies: ['breadcrumb'],
			component: () => import('./breadcrumb/breadcrumb-separator.svelte').then((m) => m.default),
			files: ['./breadcrumb/breadcrumb-separator.svelte'],
			raw: () => import('./breadcrumb/breadcrumb-separator.svelte?raw').then((m) => m.default)
		},
		'breadcrumb-dropdown': {
			name: 'breadcrumb-dropdown',
			type: 'components:example',
			registryDependencies: ['breadcrumb'],
			component: () => import('./breadcrumb/breadcrumb-dropdown.svelte').then((m) => m.default),
			files: ['./breadcrumb/breadcrumb-dropdown.svelte'],
			raw: () => import('./breadcrumb/breadcrumb-dropdown.svelte?raw').then((m) => m.default)
		},
		'breadcrumb-collapse': {
			name: 'breadcrumb-collapse',
			type: 'components:example',
			registryDependencies: ['breadcrumb'],
			component: () => import('./breadcrumb/breadcrumb-collapse.svelte').then((m) => m.default),
			files: ['./breadcrumb/breadcrumb-collapse.svelte'],
			raw: () => import('./breadcrumb/breadcrumb-collapse.svelte?raw').then((m) => m.default)
		},
		'breadcrumb-link': {
			name: 'breadcrumb-link',
			type: 'components:example',
			registryDependencies: ['breadcrumb'],
			component: () => import('./breadcrumb/breadcrumb-link.svelte').then((m) => m.default),
			files: ['./breadcrumb/breadcrumb-link.svelte'],
			raw: () => import('./breadcrumb/breadcrumb-link.svelte?raw').then((m) => m.default)
		},
		'breadcrumb-responsive': {
			name: 'breadcrumb-responsive',
			type: 'components:example',
			registryDependencies: ['breadcrumb'],
			component: () => import('./breadcrumb/breadcrumb-responsive.svelte').then((m) => m.default),
			files: ['./breadcrumb/breadcrumb-responsive.svelte'],
			raw: () => import('./breadcrumb/breadcrumb-responsive.svelte?raw').then((m) => m.default)
		},
	},
	calendar: {
		'calendar': {
			name: 'calendar',
			type: 'components:example',
			registryDependencies: ['calendar'],
			component: () => import('./calendar/calendar.svelte').then((m) => m.default),
			files: ['./calendar/calendar.svelte'],
			raw: () => import('./calendar/calendar.svelte?raw').then((m) => m.default)
		},
		'calendar-form': {
			name: 'calendar-form',
			type: 'components:example',
			registryDependencies: ['calendar'],
			component: () => import('./calendar/calendar-form.svelte').then((m) => m.default),
			files: ['./calendar/calendar-form.svelte'],
			raw: () => import('./calendar/calendar-form.svelte?raw').then((m) => m.default)
		},
		'calendar-avanced': {
			name: 'calendar-avanced',
			type: 'components:example',
			registryDependencies: ['calendar'],
			component: () => import('./calendar/calendar-avanced.svelte').then((m) => m.default),
			files: ['./calendar/calendar-avanced.svelte'],
			raw: () => import('./calendar/calendar-avanced.svelte?raw').then((m) => m.default)
		},
	},
	card: {
		'card-basic': {
			name: 'card-basic',
			type: 'components:example',
			registryDependencies: ['card'],
			component: () => import('./card/card-basic.svelte').then((m) => m.default),
			files: ['./card/card-basic.svelte'],
			raw: () => import('./card/card-basic.svelte?raw').then((m) => m.default)
		},
		'card-body': {
			name: 'card-body',
			type: 'components:example',
			registryDependencies: ['card'],
			component: () => import('./card/card-body.svelte').then((m) => m.default),
			files: ['./card/card-body.svelte'],
			raw: () => import('./card/card-body.svelte?raw').then((m) => m.default)
		},
		'card-simple': {
			name: 'card-simple',
			type: 'components:example',
			registryDependencies: ['card'],
			component: () => import('./card/card-simple.svelte').then((m) => m.default),
			files: ['./card/card-simple.svelte'],
			raw: () => import('./card/card-simple.svelte?raw').then((m) => m.default)
		},
		'card-header': {
			name: 'card-header',
			type: 'components:example',
			registryDependencies: ['card'],
			component: () => import('./card/card-header.svelte').then((m) => m.default),
			files: ['./card/card-header.svelte'],
			raw: () => import('./card/card-header.svelte?raw').then((m) => m.default)
		},
		'card-footer': {
			name: 'card-footer',
			type: 'components:example',
			registryDependencies: ['card'],
			component: () => import('./card/card-footer.svelte').then((m) => m.default),
			files: ['./card/card-footer.svelte'],
			raw: () => import('./card/card-footer.svelte?raw').then((m) => m.default)
		},
		'card-small': {
			name: 'card-small',
			type: 'components:example',
			registryDependencies: ['card'],
			component: () => import('./card/card-small.svelte').then((m) => m.default),
			files: ['./card/card-small.svelte'],
			raw: () => import('./card/card-small.svelte?raw').then((m) => m.default)
		},
		'card-large': {
			name: 'card-large',
			type: 'components:example',
			registryDependencies: ['card'],
			component: () => import('./card/card-large.svelte').then((m) => m.default),
			files: ['./card/card-large.svelte'],
			raw: () => import('./card/card-large.svelte?raw').then((m) => m.default)
		},
		'card-nav': {
			name: 'card-nav',
			type: 'components:example',
			registryDependencies: ['card'],
			component: () => import('./card/card-nav.svelte').then((m) => m.default),
			files: ['./card/card-nav.svelte'],
			raw: () => import('./card/card-nav.svelte?raw').then((m) => m.default)
		},
	},
};
