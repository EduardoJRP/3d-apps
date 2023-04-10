{/* Based for the components div */}
export const Job = (props) => {
    return(
      <div>
        <h6> {props.salary} </h6>
        <h6> {props.position} </h6>
        <h6> {props.company} </h6>
      </div>
    )
  }

{/* Based for the Ternary-List div */}
export const planets = [
  { name: "Mars", isGasPlanet: false },
  { name: "Earth", isGasPlanet: false },
  { name: "Venus", isGasPlanet: false },
  { name: "Jupiter", isGasPlanet: true },
  { name: "Neptune", isGasPlanet: true },
  { name: "Uranus", isGasPlanet: true },
];
export const age = 17;
export const isGreen = true;