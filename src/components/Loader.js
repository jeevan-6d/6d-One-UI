import Loader from "@oneui/react-components/src/components/Loader";
import "@oneui/6d-base-theme/build/theme.css";

const Loaders = () => {
  return (
    <div>
      <Loader
        size="mini"
        loaderText="loading"
        loaderTextColor="#000000"
        loaderTextPosition="bottom"
        isPercentageEnabled={false}
        percentageValue="40%"
      />
    </div>
  );
};
export default Loaders;
