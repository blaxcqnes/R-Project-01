function Entry(props) {
  return (
    <div className="entry">
      <article>
        <img className="imgOne" src={props.image.src} alt={props.image.alt} />

        <div className="details">
          <span>
            <img
              className="locSvg"
              src={props.locSvg.src}
              alt={props.locSvg.alt}
            ></img>
            <p>{props.countryName}</p>
            <a className="gmap" href={props.gmap}>
              View on Google Map
            </a>
          </span>

          <p className="title">{props.title}</p>

          <p className="dates">{props.dates}</p>

          <p className="description">{props.description}</p>
        </div>
      </article>
    </div>
  );
}

export default Entry;
