import ResultsTable from "./ResultsTable/ResultsTable";
import ScanResult from "./ScanResult/ScanResult";
import TotalSum from "./TotalSum/TotalSum";
import { removeItemByIndex } from "./slices/ItemListSlice";
import { ScanListItem } from "@/pages/home";
import { useAppDispatch, useAppSelector } from "@/hooks/ReduxHooks";

export default function ResultSection() {
	const dispatch = useAppDispatch();
	const items = useAppSelector((state) => state.scanItems.items);

	return (
		<div className="results_container">
			<ResultsTable>
				{items?.map((item: ScanListItem, index: number) => (
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
