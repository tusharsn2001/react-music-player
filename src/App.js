import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CurrentSongProvider from "./Context/CurrentSongProvider";
import Main from "./Components/Main";

// import ControlProvider from "./Context/ControlProvider";

const App = () => {

	return (
		<>
			<CurrentSongProvider>

				<Header />
				<Main />
				<Footer />

			</CurrentSongProvider>
		</>
	);
};



export default App;
