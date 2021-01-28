import React from "react";
import PropTypes from "prop-types";

const Home = ({ user }) => {
  return (
    <div className="Home">
      <h1>Welcome {user.username}</h1>
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Home;
