import ReactDOMServer from 'react-dom/server';

export interface ITemplate {
    id: number;
    jsx: JSX.Element;
}

const getStyles = () => {
    const styles = Array.from(document.styleSheets)
        .map((styleSheet: any) => {
            try {
                return Array.from(styleSheet.cssRules)
                    .map((rule: any) => rule.cssText)
                    .join('\n');
            } catch (e) {
                console.warn('Access to stylesheet %s is denied. Ignoring...', styleSheet.href);
                return '';
            }
        })
        .join('\n');

    return `<style> @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');${styles}</style>`;
};
export const exportEmailTemplateToHTML = async (emailTemplate: ITemplate): Promise<string> => {
    try {
        const jsxHTML = ReactDOMServer.renderToStaticMarkup(emailTemplate.jsx);
        const styles = getStyles()
        return `
            <div>
                ${styles}
                ${jsxHTML}
            </div>
        `;
    } catch (error) {
        console.error('Error exporting email template to HTML:', error);
        return '';
    }
};
