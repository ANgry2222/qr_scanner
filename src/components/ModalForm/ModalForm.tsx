import { FormEvent, useRef, useState } from "react";
import styles from "./ModalForm.module.scss";
import { closeModal } from "../slices/ModalSlice";
import { addItem } from "../slices/ItemListSlice";
import { useAppDispatch } from "@/hooks/ReduxHooks";
import { LocalizeDate } from "../ProcessScanData";

export default function Modal() {
	const sumFieldRef = useRef<HTMLInputElement | null>(null);
	const dispatch = useAppDispatch();
	const [formData, setFormData] = useState({
		sumField: "",
		timeField: "00:00",
		dateField: new Date().toISOString().split("T")[0],
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (
			name === "sumField" &&
			sumFieldRef.current?.classList.contains(styles.input_error)
		) {
			sumFieldRef.current?.classList.remove(styles.input_error);
		}

		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const closeForm = () => {
		setFormData({
			sumField: "",
			timeField: "",
			dateField: "",
		});
		dispatch(closeModal());
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (formData.sumField) {
			let formattedSum = formData.sumField;
			if (!formattedSum.includes(".")) {
				formattedSum += ".00";
			}

			dispatch(
				addItem({
					scanSum: formattedSum,
					scanTime: formData.timeField,
					scanDate: LocalizeDate(formData.dateField),
				})
			);
			closeForm();
		} else {
			if (!formData.sumField) {
				sumFieldRef.current?.classList.add(styles.input_error);
			}
		}
	};

	return (
		<div className={styles.modal_form_section}>
			<p className={styles.form_header}>Добавить покупку</p>
			<form
				className={styles.modal_form__form}
				onSubmit={(event) => handleSubmit(event)}
			>
				<div className={styles.field_container}>
					<p className={styles.field_container__p}>Сумма покупки</p>
					<input
						ref={sumFieldRef}
						className={styles.field_container__input}
						maxLength={9}
						type="number"
						name="sumField"
						value={formData.sumField}
						onChange={handleChange}
						placeholder="1000.00"
						min={0}
						max={999999}
					/>
				</div>
				<div className={styles.field_container}>
					<p className={styles.field_container__p}>Время покупки</p>
					<input
						className={styles.field_container__input}
						type="time"
						name="timeField"
						value={formData.timeField}
						onChange={handleChange}
					/>
				</div>
				<div className={styles.field_container}>
					<p className={styles.field_container__p}>Дата покупки</p>
					<input
						className={styles.field_container__input}
						type="date"
						name="dateField"
						min={"2010-01-01"}
						max={new Date().toISOString().split("T")[0]}
						value={formData.dateField}
						onChange={handleChange}
					/>
				</div>

				<button className={styles.submit_button} type="submit">
					Добавить
				</button>
			</form>
		</div>
	);
}
