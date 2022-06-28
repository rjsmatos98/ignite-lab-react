import { List, X } from "phosphor-react";
import { Logo } from "./Logo";
import { ActionMenu } from "../interfaces/ActionMenu";

export function Header(props: ActionMenu) {
    return (
        <header className="w-full py-5 flex items-center px-6 xl:justify-center sm:justify-between bg-gray-700 border-b border-gray-600">
            <Logo />

                <div 
                    className="text-violet-500 cursor-pointer xl:hidden"
                    onClick={() => props.setActionMenu(!props.isOpen)}  
                >
                    {props.isOpen ? 
                        <X size={32} /> 
                    : 
                        <List size={32}/>
                    }    
                </div>
        </header>
    )
}