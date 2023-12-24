import {  getFirestore,  collection,  getDocs,  query,  where,} from "firebase/firestore";


import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";


import { ItemList } from "./ItemList";
import ItemListContainerCss from "./css/ItemListContainer.module.css";
import { Loading } from "./Loading";
import { CartContext } from "../Context/CartContext";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  const value = useContext(CartContext);
  
  // importing data from categoryId
  useEffect(() => {
    const db = getFirestore();

    const refCollection = !id ? collection(db, "items"):
    query (
      collection (db,'items'),
      where ('categoryId','==',id)
    );

    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) console.log("no results");
      else
        setItems(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
    });
  }, [id]);


  // importing all data to home 
  useEffect(() => {
    const db = getFirestore();

    const refCollection = collection(db, "items");

    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) console.log("no results");
      else
      setItems(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
    });
  }, []);




  return (
    <div className={`${ItemListContainerCss.gridItems}`}>
      {items ? <ItemList items={items} /> : <Loading />}
    </div>
  );
};
