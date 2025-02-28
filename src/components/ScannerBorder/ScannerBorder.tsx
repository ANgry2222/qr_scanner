import CameraButtons from "../CameraButtons";
import styles from "./ScannerBorder.module.scss";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/hooks/ReduxHooks";

export default function ScannerBorder() {
	const isAnimating = useAppSelector((state) => state.animate.isAnimating);
	const [borderStyles, setBorderStyles] = useState<string>(
		styles.border_element
	);

	useEffect(() => {
		if (isAnimating) {
			setBorderStyles(`${styles.border_element} ${styles.animation}`);
		} else {
			setBorderStyles(styles.border_element);
		}
	}, [isAnimating]);

	return (
		<div className={styles.overlay_container}>
			<div className={styles.buttons_panel}>
				<CameraButtons />
			</div>

			<svg
				className={styles.top_left_element}
				width="85"
				height="85"
				viewBox="0 0 85 85"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					className={borderStyles}
					d="M0 5C1.20706e-07 2.23858 2.23858 -1.20706e-07 5 0C7.76142 1.20706e-07 10 2.23858 10 5L0 5ZM10 5L10 85L-3.49691e-06 85L0 5L10 5Z"
					fill="white"
				/>
				<path
					className={borderStyles}
					d="M80 75C82.7614 75 85 77.2386 85 80C85 82.7614 82.7614 85 80 85L80 75ZM80 85L-4.37114e-07 85L4.37114e-07 75L80 75L80 85Z"
					fill="white"
				/>
			</svg>
			<svg
				className={styles.top_right_element}
				width="85"
				height="85"
				viewBox="0 0 85 85"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0 5C1.20706e-07 2.23858 2.23858 -1.20706e-07 5 0C7.76142 1.20706e-07 10 2.23858 10 5L0 5ZM10 5L10 85L-3.49691e-06 85L0 5L10 5Z"
					className={borderStyles}
				/>
				<path
					d="M80 75C82.7614 75 85 77.2386 85 80C85 82.7614 82.7614 85 80 85L80 75ZM80 85L-4.37114e-07 85L4.37114e-07 75L80 75L80 85Z"
					className={borderStyles}
				/>
			</svg>
			<svg
				className={styles.bottom_left_element}
				width="85"
				height="85"
				viewBox="0 0 85 85"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0 5C1.20706e-07 2.23858 2.23858 -1.20706e-07 5 0C7.76142 1.20706e-07 10 2.23858 10 5L0 5ZM10 5L10 85L-3.49691e-06 85L0 5L10 5Z"
					className={borderStyles}
				/>
				<path
					d="M80 75C82.7614 75 85 77.2386 85 80C85 82.7614 82.7614 85 80 85L80 75ZM80 85L-4.37114e-07 85L4.37114e-07 75L80 75L80 85Z"
					className={borderStyles}
				/>
			</svg>
			<svg
				className={styles.bottom_right_element}
				width="85"
				height="85"
				viewBox="0 0 85 85"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0 5C1.20706e-07 2.23858 2.23858 -1.20706e-07 5 0C7.76142 1.20706e-07 10 2.23858 10 5L0 5ZM10 5L10 85L-3.49691e-06 85L0 5L10 5Z"
					className={borderStyles}
				/>
				<path
					d="M80 75C82.7614 75 85 77.2386 85 80C85 82.7614 82.7614 85 80 85L80 75ZM80 85L-4.37114e-07 85L4.37114e-07 75L80 75L80 85Z"
					className={borderStyles}
				/>
			</svg>
		</div>
	);
}
