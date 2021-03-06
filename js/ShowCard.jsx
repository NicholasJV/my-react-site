const React = require('react')
const { Link } = require('react-router')

// stateless component syntax:
const ShowCard = (props) => (
  <Link to={`/details/${props.imdbID}`}>
    <div className='show-card'>
      <img src={`public/img/posters/${props.poster}`} className='show-card-img' />
      <div className='show-card-text'>
        <h3 className='show-card-title'>{props.title}</h3>
        <h3 className='show-card-year'>{props.year}</h3>
        <p className='show-card-description'>{props.description}</p>
        <p>ID: {props.key}</p>
      </div>
    </div>
  </Link>
)

var { string } = React.PropTypes

ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired,
  key: string.isRequired,
  imdbID: string.isRequired
}

module.exports = ShowCard
