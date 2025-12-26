import Cart from "../../components/cart/Cart";
import PageTransition from "../../components/common/PageTransition";

const CartPage = () => {
  return (
    <main>
      <PageTransition>
        <Cart />
      </PageTransition>
    </main>
  );
};

export default CartPage;
