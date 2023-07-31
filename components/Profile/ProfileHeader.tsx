import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { formatNumbers } from "@/lib/general";

interface IProps {
  user?: any;
}

export function ProfileHeader({ user }: IProps) {
  return (
    <header className="w-full flex justify-center items-center flex-col bg-gradient-2 gap-2 rounded-lg p-5 pt-10 pb-10 sm:p-10 border ">
      <Avatar className="h-20 w-20 max-h-20 max-w-20 border-4 border-gray-300  ">
        <AvatarImage
          src={user?.picture}
          referrerPolicy="no-referrer"
          alt={`${user?.username} AyeCaso`}
        />
        <AvatarFallback>
          <Avatar className="h-20 w-20 max-h-20 max-w-20">
            <AvatarImage
              src={"/02.png"}
              alt={user?.name}
              referrerPolicy="no-referrer"
            />
          </Avatar>
        </AvatarFallback>
      </Avatar>
      <div className="text-xl font-medium -tracking-tighter pt-4 ">
        @{user?.username}
      </div>

      <div className="text-xs text-gray-400 pr-5 pl-5 leading-5 text-center max-w-[400px] -tracking-tighter ">
        {user?.tagline}
      </div>
      <div className="w-full pl-3 pr-3 flex justify-center items-center gap-5 pt-4 ">
        <div className="  flex justify-center items-center gap-2 ">
          <div className="text-sm font-semibold">
            {formatNumbers(user?.likesCount)}
          </div>
          <div className="text-sm text-gray-400 -tracking-tighter ">Likes</div>
        </div>

        <div className=" flex justify-center items-center gap-2 ">
          <div className="text-sm font-semibold">
            {formatNumbers(user?.reachCount)}
          </div>
          <div className="text-sm text-gray-400 -tracking-tighter ">Reach</div>
        </div>
      </div>
    </header>
  );
}
