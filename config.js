import { BsFacebook, BsYoutube } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { MdAddModerator } from "react-icons/md";
import { SiProbot } from "react-icons/si";
import { TbMessage2Code } from "react-icons/tb";
const config = {
  name: "ProBot",
  //BotName
  inviteLink:
    "https://discord.com/oauth2/authorize?client_id=879602399067660338&permissions=8&scope=bot&redirect_uri=https://docs.markos.ga&response_type=code",
  //BotInvite Link
  Features: [
    {
      name: "Chat",
      description:
        "Chat makes a thread in the channel the command is used in.",
      logo: <MdAddModerator className="h-10 w-10" />,
    },
    {
      name: "99% Uptime",
      description:
        "Uptime is a measure of system reliability, expressed as the percentage of time a machine, typically a computer.",
      logo: <SiProbot className="h-10 w-10" />,
    },
    {
      name: "Ask",
      description:
        "Ask Chat GPT a question.",
      logo: <TbMessage2Code className="h-10 w-10" />,
    },
    {
      name: "Ping",
      description:
        "The bot will reply with pong",
      logo: <CgCrown className="h-10 w-10" />,
    },
    // You can added more features if need add
  ],
  //Bot Features
  serverCount: 81, //-  - Your
  memberCount: 7000, //--   - Bot
  executedCommand: 1000, //--  - Stats
  availableCommand: 3, //---   - Here
  //Do not change if you don't know about them
  faceBookLogo: (
    <BsFacebook className="h-10 w-10 text-[#4267B2] hover:scale-125 easeIn cursor-pointer" />
  ),
  discordLogo: (
    <FaDiscord className="h-10 w-10 text-[#738adb] hover:scale-125 easeIn cursor-pointer" />
  ),
  youTubeLogo: (
    <BsYoutube className="h-10 w-10 text-[#FF0000] hover:scale-125 easeIn cursor-pointer" />
  ),
  //----------------------------------------------------------------
  // Your social handle links




  discordLink: "https://discord.gg/S9MNuvqtxQ",
  youtubeLink: "https://youtube.com/@greatlake_editz",
};

export default config;
