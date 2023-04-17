import { ReactNode } from 'react'

interface ServiceProps {
  icon: ReactNode
  title: string
  description: string
}
export default function Service({ icon, title, description }: ServiceProps) {
  return (
    <div className="text-center flex flex-col justify-center items-center gap-y-3">
      {icon}
      <h3 className="text-lg">{title}</h3>
      <p className="text-sm w-2/3">{description}</p>
    </div>
  )
}
