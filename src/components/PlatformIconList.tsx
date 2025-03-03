import { Platform } from "@/hooks/usePlatforms";
import { HStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react/icon";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";

import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

interface Props {
  platforms: Platform[];
}
const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  ios: MdPhoneIphone,
  android: FaAndroid,
  linux: FaLinux,
  nintendo: SiNintendo,
  web: BsGlobe,
  mac: FaApple,
};

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack marginY={1}>
      {platforms.map((p) => (
        <Icon key={p.id} as={iconMap[p.slug]} color={"yellow "} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
