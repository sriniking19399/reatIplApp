// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  console.log(latestMatchDetails)
  const {
    umpires,
    result,
    man_of_the_match,
    date,
    venue,
    id,
    competing_team,
    first_innings,
    second_innings,
    match_status,
    competing_team_logo,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div>
        <p>{competing_team}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        className="competing-logo"
        alt={`latest match ${competing_team}`}
        src={competing_team_logo}
      />
      <div className="innings">
        <h1 className="heading">First Innings</h1>
        <p className="content">{first_innings}</p>
        <h1 className="heading">Second Innings</h1>
        <p>{second_innings}</p>
        <h1 className="heading">Man Of The Match</h1>
        <p>{man_of_the_match}</p>
        <h1 className="heading">Umpires</h1>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
