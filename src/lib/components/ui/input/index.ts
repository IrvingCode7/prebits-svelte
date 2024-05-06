import { type VariantProps, tv } from 'tailwind-variants';
import Root from "./input.svelte";

export const inputVariants = tv({
	base : 'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
	variants : {
		variant : {
            default : 'rounded-lg ',
            gray : 'peer bg-gray-100 border-transparent dark:bg-neutral-700 dark:border-transparent',
            underline : 'peer py-3 bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 dark:border-b-neutral-700 dark:focus:border-b-neutral-600'
        },
        size : {
            sm : 'py-2 px-3',
            md : 'py-3 px-4',
            lg : 'p-4 sm:p-5',
        },
        pilled : {
            true : 'rounded-full'
        }
    },
})

export type Variant = VariantProps<typeof inputVariants>['variant'];
export type Size = VariantProps<typeof inputVariants>['size'];
export type Pilled= VariantProps<typeof inputVariants>['pilled'];


export type FormInputEvent<T extends Event = Event> = T & {
	currentTarget: EventTarget & HTMLInputElement;
};
export type InputEvents = {
	blur: FormInputEvent<FocusEvent>;
	change: FormInputEvent<Event>;
	click: FormInputEvent<MouseEvent>;
	focus: FormInputEvent<FocusEvent>;
	focusin: FormInputEvent<FocusEvent>;
	focusout: FormInputEvent<FocusEvent>;
	keydown: FormInputEvent<KeyboardEvent>;
	keypress: FormInputEvent<KeyboardEvent>;
	keyup: FormInputEvent<KeyboardEvent>;
	mouseover: FormInputEvent<MouseEvent>;
	mouseenter: FormInputEvent<MouseEvent>;
	mouseleave: FormInputEvent<MouseEvent>;
	paste: FormInputEvent<ClipboardEvent>;
	input: FormInputEvent<InputEvent>;
	wheel: FormInputEvent<WheelEvent>;
};

export {
	Root,
	//
	Root as Input,
};
