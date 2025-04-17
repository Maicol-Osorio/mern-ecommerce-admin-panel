import Hero from "../components/Hero"
import NewCollection from "../components/NewCollection"
import NewLetter from "../components/NewLetter"
import Offerts from "../components/Offerts"
import Popular from "../components/Popular"

function Home() {
  return (
    <>
      <Hero/>
      <Popular/>
      <Offerts/>
      <NewCollection/>
      <NewLetter/>
    </>
  )
}

export default Home
