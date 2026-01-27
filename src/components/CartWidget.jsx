import Badge from 'react-bootstrap/Badge';

function CartWidget() {

    return (

        <>
            <span className="position-relative d-inline-block">
                <i className="fa-solid fa-cart-arrow-down fs-5"></i>
                <Badge
                    bg="danger"
                    pill
                    className="position-absolute top-0 start-100 translate-middle"
                >
                    3
                </Badge>
            </span>
        </>
    )

};

export default CartWidget;