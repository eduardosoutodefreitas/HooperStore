import { ReactNode } from 'react'

interface ServiceProps {
  icon: ReactNode
  title: string
  description: string
}
export default function Service({ icon, title, description }: ServiceProps) {
  return (
    <div className="text-center grid place-items-center flex-1 min-w-[200px] rounded-sm">
      {icon}
      <h3 className="text-lg font-medium pt-5 pb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  )
}
