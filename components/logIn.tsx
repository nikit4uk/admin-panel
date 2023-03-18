import { useSession, signIn, signOut } from "next-auth/react"

export default function LogInBtn() {
  const { data: session } = useSession()
  if (session) {
    return (
      <button onClick={() => signOut()}>Sign out</button>
    )
  }
  return (
      <button onClick={() => signIn()}>Sign in</button>
    )
}