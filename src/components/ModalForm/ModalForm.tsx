import { FormEvent, useRef, useState } from "react";
import styles from "./ModalForm.module.scss";
import { closeModal } from "../slices/ModalSlice";
import { addItem } from "../slices/ItemListSlice";
import { useAppDispatch } from "@/hooks/ReduxHooks";

export default function Modal() {
	const dispatch = useAppDispatch();

	const [formData, setFormData] = useState({
		field1: "",
		field2: "",
		field3: "",
	});

	const sumFieldRef = useRef<HTMLInputElement | null>(null);
	const dateFieldRef = useRef<HTMLInputElement | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (
			name === "field1" &&
			sumFieldRef.current?.classList.contains(styles.input_error)
		) {
			sumFieldRef.current?.classList.remove(styles.input_error);
		}

		if (
			name === "field3" &&
			dateFieldRef.current?.classList.contains(styles.input_error)
		) {
			dateFieldRef.current?.classList.remove(styles.input_error);
		}
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const closeForm = () => {
		setFormData({
			field1: "",
			field2: "",
			field3: "",
		});
		dispatch(closeModal());
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (formData.field1 && formData.field3) {
			let formattedSum = formData.field1;
			if (!formattedSum.includes(".")) {
				formattedSum += ".00";
			}

			const formattedDate = `${formData.field3.split("-")[2]}.${
				formData.field3.split("-")[1]
			}.${formData.field3.split("-")[0].substring(0, 4)}`;

			dispatch(
				addItem({
					scanSum: formattedSum,
					scanTime: formData.field2 || "00:00",
					scanDate: formattedDate,
				})
			);

			closeForm();
		} else {
			if (!formData.field1) {
				sumFieldRef.current?.classList.add(styles.input_error);
			}
			if (!formData.field3) {
				dateFieldRef.current?.classList.add(styles.input_error);
			}
		}
	};

	return (
		<div className={styles.modal_form_section}>
			<p className={styles.form_header}>
				Добавить покупку
				<br />
				вручную
			</p>
			<svg
				onClick={closeForm}
				className={styles.close_btn}
				fill="#2F4157"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#clip0_35058_777)">
					<path d="M20.4792 3.51199C19.3657 2.39641 18.0429 1.51171 16.5866 0.90868C15.1304 0.305652 13.5694 -0.00383162 11.9932 -0.00200613C5.36519 -0.00200613 -0.0078125 5.37099 -0.0078125 11.999C-0.0078125 15.313 1.33619 18.314 3.50819 20.486C4.62165 21.6016 5.94447 22.4863 7.40073 23.0893C8.85699 23.6923 10.418 24.0018 11.9942 24C18.6222 24 23.9952 18.627 23.9952 11.999C23.9952 8.68499 22.6512 5.68399 20.4792 3.51199ZM18.9372 18.939C18.026 19.8516 16.9437 20.5754 15.7523 21.069C14.5609 21.5625 13.2838 21.816 11.9942 21.815C6.57119 21.815 2.17519 17.419 2.17519 11.996C2.17417 10.7064 2.42769 9.42928 2.92122 8.23786C3.41474 7.04644 4.13856 5.96413 5.05119 5.05299C5.96221 4.14049 7.04435 3.41674 8.23559 2.92322C9.42683 2.4297 10.7038 2.17611 11.9932 2.17699C17.4152 2.17699 21.8112 6.57299 21.8112 11.995C21.8121 13.2844 21.5585 14.5613 21.065 15.7526C20.5714 16.9438 19.8477 18.026 18.9352 18.937L18.9372 18.939Z" />
					<path d="M13.5375 12L17.3925 8.14499C17.5827 7.93772 17.6855 7.66501 17.6794 7.38379C17.6733 7.10257 17.5588 6.83457 17.3598 6.63574C17.1609 6.4369 16.8928 6.3226 16.6116 6.31668C16.3303 6.31077 16.0577 6.4137 15.8505 6.60399L15.8515 6.60299L11.9965 10.458L8.14154 6.60299C7.93427 6.41283 7.66156 6.31008 7.38034 6.31617C7.09912 6.32227 6.83112 6.43675 6.63229 6.63572C6.43345 6.83468 6.31915 7.10275 6.31323 7.38398C6.30732 7.6652 6.41025 7.93784 6.60054 8.14499L6.59954 8.14399L10.4545 11.999L6.59954 15.854C6.49108 15.9535 6.40387 16.0739 6.34318 16.208C6.28248 16.3421 6.24954 16.4871 6.24635 16.6343C6.24316 16.7814 6.26978 16.9277 6.32461 17.0643C6.37944 17.2009 6.46134 17.325 6.56539 17.4291C6.66944 17.5332 6.79348 17.6152 6.93004 17.6701C7.06661 17.7251 7.21287 17.7518 7.36004 17.7487C7.5072 17.7456 7.65221 17.7127 7.78635 17.6521C7.92048 17.5915 8.04096 17.5044 8.14054 17.396L8.14154 17.395L11.9965 13.54L15.8515 17.395C15.951 17.5035 16.0715 17.5907 16.2056 17.6514C16.3397 17.7121 16.4847 17.745 16.6318 17.7482C16.779 17.7514 16.9253 17.7248 17.0619 17.6699C17.1985 17.6151 17.3226 17.5332 17.4267 17.4291C17.5308 17.3251 17.6128 17.2011 17.6677 17.0645C17.7226 16.9279 17.7493 16.7817 17.7462 16.6345C17.7431 16.4873 17.7103 16.3423 17.6497 16.2082C17.5891 16.0741 17.5019 15.9536 17.3935 15.854L17.3925 15.853L13.5375 12Z" />
				</g>
			</svg>
			<form className={styles.modal_form__form} onSubmit={handleSubmit}>
				<div className={styles.field_container}>
					<p className={styles.field_container__p}>Сумма покупки</p>
					<input
						ref={sumFieldRef}
						className={styles.field_container__input}
						maxLength={10}
						type="number"
						name="field1"
						value={formData.field1}
						onChange={handleChange}
						placeholder="12345.67"
					/>
				</div>
				<div className={styles.field_container}>
					<p className={styles.field_container__p}>Время покупки</p>
					<input
						className={styles.field_container__input}
						maxLength={5}
						type="time"
						name="field2"
						value={formData.field2}
						onChange={handleChange}
					/>
				</div>
				<div className={styles.field_container}>
					<p className={styles.field_container__p}>Дата покупки</p>
					<input
						ref={dateFieldRef}
						className={styles.field_container__input}
						maxLength={8}
						type="date"
						name="field3"
						value={formData.field3}
						onChange={handleChange}
						placeholder="ДД.ММ.ГГГГ"
					/>
				</div>

				<button className={styles.submit_button} type="submit">
					Добавить
				</button>
			</form>
		</div>
	);
}
