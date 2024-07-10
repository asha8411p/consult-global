import Link from 'next/link'

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/" className="block" aria-label="Consult Global">
        <img src="/FullLogo.png" alt="Consult Global Logo" style={{ width: '100px', height: '85px' }} />
      </Link>
      <span style={{
        fontSize: '18px', 
        color: '#0056b3', 
        marginLeft: '2px',  /* Reduced margin */
        fontFamily: 'Arial, sans-serif',
        alignSelf: 'center'
      }}>
        CONSULT <span style={{ color: '#008CBA' }}>GLOBAL</span>
      </span>
    </div>
  );
}
