import React from 'react'
import { MdCheckCircle } from 'react-icons/md'
import Donation from './Donation'
import { CharityStruct, SupportStruct } from '@/utils/type.dt'
import Image from 'next/image'

interface ComponentProp {
  charity: CharityStruct
  supports: SupportStruct[]
}

const Details: React.FC<ComponentProp> = ({ charity, supports }) => {
  return (
    <div className="flex flex-col w-full md:w-2/3 space-y-6">
      <h4 className="text-4xl font-semibold capitalize">{charity?.name}</h4>
      <div className="w-full h-[500px] relative">
        <Image
          layout="fill"
          src={charity?.image}
          alt="donation"
          className="rounded-xl object-cover"
        />
      </div>

      <hr className="border-t border-gray-300" />

      <p>{charity?.description}</p>

      <hr className="border-t border-gray-300" />

      <div>
        <h4 className="font-semibold text-lg mb-1">Words of support ({supports.length})</h4>
        <p className="mb-4 text-gray-600">Please donate to share words of support.</p>

        <div className="flex flex-col space-y-10">
          {supports.map((support: any, i: number) => (
            <Donation comment support={support} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Details
