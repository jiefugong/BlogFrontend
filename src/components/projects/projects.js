import { allProjects } from "./utils/descriptions";


const Projects = () => {

  const generateProjectCards = (projects) => {
    let projectCardRows = [];
    const chunkSize = 3;

    for (let i = 0; i < projects.length; i += chunkSize) {
      let chunk = projects.slice(i, i + chunkSize);
      const singleRow = chunk.map((project) => {
        return (
          <div className="group flex items-center justify-center w-1/3 h-full hover:cursor-pointer">
            <div className={`flex w-4/5 h-full ${project.initialColor}`}>
              <img
                src={project.imgUrl}
                className="object-contain px-4 transition-opacity duration-300 group-hover:opacity-10"
              />
              <div className={`flex items-center justify-center px-8 absolute w-1/5 text-sm text-white h-64 invisible transition duration-300 group-hover:visible ${project.hoverColor}`}>
                {project.blurb}
              </div>
            </div>
          </div>
        )
      })

      projectCardRows.push(
        // space-x not applying because there's no object 
        <div className="flex w-full h-64">
          {singleRow}
        </div>
      )
    }
    return projectCardRows;
  }

  return (
    <div className="flex flex-col w-3/4 h-screen space-y-12 justify-center">
      { generateProjectCards(allProjects) }
    </div>
  )
}

export default Projects;
