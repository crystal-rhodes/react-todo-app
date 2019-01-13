import React from 'react';

// Option 1
export default Option = (props) => {
    return (
        <div className="option">
            <li >{props.option}</li>
            <button
                className="button button-link"
                onClick={(e) => {
                    props.handleDeleteOption(props.option)
                }}
            >Remove</button>
        </div>
    );
};

// Option 2
// const Option = (props) => {
//     return (
//         <div>
//             <li>{props.option}</li>
//             <button
//                 onClick={(e) => {
//                     props.handleDeleteOption(props.option)
//                 }}
//             >Remove</button>
//         </div>
//     );
// };

// export default Option;