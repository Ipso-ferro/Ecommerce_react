import {  getFirestore,  collection,  getDocs,  query,  where,} from "firebase/firestore";


import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";


import { ItemList } from "./ItemList";
import ItemListContainerCss from "./css/ItemListContainer.module.css";
import { Loading } from "./Loading";
import { CartContext } from "../Context/CartContext";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const value = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const db = getFirestore();
      const refCollection = !id ? collection(db, "items") : query(collection(db, 'items'), where('categoryId', '==', id));

      
      await new Promise(resolve => setTimeout(resolve, 1500));

      getDocs(refCollection)
        .then((snapshot) => {
          if (snapshot.size === 0) console.log("no results");
          else
            setItems(
              snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
              })
            );
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const db = getFirestore();
      const refCollection = collection(db, "items");

      
      await new Promise(resolve => setTimeout(resolve, 2000));

      getDocs(refCollection)
        .then((snapshot) => {
          if (snapshot.size === 0) console.log("no results");
          else
            setItems(
              snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
              })
            );
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  return (
    <d className={`${ItemListContainerCss.gridItems}`}>
      {loading ? <Loading /> : <ItemList items={items} />}
    </d>)}