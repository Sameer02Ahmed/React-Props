
// function App() {

//   return (
//     <>
//       <h1 className="text-white bg-black text-6xl hover:font-semibold hover:bg-yellow-900 text-center">Hello World from Sameer Ahmed Shah</h1>
//       <p className="text-Stone-500 text-justify text-2xl bg-cyan-600">I am a dedicated Full Stack Development student with a strong foundation in HTML, CSS, JavaScript, Bootstrap, and Figma. Currently, I am expanding my expertise by learning React and Next.js to build dynamic and efficient web applications. My passion lies in creating user-friendly interfaces and optimizing web performance. As I continue my learning journey, I aim to enhance my skills in front-end and back-end technologies to develop seamless and responsive applications.</p>
//       <h6 className="text-yellow-700 bg-gray-200 text 4xl text-left">Assignment Submitted To: Miss Ariba</h6>
//       <h6 className="text-yellow-700 bg-gray-200 text 4xl text-right">Assignment Submitted By: Sameer Ahmed Shah</h6>
//     </>
//   )
// }

// export default App

import Carlist from "./Components/Child"
import Mehran from "../src/assets/mehran.jpeg"
import Wagon from "../src/assets/wagon.png"
import Swift from "../src/assets/swift.webp"

const Cart = () => {
  return(
    <div>
      <section>
        <h1>Car List</h1>
        <div>
           <Carlist item={{
            car : "Mehran",
            image : Mehran, 
            model : 2017,
            price : 1200000,
           }}
           />
           </div>
           <div>
            <Carlist item={{
            car : "Wagon R",
            image : Wagon, 
            model : 2021,
            price : 2600000,
           }}
           />
           </div>
           <div>
            <Carlist item={{
            car : "Swift",
            image : Swift, 
            model : 2024,
            price : 5100000,
           }}
           />
           </div>
      </section>
    </div>
  )
}

export default Cart