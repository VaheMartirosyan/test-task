import React from 'react';
import TemplateImage from "../../../shared/image/TemplateImage";
import PageTemplateTitle from "../components/title/PageTemplateTitle";
import MainText from "../../../shared/main-text/MainText";
import "./RightAlignedPage.css"

const RightAlignedPage = () => {
    return (
        <div className={"right-aligned-page"}>
            <div className={"right-aligned-page-images"}>
                <div className={"right-aligned-page-images-list"}>
                    {[1, 2, 3, 4].map((item) => (
                        <TemplateImage classnames={"right-aligned-page-images-list-item"} key={item}/>
                    ))}
                </div>
                <TemplateImage classnames={"right-aligned-page-images-main"}/>
            </div>
            <div className={"right-aligned-page-content"}>
                <PageTemplateTitle classnames={"right-aligned-page-content-heading"}/>
                <MainText/>
                <div className={"right-aligned-page-content-actions"}>
                    <button>Button</button>
                    <button>Button</button>
                </div>
                <ul className={"right-aligned-page-content-list"}>
                    {[1,2,3,4].map(item=>(
                        <li key={item}>Lorem Ipsum {item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RightAlignedPage;
