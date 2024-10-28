// Write your code here
import './index.css'

const MatchCard = props => {
  const {item} = props
  const {
    first_innings,
    competing_team_logo,
    competing_team,
    result,
    match_status,
  } = item
  const classNa = match_status === 'Won' ? 'win' : 'lost'
  return (
    <li className="recent-match">
      <img
        className="image"
        alt={`competing team ${competing_team}`}
        src={competing_team_logo}
      />
      <h1>{first_innings}</h1>
      <p>{result}</p>
      <p className={`${classNa}`}>{match_status}</p>
    </li>
  )
}
export default MatchCard
