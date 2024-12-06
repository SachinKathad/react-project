import React from 'react'                                      //step to create usercontext 1) create userContext.js file in the folder of context and then export this file and then this context will give provider(user context helps to avoid unneccesary props)
//2) create userContext provider use jsx there


const UserContext = React.createContext()

export default UserContext
