import styles from "./App.module.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ContatcForm from "./components/ContatcForm";
import ContatcList from "./components/ContatcList";

function App() {
	return (
		<div className="App">
			<h1>Phone Book</h1>

			<Container>				
					<Col>
						<ContatcForm />
					</Col>
					<Col>
						<ContatcList />
					</Col>				
			</Container>
		</div>
	);
}

export default App;
