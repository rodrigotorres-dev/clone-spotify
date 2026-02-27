import { RiBookShelfLine, RiGlobalLine } from "react-icons/ri"

function Aside() {
    return(
        <>
        <aside className="bg-(--bg-color2) h-4/5 w-96 rounded p-2 space-y-4">
        {/*div Your Library */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <RiBookShelfLine />
                    <p>Your Library</p>
                </div>
                <div>
                    <p>+</p>
                </div>
            </div>
            {/*div Create Playlist */}
            <div className="flex flex-col bg-(--bg-color3) rounded p-2">
                <h3>Create your first playlist</h3>
                <p>It's easy, we'll help you</p>
                <p className="bg-white text-black w-30 flex justify-center rounded-full font-bold mt-2">Create playlist</p>
            </div>
            {/*div Podcasts */}
            <div className="flex flex-col bg-(--bg-color3) rounded p-2">
                <h3>Let's find some podcasts to follow</h3>
                <p>We'll keep you updated on new episodes</p>
                <p className="bg-white text-black w-36 flex justify-center rounded-full font-bold mt-2">Browse podcasts</p>
            </div>
            {/*div Text */}
            <div className="mt-40">
                <div>
                    <a href="#">Legal</a> <a href="">Safety & Privacy Center</a> <a href="">Privacy Policy</a> <a href="">Cookies</a> <a href="">About Ads</a> <a href="">Accessibility</a> <a href="">Notice at Collection</a>
                </div>
                <div>Your Privacy Choices</div>
                <div>Cookies</div>
            </div>
            {/*div Button */}
            <div className="flex items-center gap-1 border-2 border-white rounded-full  w-24 justify-center mb-10">
                <RiGlobalLine /> English
            </div>
        </aside>
        </>
    )
}

export default Aside