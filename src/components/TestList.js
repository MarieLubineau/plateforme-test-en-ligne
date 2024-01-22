import { useState } from 'react'
import { testList } from '../datas/testList'
import TestItem from './TestItem'
import Categories from './Categories'
import '../styles/TestList.css'

function ShoppingList() {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = testList.reduce(
		(acc, test) =>
			acc.includes(test.category) ? acc : acc.concat(test.category),
		[]
	)
    function redirect(link)
    {
    var url = link;
    window.location.assign(url);
    }

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{testList.map(({ id, cover, name, category, level, description,link }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id} className="lmj-plant-list-item">
							<TestItem
								cover={cover}
								name={name}
								category={category}
								level={level}
								description={description}
								
							/>
							<p>Si tu es d'accord, clique sur jouer pour commencer</p>
							<button onClick={() => redirect(link)}>Jouer</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList