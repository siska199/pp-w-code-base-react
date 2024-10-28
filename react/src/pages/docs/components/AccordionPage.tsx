import CardAdditionalInfoAccordion from "@components/module/accordion-page/CardAdditionalInfoAccordion";
import CardIntroAccordion from "@components/module/accordion-page/CardIntroAccordion";
import CardPropsAccordion from "@components/module/accordion-page/CardPropsAccordion";
import CardUsageAccordion from "@components/module/accordion-page/CardUsageAccordion";



const AccordionPage = () => {

  return (
    <>
      <CardIntroAccordion />
      <CardPropsAccordion />
      <CardUsageAccordion />
      <CardAdditionalInfoAccordion />
    </>
  )
}


export default AccordionPage