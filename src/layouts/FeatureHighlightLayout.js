import FeaturecardComponent from "../componenets/FeatureCardComponent";
import FeatureDetails from "../assets/FeatureDetails";

function FeatureHighlightLayout() {
  return (
    <>
      {FeatureDetails.map((item) => {
        const { featureIcon, featureName, fetureDescription } = item;
        return (
          <FeaturecardComponent
            featureIcon={featureIcon}
            fetureDescription={fetureDescription}
            featureName={featureName}
          />
        );
      })}
    </>
  );
}

export default FeatureHighlightLayout;
