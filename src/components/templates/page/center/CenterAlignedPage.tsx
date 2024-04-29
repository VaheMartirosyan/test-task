import React from 'react';
import TemplateImage from "../../../shared/image/TemplateImage";
import "./CenterAlignedPage.css"
import SocialNetworks from "../../../shared/social-networks/SocialNetworks";
import {ReactComponent as DateIcon} from "../../../../assets/svg/date-icon.svg";
import MainText from "../../../shared/main-text/MainText";

const CenterAlignedPage = () => {
    return (
        <div className={"center-aligned-page"}>
            <TemplateImage classnames={"center-aligned-page-top-image"}/>
            <div className={"center-aligned-page-content"}>
                <div className={"center-aligned-page-content-left"}>
                    <div className={"center-aligned-page-content-share"}>
                        <p>Share</p>
                        <SocialNetworks classnames={"center-aligned-page-content-share-networks"}/>
                    </div>
                </div>
                <div className={"center-aligned-page-content-right"}>
                    <h1>Title</h1>
                    <div className={"center-aligned-page-content-right-date"}>
                        <DateIcon/>
                        <p className={"left-aligned-page-content-info-text"}>Date</p>
                    </div>
                    <div className={"center-aligned-page-content-right-text"}>
                        <MainText
                            text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}/>
                        <TemplateImage classnames={"center-aligned-page-top-image"}/>
                        <MainText
                            text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CenterAlignedPage;
