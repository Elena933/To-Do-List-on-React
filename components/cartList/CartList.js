import CartItem from "./CartItem";


function CartList({list, deleteTask, addToCart}) {
    return (
        <div>
            {list.filter(el=>el.cart).map(el => <CartItem key={el.id}
                                                          task={el}
                                                          deleteTask={deleteTask}
                                                          addToCart={addToCart}/>)}
        </div>
    );
}

export default CartList;
