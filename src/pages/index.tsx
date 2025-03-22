import ResultsSection from "@/components/ResultsSection/ResultsSection";
import ScanSection from "@/components/ScanSection/ScanSection";
import Modal from "@/components/Modal/Modal";
import DownloadResultsButton from "@/components/DownloadResultsButton/DownloadResultsButton";
import { Provider } from "react-redux";
import { persistor, store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";

export interface ScanListItem {
	scanSum: string;
	scanDate: string;
	scanTime: string;
}

export default function Home() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<div className="app_container">
					<Modal />
					<ScanSection />
					<ResultsSection />
					<DownloadResultsButton />
				</div>
			</PersistGate>
		</Provider>
	);
}
