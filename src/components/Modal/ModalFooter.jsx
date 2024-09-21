const ModalFooter = ({ onCancel, onSave }) => {
  return (
    <div className="flex justify-end p-4 border-t gap-4 border-[#4e4949] items-center justify-center">
      <button
        onClick={onCancel}
        className="w-[120px] h-10 px-3.5 py-1 bg-button-secondary rounded-[10px] text-[#0b0a0a] text-sm font-semibold font-albert leading-[16.80px]"
      >
        Cancel
      </button>
      <button
        onClick={onSave}
        className="w-[120px] h-10 px-3.5 py-1 bg-button-primary rounded-[10px] text-neutral-50 text-sm font-semibold font-albert  leading-[16.80px]"
      >
        Save Changes
      </button>
    </div>
  );
};

export default ModalFooter;
