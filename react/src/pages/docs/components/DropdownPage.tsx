
import CardIntroDropdown from "@components/module/dropdown-page/CardIntroDropdown";
import CardPropsDropdown from "@components/module/dropdown-page/CardPropsDropdown";
import CardUsageDropdown from "@components/module/dropdown-page/CardUsageDropdown";
import CardAdditionalInfoDropdown from "@components/module/dropdown-page/CardAdditionalInfoDropdown";

const DropdownPage = () => {
  return (
    <>
      <CardIntroDropdown />
      <CardPropsDropdown />
      <CardUsageDropdown />
      <CardAdditionalInfoDropdown />
    </>
  );
}

export default DropdownPage;
