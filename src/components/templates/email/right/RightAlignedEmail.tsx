import React from 'react';
import TemplateImage from "../../../shared/image/TemplateImage";
import SocialNetworks from "../../../shared/social-networks/SocialNetworks";
import "./RightAlignedEmail.css"
import MainInfo from "../components/main-info/MainInfo";
import MainText from "../../../shared/main-text/MainText";

const RightAlignedEmail = () => {
    return (
        <div className={"right-aligned-email"}>
            <div className={"right-aligned-email-text-info"}>
                <MainInfo/>
                <MainText text={""}/>
            </div>
            <div className={"right-aligned-email-img-network"}>
                <TemplateImage classnames={"right-aligned-img-circle"}/>
                <SocialNetworks classnames={"right-aligned-img-networks"}/>
            </div>
        </div>
    );
};

export default RightAlignedEmail;
