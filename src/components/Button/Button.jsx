import React from "react";
import PropTypes from 'prop-types'

import "../../index.css";

const Button = props => {
    return <div className="Button"><div className="ButtonIcon"></div>
      <span className="ButtonText">{props.text}
      </span>
    </div>;
  };

Button.propTypes = {
    hasRightIcon: PropTypes.bool,
    text: PropTypes.string,
    hasLeftIcon: PropTypes.bool,
    hasText: PropTypes.bool,
  }
export default Button;

