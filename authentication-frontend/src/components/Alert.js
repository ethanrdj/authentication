import React from "react";
import PropTypes from "prop-types";

const Alert = ({ alertMessage }) => {
  return (
    <div className="Alert">
      <h4>{alertMessage}</h4>
    </div>
  );
};

Alert.propTypes = {
  alertMessage: PropTypes.string,
};

export default Alert;
