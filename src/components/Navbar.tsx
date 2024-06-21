import { CartButton, LinksDropdown, Logo, ModeToggle, NavLinks } from '.'

export default function Navbar() {
  return (
    <nav className='bg-muted py-4'>
      <div className='align-element flex justify-between items-center'>
        <Logo />
        <LinksDropdown />
        <NavLinks />
        <div className='flex justify-center items-center gap-x-4'>
          <ModeToggle />
          <CartButton />
        </div>
      </div>
    </nav>
  )
}
