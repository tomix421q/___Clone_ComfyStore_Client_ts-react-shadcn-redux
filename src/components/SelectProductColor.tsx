type SelectProductColotProps = {
  colors: string[]
  productColor: string
  setProductColor: React.Dispatch<React.SetStateAction<string>>
}

export default function SelectProductColor({ colors, productColor, setProductColor }: SelectProductColotProps) {
  return (
    <div className='mt-6'>
      <h4 className='text-md font-medium tracking-wider capitalize'>colors</h4>
      <div className='mt-2'>
        {colors.map((color) => {
          return (
            <button
              key={color}
              type='button'
              className={`rounded-full w-6 h-6 mr-2 border-2 ${color === productColor && 'border-primary'} bg-${color}`}
              style={{ backgroundColor: color }}
              onClick={() => setProductColor(color)}
            ></button>
          )
        })}
      </div>
    </div>
  )
}
