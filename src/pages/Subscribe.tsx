import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";
import code_mockup from "../assets/code-mockup.png"

export function Subscribe() {
    const navigate = useNavigate(); 

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading } ] = useCreateSubscriberMutation();

    async function handleSubscibe(event: FormEvent){
        event.preventDefault();

        await createSubscriber({
            variables: {
                name,
                email,
            }
        })

        navigate('/event')
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex sm:flex-col lg:flex-row items-center justify-between mt-20 mx-auto">
                <div className="sm:max-w-[600px] sm:mx-8 sm:text-center sm:flex sm:flex-col sm:items-center md:max-w-[700px] lg:max-w-[640px] lg:mx-auto lg:text-left lg:items-start">
                    <Logo />

                    <h1 className="mt-8 text text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border sm:min-w-full md:min-w-min sm:mt-6 lg:mt-0 border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">
                        Inscreva-se gratuitamente
                    </strong>

                    <form onSubmit={handleSubscibe} className="flex flex-col gap-2 w-full">
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text"
                            placeholder="Seu nome completo"
                            onChange={event => setName(event.target.value)}
                        />
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email"
                            placeholder="Digite seu email"
                            onChange={event => setEmail(event.target.value)}
                        />

                        <button 
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>

            <img src={code_mockup} className="lg:mt-10" alt="" />
        </div>
    );
}