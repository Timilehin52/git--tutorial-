import React from 'react'
import { Link } from 'react-router'

export default function Newpraticee() {
    const users = 
    [   
        {id:1, name: "WakeLock", hobby: "reading", job: "teacher" },
        {id:1, name: "Walwe", hobby: "reading", job: "accountant" },
        {id:1, name: "Wale", hobby: "reading", job: "mechanical eng" },
        {id:1, name: "Hancock", hobby: "observing", job: "politicain" },
        {id:1, name: "SherLock", hobby: "sleeping", job: "tennis player" },
        {id:1, name: "DamLock", hobby: "sitting", job: "footballer" },
        {id:1, name: "Lockwood", hobby: "painting", job: "baker" },
        {id:1, name: "Mccgin", hobby: "running", job: "footballer" },
    ]
  return (
    <div>
        <Link to="/about">About</Link>
        
        {users.map((user) => {
            return(
                <Link to={`/user/${user.id}`}>
                    {user.name}
                </Link>
            )
        })}
    </div>
  )
}
