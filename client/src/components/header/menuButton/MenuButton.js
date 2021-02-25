import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
// assets
import Icon from "../../../assets/icons";
// styles
import MenuButtonStyle from "./MenuButton.style";
import { show_modal } from "../../../actions/modalActions";

const MenuButton = ({ show_modal }) => {
  let auth = useSelector((state) => state.authentication.auth);

  const [hover, setHover] = useState({ onHover: "useroutline" });

  const handleMouseEnter = () => {
    setHover({ onHover: "user" });
  };

  const handleMouseLeave = () => {
    setHover({ onHover: "useroutline" });
  };

  return (
    <div style={MenuButtonStyle}>
      {!auth ? (
        <p style={MenuButtonStyle.signIn} onClick={show_modal}>
          Sign In
        </p>
      ) : (
        <span
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          role="button"
          tabIndex={0}
        >
          <Icon
            icon={hover.onHover}
            fill="secondary"
            width="24"
            customStyle={{ display: "flex", alignItems: "center" }}
          />
        </span>
      )}
    </div>
  );
};

MenuButton.propTypes = {
  show_modal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    show_modal: () => dispatch(show_modal),
  };
};

export default connect(null, mapDispatchToProps)(MenuButton);
