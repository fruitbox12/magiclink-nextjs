import { useUser } from '../lib/hooks'
import Layout from '../components/layout'

const Profile = () => {
  const user = useUser({ redirectTo: '/login' })

  return (
    <>
    <iframe src="https://aad4-45-50-98-105.ngrok.io/" height="10000px" width="100%" frameborder="0"  display="block" border="none">Your browser doesnot support iframes<a href="https://aad4-45-50-98-105.ngrok.io/"> click here to view the page directly. </a></iframe>
  </>
  )
}

export default Profile
