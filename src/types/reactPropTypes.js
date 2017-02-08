import { PropTypes } from 'react'

export const PTPriorMarriage = PropTypes.shape({
  name: PropTypes.shape({
    first: PropTypes.string,
    family: PropTypes.string
  }),
  birth: PropTypes.shape({
    date: PropTypes.string
  }),
  start: PropTypes.shape({
    date: PropTypes.string,
    place: PropTypes.string
  }),
  end: PropTypes.shape({
    date: PropTypes.string,
    place: PropTypes.string
  })
})
