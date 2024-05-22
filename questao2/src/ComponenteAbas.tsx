import React, { useState } from "react";
import Aba, { AbaProps } from "./Aba";

interface ComponenteAbasProps {
    children?: React.ReactElement<AbaProps>[];
}

function ComponenteAbas(props: ComponenteAbasProps) {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div>
            <div className="tab-buttons">
                {React.Children.map(props.children, (child, index) => (
                    <button
                        key={index}
                        className={index === activeTab ? "active" : ""}
                        onClick={() => handleTabClick(index)}
                    >
                        {child?.props.titulo}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {React.Children.map(props.children, (child, index) => (
                    index === activeTab ? child : null
                ))}
            </div>
        </div>
    );
}

export default ComponenteAbas;
