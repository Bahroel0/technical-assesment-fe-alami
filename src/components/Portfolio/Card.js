import './card.css';
export default function PortfolioCard(props) {
  return (
    <div className='portfolio-card'>
      {props.children}
      <h2 className="text-subtitle pt-2">{ props.title }</h2>
      <p className="text-caption mt-2">
        { props.caption }
      </p>
    </div>
  );
}