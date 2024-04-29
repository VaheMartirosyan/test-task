import React from 'react';
import {OutletProps} from "../../../layouts/PagesLayout";
import TemplateTypes from "../../template-types/TemplateTypes";
import JSXWithStyles from "../../jsxFile";
import {PAGE_TEMPLATES_OPTIONS} from "../../../constants/constatns";

const PageTemplates = () => {
    const {selectedTemplate,setSelectedTemplate} = OutletProps()

    return (
        <div>
            <JSXWithStyles/>
            <TemplateTypes
                selectedTemplate={selectedTemplate}
                setSelectedTemplate={setSelectedTemplate}
                list={PAGE_TEMPLATES_OPTIONS}
            />
        </div>
    );
};

export default PageTemplates;
