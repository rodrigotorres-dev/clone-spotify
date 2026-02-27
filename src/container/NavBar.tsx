import { RiHome4Line, RiSearch2Line, RiSpotifyFill } from "react-icons/ri"

function NavBar() {
    return (
        <>
        {/*div principal */}
        <div className="bg-(--bg-color) flex justify-between p-3">
            {/*div Logo */}
            <div className="flex items-center gap-1">
                <RiSpotifyFill className="text-white text-4xl"/>
                <p className="text-2xl font-bold">Spotify</p>
            </div>
            {/*div Search */}
            <div className="flex items-center gap-4 relative">
                <RiHome4Line className="text-white bg-(--bg-color2) rounded-full p-2 text-5xl"/>
                <div className="flex items-center gap-2 relative bg-(--bg-color2) rounded-full px-3 py-1">
                    <RiSearch2Line className="text-white absolute"/>
                    <input type="search" placeholder="O que gostaria de ouvir?" className="text-white pl-6"/>
                </div>
            </div>
            {/*div User */}
            <div className="flex gap-3 items-center">
                <p className="text-white">Sign up</p>
                <p className="bg-white text-black px-3 py-1 rounded-full font-bold">Log in</p>
            </div>
        </div>
        
        </>
    )
}

export default NavBar