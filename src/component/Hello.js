import React from 'react';

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello From Hello</h1>
    //     </div>
    // )

    return React.createElement(
            "div",
            {id:'hello',className:'helloClass'},
            React.createElement('h1',null,'Hello From Hello...')
    );
}

export default Hello