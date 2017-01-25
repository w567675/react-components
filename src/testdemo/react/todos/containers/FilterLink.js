import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import React from 'react';
import { Link } from 'react-router';

// const mapStateToProps = (state, ownProps) => ({
//   active: ownProps.filter === state.visibilityFilter
// })

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => {
//     dispatch(setVisibilityFilter(ownProps.filter))
//   }
// })

// const FilterLink = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Link)

const FilterLink = ({ filter, children }) => (
  <Link
    to={filter === 'all' ? '' : filter}
    activeStyle={
      {
        textDecoration: 'none',
        color: 'black',
      }
    }
  >
    {children}
  </Link>
)

export default FilterLink
