import React from 'react';
import { exportEmailTemplateToHTML, ITemplate } from "../../../utils";

const ExportButton = ({ emailTemplate }: { emailTemplate: ITemplate | undefined }) => {
    const handleExport = async () => {
        if (emailTemplate) {
            try {
                const exportedHTML = await exportEmailTemplateToHTML(emailTemplate);
                const blob = new Blob([exportedHTML], { type: 'text/html' });

                const fileName = `exported_email_template_${emailTemplate.id}.html`;

                // Create a temporary URL for the blob
                const href = URL.createObjectURL(blob);

                // Create a link element to trigger download
                const link = document.createElement('a');
                link.href = href;
                link.setAttribute("download", fileName);

                // Add a meta tag to the exported HTML content to prevent caching
                const metaTag = document.createElement('meta');
                metaTag.setAttribute('http-equiv', 'Cache-Control');
                metaTag.setAttribute('content', 'no-cache, no-store, must-revalidate');
                const exportedHTMLWithMetaTag = exportedHTML.replace('</head>', `${metaTag.outerHTML}</head>`);

                // Trigger the download
                document.body.appendChild(link);
                link.click();

                // Clean up resources
                document.body.removeChild(link);
                URL.revokeObjectURL(href);

            } catch (error) {
                console.error('Error exporting email template:', error);
            }
        }
    };

    return (
        <div>
            <button onClick={handleExport}>Export Email Template</button>
        </div>
    );
};

export default ExportButton;
