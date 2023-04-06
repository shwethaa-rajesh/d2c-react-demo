import React from "react";

import "../../index.css";

const Tag = props => {
    return <div className="Tag"><span className="TagTitle">{props.tagText}
      </span>
    </div>;
  };
export default Tag;