import { useState } from "react";

export const useModalForm = () => {
    const [visible, setVisible] = useState(false);

    const onClose = () => {
        setVisible(false);
    }

    const onShowModal = () => {
        setVisible(true);
    }

    return { onClose, onShowModal, visible }
}