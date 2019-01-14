import React from 'react';

class AddOption extends React.Component {
    state = {
        error: undefined
    }

    handleAddOption = (e) => {
        e.preventDefault();
        console.log('testing');
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
        }
        // if (e.target.elements.option.value === '') {
        //     this.setState(() => ({error: "Cannot enter empty note"})); 
        // }
        // else {
        //     this.setState(() => ({error: undefined})); 
        // }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form className="form" onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button className="button">Add Option</button>
                </form>

            </div>
        );
    }
}

export default AddOption;