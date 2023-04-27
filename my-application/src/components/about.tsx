import { AboutContent, AboutTitle } from '../constants/constants'

export default function About() {
  return (
    <div className="p-10 md:p-20 w-full md:w-8/12 md:m-auto text-center border-b border-b-gray-200">
      <div className="font-bold text-xl md:text-2xl">{AboutTitle}</div>
      <div className="text-sm md:text-lg mt-4 text-justify md:mt-10">
        {AboutContent}
      </div>
    </div>
  )
}
