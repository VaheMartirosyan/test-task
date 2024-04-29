import React from 'react';

const PageTemplateTitle = ({classnames}:{classnames:string}) => {
    return (
        <div className={classnames}>
            <p>Category name</p>
            <h1>Title</h1>
        </div>
    );
};

export default PageTemplateTitle;
