import React from 'react';
import {ReactComponent as FacebookIcon} from "../../../assets/svg/facebook.svg";
import {ReactComponent as TwitterIcon} from "../../../assets/svg/twitter.svg";
import {ReactComponent as InstagramIcon} from "../../../assets/svg/instagram.svg";

const SocialNetworks = ({classnames}:{classnames:string}) => {
    return (
        <div className={classnames}>
            <FacebookIcon/>
            <TwitterIcon/>
            <InstagramIcon/>
        </div>
    );
};

export default SocialNetworks;
