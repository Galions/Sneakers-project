function Header() {
   return (
      <header className="d-flex justify-between align-center p-40">
         <div className="d-flex align-center">
            <img width={40} height={40} className="logo" src="/img/logo.png" alt="logo" />
            <div>
               <h3 className="text-uppercase">React Sneakers</h3>
               <p className="opacity-5">Shop of the best sneakers</p>
            </div>
         </div>
         <ul className="d-flex">
            <li className="mr-30  cu-p">
               <img src="/img/cart.svg" alt="cart" />
               <span>55 GEL</span>
            </li>
            <li>
               <img src="/img/user.svg" alt="profile" />
            </li>
         </ul>
      </header>
   );
}

export default Header;