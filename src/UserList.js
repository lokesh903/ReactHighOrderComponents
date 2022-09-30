import React from 'react'
import HOC from './HOC'

const UserList = ({data}) => {
   
    let filered_data = data.map((user) => {
        return (
            <div key={user.id}>
                <p>
                    <strong> {user.name} </strong>
                </p>
            </div>
        )
    })

  return (
    <div>
      {filered_data}
    </div>
  )
}

const HocUsers = HOC(UserList, "users")
export default HocUsers