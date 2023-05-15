const Header = ({title, image, subtitle, children}) => {
  return (
    
            <div className="header__container">
              <div className="header__container-bg">
                  <img className="header__img" src={image} alt="Header background"/>
              </div>
              <div className="header__content">
                  <h2>{title}</h2>
                  <p>{subtitle}</p>
                  <p>{children}</p>
              </div>
            </div>

  )
}

export default Header