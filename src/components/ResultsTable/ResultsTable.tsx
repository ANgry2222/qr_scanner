import styles from "./ResultsTable.module.scss";
import { openModal } from "../../store/slices/ModalSlice";
import { clearItemsList } from "../../store/slices/ItemListSlice";
import { useAppDispatch } from "@/hooks/ReduxHooks";
import { PlusIcon } from "../../icons/PlusIcon";
import { DeleteIcon } from "../../icons/DeleteIcon";
import { ReactNode } from "react";

export default function ResultsTable({ children }: { children: ReactNode[] }) {
	const dispatch = useAppDispatch();

	return (
		<div className={styles.results_table}>
			<div className={styles.results_table__table_header}>
				<p className={styles.table_header__p}>
					Результаты сканирования
				</p>
				<PlusIcon
					className={styles.table_header__add_item_button}
					onClick={() => dispatch(openModal())}
				/>
				<DeleteIcon
					className={styles.table_header__clear_all_button}
					onClick={() => dispatch(clearItemsList())}
				/>
			</div>
			<div className={styles.results_table__items_list}>
				{children.length > 0 ? (
					children
				) : (
					<div className={styles.results_table__placeholder}>
						Добавьте результат вручную или отсканируйте QR-код
					</div>
				)}
			</div>
		</div>
	);
}
