interface IBorderIconProps {
	className: string;
	pathStylesClassName: string;
}

export const BorderIcon = (props: IBorderIconProps) => {
	return (
		<svg
			className={props.className}
			width="85"
			height="85"
			viewBox="0 0 85 85"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				className={props.pathStylesClassName}
				d="M0 5C1.20706e-07 2.23858 2.23858 -1.20706e-07 5 0C7.76142 1.20706e-07 10 2.23858 10 5L0 5ZM10 5L10 85L-3.49691e-06 85L0 5L10 5Z"
				fill="white"
			/>
			<path
				className={props.pathStylesClassName}
				d="M80 75C82.7614 75 85 77.2386 85 80C85 82.7614 82.7614 85 80 85L80 75ZM80 85L-4.37114e-07 85L4.37114e-07 75L80 75L80 85Z"
				fill="white"
			/>
		</svg>
	);
};
