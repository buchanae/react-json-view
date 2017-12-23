import React from 'react';

//theme
import Theme from './../../themes/getStyle';


export default class extends React.Component {

    render() {
        const type_name = 'bool';
        const {props} = this;

        return <div {...Theme(props.theme, 'boolean')}>
            {props.value ? "true" : "false"}
        </div>;
    }

}
