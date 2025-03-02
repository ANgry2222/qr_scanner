import { ScanListItem } from "@/pages/home";
import { MouseEvent, useRef, useState } from "react";
import styles from "./ScanResult.module.scss";

interface IProps {
	scanResult: ScanListItem;
	onDelete: () => void;
}

export default function ScanResult({ scanResult, onDelete }: IProps) {
	const { scanSum, scanDate, scanTime } = scanResult;
	const [currentX, setCurrentX] = useState<number>(0);
	const [isDragging, setIsDragging] = useState<boolean>(false);
	const [startX, setStartX] = useState<number>(0);

	const elementContainerRef = useRef<HTMLDivElement | null>(null);

	const handleMouseDown = (e: MouseEvent) => {
		setStartX(e.clientX - 5);
		setIsDragging(true);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
		if (currentX > (elementContainerRef.current?.clientWidth || 3) * 0.5) {
			onDelete();
		}
		setCurrentX(0);
		setStartX(0);
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (isDragging) {
			if (e.clientX - 5 > startX) return;
			setCurrentX(Math.abs(startX - e.clientX + 5));
		}
	};

	const handleMouseLeave = () => {
		if (isDragging) {
			setIsDragging(false);
			setCurrentX(0);
			setStartX(0);
		}
	};

	return (
		<div
			ref={elementContainerRef}
			className={styles.list_element_container}
		>
			<div
				onMouseDown={(event) => handleMouseDown(event)}
				onMouseUp={handleMouseUp}
				onMouseMove={(event) => handleMouseMove(event)}
				onMouseLeave={handleMouseLeave}
				style={{
					left: `-${currentX}px`, //rename to deltaX
				}}
				className={styles.list_element}
			>
				<span className={styles.list_element__sum}>{scanSum || 0}</span>
				<span className={styles.list_element__date}>{scanDate}</span>
				<span className={styles.list_element__time}>{scanTime}</span>
				<svg
					style={{
						opacity: `${
							currentX /
							((elementContainerRef.current?.clientWidth || 3) *
								0.3)
						}`,
					}}
					className={styles.delete_swipe_indicator}
					width="45"
					height="52"
					viewBox="0 0 45 52"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M19.2857 0C15.75 0 12.8571 2.89286 12.8571 6.42857H6.42857C2.89286 6.42857 0 9.32143 0 12.8571H45C45 9.32143 42.1071 6.42857 38.5714 6.42857H32.1429C32.1429 2.89286 29.25 0 25.7143 0H19.2857ZM6.42857 19.2857V50.2071C6.42857 50.9143 6.94286 51.4286 7.65 51.4286H37.4143C38.1214 51.4286 38.6357 50.9143 38.6357 50.2071V19.2857H32.2071V41.7857C32.2071 43.5857 30.7929 45 28.9929 45C27.1929 45 25.7786 43.5857 25.7786 41.7857V19.2857H19.35V41.7857C19.35 43.5857 17.9357 45 16.1357 45C14.3357 45 12.9214 43.5857 12.9214 41.7857V19.2857H6.49286H6.42857Z"
						fill={
							currentX >
							(elementContainerRef.current?.clientWidth || 3) *
								0.5
								? "red"
								: "white"
						}
					/>
				</svg>
			</div>
		</div>
	);
}
