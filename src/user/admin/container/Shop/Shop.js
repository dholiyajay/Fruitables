import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Shop = () => {
    const [fruits, setFruits] = useState([])
    const fruitData = async () => {
        const response = await fetch("http://localhost:8000/fruits")
        const data = await response.json()
        setFruits(data)
    }
    useEffect(() => {
        fruitData()
    }, [])
    return (
        <>
            <div>
                <div className="container-fluid page-header py-5">
                    <h1 className="text-center text-white display-6">Shop</h1>
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item active text-white">Shop</li>
                    </ol>
                </div>
                <div className="container-fluid fruite py-5">
                    <div className="container py-5">
                        <h1 className="mb-4">Fresh fruits shop</h1>
                        <div className="row g-4 justify-content-center"></div>

                        {
                            fruits.map((fruit) => (
                                <div key={fruit.id} className="col-md-6 col-lg-4 col-xl-3 mb-4">
                                    <Link to={`/shop/${fruit.id}`} className="text-decoration-none">
                                        <div className="rounded position-relative fruite-item d-flex flex-column">
                                            <div className="fruite-img">
                                                <img src={fruit.image} className="img-fluid rounded-top" alt={fruit.name} />
                                            </div>
                                            <div className="text-white bg-secondary px-3 py-1 rounded-top position-absolute" style={{ top: 0, left: 0 }}>Fruits</div>
                                            <div className="p-4 border border-secondary rounded-bottom flex-grow-1">
                                                <h4>{fruit.name}</h4>
                                                <p>{fruit.description}</p>
                                                <div className="mt-auto d-flex justify-content-between align-items-center">
                                                    <p className="text-dark fs-5 fw-bold mb-0">{fruit.price}</p>
                                                    <button className="btn btn-primary rounded-pill px-3">Add to cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
 
        </>
    )
}

export default Shop