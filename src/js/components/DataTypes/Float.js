import React from 'react';
import DataTypeLabel from './DataTypeLabel';

//theme
import Theme from './../../themes/getStyle';

export default class extends React.Component {

    render() {
        const type_name = 'float';
        const {props} = this;
        return (
        <div {...Theme(props.theme, 'float')}>
            {this.props.value}
        </div>
        );
    }

}
