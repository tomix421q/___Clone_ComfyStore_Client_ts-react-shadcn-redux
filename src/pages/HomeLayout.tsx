import { Header, Loading, Navbar } from '@/components'
import { Outlet, useNavigation } from 'react-router-dom'

export default function HomeLayout() {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'

  return (
    <div>
      <Header />
      <Navbar />
      <div className='align-element py-10'>{isPageLoading ? <Loading /> : <Outlet />}</div>
    </div>
  )
}
