const SmallerHeader = ({title, image, children}) => {
    return (
      <div className="header2">
              <div className="header2__container">
                <div className="header2__container-bg">
                    <img src={image} alt="Header bacground"/>
                </div>
                <div className="header2__content">
                    <h2>{title}</h2>
                    <p>{children}</p>
                </div>
              </div>
      </div>
    )
  }
  
  export default SmallerHeader