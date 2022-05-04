export const appReducer = (state, action) => {
  switch(action.type) {
    case 'LOG_IN':
      return {
        loggedIn: true,
        isAdmin: action.payload.isAdmin,
      }
    case 'LOG_OUT':
      return {
        loggedIn: false,
        isAdmin: false,
      }
    default:
      return state;
  }
}
