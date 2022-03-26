import React from "react";

//components
import Logo from "../../Logo/Logo";

//UI
import "./SocialMediaBar.css";

//assets
import fbAsset from "../../assets/fbAsset.png";
import githubAsset from "../../assets/githubAsset.png";
import linkedInAsset from "../../assets/linkedInAsset.png";

export default function SocialMediaBar() {
  return (
    <div className="socialMediaBar">
      <div>
        <a href="https://www.facebook.com/gor.aroyan.3">
          <Logo assetUrl={fbAsset} />
        </a>
      </div>
      <div>
        <a href="https://github.com/GorSharoyan">
          <Logo assetUrl={githubAsset} />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/gor-sharoyan-759b1b189/">
          <Logo assetUrl={linkedInAsset} />
        </a>
      </div>
    </div>
  );
}
