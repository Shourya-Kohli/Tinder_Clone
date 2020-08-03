import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

import "./SwipeButtons.css";
import { IconButton } from "@material-ui/core";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon fontSIze="large" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon fontSIze="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        {" "}
        <StarRateIcon fontSIze="large" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIcon fontSIze="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        {" "}
        <FlashOnIcon fontSIze="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
