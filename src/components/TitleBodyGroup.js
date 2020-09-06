import React from 'react';

const TitleBodyGroup = ( props ) => (
    <div className={props.className + " py-4"}>
        <h2 className="pb-2 lineHeight-sm text-gray-800 font-bold text-3xl md:text-4xl">{props.title}</h2>
        <p className="pt-2 text-gray-600 font-normal text-lg">{props.body}</p>
    </div>
)

export default TitleBodyGroup;