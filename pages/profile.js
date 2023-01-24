import { useUser } from '../lib/hooks'
import Layout from '../components/layout'

const Profile = () => {
  const user = useUser({ redirectTo: '/login' })

  return (
    <Layout>
    <iframe src="https://aad4-45-50-98-105.ngrok.io/" height="100%" width="100%" frameborder="0">Your browser doesnot support iframes<a href="https://aad4-45-50-98-105.ngrok.io/"> click here to view the page directly. </a></iframe>
    </Layout>
  )
}

export default Profile
