import React, { useState, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import './template.css';

const JSXWithStyles: React.FC = () => {
    const [htmlCode, setHtmlCode] = useState<string>('');

    useEffect(() => {
        const styles = getStyles();
        setHtmlCode(styles);
    }, []);

    const handleExport = () => {
        // Convert JSX to HTML string
        const jsxCode = (
            <div className="container">
                <h1 className="heading">Styled JSX Example</h1>
                <p className="paragraph">This is a JSX with styles using SCSS.</p>
            </div>
        );
        const htmlString = ReactDOMServer.renderToStaticMarkup(jsxCode);

        const finalHtmlString = `${htmlString}${htmlCode}`;

        const blob = new Blob([finalHtmlString], { type: 'text/html' });

        // Create a URL for the Blob
        const url = URL.createObjectURL(blob);

        // Create a temporary <a> element to trigger the download
        const link = document.createElement('a');
        link.href = url;
        link.download = 'exported.html';

        // Simulate a click on the <a> element
        link.click();

        // Clean up by revoking the URL
        URL.revokeObjectURL(url);
    };

    // Function to get compiled CSS styles
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
        return `<style>${styles}</style>`;
    };

    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <button onClick={handleExport}>Export JSX to HTML</button>
            </div>
            <div>
                <h2>JSX with Styles (CSS)</h2>
                <div className="container">
                    <h1 className="heading">Styled JSX Example</h1>
                    <p className="paragraph">This is a JSX with styles using SCSS.</p>
                </div>
            </div>
        </div>
    );
};

export default JSXWithStyles;
