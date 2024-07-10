import CardSubMenu from "@components/cards/CardSubMenu";
import Button from "@components/ui/Button";
import List from "@components/ui/List";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoCard = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: (
        <p>The default layout of the Card component is &lsquo;vertical&lsquo;. The default variant is &lsquo;top-bordered&lsquo;, and the default fit is &lsquo;true&lsquo;, meaning the card width will adjust to fit its content. These defaults can be changed by specifying the respective props.</p>
      ),
    },

    {
      title: "Dependencies",
      caption: (
        <p>
          The Card component relies on several dependencies and utility functions imported from external sources (
          <Filename name="IconChevronRight" to="/docs/prerequisite/icon?name=IconChevronRight" />,
          <Filename name="Button" to="/docs/components/button" />
          <Filename name="Image" to="/docs/components/image" />,
          <Filename name="cn" to="/docs/prerequisite/helper-function?id=cn" />,
          <Filename name="VariantProps" importFrom="class-variance-authority" />,
          <Filename name="React" importFrom="react" />
          ,and
          <Filename name="HTMLProps" importFrom="react" />
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </p>
      ),
    },
    {
      title: "Variant",
      caption: (
        <p>
          The Card component supports multiple variants such as &lsquo;top-bordered&lsquo;, &lsquo;centered-body&lsquo;, and &lsquo;overlay&lsquo;. Each variant provides a different visual style to the card. For more details on the available variants, refer to the{" "}
          <Button to="/docs/prerequisite/variant#card" label="here" />.
        </p>
      ),
    },
    {
      title: "Custom Class",
      caption: (
        <p>
          The <code>customeClass</code> prop allows you to add custom CSS classes to different parts of the card, such as the container, header, body, and footer. This provides flexibility to style the card as needed.
        </p>
      ),
    },
    {
      title: "Component Link Behavior",
      caption: (
        <p>
          The Card component can include a link by setting the <code>link</code> prop with an object containing &lsquo;label&lsquo; and &lsquo;to&lsquo; properties. The link will be rendered as a button inside the card&lsquo;s body, directing users to the specified URL.
        </p>
      ),
    },
    {
      title: "Examples of Different Card Variants",
      caption: (
        <List
          items={[
            {
              label: "Body",
              content: (
                <p>
                  This card type is a simple card with a title, subtitle, and content. It&quot;s useful for displaying basic information.
                  <br />
                  <strong>Required Props:</strong> <code>body.title</code>, <code>body.subtitle</code>, and <code>body.content</code>.
                </p>
              ),
            },
            {
              label: "Top Bordered",
              content: (
                <p>
                  This card adds a colored border at the top. It&quot;s suitable for highlighting important cards.
                  <br />
                  <strong>Required Props:</strong> <code>variant: &quot;top-bordered&quot;</code>, <code>body.title</code>, <code>body.subtitle</code>, and <code>body.content</code>.
                </p>
              ),
            },
            {
              label: "Heading",
              content: (
                <p>
                  This card includes a header with content above the body. Ideal for featured sections.
                  <br />
                  <strong>Required Props:</strong> <code>header.content</code>, <code>body.title</code>, <code>body.subtitle</code>, and <code>body.content</code>.
                </p>
              ),
            },
            {
              label: "Footer",
              content: (
                <p>
                  This card has a footer section for additional information like updates or status.
                  <br />
                  <strong>Required Props:</strong> <code>footer</code>, <code>body.title</code>, <code>body.subtitle</code>, and <code>body.content</code>.
                </p>
              ),
            },
            {
              label: "Centered Body Content",
              content: (
                <p>
                  This card centers the body content vertically. Useful for minimalist designs.
                  <br />
                  <strong>Required Props:</strong> <code>variant: &quot;centered-body&quot;</code>, <code>body.title</code>, and <code>body.content</code>.
                </p>
              ),
            },
            {
              label: "Image",
              content: (
                <p>
                  This card displays an image in the header section. Good for visual content like photos or illustrations.
                  <br />
                  <strong>Required Props:</strong> <code>header.image</code>, <code>body.title</code>, <code>body.subtitle</code>, and <code>body.content</code>.
                </p>
              ),
            },
            {
              label: "Image Inside Body Content",
              content: (
                <p>
                  This card places an image within the body content. Suitable for content that combines text and images.
                  <br />
                  <strong>Required Props:</strong> <code>body.image</code>, <code>body.title</code>, <code>body.subtitle</code>, and <code>body.content</code>.
                </p>
              ),
            },
            {
              label: "Link",
              content: (
                <p>
                  This card includes a clickable link within the body. Often used for navigation or call-to-action.
                  <br />
                  <strong>Required Props:</strong> <code>link.label</code> for link text, <code>link.to</code> for URL destination, <code>body.title</code>, <code>body.subtitle</code>, and <code>body.content</code>.
                </p>
              ),
            },
            {
              label: "Overlay",
              content: (
                <p>
                  This card displays an image as a background overlay with content on top. Perfect for visually engaging cards.
                  <br />
                  <strong>Required Props:</strong> <code>variant: &quot;overlay&quot;</code>, <code>imageOverlay</code> for overlay image URL, <code>body.title</code>, <code>body.subtitle</code>, and <code>body.content</code>.
                </p>
              ),
            },
            {
              label: "Horizontal",
              content: (
                <p>
                  This card arranges content horizontally with an image beside it. Ideal for wider layouts.
                  <br />
                  <strong>Required Props:</strong> <code>layout: &quot;horizontal&quot;</code>, <code>header.image</code> for header image URL, <code>body.title</code>, <code>body.subtitle</code>, and <code>body.content</code>.
                </p>
              ),
            },
          ]}
        />
      ),
    },
  ];

  return (
    <CardSubMenu title={"Additional Info"}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
};

export default CardAdditionalInfoCard;
