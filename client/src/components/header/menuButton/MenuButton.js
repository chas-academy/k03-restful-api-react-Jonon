import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
// assets
import Icon from "../../../assets/icons";
// styles
import MenuButtonStyle from "./MenuButton.style";
import { show_modal } from "../../../actions/modalActions";
// components
import DropDownMenu from "../../dropDownMenu/DropDownMenu";
import UserMenu from "./userMenu/UserMenu";

const MenuButton = ({ show_modal }) => {
  let auth = useSelector((state) => state.authentication.auth);
  let UserDropDownMenu = useSelector((state) => state.dropDownMenu.payload);

  let dispatch = useDispatch();

  const [hover, setHover] = useState({ onHover: "useroutline" });

  const handleMouseEnter = () => {
    setHover({ onHover: "user" });
  };

  const handleMouseLeave = () => {
    setHover({ onHover: "useroutline" });
  };

  const ShowUserDropDown = () => {
    dispatch({ type: "SHOW", payload: true });
  };

  return (
    <div style={MenuButtonStyle}>
      {!auth ? (
        <p style={MenuButtonStyle.signIn} onClick={show_modal}>
          Sign In
        </p>
      ) : (
        <div>
          <span
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            role="button"
            tabIndex={0}
            style={MenuButtonStyle.menuOptionsButton}
            onClick={ShowUserDropDown}
          >
            <Icon
              icon={hover.onHover}
              fill="secondary"
              width="24"
              customStyle={{ display: "flex", alignItems: "center" }}
            />
          </span>
          {UserDropDownMenu === true ? (
            <DropDownMenu>
              <UserMenu />
            </DropDownMenu>
          ) : null}
        </div>
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
