import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        console.log("constructor");

        this.state = {
            city: "Zagreb",
            country: "Hrvatska",
            obj: {
                min: 22,
                max: 33
            }
        };
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");

        console.log("props");
        console.log(this.props);

        console.log("prevProps");
        console.log(prevProps);

        console.log("state");
        console.log(this.state);

        console.log("prevState");
        console.log(prevState);

        console.log("snapshot");
        console.log(snapshot);

        if(prevState.city !== this.state.city) {
            console.log("grad se promijenio");
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    changeState = () => {
        const newCity = this.state.city === "Zagreb" ? "Osijek" : "Zagreb";
        this.setState({ city: newCity });
    };

    dontChangeLikeThis = () => {
        const newCity = this.state.city === "Zagreb" ? "Osijek" : "Zagreb";
        this.state.city = newCity;
        console.log(this.state);
    };

    changeObjectMin = () => {
        const newMin = 10;
        this.setState({obj: {...this.state.obj, min: newMin} });
    }
  
    render() {
      return (
        <div>
            <h1>Grad: {this.state.city}</h1>
            <h1>Država: {this.state.country}</h1>
            <button onClick={this.changeState}>Drugi grad</button>
            <button onClick={this.dontChangeLikeThis}>Drugi grad 2</button>
            <button onClick={this.changeObjectMin}>Promjena min propertya objekta</button>
            <p>
                min: {this.state.obj.min}<br/>
                max: {this.state.obj.max}<br/>
            </p>
        </div>
      );
    }
}

export default MyComponent;
