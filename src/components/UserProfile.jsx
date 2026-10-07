import UserInfo from './UserInfo.jsx'

function UserProfile({ user }) {
  const displayName = user?.name ?? 'Profile unavailable'
  const initials = user?.name
    ?.split(' ')
    .map((part) => part[0])
    .join('') ?? '--'

  return (
    <section className="panel" aria-labelledby="profile-heading">
      <div className="panel-heading">
        <h2 id="profile-heading">User profile</h2>
        <span className="panel-kicker">ACCOUNT DETAILS</span>
      </div>
      <div className="profile-body">
        <div className="profile-identity">
          <div className="avatar" aria-hidden="true">{initials}</div>
          <div>
            <p className="profile-name">{displayName}</p>
            <p className="profile-role">Team member</p>
          </div>
        </div>
        <UserInfo user={user} />
      </div>
    </section>
  )
}

export default UserProfile