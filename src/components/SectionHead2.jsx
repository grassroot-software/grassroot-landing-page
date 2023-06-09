const SectionHead2 = ({icon, title, className}) => {
    return (
      <div className= {`section__head2 ${className}`}>
          <span>{icon}</span>
          <h2>{title}</h2>
      </div>
    )
  }
  
  export default SectionHead2