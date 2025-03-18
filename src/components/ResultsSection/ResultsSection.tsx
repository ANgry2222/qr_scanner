import ResultsTable from "../ResultsTable/ResultsTable";
import ScanResult from "../ScanResult/ScanResult";
import TotalSum from "../TotalSum/TotalSum";
import { removeItemByIndex } from "../../store/slices/ItemListSlice";
import { ScanListItem } from "@/pages";
import { useAppDispatch, useAppSelector } from "@/hooks/ReduxHooks";
import styles from "./ResultsSection.module.scss";

export default function ResultSection() {
	const dispatch = useAppDispatch();
	const items = useAppSelector((state) => state.scanItems.items);

	return (
		<div className={styles.results_container}>
			<ResultsTable>
				{items.map((item: ScanListItem, index: number) => (
					<ScanResult
						key={index}
						scanResult={item}
						onDelete={() => dispatch(removeItemByIndex(index))}
					/>
				))}
			</ResultsTable>
			<TotalSum />
		</div>
	);
}
