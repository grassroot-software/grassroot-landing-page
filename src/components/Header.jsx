const Header = ({title, image, subtitle, extra, children}) => {
  return (
    
            <div className="header__container">
              <div className="header__container-bg">
                  <img className="header__img" src={image} alt="Header background"/>
              </div>
              <div className="header__content">
                  <h1>{title}</h1>
                  <p>{subtitle}</p>
                  <h3>{extra}</h3>
                  <p>{children}</p>
              </div>
            </div>

  )
}

export default Header