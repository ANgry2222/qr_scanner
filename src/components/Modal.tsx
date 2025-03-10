import { createPortal } from "react-dom";
import ModalForm from "./ModalForm/ModalForm";
import { KeyboardEvent, MouseEvent, useEffect, useRef } from "react";
import { closeModal } from "./slices/ModalSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/ReduxHooks";

export default function Modal() {
	const modalState = useAppSelector((state) => state.modal.isOpen);

	const dispatch = useAppDispatch();
	const dialogRef = useRef<HTMLDialogElement | null>(null);
	useEffect(() => {
		if (modalState) {
			dialogRef.current?.showModal();
		} else {
			dialogRef.current?.close();
		}
	}, [modalState]);

	const closeModalByKeyPress = (event: KeyboardEvent) => {
		if (event.key === "Escape") {
			dispatch(closeModal());
		}
	};

	const closeModalByClick = () => {
		dispatch(closeModal());
	};

	const modalClickEvent = (event: MouseEvent) => {
		event.stopPropagation();
	};

	return modalState
		? createPortal(
				<dialog
					ref={dialogRef}
					autoFocus
					onKeyDown={(event) => closeModalByKeyPress(event)}
					onClick={closeModalByClick}
					className="open_dialog"
				>
					<div
						onClick={(event) => modalClickEvent(event)}
						style={{ gridColumn: 2, gridRow: 2 }}
					>
						<ModalForm />
					</div>
				</dialog>,
				document.body
		  )
		: null;
}
