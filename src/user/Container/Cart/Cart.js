import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataToCart } from '../../../Redux/Action/addcart.action';
import { increamentCount } from '../../../Redux/Count.slice';
import { decremnet, increament, removecrat } from '../../../Redux/slice/crat.slice';
import { getCoupon } from '../../../Redux/slice/couponSlice';

function Cart(props) {

    const [vaildcoupon, setvaildcoupon] = useState(false);
    const [Coupon, setCoupon] = useState('');


    const couponuser = useSelector(state => state.couponInCart);
    console.log(couponuser.coupon);

    const handleApply = () => {
        const appliyCoupon = couponuser.coupon.find(v => v.couponename === Coupon);

        if (appliyCoupon) {
            setvaildcoupon(true);
        } else {
            setvaildcoupon(false);
        }
    };

    const DiscountCoupon = () => {
        const appliyCoupon = couponuser.coupon.find(v => v.couponename === Coupon);

        if (appliyCoupon) {
            const discount = appliyCoupon.percentage / 100;
            return cratadd.reduce((a, b) => a + b.price * b.quantity, 0) * (1 - discount);
        }

        return cratadd.reduce((a, b) => a + b.price * b.quantity, 0);
    };



    const crat = useSelector((state) => state.AddtoCart);

    const addcart = useSelector((state) => state.OrganicProducts);

    const cratadd = crat.cartD.map((v) => {
        const data = addcart.Organic.find((v1) => v1.id == v.pid)
        return { ...data, count: v.count }
    })

    const totalPrice = cratadd.reduce((acc, item) => acc + item.price * item.count, 0);


    console.log(cratadd);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCoupon())
    }, [dispatch])

    const hendalince = (id) => {
        console.log(id);
        dispatch(increament(id))
    }

    const hendaldecre = (id) => {
        dispatch(decremnet(id))
    }

    const hendalremove = (id) => {
        dispatch(removecrat(id))
    }



    return (
        <div>
            {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Cart</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item active text-white">Cart</li>
                </ol>
            </div>
            {/* Single Page Header End */}
            {/* Cart Page Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Products</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cratadd.map((p) => (
                                        <tr key={p.id}>
                                            <th scope="row">
                                                <div className="d-flex align-items-center">
                                                    <img src={p.image} className="img-fluid me-5 rounded-circle" style={{ width: 80, height: 80 }} alt={p.name} />
                                                </div>
                                            </th>
                                            <td>
                                                <p className="mb-0 mt-4">{p.name}</p>
                                            </td>
                                            <td>
                                                <p className="mb-0 mt-4">{p.price} $</p>
                                            </td>
                                            <td>
                                                <div className="input-group quantity mt-4" style={{ width: 100 }}>
                                                    <div className="input-group-btn">
                                                        <button className="btn btn-sm btn-minus rounded-circle bg-light border" onClick={() => hendaldecre(p.id)} >
                                                            <i className="fa fa-minus" />
                                                        </button>
                                                    </div>
                                                    <span className="form-control form-control-sm text-center border-0"> {p.count}
                                                    </span>
                                                    <div className="input-group-btn">
                                                        <button className="btn btn-sm btn-plus rounded-circle bg-light border" onClick={() => hendalince(p.id)}>
                                                            <i className="fa fa-plus" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="mb-0 mt-4">{p.price * p.count} $</p>
                                            </td>
                                            <td>
                                                <button className="btn btn-md rounded-circle bg-light border mt-4">
                                                    <i className="fa fa-times text-danger" onClick={() => hendalremove(p.id)} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }

                                {/* <tr>
                                    <th scope="row">
                                        <div className="d-flex align-items-center">
                                            <img src="img/vegetable-item-3.png" className="img-fluid me-5 rounded-circle" style={{ width: 80, height: 80 }} alt />
                                        </div>
                                    </th>
                                    <td>
                                        <p className="mb-0 mt-4">Big Banana</p>
                                    </td>
                                    <td>
                                        <p className="mb-0 mt-4">2.99 $</p>
                                    </td>
                                    <td>
                                        <div className="input-group quantity mt-4" style={{ width: 100 }}>
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                                                    <i className="fa fa-minus" />
                                                </button>
                                            </div>
                                            <input type="text" className="form-control form-control-sm text-center border-0" defaultValue={1} />
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                                                    <i className="fa fa-plus" />
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0 mt-4">2.99 $</p>
                                    </td>
                                    <td>
                                        <button className="btn btn-md rounded-circle bg-light border mt-4">
                                            <i className="fa fa-times text-danger" />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div className="d-flex align-items-center">
                                            <img src="img/vegetable-item-5.jpg" className="img-fluid me-5 rounded-circle" style={{ width: 80, height: 80 }} alt />
                                        </div>
                                    </th>
                                    <td>
                                        <p className="mb-0 mt-4">Potatoes</p>
                                    </td>
                                    <td>
                                        <p className="mb-0 mt-4">2.99 $</p>
                                    </td>
                                    <td>
                                        <div className="input-group quantity mt-4" style={{ width: 100 }}>
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                                                    <i className="fa fa-minus" />
                                                </button>
                                            </div>
                                            <input type="text" className="form-control form-control-sm text-center border-0" defaultValue={1} />
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                                                    <i className="fa fa-plus" />
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0 mt-4">2.99 $</p>
                                    </td>
                                    <td>
                                        <button className="btn btn-md rounded-circle bg-light border mt-4">
                                            <i className="fa fa-times text-danger" />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div className="d-flex align-items-center">
                                            <img src="img/vegetable-item-2.jpg" className="img-fluid me-5 rounded-circle" style={{ width: 80, height: 80 }} alt />
                                        </div>
                                    </th>
                                    <td>
                                        <p className="mb-0 mt-4">Awesome Brocoli</p>
                                    </td>
                                    <td>
                                        <p className="mb-0 mt-4">2.99 $</p>
                                    </td>
                                    <td>
                                        <div className="input-group quantity mt-4" style={{ width: 100 }}>
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                                                    <i className="fa fa-minus" />
                                                </button>
                                            </div>
                                            <input type="text" className="form-control form-control-sm text-center border-0" defaultValue={1} />
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                                                    <i className="fa fa-plus" />
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0 mt-4">2.99 $</p>
                                    </td>
                                    <td>
                                        <button className="btn btn-md rounded-circle bg-light border mt-4">
                                            <i className="fa fa-times text-danger" />
                                        </button>
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-5">
                        <input
                            type="text"
                            className="border-0 border-bottom rounded me-5 py-3 mb-4"
                            placeholder="Coupon Code"
                            onChange={(e) => setCoupon(e.target.value)}
                        />
                        <button onClick={handleApply} className="btn border-secondary rounded-pill px-4 py-3 text-primary" type="button">Apply Coupon</button>

                        <span className="ms-5">
                            {
                                vaildcoupon ? <p className="text-success">Coupon Applied: {Coupon}</p> : null
                            }
                            {
                                !vaildcoupon && <p className="text-danger">Coupon Not Applied</p>
                            }
                        </span>


                    </div>

                    <div className="row g-4 justify-content-end">
                        <div className="col-8" />
                        <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                            <div className="bg-light rounded">
                                <div className="p-4">
                                    <h1 className="display-6 mb-4">Cart <span className="fw-normal">Total</span></h1>
                                    {
                                        cratadd.map((item, index) => (
                                            <div key={index} className="mb-3">
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <h5 className="mb-0">{item.name}</h5>
                                                    <p className="mb-0">$ {item.price.toFixed(2)}</p>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-0">Quantity: {item.count}</p>
                                                    <p className="mb-0">$ {(item.price * item.count).toFixed(2)}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    {/* <div className="d-flex justify-content-between mb-4">
                                        <h5 className="mb-0 me-4">Subtotal:</h5>
                                        <p className="mb-0">$96.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h5 className="mb-0 me-4">Shipping</h5>
                                        <div className>
                                            <p className="mb-0">Flat rate: $3.00</p>
                                        </div>
                                    </div>
                                    <p className="mb-0 text-end">Shipping to Ukraine.</p> */}
                                </div>
                                <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                                    <h5 className="mb-0 ps-4 me-4">Total</h5>
                                    <p className="mb-0 fw-bold text-primary ">

                                        {
                                            vaildcoupon && Coupon
                                                ? `$ ${DiscountCoupon().toFixed(2)} (${couponuser.coupon.find(v => v.couponename === Coupon).percentage}% discount applied)`
                                                : `$ ${cratadd.reduce((a, b) => a + b.totalPrice * b.count, 0).toFixed(2)}`
                                        }


                                    </p>
                                    {/* <p className="mb-0 pe-4">{totalPrice.toFixed(2)}</p>  */}
                                </div>
                                <button className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4" type="button">Proceed Checkout</button>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            {/* Cart Page End */}
        </div>
    );
}

export default Cart;