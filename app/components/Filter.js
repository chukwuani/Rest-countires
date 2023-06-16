export default function Filter() {
  return (
    <div className="filter-container">
    <div className="filter-head">
       <p>Filter by Region</p>  
       
       <span className="down-chevron">
        <ion-icon name="chevron-down-outline"></ion-icon>
       </span>
    </div>

    <div className="filter-dropdown">
       <ul className="filter-list">
         <li className="list-item">africa</li>
         <li className="list-item">america</li>
         <li className="list-item">asia</li>
         <li className="list-item">europe</li>
         <li className="list-item">oceania</li>
       </ul>
    </div>
</div>
  )
}
