import { createContext, useContext, useEffect, useRef, useState } from "react";
import { ChevronDown } from "react-feather";

const AccordionContext = createContext();

export default function Accordion({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  return (
    <ul {...props}>
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  );
}

export function AccordionItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordionContext);

  const open = selected === value;
  const ref = useRef(null);

  return (
    <li
      className={`border-b border-[#FAFAFA] ${
        open ? "bg-white" : "bg-[#DDDDDD]"
      }`}
      {...props}
    >
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className={`flex justify-between items-center px-3 py-3.5 text-lg font-semibold font-['Albert Sans'] leading-snug ${
          open ? "border-b border-[#a3a3a3]" : ""
        }`}
      >
        {trigger}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div
          className="accordion-item text-base font-semibold font-['Albert Sans'] leading-tight"
          ref={ref}
        >
          {children}
        </div>
      </div>
    </li>
  );
}
