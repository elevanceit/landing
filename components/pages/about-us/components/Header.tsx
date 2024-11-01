import Image from "next/image"
import { IconLogo } from "@/assets/icons"

const Header = () => {
    return (
        <div className="h-20 flex">
            <Image className="m-auto" width={268} height={24} src={IconLogo} alt="logo" />
        </div>
    )
}

export default Header