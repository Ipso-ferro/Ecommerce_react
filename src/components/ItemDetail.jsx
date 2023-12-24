import { useContext } from 'react';

import ItemDetailCss from './css/ItemDetail.module.css';
import { ItemCounter } from './ItemCounter';
import { CartContext } from '../Context/CartContext';

export const ItemDetail = ({ item }) => {

  const { onAdd } = useContext(CartContext);

  const add = (quantity) => {
    onAdd(item, quantity);
  } 


  return (
    <div className={`${ItemDetailCss.main}`}>
    <div className={`${ItemDetailCss.card}`}>
      <div className={`${ItemDetailCss.card__title}`}>
        <div className={`${ItemDetailCss.icon}`}>
          <a href="#"><i className={`${ItemDetailCss['fa fa-arrow-left']}`}></i></a>
        </div>
        <h3>Best products</h3>
      </div>
      <div className={`${ItemDetailCss['card__body']}`}>
        <div className={`${ItemDetailCss.half}`}>
          <div className={`${ItemDetailCss['featured_text']}`}>
            <h1>{item.name}</h1>
            <p className={`${ItemDetailCss.sub}`}>{item.category}</p>
            <p className={`${ItemDetailCss.price}`}>{item.price}</p>
          </div>
          <div className={`${ItemDetailCss.image}`}>
            <img src={item.image} alt="" />
          </div>
        </div>
        <div className={`${ItemDetailCss.half}`}>
          <div className={`${ItemDetailCss.description}`}>
            <p>{item.description}</p>
          </div>
          <span className="stock"><i className={`${ItemDetailCss['fa fa-pen']}`}></i> In stock</span>
          <div className={`${ItemDetailCss.reviews}`}>
            <ul className={`${ItemDetailCss.stars}`}>
              <li><i className={`${ItemDetailCss['fa fa-star']}`}></i></li>
              <li><i className={`${ItemDetailCss['fa fa-star']}`}></i></li>
              <li><i className={`${ItemDetailCss['fa fa-star']}`}></i></li>
              <li><i className={`${ItemDetailCss['fa fa-star']}`}></i></li>
              <li><i className={`${ItemDetailCss['fa fa-star-o']}`}></i></li>
            </ul>
            <span>{item.stock}</span>
          </div>
        </div>
      </div>
      <div className={`${ItemDetailCss['card__footer']}`}>
        <div className={`${ItemDetailCss.recommend}`}>
          <p>Recommended by</p>
          <h3>Akira Tori</h3>
        </div>
        <div className={`${ItemDetailCss.action}`}>
          <ItemCounter onAdd={add} stock={item.stock} initial={1}></ItemCounter>
        </div>
      </div>
    </div>
    </div>
  );
};

