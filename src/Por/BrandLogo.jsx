import './Logo.css';
export default function Logo(props) {
    return (
      <div id="logo">
        <img className='img' src={props.logo} alt="Logo" />
      </div>
    );
  }
  