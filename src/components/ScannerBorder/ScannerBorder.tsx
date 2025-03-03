import CameraButtons from "../CameraButtons/CameraButtons";
import styles from "./ScannerBorder.module.scss";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/hooks/ReduxHooks";
import { BorderIcon } from "../icons/BorderIcon";

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
			<BorderIcon
				className={styles.top_left_element}
				pathStylesClassName={borderStyles}
			/>
			<BorderIcon
				className={styles.top_right_element}
				pathStylesClassName={borderStyles}
			/>
			<BorderIcon
				className={styles.bottom_left_element}
				pathStylesClassName={borderStyles}
			/>
			<BorderIcon
				className={styles.bottom_right_element}
				pathStylesClassName={borderStyles}
			/>
		</div>
	);
}
