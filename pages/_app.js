import Layout from "../components/Layout";

import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
