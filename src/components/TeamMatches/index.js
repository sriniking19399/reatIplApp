// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {teamDetail: [], isLoading: true}
  componentDidMount() {
    this.getTeamtemData()
  }
  getTeamtemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const responce = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await responce.json()
    const updateData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamDetail: updateData, isLoading: false})
  }
  render() {
    const {teamDetail, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamDetail

    return (
      <div className="match-bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="black" height={50} width={50} />
          </div>
        ) : (
          <div className="card-container">
            <img alt="team banner" className="banner-image" src={teamBannerUrl} />
            <p>Latest Matches</p>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="match-card-container">
              {recentMatches.map(eachItem => (
                <MatchCard key={eachItem.id} item={eachItem} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
