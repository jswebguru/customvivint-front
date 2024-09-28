import React from "react";
import Accordion, { AccordionItem } from "./Accordion";

const ReportItem = ({ item }) => {
  if (item.type === "folder") {
    return (
      <AccordionItem value={item.id} trigger={item.title}>
        <Accordion>
          {item.childs &&
            item.childs.map((child) => (
              <ReportItem key={child.id} item={child} />
            ))}
        </Accordion>
      </AccordionItem>
    );
  } else if (item.type === "report") {
    return (
      <div className="p-3">
        <p className="text-base font-semibold font-albert leading-tight">
          {item.description}
        </p>
      </div>
    );
  } else {
    return null;
  }
};

export default ReportItem;
