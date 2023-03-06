import React from 'react';

export default class AddOsoba extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ime: '',
            prezime: '',
            godine: ''
        }
    }

    handleAdd = () => {
        const newIme = this.state.ime.trim();
        const newPrezime = this.state.prezime.trim();
        
        if(newIme.length < 2 || newPrezime.length < 2) {
            alert('Provjeri ime i prezime!');
            return;
        }

        if(this.state.godine <= 0) {
            alert('Provjeri godine!');
            return;
        }

        // okini event
        this.props.onAddNew({ ime: newIme, 
                            prezime: newPrezime,
                            godine: this.state.godine });
        this.setState({ ime: '', prezime: '', godine: ''});
    }

    render() {
        return (
            <p>
                <input value={this.state.ime} 
                        onChange={(e) => this.setState({ime: e.target.value})} />
                <input value={this.state.prezime} 
                        onChange={(e) => this.setState({prezime: e.target.value})} />
                <input type="number" value={this.state.godine} min={0}
                                        onChange={(e) => this.setState({godine: e.target.value})} />
                <button onClick={this.handleAdd}>ADD</button>
            </p>
        );
    }
}