import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>

                <button
                    className="button button--link"
                    onClick={props.handleDeleteOptions}>
                    Remove All</button>
            </div>
            {props.options.length === 0 && <p className="widget__message"><b>Please add option to show up</b></p>}
            <ol>
                {props.options.map((option, key) => (
                    <Option
                        key={key}
                        option={option}
                        handleDeleteOption={props.handleDeleteOption} />
                ))}
            </ol>
        </div>

    );
}

export default Options;