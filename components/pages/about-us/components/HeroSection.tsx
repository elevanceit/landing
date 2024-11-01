const pageData = {
    title: "About Our Platform",
    text1: "We are building a unique freelance platform designed to help every talent find work from any corner of the world. Our platform connects companies with high-quality, vetted professionals, enabling fast hiring without the need for costly recruiters.",
    text2: "We invite everyone interested to join us as a contributor or propose a commercial partnership on mutually beneficial terms."
}

const HeroSection = () => {
    return(
        <div className="mt-25 w-full flex border-t border-b border-divider-grey">
            <div className="w-1/3 px-10 flex items-center border-r border-divider-grey text-64 bg-brand-gradient text-transparent font-semibold">{pageData.title}</div>
            <div className="w-2/3">
                <div className="px-10 py-20 text-text-darken-1 text-2xl border-b border-divider-grey">{pageData.text1}</div>
                <div className="px-10 py-20 text-text-darken-1 text-2xl">{pageData.text2}</div>
            </div>
        </div>
    )
}

export default HeroSection