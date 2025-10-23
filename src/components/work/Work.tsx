import { works } from "@/utils/data";
import Workcard from "./Workcard";


const Work = () => {
  return (
    <div className="flex md:flex-row flex-col w-full gap-6">
        { works.map(({ img, title, tag }) => <Workcard key={title} img={img} title={title} tag={tag} />) }
    </div>
  )
}

export default Work