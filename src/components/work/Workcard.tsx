import React from 'react'
import Image from 'next/image';

interface WorkProps {
    img: string;
    title: string;
    tag: string;
}

const Workcard: React.FC<WorkProps> = ({ img, title, tag }) => {
    return (
        <div className="w-full h-full pb-5">
            <div className="relative h-[16rem] md:h-[28rem] overflow-hidden rounded-sm">
                <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover object-center"
                />
            </div>
            <div className="w-full flex items-center justify-between pt-3">
                <h3 className="font-oswald font-semibold text-xl text-black uppercase">{title}</h3>
                <p className="text-sm text-dark-grey font-dm-mono border-[0.5px] px-1 py-0.5 rounded-sm">{tag}</p>
            </div>
        </div>

    )
}

export default Workcard