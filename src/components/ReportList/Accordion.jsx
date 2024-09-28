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
  const contentRef = useRef(null);
  const innerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current && innerRef.current) {
      setHeight(open ? innerRef.current.scrollHeight : 0);
      const resizeObserver = new ResizeObserver(() => {
        if (open) setHeight(innerRef.current.scrollHeight);
      });
      resizeObserver.observe(innerRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [open, children]);

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
        className={`flex justify-between items-center px-3 py-3.5 text-lg font-semibold font-albert leading-snug ${
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
        ref={contentRef}
        className="accordion-item overflow-hidden transition-all"
        style={{ height }}
      >
        <div
          ref={innerRef}
          className="text-base font-semibold font-albert leading-tight"
        >
          {children}
        </div>
      </div>
    </li>
  );
}
