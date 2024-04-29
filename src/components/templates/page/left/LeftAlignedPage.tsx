import React from 'react';
import PageTemplateTitle from "../components/title/PageTemplateTitle";
import TemplateImage from "../../../shared/image/TemplateImage";
import MainText from "../../../shared/main-text/MainText";
import SocialNetworks from "../../../shared/social-networks/SocialNetworks";
import "./LeftAlignedPage.css"
import {ReactComponent as DateIcon} from "../../../../assets/svg/date-icon.svg";
import {ReactComponent as EyeIcon} from "../../../../assets/svg/eye-icon.svg";

const LeftAlignedPage = () => {
    return (
        <div className={"left-aligned-page"}>
            <div className={"left-aligned-page-content"}>
                <PageTemplateTitle classnames={"left-aligned-page-heading"}/>
                <div className={"left-aligned-page-content-info"}>
                    <p className={"left-aligned-page-content-info-text"}>Author name</p>
                    <div className={"left-aligned-page-content-info-item"}>
                        <DateIcon/>
                        <p className={"left-aligned-page-content-info-text"}>Date</p>
                    </div>
                    <div className={"left-aligned-page-content-info-item"}>
                        <EyeIcon/>
                        <p className={"left-aligned-page-content-info-text"}>View count</p>
                    </div>
                </div>
                <TemplateImage classnames={"left-aligned-page-image"}/>
                <MainText/>
            </div>
            <div className={"left-aligned-page-share"}>
                <p>Share</p>
                <SocialNetworks classnames={"left-aligned-page-share-networks"}/>
            </div>
        </div>
    );
};

export default LeftAlignedPage;
