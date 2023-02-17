import React from 'react';

class ShowMeTheMoney extends React.Component {
    moreMoney = this.props.money * 578;

    render(){
        const { money } = this.props;

        return (
            <p>Imaš {money}$, a ne bi bilo loše {this.moreMoney}$</p>
        );
    }    
}

export default ShowMeTheMoney;

// proptypes??