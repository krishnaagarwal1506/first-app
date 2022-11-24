function Heading(props) {
  let tital = "Hi There";
  return (
    <h1>
      {tital},{props.firstName}
    </h1>
  );
}
export default Heading;
