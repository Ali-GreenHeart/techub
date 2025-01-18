export const TitleLogo = ({ title, caption, className }) => {
  return (
    <h1 className={`${className}  title-logo`}>
      <span>{caption}</span>
      {title}
    </h1>
  )
}

export const TitleSm = ({ title }) => {
  return <h3 className='titleSm'>{title}</h3>
}
export const Title = ({ title, className }) => {
  return <h2 className={`${className} title`}>{title}</h2>
}
