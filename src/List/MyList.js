export default function MyList(){
    const numbers = [34, 12, 34, 77, 65];

    return (
      <ul>
        {numbers.map((number, index) => {
                return (
                    <div key={index}>
                        <li>{number}</li>
                    </div>)})}
      </ul>
    );  
}
