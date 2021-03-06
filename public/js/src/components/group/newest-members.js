import React from 'react'
import { Link } from 'react-router-dom'
import ToolTip from 'react-tooltip'
import { connect } from 'react-redux'

@connect(store => (
  { newestMembers: store.Group.newestMembers }
))

export default class NewestMembers extends React.Component {
  render() {
    let
      { newestMembers, group } = this.props,
      len = newestMembers.length,
      map_members = newestMembers.map(u =>
        <Link key={u.user} to={`/profile/${u.username}`} data-tip={u.username} className='mutual_links'>
          <img src={`/users/${u.user}/avatar.jpg`} />
        </Link>
      )

    return (
      <div>

        {
          len != 0
            ?
            <div className='mutuals'>
              <div className='mutual_info'>
                <span>Newest members</span>
                <Link to={`/group/${group}/members`} data-tip='view all' className='view_all_yk'>
                  <i className='fas fa-chevron-right'></i>
                </Link>
              </div>
              <div className='mutual_main'>
                { map_members }
              </div>
              <ToolTip/>
            </div>
            : null
        }

      </div>
    )
  }
}
