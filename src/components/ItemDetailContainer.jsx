import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { getFirestore, getDoc, doc } from "firebase/firestore";

import { Loading } from "./Loading";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const refDoc = doc(db, "items", id);

      // Wait for 2 seconds
      await new Promise(resolve => setTimeout(resolve, 1200));

      getDoc(refDoc).then((snapshot) => {
        setItem({ id: snapshot.id, ...snapshot.data() });
      });
    };

    fetchData();
  }, [id]);

  return <div>{item ? <ItemDetail item={item} /> : <Loading></Loading>}</div>;
};
