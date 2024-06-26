import React from 'react';
import TemplateImage from "../../../shared/image/TemplateImage";
import SocialNetworks from "../../../shared/social-networks/SocialNetworks";
import "./CenterAlignedEmail.css"
import MainInfo from "../components/main-info/MainInfo";
import MainText from "../../../shared/main-text/MainText";

const CenterAlignedEmail = () => {
    return (
        <div className={"center-aligned-email"}>
            <div className={"center-aligned-email-img-network"}>
                <TemplateImage classnames={"center-aligned-img-circle"}/>
                <SocialNetworks classnames={"center-aligned-img-networks"}/>
            </div>
            <div className={"center-aligned-email-text-info"}>
                <MainInfo/>
                <MainText/>
            </div>
        </div>
    );
};

export default CenterAlignedEmail;
