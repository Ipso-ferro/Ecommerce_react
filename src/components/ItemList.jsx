import { Link } from "react-router-dom";
import ItemListCss from "./css/ItemList.module.css";

export const ItemList = ({ items }) => {
  return (
    <div className={`${ItemListCss["card-category-4"]}`}>
      {items.map((item) => (
        <div key={item.id} className={`${ItemListCss["sp-card-1"]}`}>
          <ul>
            <li>
              <div className={`${ItemListCss["card-title"]}`}>
                This is for you {item.name} !!!!!!
              </div>
              <div className={`${ItemListCss["sub-line"]}`}>
                {item.category}
              </div>
              <div className={`${ItemListCss["return-line"]}`}>
                
                <br />
              </div>
            </li>
            <li>
              <div>
                <img
                  style={{ height: "180px", width: "160px" }}
                  src={item.image}
                  alt="Product"
                />
              </div>
              <div className={`${ItemListCss["price-start"]}`}>
                {item.price}
              </div>
            </li>
          </ul>
          <span className={`${ItemListCss["shop-button"]}`}>
            
            <Link to={`/item/${item.id}`} >More Details</Link>
          
          </span>
        </div>
      ))}
    </div>
  );
};
