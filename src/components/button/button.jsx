import React from 'react';

const getButtonStyle = (isBold) => {
    if (isBold) 
        return { fontWeight: 700}
    return {fontWeight: 300}
}

const Button = ({name}) => {
    const [isTextBold, setIsTextBold] = React.useState(false)

    const onClick = () => setIsTextBold((current) => !current);

    return <button onClick={onClick} style={getButtonStyle(isTextBold)}>{name}</button>;
}

export default Button;