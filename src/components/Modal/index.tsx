import React, { useEffect } from "react";
import { ModalContainer, ModalContent, ModalHeader } from "./styles";
import { GrClose } from "react-icons/gr";

// import { Container } from './styles';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  children,
  title,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer onMouseDown={() => setIsOpen(false)}>
      <ModalContent
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
      >
        {title && (
          <ModalHeader>
            <h2>{title}</h2>
            <GrClose onClick={() => setIsOpen(false)} />
          </ModalHeader>
        )}
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
