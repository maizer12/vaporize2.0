declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.module.scss' {
	const content: { [className: string]: string };
	export = content;
}
