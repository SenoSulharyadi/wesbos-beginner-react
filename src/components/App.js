import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
    state = {
        fishes: {},
        order: {},
    };

    addFish = fish => {
        const fishes = { ...this.state.fishes };
        fishes[`fish${Date.now()}`] = fish;
        this.setState({
            fishes: fishes
        });

        console.log('adding fish');
        console.log(fish);
        console.log(fishes);
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Quality not quantity" />
                </div>

                <Order />
                <Inventory addFish={this.addFish} />
            </div>
        )
    }
}

export default App;