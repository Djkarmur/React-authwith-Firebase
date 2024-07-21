// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { signOut } from "firebase/auth";
// import { auth } from "./Firebase";

// const Home = () => {
//   const [name,setName] = useState(null)
//   const location = useLocation();

//   const user = auth.currentUser;
//   setName( user?.displayName != null ? user?.displayName : "" )
 
  
  
//   if (user) {
   
//     console.log(user);
//   } else {
    
//     console.log("No user is signed in.");
//   }
//   const handleSignOut = async () => {
//     try {
//       const data = await signOut(auth);
//       console.log("Logout Successfully");
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-center mt-4 text-3xl font-bold text-sky-400">
//         Welcome to the Home Page {name}{" "}
//       </h2>
//       <button onClick={handleSignOut}>Logout</button>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";

const Home = () => {
  const [name, setName] = useState(null);
  const [user, setUser] = useState(null);
  const location = useLocation();

 
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setName(currentUser?.displayName != null ? currentUser?.displayName : "");
    });

   

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("Logout Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="text-center mt-4 text-3xl font-bold text-sky-400">
        Welcome to the Home Page {name}
      </h2>
      {user ? (
        <button onClick={handleSignOut} className="bg-[#0295db] outline-none hover:bg-white mt-4 px-5 py-2 rounded-md  hover:text-[black] border-2 border-[#0295db] transition-all duration-250 ease-in-out font-semibold ml-64">Logout</button>
      ) : (
        <p className="text-center mt-4 text-3xl font-bold text-red-500">No user is signed in.</p>
      )}
    </div>
  );
};

export default Home;

