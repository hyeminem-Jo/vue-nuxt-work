export default function ({ $cookie, store, redirect }) {
  // If the user is not authenticated
  if (!store.state.user.acessToken) {
    return redirect('/login')
  }
}