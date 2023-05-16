
const Card = ({className, children}) => {
    return (
      <article className={`card2 ${className}`} >
          {children}
      </article>
    )
  }
  
  export default Card