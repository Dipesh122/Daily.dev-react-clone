import {
  Atom,
  Search,
  Plus,
  Globe,
  Droplet,
  ArrowBigUp,
  MessageSquareText,
  Link,
  ChevronsLeftRight,
  Bookmark,
  Eye,
  PauseCircle,
  Settings,
  TerminalSquare,
  MessageCircleWarning,
  FileText,
  Forward,
  LifeBuoy,
} from "lucide-react";
export default function SideBar() {
  return (
    <section className="side-bar w-60 max-md:hidden">
      <div className="py-9">
        <div className="hover:bg-slate-800 cursor-pointer py-1 flex items-center">
          <span className="bg-pink-700 px-2 py-1 rounded-md text-xs mr-3 ml-3">
            D
          </span>
          <span className="font-normal text-sm text-gray-300 hover:bg-slate-800 cursor-pointer">
            My feed
          </span>
        </div>
      </div>
      <div>
        <h1 className="text-neutral-500 font-bold text-sm ml-3 max-sm:hidden">Squads</h1>
        <ul className="text-gray-300 font-light">
          <li className="hover:bg-slate-800 cursor-pointer mt-1 flex items-center">
            <Atom className="inline h-4 w-4 mr-4 ml-3" />Public Squads
          </li>
          <li className="hover:bg-slate-800 cursor-pointer flex items-center">
            <Plus className="inline h-4 w-4 mr-4 ml-3 bg-gray-900 rounded-sm" />New Squad
          </li>
          <li className="hover:bg-slate-800 cursor-pointer flex items-center">
            <Globe className="inline h-4 w-4 mr-4 ml-3" />WebDev
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-neutral-500 font-bold text-sm ml-3 mt-4">
          Discover
        </h1>
        <ul className="text-gray-300 font-light">
          <li className="hover:bg-slate-800 cursor-pointer mt-1 flex items-center">
            <Droplet className="inline h-4 w-4 mr-4 ml-3" /> Popular
          </li>
          <li className="hover:bg-slate-800 cursor-pointer flex items-center">
            <ArrowBigUp className="inline h-4 w-4 mr-4 ml-3" />
            Most upvoted
          </li>
          <li className="hover:bg-slate-800 cursor-pointer flex items-center">
            <MessageSquareText className="inline h-4 w-4 mr-4 ml-3" />
            Best discussions
          </li>
          <li className="hover:bg-slate-800 cursor-pointer flex items-center">
            <Search className="inline h-4 w-4 mr-4 ml-3" />
            Search
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-neutral-500 font-bold text-sm ml-3 mt-4">
          Contribute
        </h1>
        <ul className="text-gray-300 font-light">
          <li className="hover:bg-slate-800 cursor-pointer mt-1 flex items-center">
            <Link className="inline h-4 w-4 mr-4 ml-3" /> Submit article
          </li>
          <li className="hover:bg-slate-800 cursor-pointer flex items-center">
            <ChevronsLeftRight className="inline h-4 w-4 mr-4 ml-3" />
            Suggest new source
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-neutral-500 font-bold text-sm ml-3 mt-4">Manage</h1>
        <ul className="text-gray-300 font-light">
          <li className="hover:bg-slate-800 cursor-pointer mt-1 flex items-center">
            <Bookmark className="inline h-4 w-4 mr-4 ml-3" /> Bookmarks
          </li>
          <li className="hover:bg-slate-800 cursor-pointer flex items-center">
            <Eye className="inline h-4 w-4 mr-4 ml-3" />
            Reading history
          </li>
          <li className="hover:bg-slate-800 cursor-pointer flex items-center">
            <PauseCircle className="inline h-4 w-4 mr-4 ml-3" />
            Pause new tab
          </li>
          <li className="hover:bg-slate-800 cursor-pointer flex items-center">
            <Settings className="inline h-4 w-4 mr-4 ml-3" />
            Customize
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <ul className=" text-gray-300 font-light">
          <li className="hover:bg-slate-800 cursor-pointer flex items-center">
            <FileText className="inline h-4 w-4 mr-4 ml-3" /> Docs
          </li>
          <li className="hover:bg-slate-800 cursor-pointer flex items-center">
            <TerminalSquare className="inline h-4 w-4 mr-4 ml-3" /> Changlog
          </li>
          <li className="hover:bg-slate-800 cursor-pointer flex items-center">
            <MessageCircleWarning className="inline h-4 w-4 mr-4 ml-3" /> Feedback
          </li>
          <li className="hover:bg-slate-800 cursor-pointer flex items-center">
            <Forward className="inline h-4 w-4 mr-4 ml-3" /> Invite people
          </li>
        </ul>
      </div>
      <div>
        <div className="border rounded-xl border-orange-500 mt-4 flex items-center p-1 ml-4 w-48 mb-3">
          <LifeBuoy className=" text-yellow-700 ml-2" />
          <div className="ml-2 text-gray-300">
            <p>
              <b>Bronze</b>
            </p>
            <p className="font-light text-sm">Next level: Silver</p>
          </div>
        </div>
      </div>
    </section>
  );
}
