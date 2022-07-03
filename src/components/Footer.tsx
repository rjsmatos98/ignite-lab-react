import rocketseatLogo from '../assets/rocketseat-logo.png'
import linkedinLogo from '../assets/linkedin-Logo.png'
import githubLogo from '../assets/github-logo.png'

export function Footer() {
    return (
        <div className="flex md:flex-row items-center sm:flex-col justify-between py-5 px-5 sm:gap-1 bg-gray-900 border-t border-gray-500 text-gray-100 w-full">
            <div className="flex text-sm">
                <a href="https://www.rocketseat.com.br/" target="_blank">
                    <img src={rocketseatLogo} className="h-10" />
                </a>
            </div>
            <div className="flex text-sm">
                <span><span>&#169;</span> Todos os direitos reservados</span>
            </div>
            <div className="flex flex-col gap-2">
                <span className="">Desenvolvido por <strong className="text-purple-500">Raimundo Santos</strong></span>
                <span className="flex md:justify-end sm:justify-center gap-6 sm:gap-4">
                    <a href="https://www.linkedin.com/in/rjsmatos98/" target="_blank">
                        <img src={linkedinLogo} className="h-7 rounded" />
                    </a>
                    <a href="https://github.com/rjsmatos98/" target="_blank">
                        <img src={githubLogo} className="h-7 rounded" />
                    </a>
                </span>
            </div>
        </div>
    )
}