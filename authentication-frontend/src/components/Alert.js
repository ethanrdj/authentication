import React from "react";
import PropTypes from "prop-types";

const Alert = ({ alertMessage }) => {
  return (
    <div className="Alert">
      <p>{alertMessage}</p>
    </div>
  );
};

Alert.propTypes = {
  alertMessage: PropTypes.string,
};

export default Alert;
