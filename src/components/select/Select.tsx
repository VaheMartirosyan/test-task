import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import {ReactComponent as Arrow} from "../../assets/svg/select-arrow.svg"
import './Select.css';

interface ISelect {
    selectedOption: { value: string, text: string }
    setSelectedOption: React.Dispatch<React.SetStateAction<{ value: string, text: string }>>
}

const initialOptions = [
    {value: "email", text: "Email signature layout"},
    {value: "pages", text: "Page layout"},
]

const Select: React.FC<ISelect> = ({setSelectedOption, selectedOption}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const currentRoute = location.pathname;

    const handleSelectChange = (option: { value: string; text: string; }) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
        switch (option.value) {
            case 'email':
                navigate('/email');
                break;
            case 'pages':
                navigate('/pages');
                break;
            default:
                navigate('/');
                break;
        }
    };

    useEffect(() => {
        switch (currentRoute) {
            case '/email':
                setSelectedOption(initialOptions[0]);
                break;
            case '/pages':
                setSelectedOption(initialOptions[1]);
                break;
            default:
                setSelectedOption({value: "", text: ""});
                break;
        }
    }, [currentRoute,setSelectedOption]);

    return (
        <div className="select-container">
            <div className={`select-dropdown ${isDropdownOpen ? 'select-dropdown-open' : ''}`}
                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                {selectedOption.text ? selectedOption.text : 'Select Template'}
                <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                    {initialOptions.map((option, index) => (
                        <div
                            className={`dropdown-item ${selectedOption.value === option.value ? 'selected' : ''}`}
                            onClick={() => handleSelectChange(option)}
                            key={index}
                        >
                            {option.text}
                        </div>
                    ))}
                </div>
                <Arrow/>
            </div>
        </div>
    );
};

export default Select;
