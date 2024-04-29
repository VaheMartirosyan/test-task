import React, {useMemo} from 'react';
import TemplateTypes from "../../template-types/TemplateTypes";
import { OutletProps } from "../../../layouts/PagesLayout";
import {EMAIL_TEMPLATES_OPTIONS, EXPORTING_EMAIL_TEMPLATES} from "../../../constants/constatns";
import ExportButton from "../../shared/export-button/ExportButton";
import "./EmailTemplates.css"

const EmailTemplates = () => {
    const { selectedTemplate, setSelectedTemplate } = OutletProps();

    const templateComponent = useMemo(()=>{
        return EXPORTING_EMAIL_TEMPLATES.find(item=>item.id === selectedTemplate)
    },[selectedTemplate])
    return (
        <div className={"email-templates"}>
            <TemplateTypes
                selectedTemplate={selectedTemplate}
                setSelectedTemplate={setSelectedTemplate}
                list={EMAIL_TEMPLATES_OPTIONS}
            />
            <div>
                {templateComponent?.jsx}
            </div>
            <ExportButton emailTemplate={templateComponent}/>
        </div>
    );
};

export default EmailTemplates;
