import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">Promptopia is a cutting-edge AI tool that fosters exploration, innovation, and collaboration in the realm of creative prompts. Designed for the contemporary world, this open-source platform empowers users to uncover, generate, and distribute captivating prompts, fueling inspiration and artistic expression</p>

      <Feed />
    </section>
  )
}

export default Home