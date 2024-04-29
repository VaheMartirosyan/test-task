import React from 'react';
import { exportEmailTemplateToHTML, ITemplate } from "../../../utils";
import "./ExportButton.css"
const ExportButton = ({ emailTemplate }: { emailTemplate: ITemplate | undefined }) => {

    const handleExport = async () => {
        if (emailTemplate) {
            try {
                const exportedHTML = await exportEmailTemplateToHTML(emailTemplate);
                const blob = new Blob([exportedHTML], { type: 'text/html' });

                const fileName = `exported_email_template_${emailTemplate.id}.html`;

                const href = URL.createObjectURL(blob);

                const link = document.createElement('a');
                link.href = href;
                link.setAttribute("download", fileName);

                const metaTag = document.createElement('meta');
                metaTag.setAttribute('http-equiv', 'Cache-Control');
                metaTag.setAttribute('content', 'no-cache, no-store, must-revalidate');

                document.body.appendChild(link);
                link.click();

                document.body.removeChild(link);
                URL.revokeObjectURL(href);

            } catch (error) {
                console.error('Error exporting email template:', error);
            }
        }
    };

    return (
        <button onClick={handleExport} className={"export-button"}>Export as HTML</button>
    );
};

export default ExportButton;
