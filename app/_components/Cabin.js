import React from "react"
import TextExpander from "./TextExpander"
import {EyeSlashIcon, MapPinIcon, UsersIcon} from "@heroicons/react/24/solid"
import Image from "next/image"

function Cabin({cabin}) {
  return (
    <>
      <div className="relative scale-[1.15] -translate-x-3">
        <Image
          src={cabin.image}
          fill
          className="object-cover"
          alt={`Cabin ${cabin.name}`}
        />
      </div>
      <div>
        <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
          Cabin {cabin.name}
        </h3>

        <p className="text-lg text-primary-300 mb-10">
          <TextExpander>{cabin.description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{cabin.maxCapacity}</span>{" "}
              guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Cabin
