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
		'alert-bordered': {
			name: 'alert-bordered',
			type: 'components:example',
			registryDependencies: ['alert'],
			component: () => import('./alert/alert-bordered.svelte').then((m) => m.default),
			files: ['./alert/alert-bordered.svelte'],
			raw: () => import('./alert/alert-bordered.svelte?raw').then((m) => m.default)
		},
		'alert-outline': {
			name: 'alert-outline',
			type: 'components:example',
			registryDependencies: ['alert'],
			component: () => import('./alert/alert-outline.svelte').then((m) => m.default),
			files: ['./alert/alert-outline.svelte'],
			raw: () => import('./alert/alert-outline.svelte?raw').then((m) => m.default)
		},
		'alert-description': {
			name: 'alert-description',
			type: 'components:example',
			registryDependencies: ['alert'],
			component: () => import('./alert/alert-description.svelte').then((m) => m.default),
			files: ['./alert/alert-description.svelte'],
			raw: () => import('./alert/alert-description.svelte?raw').then((m) => m.default)
		},
		'alert-list': {
			name: 'alert-list',
			type: 'components:example',
			registryDependencies: ['alert'],
			component: () => import('./alert/alert-list.svelte').then((m) => m.default),
			files: ['./alert/alert-list.svelte'],
			raw: () => import('./alert/alert-list.svelte?raw').then((m) => m.default)
		},
		'alert-action': {
			name: 'alert-action',
			type: 'components:example',
			registryDependencies: ['alert'],
			component: () => import('./alert/alert-action.svelte').then((m) => m.default),
			files: ['./alert/alert-action.svelte'],
			raw: () => import('./alert/alert-action.svelte?raw').then((m) => m.default)
		},
		'alert-link-right': {
			name: 'alert-link-right',
			type: 'components:example',
			registryDependencies: ['alert'],
			component: () => import('./alert/alert-link-right.svelte').then((m) => m.default),
			files: ['./alert/alert-link-right.svelte'],
			raw: () => import('./alert/alert-link-right.svelte?raw').then((m) => m.default)
		},
		'alert-discovery': {
			name: 'alert-discovery',
			type: 'components:example',
			registryDependencies: ['alert'],
			component: () => import('./alert/alert-discovery.svelte').then((m) => m.default),
			files: ['./alert/alert-discovery.svelte'],
			raw: () => import('./alert/alert-discovery.svelte?raw').then((m) => m.default)
		}
	},
	alert_dialog: {
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
		'button-block': {
			name: 'button-block',
			type: 'components:example',
			registryDependencies: ['button'],
			component: () => import('./button/button-block.svelte').then((m) => m.default),
			files: ['./button/button-block.svelte'],
			raw: () => import('./button/button-block.svelte?raw').then((m) => m.default)
		},
		'button-icon': {
			name: 'button-icon',
			type: 'components:example',
			registryDependencies: ['button'],
			component: () => import('./button/button-icon.svelte').then((m) => m.default),
			files: ['./button/button-icon.svelte'],
			raw: () => import('./button/button-icon.svelte?raw').then((m) => m.default)
		},
		'button-fixed': {
			name: 'button-fixed',
			type: 'components:example',
			registryDependencies: ['button'],
			component: () => import('./button/button-fixed.svelte').then((m) => m.default),
			files: ['./button/button-fixed.svelte'],
			raw: () => import('./button/button-fixed.svelte?raw').then((m) => m.default)
		},
		'button-icon-size': {
			name: 'button-icon-size',
			type: 'components:example',
			registryDependencies: ['button'],
			component: () => import('./button/button-icon-size.svelte').then((m) => m.default),
			files: ['./button/button-icon-size.svelte'],
			raw: () => import('./button/button-icon-size.svelte?raw').then((m) => m.default)
		},
		'button-loading': {
			name: 'button-loading',
			type: 'components:example',
			registryDependencies: ['button'],
			component: () => import('./button/button-loading.svelte').then((m) => m.default),
			files: ['./button/button-loading.svelte'],
			raw: () => import('./button/button-loading.svelte?raw').then((m) => m.default)
		},
		'button-disabled': {
			name: 'button-disabled',
			type: 'components:example',
			registryDependencies: ['button'],
			component: () => import('./button/button-disabled.svelte').then((m) => m.default),
			files: ['./button/button-disabled.svelte'],
			raw: () => import('./button/button-disabled.svelte?raw').then((m) => m.default)
		},
		'button-example': {
			name: 'button-example',
			type: 'components:example',
			registryDependencies: ['button'],
			component: () => import('./button/button-example.svelte').then((m) => m.default),
			files: ['./button/button-example.svelte'],
			raw: () => import('./button/button-example.svelte?raw').then((m) => m.default)
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
		'card-images': {
			name: 'card-images',
			type: 'components:example',
			registryDependencies: ['card'],
			component: () => import('./card/card-images.svelte').then((m) => m.default),
			files: ['./card/card-images.svelte'],
			raw: () => import('./card/card-images.svelte?raw').then((m) => m.default)
		},
		'card-image-bottom': {
			name: 'card-image-bottom',
			type: 'components:example',
			registryDependencies: ['card'],
			component: () => import('./card/card-image-bottom.svelte').then((m) => m.default),
			files: ['./card/card-image-bottom.svelte'],
			raw: () => import('./card/card-image-bottom.svelte?raw').then((m) => m.default)
		},
		'card-overlays': {
			name: 'card-overlays',
			type: 'components:example',
			registryDependencies: ['card'],
			component: () => import('./card/card-overlays.svelte').then((m) => m.default),
			files: ['./card/card-overlays.svelte'],
			raw: () => import('./card/card-overlays.svelte?raw').then((m) => m.default)
		},
		'card-animation': {
			name: 'card-animation',
			type: 'components:example',
			registryDependencies: ['card'],
			component: () => import('./card/card-animation.svelte').then((m) => m.default),
			files: ['./card/card-animation.svelte'],
			raw: () => import('./card/card-animation.svelte?raw').then((m) => m.default)
		},
		'card-transition': {
			name: 'card-transition',
			type: 'components:example',
			registryDependencies: ['card'],
			component: () => import('./card/card-transition.svelte').then((m) => m.default),
			files: ['./card/card-transition.svelte'],
			raw: () => import('./card/card-transition.svelte?raw').then((m) => m.default)
		},
		'card-horizontal': {
			name: 'card-horizontal',
			type: 'components:example',
			registryDependencies: ['card'],
			component: () => import('./card/card-horizontal.svelte').then((m) => m.default),
			files: ['./card/card-horizontal.svelte'],
			raw: () => import('./card/card-horizontal.svelte?raw').then((m) => m.default)
		},
		'card-gruop': {
			name: 'card-gruop',
			type: 'components:example',
			registryDependencies: ['card'],
			component: () => import('./card/card-gruop.svelte').then((m) => m.default),
			files: ['./card/card-gruop.svelte'],
			raw: () => import('./card/card-gruop.svelte?raw').then((m) => m.default)
		},
		'card-border': {
			name: 'card-border',
			type: 'components:example',
			registryDependencies: ['card'],
			component: () => import('./card/card-border.svelte').then((m) => m.default),
			files: ['./card/card-border.svelte'],
			raw: () => import('./card/card-border.svelte?raw').then((m) => m.default)
		},
		'card-panel': {
			name: 'card-panel',
			type: 'components:example',
			registryDependencies: ['card'],
			component: () => import('./card/card-panel.svelte').then((m) => m.default),
			files: ['./card/card-panel.svelte'],
			raw: () => import('./card/card-panel.svelte?raw').then((m) => m.default)
		},
		'card-action': {
			name: 'card-action',
			type: 'components:example',
			registryDependencies: ['card'],
			component: () => import('./card/card-action.svelte').then((m) => m.default),
			files: ['./card/card-action.svelte'],
			raw: () => import('./card/card-action.svelte?raw').then((m) => m.default)
		},
		'card-alert': {
			name: 'card-alert',
			type: 'components:example',
			registryDependencies: ['card'],
			component: () => import('./card/card-alert.svelte').then((m) => m.default),
			files: ['./card/card-alert.svelte'],
			raw: () => import('./card/card-alert.svelte?raw').then((m) => m.default)
		},
		'card-center': {
			name: 'card-center',
			type: 'components:example',
			registryDependencies: ['card'],
			component: () => import('./card/card-center.svelte').then((m) => m.default),
			files: ['./card/card-center.svelte'],
			raw: () => import('./card/card-center.svelte?raw').then((m) => m.default)
		},
		'card-empty': {
			name: 'card-empty',
			type: 'components:example',
			registryDependencies: ['card'],
			component: () => import('./card/card-empty.svelte').then((m) => m.default),
			files: ['./card/card-empty.svelte'],
			raw: () => import('./card/card-empty.svelte?raw').then((m) => m.default)
		},
		'card-scroll': {
			name: 'card-scroll',
			type: 'components:example',
			registryDependencies: ['card'],
			component: () => import('./card/card-scroll.svelte').then((m) => m.default),
			files: ['./card/card-scroll.svelte'],
			raw: () => import('./card/card-scroll.svelte?raw').then((m) => m.default)
		},
	},
	context_menu: {
		'context-menu': {
			name: 'context-menu',
			type: 'components:example',
			registryDependencies: ['context-menu'],
			component: () => import('./context-menu/context-menu.svelte').then((m) => m.default),
			files: ['./context-menu/context-menu.svelte'],
			raw: () => import('./context-menu/context-menu.svelte?raw').then((m) => m.default)
		},
	},
	date_picker: {
		'date_picker': {
			name: 'date_picker',
			type: 'components:example',
			registryDependencies: ['date_picker'],
			component: () => import('./date-picker/date-picker.svelte').then((m) => m.default),
			files: ['./date-picker/date-picker.svelte'],
			raw: () => import('./date-picker/date-picker.svelte?raw').then((m) => m.default)
		},
	},
	hover_card: {
		'hover-card': {
			name: 'hover-card',
			type: 'components:example',
			registryDependencies: ['hover-card'],
			component: () => import('./hover-card/hover-card.svelte').then((m) => m.default),
			files: ['./hover-card/hover-card.svelte'],
			raw: () => import('./hover-card/hover-card.svelte?raw').then((m) => m.default)
		},
	},
	range_calendar: {
		'range-calendar': {
			name: 'range-calendar',
			type: 'components:example',
			registryDependencies: ['range-calendar'],
			component: () => import('./range-calendar/range-calendar.svelte').then((m) => m.default),
			files: ['./range-calendar/range-calendar.svelte'],
			raw: () => import('./range-calendar/range-calendar.svelte?raw').then((m) => m.default)
		},
	},
	carousel: {
		'carousel-basic': {
			name: 'carousel-basic',
			type: 'components:example',
			registryDependencies: ['carousel'],
			component: () => import('./carousel/carousel-basic.svelte').then((m) => m.default),
			files: ['./carousel/carousel-basic.svelte'],
			raw: () => import('./carousel/carousel-basic.svelte?raw').then((m) => m.default)
		},
		'carousel-pagination': {
			name: 'carousel-pagination',
			type: 'components:example',
			registryDependencies: ['carousel'],
			component: () => import('./carousel/carousel-pagination.svelte').then((m) => m.default),
			files: ['./carousel/carousel-pagination.svelte'],
			raw: () => import('./carousel/carousel-pagination.svelte?raw').then((m) => m.default)
		},
	},
	menubar: {
		'menu-bar': {
			name: 'menu-bar',
			type: 'components:example',
			registryDependencies: ['menubar'],
			component: () => import('./menubar/menu-bar.svelte').then((m) => m.default),
			files: ['./menubar/menu-bar.svelte'],
			raw: () => import('./menubar/menu-bar.svelte?raw').then((m) => m.default)
		},
	},
	avatar: {
		'avatar': {
			name: 'avatar',
			type: 'components:example',
			registryDependencies: ['avatar'],
			component: () => import('./avatar/avatar.svelte').then((m) => m.default),
			files: ['./avatar/avatar.svelte'],
			raw: () => import('./avatar/avatar.svelte?raw').then((m) => m.default)
		},
		'avatar-rounded': {
			name: 'avatar',
			type: 'components:example',
			registryDependencies: ['avatar'],
			component: () => import('./avatar/avatar-rounded.svelte').then((m) => m.default),
			files: ['./avatar/avatar-rounded.svelte'],
			raw: () => import('./avatar/avatar-rounded.svelte?raw').then((m) => m.default)
		},
		'avatar-status': {
			name: 'avatar-status',
			type: 'components:example',
			registryDependencies: ['avatar'],
			component: () => import('./avatar/avatar-status.svelte').then((m) => m.default),
			files: ['./avatar/avatar-status.svelte'],
			raw: () => import('./avatar/avatar-status.svelte?raw').then((m) => m.default)
		},
		'avatar-rounded-status': {
			name: 'avatar-rounded-status',
			type: 'components:example',
			registryDependencies: ['avatar'],
			component: () => import('./avatar/avatar-rounded-status.svelte').then((m) => m.default),
			files: ['./avatar/avatar-rounded-status.svelte'],
			raw: () => import('./avatar/avatar-rounded-status.svelte?raw').then((m) => m.default)
		},
		'avatar-bottom-status': {
			name: 'avatar-bottom-status',
			type: 'components:example',
			registryDependencies: ['avatar'],
			component: () => import('./avatar/avatar-bottom-status.svelte').then((m) => m.default),
			files: ['./avatar/avatar-bottom-status.svelte'],
			raw: () => import('./avatar/avatar-bottom-status.svelte?raw').then((m) => m.default)
		},
		'avatar-bottom-rounded': {
			name: 'avatar-bottom-rounded',
			type: 'components:example',
			registryDependencies: ['avatar'],
			component: () => import('./avatar/avatar-bottom-rounded.svelte').then((m) => m.default),
			files: ['./avatar/avatar-bottom-rounded.svelte'],
			raw: () => import('./avatar/avatar-bottom-rounded.svelte?raw').then((m) => m.default)
		},
		'avatar-logo': {
			name: 'avatar-logo',
			type: 'components:example',
			registryDependencies: ['avatar'],
			component: () => import('./avatar/avatar-logo.svelte').then((m) => m.default),
			files: ['./avatar/avatar-logo.svelte'],
			raw: () => import('./avatar/avatar-logo.svelte?raw').then((m) => m.default)
		},
		'avatar-icon': {
			name: 'avatar-icon',
			type: 'components:example',
			registryDependencies: ['avatar'],
			component: () => import('./avatar/avatar-icon.svelte').then((m) => m.default),
			files: ['./avatar/avatar-icon.svelte'],
			raw: () => import('./avatar/avatar-icon.svelte?raw').then((m) => m.default)
		},
		'avatar-initials': {
			name: 'avatar-initials',
			type: 'components:example',
			registryDependencies: ['avatar'],
			component: () => import('./avatar/avatar-initials.svelte').then((m) => m.default),
			files: ['./avatar/avatar-initials.svelte'],
			raw: () => import('./avatar/avatar-initials.svelte?raw').then((m) => m.default)
		},
		'avatar-solid': {
			name: 'avatar-solid',
			type: 'components:example',
			registryDependencies: ['avatar'],
			component: () => import('./avatar/avatar-solid.svelte').then((m) => m.default),
			files: ['./avatar/avatar-solid.svelte'],
			raw: () => import('./avatar/avatar-solid.svelte?raw').then((m) => m.default)
		},
		'avatar-soft': {
			name: 'avatar-soft',
			type: 'components:example',
			registryDependencies: ['avatar'],
			component: () => import('./avatar/avatar-soft.svelte').then((m) => m.default),
			files: ['./avatar/avatar-soft.svelte'],
			raw: () => import('./avatar/avatar-soft.svelte?raw').then((m) => m.default)
		},
		'avatar-outline': {
			name: 'avatar-outline',
			type: 'components:example',
			registryDependencies: ['avatar'],
			component: () => import('./avatar/avatar-outline.svelte').then((m) => m.default),
			files: ['./avatar/avatar-outline.svelte'],
			raw: () => import('./avatar/avatar-outline.svelte?raw').then((m) => m.default)
		},
		'avatar-white': {
			name: 'avatar-white',
			type: 'components:example',
			registryDependencies: ['avatar'],
			component: () => import('./avatar/avatar-white.svelte').then((m) => m.default),
			files: ['./avatar/avatar-white.svelte'],
			raw: () => import('./avatar/avatar-white.svelte?raw').then((m) => m.default)
		},
		'avatar-tooltip': {
			name: 'avatar-tooltip',
			type: 'components:example',
			registryDependencies: ['avatar'],
			component: () => import('./avatar/avatar-tooltip.svelte').then((m) => m.default),
			files: ['./avatar/avatar-tooltip.svelte'],
			raw: () => import('./avatar/avatar-tooltip.svelte?raw').then((m) => m.default)
		},
	},
	list_group: {
		'list-basic': {
			name: 'list-basic',
			type: 'components:example',
			registryDependencies: ['list-group'],
			component: () => import('./list-group/list-basic.svelte').then((m) => m.default),
			files: ['./list-group/list-basic.svelte'],
			raw: () => import('./list-group/list-basic.svelte?raw').then((m) => m.default)
		},
		'list-icon': {
			name: 'list-icon',
			type: 'components:example',
			registryDependencies: ['list-group'],
			component: () => import('./list-group/list-icon.svelte').then((m) => m.default),
			files: ['./list-group/list-icon.svelte'],
			raw: () => import('./list-group/list-icon.svelte?raw').then((m) => m.default)
		},
		'list-links': {
			name: 'list-links',
			type: 'components:example',
			registryDependencies: ['list-group'],
			component: () => import('./list-group/list-links.svelte').then((m) => m.default),
			files: ['./list-group/list-links.svelte'],
			raw: () => import('./list-group/list-links.svelte?raw').then((m) => m.default)
		},
		'list-button': {
			name: 'list-button',
			type: 'components:example',
			registryDependencies: ['list-group'],
			component: () => import('./list-group/list-button.svelte').then((m) => m.default),
			files: ['./list-group/list-button.svelte'],
			raw: () => import('./list-group/list-button.svelte?raw').then((m) => m.default)
		},
		'list-striped': {
			name: 'list-striped',
			type: 'components:example',
			registryDependencies: ['list-group'],
			component: () => import('./list-group/list-striped.svelte').then((m) => m.default),
			files: ['./list-group/list-striped.svelte'],
			raw: () => import('./list-group/list-striped.svelte?raw').then((m) => m.default)
		},
		'list-flush': {
			name: 'list-flush',
			type: 'components:example',
			registryDependencies: ['list-group'],
			component: () => import('./list-group/list-flush.svelte').then((m) => m.default),
			files: ['./list-group/list-flush.svelte'],
			raw: () => import('./list-group/list-flush.svelte?raw').then((m) => m.default)
		},
		'list-no-gutters': {
			name: 'list-no-gutters',
			type: 'components:example',
			registryDependencies: ['list-group'],
			component: () => import('./list-group/list-no-gutters.svelte').then((m) => m.default),
			files: ['./list-group/list-no-gutters.svelte'],
			raw: () => import('./list-group/list-no-gutters.svelte?raw').then((m) => m.default)
		},
		'list-horizontal': {
			name: 'list-horizontal',
			type: 'components:example',
			registryDependencies: ['list-group'],
			component: () => import('./list-group/list-horizontal.svelte').then((m) => m.default),
			files: ['./list-group/list-horizontal.svelte'],
			raw: () => import('./list-group/list-horizontal.svelte?raw').then((m) => m.default)
		},
		'list-badge': {
			name: 'list-badge',
			type: 'components:example',
			registryDependencies: ['list-group'],
			component: () => import('./list-group/list-badge.svelte').then((m) => m.default),
			files: ['./list-group/list-badge.svelte'],
			raw: () => import('./list-group/list-badge.svelte?raw').then((m) => m.default)
		},
		'list-invoice': {
			name: 'list-invoice',
			type: 'components:example',
			registryDependencies: ['list-group'],
			component: () => import('./list-group/list-invoice.svelte').then((m) => m.default),
			files: ['./list-group/list-invoice.svelte'],
			raw: () => import('./list-group/list-invoice.svelte?raw').then((m) => m.default)
		},
		'list-example': {
			name: 'list-example',
			type: 'components:example',
			registryDependencies: ['list-group'],
			component: () => import('./list-group/list-example.svelte').then((m) => m.default),
			files: ['./list-group/list-example.svelte'],
			raw: () => import('./list-group/list-example.svelte?raw').then((m) => m.default)
		},
	},
	lists: {
		'lists-types': {
			name: 'lists-types',
			type: 'components:example',
			registryDependencies: ['lists'],
			component: () => import('./lists/lists-types.svelte').then((m) => m.default),
			files: ['./lists/lists-types.svelte'],
			raw: () => import('./lists/lists-types.svelte?raw').then((m) => m.default)
		},
		'lists-marker': {
			name: 'lists-marker',
			type: 'components:example',
			registryDependencies: ['lists'],
			component: () => import('./lists/lists-marker.svelte').then((m) => m.default),
			files: ['./lists/lists-marker.svelte'],
			raw: () => import('./lists/lists-marker.svelte?raw').then((m) => m.default)
		},
		'lists-separator': {
			name: 'lists-separator',
			type: 'components:example',
			registryDependencies: ['lists'],
			component: () => import('./lists/lists-separator.svelte').then((m) => m.default),
			files: ['./lists/lists-separator.svelte'],
			raw: () => import('./lists/lists-separator.svelte?raw').then((m) => m.default)
		},
		'lists-checked': {
			name: 'lists-checked',
			type: 'components:example',
			registryDependencies: ['lists'],
			component: () => import('./lists/lists-checked.svelte').then((m) => m.default),
			files: ['./lists/lists-checked.svelte'],
			raw: () => import('./lists/lists-checked.svelte?raw').then((m) => m.default)
		},
	},
};
