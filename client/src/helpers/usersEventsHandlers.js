export function createHandleNewUser(setUsers) {
  const handle = (user) => {
    setUsers(prev => {
      return [...prev, user]
    })
  };

  return handle
}

export function createHandleAlredyUsers(setUsers) {
  const handle = (users) => {
    setUsers(prev => {
      return [...prev, ...users]
    })
  };

  return handle
}

export function createHandleDisconnect(setUsers) {
  const handle = (userId) => {
    setUsers(prev => {
      const userIndex = prev.findIndex(e => e.sid === userId)

      return [...prev.slice(0, userIndex), ...prev.slice(userIndex + 1)]
    })
  };

  return handle
}
