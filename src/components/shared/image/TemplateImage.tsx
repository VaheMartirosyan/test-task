import React from 'react';

const TemplateImage = ({classnames}:{classnames:string}) => {
    return (
        <div className={classnames}>
            <img src={"https://digsite-prod.s3.us-east-2.amazonaws.com/organizations/3305730/study/undefined/quests/469/file-1234938609900.jpeg"} alt="bg"/>
        </div>
    );
};


export default TemplateImage;

