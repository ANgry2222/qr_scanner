import { ScanListItem } from "@/pages/home";
import styles from "./TotalSum.module.scss";
import { useAppSelector } from "@/hooks/ReduxHooks";

export default function TotalSum() {
	const items = useAppSelector((state) => state.scanItems.items);

	const calculateSum = (items: ScanListItem[]) => {
		const sum = items.reduce(
			(total, item) => total + parseFloat(item.scanSum),
			0
		);
		return sum.toFixed(2);
	};

	return (
		<div className={styles.total_sum__container}>
			<span>Общая сумма: {calculateSum(items)}</span>
		</div>
	);
}
