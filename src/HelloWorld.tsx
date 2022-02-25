export default function hello() {
  const name: string = "Luciene";

  if (name === "Lu") {
    return (
      <div>
        <h1 style={{ color: "green" }}>Hello, {name}</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Hello, {name === "Luciene" ? "Luuu" : "Lucy"}!</h1>
    </div>
  );
}
