import ResultsSection from "@/components/ResultsSection";
import ScanSection from "@/components/ScanSection";
import Modal from "@/components/Modal";
import { Provider } from "react-redux";
import { store } from "../components/store";
import { isMobile } from "react-device-detect";
import DownloadResultsButton from "@/components/DownloadResultsButton/DownloadResultsButton";

export interface ScanListItem {
	scanSum: string;
	scanDate: string;
	scanTime: string;
}

export default function Home() {
	return (
		<Provider store={store}>
			<div className="app_container">
				<Modal />
				<ScanSection />
				<ResultsSection />
				<DownloadResultsButton />
			</div>
		</Provider>
	);
}
