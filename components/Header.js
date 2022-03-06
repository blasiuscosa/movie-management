import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon} from '@heroicons/react/outline'

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-6 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title='HOME' Icon={HomeIcon} />
          <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
          <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
          <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
          <HeaderItem title='SEARCH' Icon={SearchIcon} />
          <HeaderItem title='ACCOUNT' Icon={UserIcon} />
      </div>
      <Image className="object-contain" alt="" src="/movie.png" width={100} height={50} />
    </header>
  );
}

export default Header;
