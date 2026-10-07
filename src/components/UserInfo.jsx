function UserInfo({ user }) {
  const name = user?.name ?? 'Not available'
  const email = user?.email ?? 'Not available'
  const profession = user?.profession ?? 'Not available'

  return (
    <dl className="info-list">
      <div className="info-row">
        <dt>Full name</dt>
        <dd>{name}</dd>
      </div>
      <div className="info-row">
        <dt>Email address</dt>
        <dd>{email}</dd>
      </div>
      <div className="info-row">
        <dt>Profession</dt>
        <dd>{profession}</dd>
      </div>
    </dl>
  )
}

export default UserInfo