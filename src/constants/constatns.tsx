import LeftAlignedEmail from "../components/templates/email/left/LeftAlignedEmail";
import CenterAlignedEmail from "../components/templates/email/center/CenterAlignedEmail";
import RightAlignedEmail from "../components/templates/email/right/RightAlignedEmail";
import LeftAlignedPage from "../components/templates/page/left/LeftAlignedPage";
import CenterAlignedPage from "../components/templates/page/center/CenterAlignedPage";
import RightAlignedPage from "../components/templates/page/right/RightAlignedPage";
import {ReactComponent as EmailRightTemplate} from "../assets/svg/email-right-template.svg";
import {ReactComponent as EmailLeftTemplate} from "../assets/svg/email-left-template.svg";
import {ReactComponent as EmailCenterTemplate} from "../assets/svg/email-center-template.svg";
import {ReactComponent as PageRightTemplate} from "../assets/svg/page-right-template.svg";
import {ReactComponent as PageLeftTemplate} from "../assets/svg/page-left-template.svg";
import {ReactComponent as PageCenterTemplate} from "../assets/svg/page-center-template.svg";
import "../components/templates/email/left/LeftAlignedEmail.css"


export const EXPORTING_EMAIL_TEMPLATES = [
    {id:0,jsx:<LeftAlignedEmail/>},
    {id:1,jsx:<CenterAlignedEmail/>},
    {id:2,jsx:<RightAlignedEmail/>},
]

export const EXPORTING_PAGE_TEMPLATES = [
    {id:0,jsx:<LeftAlignedPage/>,styles:"../components/templates/page/left/LeftAlignedPage.css"},
    {id:0,jsx:<CenterAlignedPage/>,styles:"../components/templates/page/center/CenterAlignedPage.css"},
    {id:0,jsx:<RightAlignedPage/>,styles:"../components/templates/page/right/RightAlignedPage.css"},

]

export const EMAIL_TEMPLATES_OPTIONS = [
    {id:0,icon:<EmailLeftTemplate/>,text:"Left Align Layout"},
    {id:1,icon:<EmailCenterTemplate/>,text:"Center Align Layout"},
    {id:2,icon:<EmailRightTemplate/>,text:"Right Align Layout"},
]

export const PAGE_TEMPLATES_OPTIONS = [
    {id:0,icon:<PageLeftTemplate/>,text:"Single image grid"},
    {id:1,icon:<PageCenterTemplate/>,text:"2 images grid"},
    {id:2,icon:<PageRightTemplate/>,text:"Slider grid"},
]

