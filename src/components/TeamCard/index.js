// Write your code here
import {Link} from 'react-router-dom'
import './index.css'
const TeamCard = props => {
  const {teamItem} = props
  const {id, name, teamImageUrl} = teamItem
  return (
    <Link className="list-item" to={`/ipl/${id}`}>
      <img className="team-image" alt={name} src={teamImageUrl} />
      <h1>{name}</h1>
    </Link>
  )
}
export default TeamCard
