// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {teamList: [], isLoading: true}
  componentDidMount() {
    this.getAppData()
  }
  getAppData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updateData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamList: updateData, isLoading: false})
  }
  render() {
    const {teamList, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="black" height={50} width={50} />
          </div>
        ) : (
          <div className="bg-container">
            <div className="logo-container">
              <img
                className="logo"
                alt="ipl logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              />
              <h1 className="logo-content">IPL Dashboard</h1>
            </div>
            <ul className="team-card-container">
              {teamList.map(eachItem => (
                <TeamCard key={eachItem.id} teamItem={eachItem} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}
export default Home
