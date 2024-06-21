import { formatAsDollars } from '@/utils'
import { useAppDispatch } from '@/hooks'
import { Button } from './ui/button'
import { editItem, removeItem } from '@/features/cart/cartSlice'
import SelectProductAmount from './SelectProductAmount'
import { Mode } from './SelectProductAmount'
import { Link } from 'react-router-dom'

const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
}

export const FirstColumn = ({ title, image }: { image: string; title: string }) => {
  return <img src={image} alt={title} className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover' />
}
export const SecondColumn = ({
  title,
  company,
  productColor,
  cartID,
}: {
  title: string
  company: string
  productColor: string
  cartID: string
}) => {
  let productId = cartID.split('#')[0]

  return (
    <div className='sm:ml-4 md:ml-12 sm:w-48'>
      <Link to={`/products/${productId}`}>
        <Button variant={'link'} className='capitalize font-medium p-0 text-md md:text-lg text-wrap'>
          {truncateText(title, 20)}
        </Button>
      </Link>
      <h4 className='mt-2 capitalize text-sm'>{company}</h4>
      <p className='mt-4 text-sm capitalize flex items-center gap-x-2'>
        color: <span className={`w-6 h-6 rounded-full`} style={{ background: productColor }}></span>
      </p>
    </div>
  )
}
export const ThirdColumn = ({ amount, cartID }: { amount: number; cartID: string }) => {
  const dispatch = useAppDispatch()
  const removeItemFromCart = () => {
    dispatch(removeItem(cartID))
  }

  const setAmount = (value: number) => {
    dispatch(editItem({ cartID, amount: value }))
  }

  return (
    <div className='flex flex-col items-center'>
      <SelectProductAmount amount={amount} setAmount={setAmount} mode={Mode.CartItem} />
      <Button variant={'link'} className='-ml-4' onClick={removeItemFromCart}>
        remove
      </Button>
    </div>
  )
}
export const FourthColumn = ({ price }: { price: string }) => {
  return <p className='font-medium sm:ml-auto'>{formatAsDollars(price)}</p>
}
