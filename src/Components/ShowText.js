import PropTypes from 'prop-types';

function ShowText({ime, pozdrav}) {
    return (
        <p>{ime}, {pozdrav} iz funkcije!</p>
    );
}

export default ShowText;

ShowText.propTypes = {
    pozdrav: PropTypes.string
};

ShowText.defaultProps = {
    pozdrav: 'Dobar den'
};
