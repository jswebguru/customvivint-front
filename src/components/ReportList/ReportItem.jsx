import React from "react";
import Accordion, { AccordionItem } from "./Accordion";
import { Link } from "react-router-dom";
const ReportItem = ({ item }) => {
  if (item.type === "folder") {
    return (
      <AccordionItem value={item.id} trigger={item.title}>
        <Accordion>
          {item.childs && item.childs.length > 0 ? (
            item.childs.map((child) => (
              <ReportItem key={child.id} item={child} />
            ))
          ) : (
            <div className="p-3">
              <p className="text-base font-semibold font-albert leading-tight">
                No report
              </p>
            </div>
          )}
        </Accordion>
      </AccordionItem>
    );
  } else if (item.type === "tableau" || item.type === "custom") {
    return (
      <a className="p-3 block" href={`/temp/${item.id}`}>
        <p className="text-base font-semibold font-albert leading-tight">
          {item.title}
        </p>
      </a>
    );
  } else {
    return null;
  }
};

export default ReportItem;
