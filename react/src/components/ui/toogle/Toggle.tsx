import { IconMoon, IconSun } from "@assets/icons";
import { cn } from "@lib/utils/helper";

type TProps = {
  value: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant? : "toggle" |"dark-light-mood"
}

const Toggle = (props: TProps) => {
  const { value, variant,onChange: handleOnChange} = props
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input onChange={handleOnChange} type="checkbox" checked={value} className="peer sr-only" />
      <div className={cn({
        "relative w-[4rem] h-[2.25rem] bg-gray-200 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:absolute after:top-[3.5px] after:start-[3.5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-[1.75rem] after:h-[1.75rem] after:transition-all  peer-checked:bg-primary":true,
        "peer-checked:bg-black":value&&variant==="dark-light-mood"
      })}>
        {
          variant ==="dark-light-mood" && <>          
          <span className="absolute z-[9] top-[0.55rem] left-[0.55rem] w-[1rem] h-[1rem]">
            <IconSun className={`${value?'icon-white-fill':'icon-primary-fill'}  left-[0.45rem]`}/>
          </span>
          <span  className="absolute z-[9] top-[0.55rem] right-[0.57rem] w-[1rem] h-[1rem]">
            <IconMoon className={`${value?'icon-primary-fill':'icon-white-fill'}  right-[0.45rem]`}/>
          </span>
          </>
        }
      </div>
    </label>
  )
}

export default Toggle