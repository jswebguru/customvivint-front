const ModalHeader = ({ title, subtitle, onClose }) => {
  return (
    <div className="px-[19px] py-4 flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold leading-snug">{title}</h2>
        {subtitle && (
          <p className="opacity-80 text-white text-[11px] font-medium font-['Plus Jakarta Sans']">
            {subtitle}
          </p>
        )}
      </div>
      <div>
        <button onClick={onClose} className="close-button">
          &times;
        </button>
      </div>
    </div>
  );
};

export default ModalHeader;
