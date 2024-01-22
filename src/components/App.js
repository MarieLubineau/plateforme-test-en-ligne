import Banner from './Banner'
import TestList from './TestList'
import '../styles/Layout.css'

function App() {
	return (
		<div>
			<Banner />
			<div className='lmj-layout-inner'>
				<TestList />
			</div>
		</div>
	)
}

export default App