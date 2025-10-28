import { works } from "@/utils/data";
import Workcard from "./Workcard";


const Work = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
        { works.map(({ img, title, tag }) => <Workcard key={title} img={img} title={title} tag={tag} />) }
    </div>
  )
}

export default Work