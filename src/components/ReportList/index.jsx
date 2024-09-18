import Accordion, { AccordionItem } from "./Accordion";
import "./ReportList.css";
const anything = (
  <div className="item-list flex flex-col w-full">
    <div>Energy Mobile Report</div>
    <div>Solar Smarthhome Report</div>
    <div>Energy Program Overview</div>
    <div>Markey Analysis</div>
  </div>
);

const ReportList = () => {
  return (
    <div className="w-full text-black">
      <Accordion>
        <AccordionItem value="1" trigger="Smart Home">
          {anything}
        </AccordionItem>
        <AccordionItem value="2" trigger="Energy">
          {anything}
        </AccordionItem>
        <AccordionItem value="3" trigger="Incentives">
          {anything}
        </AccordionItem>
        <AccordionItem value="4" trigger="Year Round">
          {anything}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ReportList;
