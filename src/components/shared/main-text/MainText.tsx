import React from 'react';

const MainText = ({text}:{text?:string}) => {
    return (
        <span>
            {text ? text :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n" +
                "            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n" +
                "            scrambled it to make a type specimen book."}
        </span>
    );
};

export default MainText;
