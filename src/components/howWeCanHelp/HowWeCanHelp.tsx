'use client'
import React, { useState } from 'react'

const HowWeCanHelp = () => {
  const [desc, isDesc] = useState(0)

  const toggleDesc = (id: number) => {
    isDesc(prev => (prev === id ? 0 : id))
  }

  const waysWeCanHelp = [
    {
      id: 1,
      title: 'Give your idea a home.',
      description:
        'Placeholder provides a space for everything that’s not ready yet. Drafts, fragments, mockups, late-night thoughts — all stored safely, all ready to grow.',
    },
    {
      id: 2,
      title: 'Organize the chaos.',
      description:
        'Turn your creative clutter into clarity. Placeholder helps you structure scattered notes and half-finished work into something that makes sense — even if it’s still evolving.',
    },
    {
      id: 3,
      title: 'Iterate effortlessly.',
      description:
        'Every update, tweak, and new direction matters. With Placeholder, you can build, refine, and experiment without losing your past versions.',
    },
    {
      id: 4,
      title: 'Grow at your own risk.',
      description:
        'There’s no pressure to finish. Placeholder adapts to your creative rhythm, letting you explore freely until the right version finds you.',
    },
  ]

  return (
    <div className="text-primary flex flex-col items-start">
      <h3 className="font-dm-mono uppercase text-sm mb-4 opacity-75">
        Here's how we can help
      </h3>
      <div className="w-3/4 md:w-2/3">
        {waysWeCanHelp.map(({ id, title, description }) => (
          <div
            key={id}
            className="mb-3 cursor-pointer overflow-hidden border-b-[0.5px] border-primary"
          >
            <div className="between-content">
              <h4
                onClick={() => toggleDesc(id)}
                className="font-oswald text-lg font-medium w-full pb-3"
              >
                {title}
              </h4>
              <span className="size-5 bg-primary mb-3"></span>
            </div>

            <div className="overflow-hidden transition-all duration-300">
              <p
                className={`
                  transition-all duration-300 font-suisse-regular text-sm 
                  ${desc === id ? 'max-h-32 opacity-100 pb-3' : 'max-h-0 opacity-0'}
                `}
              >
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowWeCanHelp
