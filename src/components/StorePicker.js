import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = (event) => {
        event.preventDefault(); // 1. Stop the form from submitting
        const storeName = this.myInput.current.value; // 2. get the text from that input
        this.props.history.push(`/store/${storeName}`); // 3. Change the page to /store/whatever-they-entered
    }

    render() {
        return (
            <React.Fragment>
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please enter a store</h2>

                    <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={ getFunName() } />
                    <button type="submit">Visit Store</button>
                </form>
            </React.Fragment>
        )
    }
}

export default StorePicker;