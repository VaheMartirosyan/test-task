import React, {useState} from 'react';
import {Outlet, useOutletContext} from "react-router-dom";
import Select from "../components/select/Select";
import "./PagesLayout.css"
export type ContextType = {
    selectedTemplate: number
    setSelectedTemplate: React.Dispatch<React.SetStateAction<number>>
}

const PagesLayout = () => {
    const [selectedOption, setSelectedOption] = useState<{ value: string; text: string; }>({value: "", text: ""});
    const [selectedTemplate, setSelectedTemplate] = useState(0)
    return (
        <div className={"pages-layout"}>
            <div>
                <Select
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                />
            </div>
            <Outlet context={{selectedTemplate, setSelectedTemplate}}/>
        </div>
    );
};

export default PagesLayout;

export function OutletProps() {
    return useOutletContext<ContextType>()
}
