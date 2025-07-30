import Image from 'next/image'
import { IoBrowsersOutline, IoCalculator, IoFootball, IoHeartCircleOutline, IoLogoReact } from 'react-icons/io5'
import { MenuItemProps, SidebarMenuItem } from './SidebarMenuItem'


const menuItem: MenuItemProps[] = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Dashboard',
    subTitle: 'Aguante NextJS!'
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={40} />,
    title: 'Counter',
    subTitle: 'Counter client side + title servcer side'
  }
  ,
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball size={40} />,
    title: 'Pokemons',
    subTitle: 'static generation'
  }
  ,
  {
    path: '/dashboard/favourites',
    icon: <IoHeartCircleOutline size={40} />,
    title: 'Pokemons global',
    subTitle: 'global state using redux pattern'
  }
]
export const Sidebar = () => {
  return (

        <div
          id="menu"
          style={{width: '400px'}}
          className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll"
        >


          <div id="logo" className="my-4 px-6">
            <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
              <IoLogoReact className='mr-2'/>
              <span>pataflafla</span>
              <span className="text-blue-500">.io</span>
            </h1>
            <p className="text-slate-500 text-sm">
              javier sebastian portfolio
            </p>
          </div>
          {/* <div id="profile" className="px-6 py-10">
            <p className="text-slate-500">Welcome back,</p>
            <a href="#" className="inline-flex space-x-2 items-center">
              <span>
                <Image
                  className="rounded-full w-8 h-8"
                  src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                  alt="User avatar"
                  width={50}
                  height={50}
                />
              </span>
              <span className="text-sm md:text-base font-bold">
                Edward Tompson
              </span>
            </a>
          </div> */}

          <div id="nav" className="w-full px-6">
            { menuItem.map((itemProps:MenuItemProps) => <SidebarMenuItem key={itemProps.path} {...itemProps} />)}
          </div>
        </div>
  )
}
