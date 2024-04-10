import { useEffect, useState } from "react";
import { ref, child, get } from "firebase/database";
import LcLeaderboard from "@tabs/LcLeaderboard/LcLeaderboard";
import DirectoryContainer from "@tabs/Directory/DirectoryContainer";
import NewUser from "@auth/NewUser";
import RushEvents from "@landing/RushEvents";
import PledgeCalendar from "@tabs/Calendar/PledgeCalendar";
import PledgeResources from "@tabs/Resources/PledgeResources";
import Logo from "@/Assets/Images/Branding/Logo.png";
import AdminPanel from "@tabs/Admin/AdminPanel";
import DesktopSidebar from "@portal/Framework/DesktopSidebar";
import MobileSidebar from "@portal/Framework/MobileSidebar";
import Swal from "sweetalert2";
import { ActiveProfileContext } from "@portal/Framework/ActiveProfileContext";
import {
  Bars3Icon,
  CogIcon,
  MagnifyingGlassCircleIcon,
  WrenchScrewdriverIcon,
  CalendarIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";

//Default user to show while loading, replaced by real user after. Image data encoded in the code.
const defaultUser = {
  name: "Loading",
  imageUrl:
    "data:image/jpeg;base64,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",
};
var navigation: NavigationType = {
  Members: {
    name: "Members",
    icon: MagnifyingGlassCircleIcon,
    current: true,
    secondary: false,
    adminonly: false,
    pledgeonly: false,
  },
  Calendar: {
    name: "Calendar",
    icon: CalendarIcon,
    current: false,
    secondary: false,
    adminonly: false,
    pledgeonly: false,
  },
  /*Leaderboard: {
    name: "Leetcode Leaderboard",
    icon: BoltIcon,
    current: false,
    secondary: false,
    adminonly: false,
  },*/
  Resources: {
    name: "Resources",
    icon: FolderIcon,
    current: false,
    secondary: false,
    adminonly: false,
    pledgeonly: true,
  },
  Admin: {
    name: "Admin",
    icon: WrenchScrewdriverIcon,
    current: false,
    secondary: true,
    adminonly: true,
    pledgeonly: false,
  },
  Profile: {
    name: "Edit Profile",
    icon: CogIcon,
    current: false,
    secondary: true,
    adminonly: false,
    pledgeonly: false,
  },
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function AppContainer(props: { firebase: any, database: any, storage: any }) {
  /* Used by App container/sidebars exclusively */
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [pledge, setPledge] = useState(false);
  const [user, setUser] = useState(defaultUser);
  const [currTab, setCurrTab] = useState("Members");

  /* Used by tabs */
  const [currUserUid, setCurrUserUid] = useState("");
  const [fullPubDir, setFullPubDir] = useState({});
  const [activeProfile, setActiveProfile] = useState(currUserUid);
  const value: any = { activeProfile, setActiveProfile };

  useEffect(() => {
    if (localStorage.getItem("justSetup") === "true") {
      localStorage.setItem("justSetup", "false");
    }
    props.firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        var newUser: any = {};
        var dir: any = {};
        const dbRef = ref(props.database);
        setCurrUserUid(user.uid);
        get(child(dbRef, "public_users"))
          .then((snapshot) => {
            dir = snapshot.val();
            const currProfile = dir[user.uid];
            newUser.name = currProfile["name"];
            newUser.imageUrl = currProfile["pfp_thumb_link"]
              ? currProfile["pfp_thumb_link"]
              : currProfile["profile_pic_link"];
          })
          .then(() => {
            setUser(newUser);
            setFullPubDir(dir);
          });
        get(child(dbRef, "users/" + user.uid)).then((snapshot) => {
          const prof = snapshot.val();
          if (prof["admin"]) {
            setAdmin(true);
          }
          if (prof["Role"] === "Pledge") {
            setPledge(true);
          }
        });
      } else {
        let timerInterval: any;
        Swal.fire({
          title: "You are signed out. Redirecting to login...",
          icon: "info",
          timer: 2000,
          timerProgressBar: true,
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then(() => {
          window.location.href = "/signup";
        });
      }
    });
  }, []);

  //When sidebar tab is clicked, change the navigation state to reflect the new tab
  function onTabClick(nextButton: string) {
    console.log("Tab clicked: " + nextButton);
    setCurrTab(nextButton);
    setSidebarOpen(false);
  }

  const args: SideBarArgsType = {
    Logo: Logo,
    Navigation: navigation,
    CurrTab: currTab,
    ImageUrl: user.imageUrl,
    CurrentUserName: user.name,
    Admin: admin,
    Pledge: pledge,
    uid: currUserUid,
    onTabClick: onTabClick,
  };

  return (
    <div
      className={classNames(
        currTab=="Profile" ? "h-full" : "h-screen",
        "flex"
      )}
    >
      <ActiveProfileContext.Provider value={value}>
        {/* Dynamic sidebar for mobile */}
        <MobileSidebar
          args={args}
          sideBarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Static sidebar for desktop */}
        <DesktopSidebar args={args} />
      </ActiveProfileContext.Provider>

      {/* Main content area */}
      <div className="flex min-w-0 flex-1 flex-col ">
        <div className="lg:hidden">
          <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5">
            <div>
              <img
                className="cursor-pointer h-8 w-auto"
                src="https://is5-ssl.mzstatic.com/image/thumb/Purple122/v4/f3/9b/6e/f39b6e96-766a-39cd-184b-2f5286f40c81/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.webp"
                alt="Kappa Theta Pi"
                onClick={() => {
                  window.location.href = "/";
                }}
              />
            </div>
            <div>
              <button
                type="button"
                className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Member directory tab */}
        <div className={currTab=="Members" ? "" : "hidden"}>
          <ActiveProfileContext.Provider value={value}>
            <DirectoryContainer fullPubDir={fullPubDir} uid={currUserUid} />
          </ActiveProfileContext.Provider>
        </div>
        {/* Edit profile tab */}
        <div className={currTab=="Profile" ? "" : "hidden"}>
          <NewUser
            firebase={props.firebase}
            database={props.database}
            storage={props.storage}
            newuser={false}
          />
        </div>
        {/* Rush events tab */}
        <div className={false ? "" : "hidden"}>
          <RushEvents />
        </div>

        {/* Pledge calendar tab */}
        <div className={currTab=="Calendar" ? "overflow-y-auto" : "hidden"}>
          <PledgeCalendar />
        </div>

        <div className={currTab=="Resources" ? "overflow-y-auto" : "hidden"}>
          <PledgeResources />
        </div>

        {/* Admin tab, only visible to users with entry in users/UID/admin set to true */}
        <div className={currTab=="Admin" ? "" : "hidden"}>
          <AdminPanel firebase={props.firebase} database={props.database} />
        </div>

        {/* Leetcode Leaderboard tab */}
        <div className={currTab=="Leaderboard" ? "h-full" : "hidden"}>
          <LcLeaderboard firebase={props.firebase} database={props.database} fullPubDir={fullPubDir} />
        </div>
      </div>
    </div>
  );
}