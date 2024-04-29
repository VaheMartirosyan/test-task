import React, {useMemo} from 'react';
import {OutletProps} from "../../../layouts/PagesLayout";
import TemplateTypes from "../../template-types/TemplateTypes";
import {
    EXPORTING_PAGE_TEMPLATES,
    PAGE_TEMPLATES_OPTIONS
} from "../../../constants/constatns";
import ExportButton from "../../shared/export-button/ExportButton";
import "./PageTemplates.css"

const PageTemplates = () => {
    const {selectedTemplate,setSelectedTemplate} = OutletProps()
    const templateComponent = useMemo(()=>{
        return EXPORTING_PAGE_TEMPLATES.find(item=>item.id === selectedTemplate)
    },[selectedTemplate])
    return (
        <div className={"page-templates"}>
            <TemplateTypes
                selectedTemplate={selectedTemplate}
                setSelectedTemplate={setSelectedTemplate}
                list={PAGE_TEMPLATES_OPTIONS}
            />
            {templateComponent?.jsx}
            <ExportButton emailTemplate={templateComponent}/>
        </div>
    );
};

export default PageTemplates;
