import s from './Title.module.css'

const Title = ({children}) => {
  return (
    <h3 className={s.title}>{children}</h3>
  )
}

export default Title