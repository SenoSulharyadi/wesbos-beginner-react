import React from 'react';

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = (event) => {
        event.preventDefault();

        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }

        this.props.addFish(fish);
        // Reset form
        event.currentTarget.reset();
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" name="name" placeholder="Name" ref={this.nameRef} />
                <input type="text" name="price" placeholder="Price" ref={this.priceRef} />

                <select name="status" id="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out!</option>
                </select>

                <textarea name="desc" placholder="Desc" ref={this.descRef}></textarea>

                <input type="text" name="image" placeholder="Image" ref={this.imageRef} />
                <button type="submit">+ Add fish</button>
            </form>
        )
    }
}

export default AddFishForm;