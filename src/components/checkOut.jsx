import React, { useState } from "react";
import {
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";
import checkOutCss from "./css/checkOut.module.css";

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

export const Checkout = () => {
  const [buyer, setBuyer] = useState(initialValues);

  const handleChange = (e) => {
    setBuyer((buyer) => {
      return { ...buyer, [e.target.name]: e.target.value };
    });
  };

  const sendOrder = () => {
    const order = {
      buyer,
      items: [
        { id: 3, title: "bicicleta", price: 200, quantity: 8 },
        { id: 5, title: "gorra", price: 2000, quantity: 6 },
      ],
      total: 13600,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert("Su orden: " + id + " ha sido completada!");
        setBuyer(initialValues);
      }
    });
  };

  return (
    <div className={checkOutCss.row}>
      <div className={checkOutCss.col75}>
        <div className={checkOutCss.container}>
          <form action="/action_page.php">
            <div className={checkOutCss.row}>
              <div className={checkOutCss.col50}>
                <h3>Billing Address</h3>
                <label htmlFor="fname">
                  <i className={`fa fa-user ${checkOutCss.icon}`}></i> Full Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="name"
                  placeholder="John M. Doe"
                  value={buyer.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">
                  <i className={`fa fa-envelope ${checkOutCss.icon}`}></i> Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={buyer.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="phone">
                  <i className={`fa fa-phone ${checkOutCss.icon}`}></i> Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+61435965987"
                  value={buyer.phone}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="adr">
                  <i className={`fa fa-address-card-o ${checkOutCss.icon}`}></i>{" "}
                  Address
                </label>
                <input
                  type="text"
                  id="adr"
                  name="address"
                  placeholder="542 W. 15th Street"
                  required
                />
                <label htmlFor="city">
                  <i className={`fa fa-institution ${checkOutCss.icon}`}></i>{" "}
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="New York"
                  required
                />
                <div className={checkOutCss.row}>
                  <div className={checkOutCss.col50}>
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="NY"
                      required
                    />
                  </div>
                  <div className={checkOutCss.col50}>
                    <label htmlFor="zip">Zip</label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      placeholder="10001"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className={checkOutCss.col50}>
                <h2>Payment </h2>
                <h3 style={{ color: "red" }}>
                  (you dont need put your data in here, IS JUST A SIMULATION)
                </h3>
                <label htmlFor="fname">Accepted Cards</label>
                <div className="icon-container">
                  <i className="fa fa-cc-visa" style={{ color: "navy" }}></i>
                  <i className="fa fa-cc-amex" style={{ color: "blue" }}></i>
                  <i
                    className="fa fa-cc-mastercard"
                    style={{ color: "red" }}
                  ></i>
                  <i
                    className="fa fa-cc-discover"
                    style={{ color: "orange" }}
                  ></i>
                </div>

                <label htmlFor="cname">Name on Card</label>
                <input
                  type="text"
                  id="cname"
                  name="cardname"
                  placeholder="John More Doe"
                />
                <label htmlFor="ccnum">Credit card number</label>
                <input
                  type="text"
                  id="ccnum"
                  name="cardnumber"
                  placeholder="1111-2222-3333-4444"
                />
                <label htmlFor="expmonth">Exp Month</label>
                <input
                  type="text"
                  id="expmonth"
                  name="expmonth"
                  placeholder="September"
                />
                <div className={checkOutCss.row}>
                  <div className={checkOutCss.col50}>
                    <label htmlFor="expyear">Exp Year</label>
                    <input
                      type="text"
                      id="expyear"
                      name="expyear"
                      placeholder="2018"
                    />
                  </div>
                  <div className={checkOutCss.col50}>
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="352" />
                  </div>
                </div>
              </div>
            </div>
            <input
              type="submit"
              value="Pay"
              className={checkOutCss.btn}
              onClick={sendOrder}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
