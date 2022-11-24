function Drawer() {
   return (
      <div style={{ display: 'none' }} className="overlay">
         <div className="drawer">
            <h2 className="d-flex justify-between mb-30">Cart <img className="cu-p" src="/img/btn-remove.svg" alt="Remove" /></h2>

            <div className="items">
               <div className="cartItem d-flex align-center mb-20">
                  <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg"></div>

                  <div className="mr-20 flex">
                     <p className="mb-5">Man Sneakers Nike Air Max 270</p>
                     <b>649 GEL</b>
                  </div>
                  <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
               </div>

               <div className="cartItem d-flex align-center mb-20">
                  <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg"></div>
                  <div className="mr-20 flex">
                     <p className="mb-5">Man Sneakers Nike Air Max 270</p>
                     <b>649 GEL</b>
                  </div>
                  <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
               </div>
            </div>

            <div className="cartTotalBlock">
               <ul>
                  <li>
                     <span>Total:</span>
                     <div></div>
                     <b>1298 Gel</b>
                  </li>
                  <li>
                     <span>Tax 5%:</span>
                     <div></div>
                     <b>64,9 Gel</b>
                  </li>
               </ul>
               <button className="greenButton">Checkout <img src="/img/arrow.svg" alt="" /></button>
            </div>
         </div>
      </div>
   );
}

export default Drawer;