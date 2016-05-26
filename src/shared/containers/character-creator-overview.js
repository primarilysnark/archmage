import { CharacterCreatorOverview } from '../components/characters';
import { connect } from 'react-redux';
import { setCreatorField } from '../actions';

function mapStateToProps({ creator }) {
  return { creator };
}

function mapDispatchToProps(dispatch) {
  return {
    setCreatorField: (field, value) => dispatch(setCreatorField(field, value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCreatorOverview);
