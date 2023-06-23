interface SectionTitleProps {
  title: string
  className?: string
}
interface SectionSubtitleProps {
  subtitle: string
  className?: string
}
export function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <h2 className={`text-4xl text-primary font-special mb-1 ${className} `}>
      {title}
    </h2>
  )
}

export function SectionSubtitle({ subtitle, className }: SectionSubtitleProps) {
  return (
    <p className={`text-sm text-primary font-sans font-light ${className} `}>
      {subtitle}
    </p>
  )
}
