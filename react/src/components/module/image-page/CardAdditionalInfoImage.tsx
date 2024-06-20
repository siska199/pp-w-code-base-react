
import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoImage = () => {
  const listAdditionalInfo = [
    {
      title: "Loading State",
      caption: "The component uses an internal loading state to apply a blur effect to the image while it is loading. This is managed by the `isLoading` state variable, which is set to `false` once the image has fully loaded. While the image is loading, a CSS class `blur-effect` is applied to give a visual indication that the image is not yet fully loaded. Once the image has loaded, the `clear-effect` class is applied to remove the blur."
    },
    {
      title: "Skeleton Loader",
      caption: (
        <p>
          If withSkeleton is true, a skeleton loader is displayed while the image is loading. This loader is animated with a pulse effect.
        </p>
      ),
    },
    {
      title: "Asset URL",
      caption: "The `getAssetURL` function is used to generate the full URL of the image if the provided `src` does not include 'http'. This function constructs the full path based on the given name."
    },
    {
      title: "getAssetURL Function",
      caption: (
        <div>
          <p>
            The `getAssetURL` function helps in constructing the URL for assets stored in the project. It takes an object with the following properties:
          </p>
          <ul>
            <li>
              <strong>name:</strong> The name of the asset file (required).
            </li>
            <li>
              <strong>folder:</strong> The folder where the asset is stored (optional, defaults to &rsquo;images&rsquo;).
            </li>
          </ul>
          <p>
            This function returns the full URL of the asset by combining the base URL of the project with the specified folder and file name.
          </p>
          <CodeBlock
            codeString={`export const getAssetURL = (params: TParamsGetAssetURl) => {
  const { name, folder = 'images' } = params;
  return new URL(\`../../assets/\${folder}/\${name}\`, import.meta.url)?.href;
}`}
          />
        </div>
      ),
    },
    {
      title: "Animation",
      caption: (
        <p>
          The overlay slides up from the bottom on hover, achieved with the `translate-y` and `opacity` classes.
        </p>
      ),
    },
  ];



  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}
export default CardAdditionalInfoImage;
