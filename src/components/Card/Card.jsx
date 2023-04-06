import React from "react";

import "../../index.css";
import Recliner from "../Recliner/Recliner";
import Chair from "../Chair/Chair";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";
import "../../index.css";


const Card = props => {
  return <div className="Card CardWrapperFrame"><div className="CardImgWrapper"><div className="CardImg"><img className="Chair"></img>
      </div>
    </div>
    <Tag tagText="New" isTagVisible></Tag>
    <div className="CardTitleWrapper"><span className="CardTitle">{props.title}
      </span>
      <span className="CardSubtitle">{props.subtitle}
      </span>
    </div>
    <div className="Rectangle1"></div>
    <span className="CardDescription">{props.body}
    </span>
    <Button hasRightIcon text="Shop Now" hasLeftIcon hasText></Button>
  </div>;
};

export default Card;