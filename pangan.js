function pangan({ display }) {
    return (
      <div
        style={{
          backgroundColor: 'orange',
          width: '500px',
          height: '500px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
          border: '1px solid black', 
        }}
      >
        {display}
      </div>
    );
  }
  
  export default pangan;