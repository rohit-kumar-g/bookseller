// usePopupState.js
import { useState } from "react";

export const usePopupState = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  return { isOpen, setIsOpen, showPopup, setShowPopup };
};
