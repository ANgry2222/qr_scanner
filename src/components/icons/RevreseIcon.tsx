import { IconProps } from "./PlusIcon";

export const ReverseIcon = (props: IconProps) => {
	return (
		<svg
			className={props.className}
			onClick={props.onClick}
			viewBox="0 0 53 53"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_d_701_666)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M49 22.5C49 34.9265 38.9268 45 26.5 45C14.0732 45 4 34.9265 4 22.5C4 10.0735 14.0732 0 26.5 0C38.9268 0 49 10.0735 49 22.5ZM17.5 23.5V25C17.5 27.426 19.0537 29.6633 21.7119 30.782C24.3516 31.8931 28.1143 31.8823 32.2627 29.5422C32.9844 29.1353 33.8994 29.3901 34.3066 30.1118C34.543 30.531 34.5557 31.0154 34.3838 31.4277C34.2598 31.7249 34.04 31.9846 33.7373 32.1553C28.8994 34.8838 24.1621 35.0681 20.5479 33.5471C16.9531 32.0339 14.5 28.8125 14.5 25V23.5H11.3564C10.4854 23.5 10.0303 22.4619 10.6221 21.8215L15.2656 16.7952C15.3008 16.7571 15.3379 16.7224 15.377 16.6909C15.4092 16.6655 15.4424 16.6423 15.4766 16.6213C15.5674 16.5654 15.665 16.5254 15.7656 16.5015C16.1045 16.4204 16.4785 16.5183 16.7344 16.7952L21.3779 21.8215C21.9697 22.4619 21.5146 23.5 20.6436 23.5H17.5ZM35.5 21.5V20C35.5 17.574 33.9463 15.3367 31.2881 14.218C28.6484 13.1069 24.8857 13.1177 20.7373 15.4578C20.0156 15.8647 19.1006 15.6099 18.6934 14.8882C18.4893 14.5271 18.4512 14.1177 18.5547 13.7476C18.6582 13.3782 18.9023 13.0481 19.2627 12.8447C24.1006 10.1162 28.8379 9.93188 32.4521 11.4529C36.0469 12.9661 38.5 16.1875 38.5 20V21.5H41.6436C41.9688 21.5 42.2363 21.6445 42.4131 21.8591C42.709 22.2195 42.749 22.7771 42.3779 23.1785L37.7344 28.2048C37.3389 28.6333 36.6611 28.6333 36.2656 28.2048L31.6221 23.1785C31.0303 22.5381 31.4854 21.5 32.3564 21.5H35.5Z"
					fill="white"
				/>
			</g>
			<defs>
				<filter
					id="filter0_d_701_666"
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
						result="effect1_dropShadow_701_666"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_701_666"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
};
