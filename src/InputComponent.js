import React, { Component } from 'react';

export default class Input extends Component {
    state = {
        label: ''
    };
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { label } = this.state;
        this.setState({ label: '' });
        const cb = this.props.onPlayerAdded ;
        cb(label);
    }

    render() {
        return (
            <form className='d-flex'
                onSubmit={this.onSubmit}>
                <input
                    type={this.type}
                    placeholder={this.placeholder}
                    onChange={this.onLabelChange}
                    value={this.state.label}></input>
                <button type='submit'
                    className='btn-info'>add Player</button>
            </form>);
    }
}

