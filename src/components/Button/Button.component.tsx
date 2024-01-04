import './Button.component.scss';
type ButtonProps = {
  url: string,
  text: string,
  iconClass?: string,
  imgUrl?: string,
  secondary?: boolean,
  tertiary?: boolean,
}
export const Button = (props: ButtonProps) => {
  const {url, text, iconClass, imgUrl, secondary, tertiary} = props;

  const goTo = (goToUrl: string) => {
    window.location.href = goToUrl; //should eventually replace with react-router-dom
  };

  const getClassName = () => {
    let returnClass = 'button';
    const classes = {
      secondary,
      tertiary,
    }

    Object.keys(classes).forEach(key => {
      console.log('===test', classes[key as keyof Object])
      returnClass += classes[key as keyof Object] ? ` ${key}-button`: '';
    })

    return returnClass;
  }

  return (
    <button onClick={() => goTo(url)} className={getClassName()}>
      {iconClass && (
        <span className="button-icon">
          <i className={iconClass}></i>
        </span>
      )}
      {imgUrl && (
        <span className="button-image-container">
          <img className="button-image" src={imgUrl} alt={text}/>
        </span>
      )}
      <span className="button-text">
        {text}
      </span>
    </button>
  )
}