import "../styles/TestItem.css"



function TestItem({name,cover,id,category,description,level}){
    return (
        <li key={id} className="lmj-plant-item" >
            <div><h2>{name}</h2></div>
            <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`}/>
            
            
            <div className="lmj-plant-item-category-level"><p>{category}</p><p>{level}</p> </div>
            <div className="lmj-plant-item-description">{description}</div>
            
            
        </li>
    )
}

export default TestItem