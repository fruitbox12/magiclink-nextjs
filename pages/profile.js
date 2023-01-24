import { useUser } from '../lib/hooks'
import Layout from '../components/layout'

const Profile = () => {
  const user = useUser({ redirectTo: '/login' })

  return (
    <Layout>
    <iframe src="http://18.219.91.222:3000/" height="100%" width="100%" frameborder="0">Your browser doesnot support iframes<a href="http://18.219.91.222:3000/"> click here to view the page directly. </a></iframe>
    </Layout>
  )
}

export default Profile
