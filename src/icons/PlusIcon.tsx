export interface IconProps {
	className: string;
	onClick: () => void;
}

export const PlusIcon = (props: IconProps) => {
	return (
		<svg
			className={props.className}
			onClick={props.onClick}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2 12H22"
				stroke="#2F4157"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<path
				d="M12 22L12 2"
				stroke="#2F4157"
				strokeWidth="3"
				strokeLinecap="round"
			/>
		</svg>
	);
};
