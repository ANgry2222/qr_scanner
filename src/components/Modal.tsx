import { createPortal } from "react-dom";
import ModalForm from "./ModalForm/ModalForm";
import { KeyboardEvent, useEffect, useRef } from "react";
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

	return modalState
		? createPortal(
				<dialog
					ref={dialogRef}
					autoFocus
					onKeyDown={(event) => closeModalByKeyPress(event)}
					className="open_dialog"
				>
					<ModalForm />
				</dialog>,
				document.body
		  )
		: null;
}
