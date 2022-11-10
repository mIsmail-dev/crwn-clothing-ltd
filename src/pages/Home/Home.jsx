import { Helmet } from 'react-helmet'
import Directory from '../../components/directory/Directory'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home page</title>
        <meta name='description' content='Showing all categories of store' />
      </Helmet>
      <Directory />
    </div>
  )
}

export default Home
