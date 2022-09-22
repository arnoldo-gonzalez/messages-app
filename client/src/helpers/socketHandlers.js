export function CreateHandleError({ types, handleToast, socket, navigate, handleLogout }) {
  return (err) => {
    if (!err?.data) {
      handleToast("The connection to the chat server failed, check your connection and try again", types.error)
      socket.disconnect()
      return navigate("/log_on_chat", {replace: true})
    }
    const { code } = err.data
    if (code === 401) return handleLogout()
    if (code === 404) {
        handleToast("Chat not found, try again with another chat id", types.error)
        return navigate("/log_on_chat", {replace: true})
    }
  }
}

export function CreateHandleDissconnect({ types, handleToast, navigate }) {
  return (reason) => {
    if (reason === "io server disconnect") {
        handleToast("You have been disconnected of the chat, try to get into the chat later", types.error)
        return navigate("/log_on_chat", {replace: true})
    }
  }
}