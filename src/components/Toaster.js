import {
  SimpleToaster,
  toaster,
} from "@oneui/react-components/src/components/Toasters/SimpleToaster";
import "@oneui/6d-base-theme/build/theme.css";

const Toaster = () => {
  const CommonActionButton = () => {
    return (
      <div className="toaster-Content">
        <h4 className="toaster-Head">Subject</h4>
        <p className="toaster-message">Failure Message</p>
        <p className="toaster-button">
          <a href="#" className="text-button">
            Call to Action Button
          </a>
        </p>
      </div>
    );
  };

  return (
    <>
      <button
        className="btn-micro btn-app-primary btn-alert"
        id="toaster-icon"
        onClick={() => {
          toaster({
            alertType: "error",
            message: "Action Compeleted Successfully",
          });
        }}
      >
        Error Message
      </button>

      <button
        className="btn-micro btn-app-primary btn-alert"
        id="toaster-icon"
        onClick={() => {
          toaster({ alertType: "error", message: <CommonActionButton /> });
        }}
      >
        Toaster with CTA
      </button>

      <SimpleToaster type="filled" closeButton={true} icon={true} />
    </>
  );
};
export default Toaster;
