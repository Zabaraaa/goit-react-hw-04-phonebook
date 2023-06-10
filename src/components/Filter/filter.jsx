import PropTypes from 'prop-types';
import { Title, FindInput, ContainerInput } from './filter.styled';

const Filter = ({ value, onChange }) => 
    <ContainerInput>
        <Title>Find by name</Title>
        <FindInput type="text" value={value} onChange={onChange} />
    </ContainerInput>

export default Filter;

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}