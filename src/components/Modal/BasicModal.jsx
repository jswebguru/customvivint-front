import ModalHeader from "./ModalHeader";
import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";

const BasicModal = ({ isOpen, onClose, title, subtitle, onSave, children }) => {
  return (
    <div
      className={`fixed inset-0 z-[1001] ${
        isOpen ? "flex" : "hidden"
      } items-end justify-center overflow-hidden`}
    >
      <div
        className={`bg-black bg-opacity-50 fixed inset-0 w-full`}
        onClick={onClose}
      ></div>
      <div
        className={`transform transition-transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } 
        w-full bg-background-secondary rounded-tl-3xl rounded-tr-3xl border-t border-white overflow-hidden`}
      >
        <ModalHeader title={title} subtitle={subtitle} onClose={onClose} />
        <ModalContent>{children}</ModalContent>
        <ModalFooter onCancel={onClose} onSave={onSave} />
      </div>
    </div>
  );
};

export default BasicModal;
