// original ui

// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { assets } from '../assets/assets'

// const Hero = () => {

//     const navigate = useNavigate()

//     return (
//         <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen'>

//             <div className='text-center mb-6'>
//                 <h1 className=' text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2] '>Create amazing content <br /> with <span className='text-primary'>AI tools </span> </h1>
//                 <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600'> Transform your content with our suite of premium AI tools.
//                     Write articles, generate images, and enhance your workflow.
//                 </p>
//             </div>

//             <div className='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs'>
//                 <button onClick={() => navigate('/ai')} className='bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer'>  Start creating now </button>
//                 <button className='bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer '> Watch demo </button>
//             </div>
//             <div className='flex items-center gap-4 mt-8 mx-auto text-gray-600'>
//                 <img src={assets.user_group} alt=" h-8 " />
//                 Trusted by 10k+ people
//             </div>

//         </div>
//     )
// }

// export default Hero









// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { assets } from '../assets/assets'

// const Hero = () => {

//     const navigate = useNavigate()

//     return (
//         <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'>

//             {/* Enhanced animated background */}
//             <div className='absolute inset-0 -z-20'>
//                 {/* Grid background */}
//                 <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px]'></div>

//                 {/* Animated blobs */}
//                 <div className='absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob'></div>
//                 <div className='absolute top-40 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>
//                 <div className='absolute -bottom-32 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000'></div>
//             </div>

//             {/* Floating cards background */}
//             <div className='absolute inset-0 -z-10 overflow-hidden'>
//                 <div className='absolute top-20 left-10 animate-float'>
//                     <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 w-32 h-32 flex items-center justify-center hover:bg-white/20 transition'>
//                         <div className='text-4xl'>✨</div>
//                     </div>
//                 </div>
//                 <div className='absolute top-40 right-20 animate-float animation-delay-1000'>
//                     <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 w-32 h-32 flex items-center justify-center hover:bg-white/20 transition'>
//                         <div className='text-4xl'>🤖</div>
//                     </div>
//                 </div>
//                 <div className='absolute bottom-32 left-1/4 animate-float animation-delay-2000'>
//                     <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 w-32 h-32 flex items-center justify-center hover:bg-white/20 transition'>
//                         <div className='text-4xl'>📝</div>
//                     </div>
//                 </div>
//                 <div className='absolute bottom-40 right-1/4 animate-float animation-delay-3000'>
//                     <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 w-32 h-32 flex items-center justify-center hover:bg-white/20 transition'>
//                         <div className='text-4xl'>🎨</div>
//                     </div>
//                 </div>
//             </div>

//             <div className='text-center mb-6 animate-fadeInUp relative z-10'>
//                 <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-bold mx-auto leading-[1.2] text-white'> Create amazing content <br /> with <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400'>AI tools </span> </h1>
//                 <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-300 animate-fadeInUp animation-delay-200'> Transform your content with our suite of premium AI tools.
//                     Write articles, generate images, and enhance your workflow.
//                 </p>
//             </div>

//             <div className='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs animate-fadeInUp animation-delay-400 relative z-10'>
//                 <button onClick={() => navigate('/ai')} className='bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-3 rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition duration-300 cursor-pointer font-medium border border-blue-400/30'> Start creating now </button>
//                 <button className='bg-white/10 backdrop-blur-md px-10 py-3 rounded-lg border border-white/30 text-white hover:border-cyan-400/50 hover:bg-white/20 hover:shadow-lg hover:scale-105 active:scale-95 transition duration-300 cursor-pointer font-medium'> Watch demo </button>
//             </div>

//             <div className='flex items-center gap-4 mt-8 mx-auto text-gray-300 animate-fadeInUp animation-delay-600 relative z-10'>
//                 <img src={assets.user_group} alt="users" className='h-8'/>
//                 Trusted by 10k+ people
//             </div>

//         </div>
//     )
// }

// export default Hero









import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Sparkles, Zap, Star, Code, Wand2, Palette, FileText, Image } from 'lucide-react'

const Hero = () => {
    const navigate = useNavigate()

    const floatingIcons = [
        { Icon: Sparkles, color: 'from-yellow-400 to-orange-500', position: 'top-40 left-5 sm:left-10' },
        { Icon: Zap, color: 'from-blue-400 to-cyan-500', position: 'top-56 right-5 sm:right-20' },
        { Icon: Star, color: 'from-pink-400 to-purple-500', position: 'bottom-40 left-5 sm:left-1/4' },
        { Icon: Code, color: 'from-green-400 to-emerald-500', position: 'bottom-48 right-5 sm:right-1/4' },
        { Icon: Wand2, color: 'from-indigo-400 to-blue-500', position: 'top-2/3 left-5 sm:left-20' },
        { Icon: Palette, color: 'from-rose-400 to-pink-500', position: 'top-1/2 right-5 sm:right-10' },
        { Icon: FileText, color: 'from-violet-400 to-purple-500', position: 'bottom-1/3 left-5 sm:left-10' },
        { Icon: Image, color: 'from-cyan-400 to-blue-500', position: 'top-3/4 right-5 sm:right-32' },
    ]

    const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5
    }))

    return (
        <div className='px-4 sm:px-20 xl:px-32 relative flex flex-col w-full justify-center min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'>

            {/* Animated Gradient Mesh Background */}
            <div className='absolute inset-0 pointer-events-none'>
                <div className='absolute inset-0 animate-gradient-shift' />

                {/* Grid background */}
                <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:50px_50px]'></div>

                {/* Large animated blobs */}
                <div className='absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob' />
                <div className='absolute top-40 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000' />
                <div className='absolute -bottom-32 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000' />
            </div>

            {/* Floating particles */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className='absolute rounded-full bg-white/20 animate-float-particle'
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            width: particle.size,
                            height: particle.size,
                            animationDelay: `${particle.delay}s`,
                            animationDuration: `${particle.duration}s`
                        }}
                    />
                ))}
            </div>

            {/* Floating icon cards */}
            <div className='hidden sm:block absolute inset-0 overflow-hidden'>
                {floatingIcons.map(({ Icon, color, position }, index) => (
                    <div
                        key={index}
                        className={`absolute ${position} animate-float-card`}
                        style={{ animationDelay: `${index * 0.5}s` }}
                    >
                        <div className={`bg-gradient-to-br ${color} p-4 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20 cursor-pointer hover:scale-110 transition-transform duration-300`}>
                            <Icon className='w-8 h-8 text-white' />
                        </div>
                    </div>
                ))}
            </div>

            {/* Main content */}
            <div className='text-center mb-6 relative z-10'>
                <div className='animate-fade-in-up'>
                    <div className='inline-block mb-4 animate-bounce-slow'>
                        <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-400/30'>
                            <Sparkles className='w-4 h-4 text-yellow-300 animate-pulse' />
                            <span className='text-sm text-white font-medium'>Powered by Advanced AI</span>
                        </div>
                    </div>

                    <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-bold mx-auto leading-[1.2] text-white mb-4'>
                        <span className='animate-fade-in-up inline-block'>
                            Create amazing content
                        </span>
                        <br />
                        <span className='animate-fade-in-up animation-delay-200 inline-block'>
                            with&nbsp;
                        </span>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 animate-gradient-text inline-block'>
                            AI tools
                        </span>
                    </h1>
                </div>

                <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-300 animate-fade-in-up animation-delay-400'>
                    Transform your content with our suite of premium AI tools.
                    Write articles, generate images, and enhance your workflow.
                </p>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs relative z-10 animate-fade-in-up animation-delay-600'>
                <button
                    onClick={() => navigate('/ai')}
                    className='group relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-3 rounded-lg font-medium border border-blue-400/30 hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 cursor-pointer'
                >
                    <span className='relative z-10'>Start creating now</span>
                </button>

                <a
                    href="https://www.youtube.com/watch?v=3XiQIy1rMHE"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className='bg-white/10 backdrop-blur-md px-10 py-3 rounded-lg border border-white/30 text-white font-medium hover:scale-105 hover:border-cyan-400/50 hover:bg-white/20 active:scale-95 transition-all duration-300 cursor-pointer'>
                        Watch demo
                    </button>
                </a>

            </div>

            {/* Stats */}
            <div className='flex items-center gap-4 mt-8 mx-auto text-gray-300 relative z-10 animate-fade-in-up animation-delay-800'>
                <img
                    src={assets.user_group}
                    alt="users"
                    className='h-8 animate-wiggle'
                />
                <span>
                    Trusted by <span className='font-bold text-blue-400'>10k+</span> people
                </span>
            </div>

            {/* Animated rings */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/10 rounded-full pointer-events-none animate-pulse-ring' />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-indigo-500/10 rounded-full pointer-events-none animate-pulse-ring animation-delay-1000' />
        </div>
    )
}

export default Hero