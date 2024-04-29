import React from 'react';
import SocialNetworks from "../../../shared/social-networks/SocialNetworks";
import TemplateImage from "../../../shared/image/TemplateImage";
import "./LeftAlignedEmail.css"
import MainInfo from "../components/main-info/MainInfo";
import MainText from "../../../shared/main-text/MainText";

const LeftAlignedEmail = () => {
    return (
        <div className={"left-aligned-email"}>
            <div className={"left-aligned-email-img-network"}>
                <TemplateImage classnames={"left-aligned-img-circle"}/>
                <SocialNetworks classnames={"left-aligned-img-networks"}/>
            </div>
            <div className={"left-aligned-email-text-info"}>
                <MainInfo/>
                <MainText/>
            </div>
        </div>
    );
};

export default LeftAlignedEmail;
