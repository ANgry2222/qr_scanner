import { ScanListItem } from "@/pages/home";
import { MouseEvent, useRef, useState } from "react";
import styles from "./ScanResult.module.scss";
import { DeleteSwipeIcon } from "../icons/DeleteSwipeIcon";

interface IProps {
	scanResult: ScanListItem;
	onDelete: () => void;
}

export default function ScanResult({ scanResult, onDelete }: IProps) {
	const { scanSum, scanDate, scanTime } = scanResult;
	const [deltaX, setDeltaX] = useState<number>(0);
	const [isDragging, setIsDragging] = useState<boolean>(false);
	const [startX, setStartX] = useState<number>(0);

	const elementContainerRef = useRef<HTMLDivElement | null>(null);

	const handleMouseDown = (e: MouseEvent) => {
		setStartX(e.clientX - 5);
		setIsDragging(true);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
		if (deltaX > (elementContainerRef.current?.clientWidth || 3) * 0.5) {
			onDelete();
		}
		setDeltaX(0);
		setStartX(0);
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (isDragging) {
			if (e.clientX - 5 > startX) return;
			setDeltaX(Math.abs(startX - e.clientX + 5));
		}
	};

	const handleMouseLeave = () => {
		if (isDragging) {
			setIsDragging(false);
			setDeltaX(0);
			setStartX(0);
		}
	};

	const handleTouchStart = (event: React.TouchEvent) => {
		setStartX(event.touches[0].clientX - 5);
		setIsDragging(true);
	};

	const handleTouchEnd = () => {
		setIsDragging(false);
		if (deltaX > (elementContainerRef.current?.clientWidth || 3) * 0.5) {
			onDelete();
		}
		setDeltaX(0);
		setStartX(0);
	};

	const handleTouchMove = (event: React.TouchEvent) => {
		if (isDragging) {
			if (event.touches[0].clientX - 5 > startX) return;
			setDeltaX(Math.abs(startX - event.touches[0].clientX + 5));
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
				onTouchStart={(event) => handleTouchStart(event)}
				onTouchEnd={handleTouchEnd}
				onTouchMove={(event) => handleTouchMove(event)}
				style={{
					left: `-${deltaX}px`,
				}}
				className={styles.list_element}
			>
				<span className={styles.list_element__sum}>{scanSum || 0}</span>
				<span className={styles.list_element__date}>{scanDate}</span>
				<span className={styles.list_element__time}>{scanTime}</span>
				<DeleteSwipeIcon
					iconClassName={styles.delete_swipe_indicator}
					iconFill={
						deltaX >
						(elementContainerRef.current?.clientWidth || 3) * 0.5
							? "red"
							: "white"
					}
					opacity={
						deltaX /
						((elementContainerRef.current?.clientWidth || 3) * 0.3)
					}
				/>
			</div>
		</div>
	);
}
