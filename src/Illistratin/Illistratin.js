import React from "react";
import "./Illistratin.css";
import SvgPosterGirl from "./SvgPosterGirl";
import SvgBlueShirtGirl from "./SvgBlueShirtGirl";
import SvgMusicGirl from "./SvgMusicGirl";
import SvgWelcomGirl from "./SvgWelcomGirl";
import SvgSetiingGirl from "./SvgSetiingGirl";

function Illistratin() {
  return (
    <div id="illustration">
      <div className='l_2'>
        <SvgPosterGirl />
        <SvgSetiingGirl />
        <SvgWelcomGirl />
      </div>
      <div className="l_1">
        <SvgBlueShirtGirl />
        <SvgMusicGirl />
      </div>
    </div>
  );
}

export default Illistratin;
