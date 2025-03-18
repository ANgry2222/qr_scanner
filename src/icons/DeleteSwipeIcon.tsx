interface SwipeIconProps {
	iconClassName: string;
	iconFill: string;
	opacity: number;
}

export const DeleteSwipeIcon = (props: SwipeIconProps) => {
	return (
		<svg
			style={{ opacity: `${props.opacity}` }}
			className={props.iconClassName}
			viewBox="0 0 45 52"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M19.2857 0C15.75 0 12.8571 2.89286 12.8571 6.42857H6.42857C2.89286 6.42857 0 9.32143 0 12.8571H45C45 9.32143 42.1071 6.42857 38.5714 6.42857H32.1429C32.1429 2.89286 29.25 0 25.7143 0H19.2857ZM6.42857 19.2857V50.2071C6.42857 50.9143 6.94286 51.4286 7.65 51.4286H37.4143C38.1214 51.4286 38.6357 50.9143 38.6357 50.2071V19.2857H32.2071V41.7857C32.2071 43.5857 30.7929 45 28.9929 45C27.1929 45 25.7786 43.5857 25.7786 41.7857V19.2857H19.35V41.7857C19.35 43.5857 17.9357 45 16.1357 45C14.3357 45 12.9214 43.5857 12.9214 41.7857V19.2857H6.49286H6.42857Z"
				fill={props.iconFill}
			/>
		</svg>
	);
};
