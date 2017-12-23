import React from "react";

export default function ObjectName(props) {
    const {
        parent_type, namespace, jsvRoot, name
    } = props;

    const display_name = props.name ? props.name : '';

    if (jsvRoot && (name === false || name === null)) {
        return (<span />);
    } else if (parent_type == 'array') {
        return (
            <span className="array-key" key={namespace}></span>
        );
    } else {
        return (
            <span className="object-name" key={namespace}>
                <span className="object-key">
                    <span>{display_name}</span>
                </span>
                <span className="colon">:</span>
            </span>
        );
    }
}
