const Header = ({title, image, subtitle, children}) => {
  return (
    <div className="header">
            <div className="header__container">
            <div className="header__container-bg">
                <img src={image} alt="Header background"/>
            </div>
            <div className="header__content">
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <p>{children}</p>
            </div>
            </div>
    </div>
  )
}

export default Header