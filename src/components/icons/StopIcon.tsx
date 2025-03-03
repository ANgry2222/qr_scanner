import { IconProps } from "./PlusIcon";

export const StopIcon = (props: IconProps) => {
	return (
		<svg
			className={props.className}
			onClick={props.onClick}
			viewBox="0 0 53 53"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_d_701_667)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M26.5 45C38.9264 45 49 34.9264 49 22.5C49 10.0736 38.9264 0 26.5 0C14.0736 0 4 10.0736 4 22.5C4 34.9264 14.0736 45 26.5 45ZM18.6033 11.5858C17.8222 10.8047 16.5559 10.8047 15.7748 11.5858C14.9938 12.3668 14.9938 13.6332 15.7748 14.4142L23.6716 22.3109L15.5858 30.3967C14.8047 31.1778 14.8047 32.4441 15.5858 33.2252C16.3668 34.0062 17.6332 34.0062 18.4142 33.2252L26.5 25.1394L34.5858 33.2252C35.3668 34.0062 36.6332 34.0062 37.4142 33.2252C38.1953 32.4441 38.1953 31.1778 37.4142 30.3967L29.3284 22.3109L37.2252 14.4142C38.0062 13.6332 38.0062 12.3668 37.2252 11.5858C36.4441 10.8047 35.1778 10.8047 34.3967 11.5858L26.5 19.4825L18.6033 11.5858Z"
					fill="white"
				/>
			</g>
			<defs>
				<filter
					id="filter0_d_701_667"
					x="0"
					y="0"
					width="53"
					height="53"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_701_667"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_701_667"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
};
