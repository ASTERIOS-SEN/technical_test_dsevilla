import { IoHeart, IoLogoReact, IoPersonCircleOutline} from 'react-icons/io5'
import { SidebarMenuItem } from ".";

//Array de menuItems
const menuItems = [
    {
        path:'/dashboard/favorite',
        icon: <IoHeart size={40}/>,
        title:'Favoritos',
        subTitle: 'Tus personajes favoritos'
    },
    {
        path:'/dashboard/characters',
        icon: <IoPersonCircleOutline size={40}/>,
        title:'Personajes',
        subTitle: 'Todo los personajes'
    }
];


export default function Sidebar(){
    return(
        <div
        id="menu"
        style={{width:'400px'}}
        className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0 overflow-y-scroll"
      >

        <div id="logo" className="my-4 px-6">
          <h1 className="flex items text-lg md:text-2xl font-bold text-white">
            <IoLogoReact className="mr-2 mt-0.5"/>
            <span>Rick </span>
            <span className="text-blue-500">And</span>
              <span>Morty</span>
          </h1>
          <p className="text-slate-500 text-sm">
              Rick and Morty API
          </p>
        </div>

        <div id="nav" className="w-full px-6">
        {
            menuItems.map(item =>(
                <SidebarMenuItem
                 key={item.path} 
                 {...item}         
                />
            ))
        }
        </div>
      </div>
    )
}