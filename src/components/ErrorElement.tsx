import { useRouteError } from 'react-router-dom'

export default function ErrorElement() {
  const error = useRouteError()
  console.log(error)
  return (
    <div>
      <h4 className='font-bold text-4xl'>There was an error on this component...</h4>
    </div>
  )
}
