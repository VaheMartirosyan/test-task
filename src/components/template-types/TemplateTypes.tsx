import React from 'react';
import {ContextType} from "../../layouts/PagesLayout";
import "./TemplateTypes.css"
interface ITemplateTypes extends ContextType {
    list: { id: number, icon: JSX.Element, text: string }[]
}

const TemplateTypes: React.FC<ITemplateTypes> = ({selectedTemplate, setSelectedTemplate, list}) => {
    return (
        <div className={"template-types"}>
            <p className={"template-types-title"}>Template types</p>
            <div className={"template-types-list"}>
                {list.map((option) => (
                    <div
                        onClick={() => setSelectedTemplate(option.id)}
                        key={option.id}
                        className={`template-types-list-item ${selectedTemplate === option.id ? "template-types-list-item-active" : ""}`}
                    >
                        <div className={"template-types-list-item-icon"}>
                            {option.icon}
                        </div>
                        <p>{option.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TemplateTypes;
