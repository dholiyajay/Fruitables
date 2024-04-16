import React, { useEffect, useState } from 'react';
import { object, string, number } from 'yup';
import { Formik, useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Reviews, addReviews, deletereview, editreview } from '../../../Redux/Action/review.action';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



function Review(props) {
    const [update, setUpdate] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Reviews());
        // getdata();
    }, [])


    const handleEdit = (raw) => {

        // handleClickOpen();
        formik.setValues(raw);
        setUpdate(true);
        // getdata();
    }

    const handleDelete = (id) => {
        dispatch(deletereview(id));
    }


    const reviewdata = useSelector((state) => state.Review.Review)
    // console.log(reviewdata);

    let reviewSchema = object({
        name: string().required(),
        email: string().email().required(),
        review: string().required(),
        rating: number().required(),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            review: '',
            rating: ''
        },
        validationSchema: reviewSchema,
        onSubmit: (values, { resetForm }) => {
            if (update) {
                dispatch(editreview(values))
            } else {
                dispatch(addReviews({ ...values }));
            }

            // alert(JSON.stringify({...values, proId: id}, null, 2));
            formik.resetForm()
        },
    });

    const { handleBlur, handleChange, handleSubmit, errors, values, touched } = formik
    return (
        <div>
            <div className="col-lg-12">
                <nav>
                    <div className="nav nav-tabs mb-3">
                        <button className="nav-link active border-white border-bottom-0" type="button" role="tab" id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about" aria-controls="nav-about" aria-selected="true">Description</button>
                        <button className="nav-link border-white border-bottom-0" type="button" role="tab" id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission" aria-controls="nav-mission" aria-selected="false">Reviews</button>
                    </div>
                </nav>
                <div className="tab-content mb-5">
                    <div className="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                        <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
                            Susp endisse ultricies nisi vel quam suscipit </p>
                        <p>Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish filefish Antarctic
                            icefish goldeye aholehole trumpetfish pilot fish airbreathing catfish, electric ray sweeper.</p>
                        <div className="px-2">
                            <div className="row g-4">
                                <div className="col-6">
                                    <div className="row bg-light align-items-center text-center justify-content-center py-2">
                                        <div className="col-6">
                                            <p className="mb-0">Weight</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="mb-0">1 kg</p>
                                        </div>
                                    </div>
                                    <div className="row text-center align-items-center justify-content-center py-2">
                                        <div className="col-6">
                                            <p className="mb-0">Country of Origin</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="mb-0">Agro Farm</p>
                                        </div>
                                    </div>
                                    <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                        <div className="col-6">
                                            <p className="mb-0">Quality</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="mb-0">Organic</p>
                                        </div>
                                    </div>
                                    <div className="row text-center align-items-center justify-content-center py-2">
                                        <div className="col-6">
                                            <p className="mb-0">Сheck</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="mb-0">Healthy</p>
                                        </div>
                                    </div>
                                    <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                        <div className="col-6">
                                            <p className="mb-0">Min Weight</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="mb-0">250 Kg</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                        {
                            reviewdata.map((v) => (

                                <div className>
                                    <p className="mb-2" style={{ fontSize: 14 }}>April 12, 2024</p>
                                    <div className="d-flex justify-content-between">
                                        <h5>{v.name}</h5>
                                        <div className="d-flex mb-3">
                                            <Rating name="read-only" value={v.rating} readOnly />
                                            <div className='ms-auto'>
                                                <EditIcon className='py-1' onClick={() => handleEdit(v)} />
                                                <DeleteIcon className='py-1' onClick={() => handleDelete(v.id)} />
                                            </div>
                                        </div>

                                    </div>
                                    <p>{v.review}</p>
                                    <p>{v.email}</p>
                                </div>

                            )

                            )
                        }
                        {/* <div className="d-flex">
                        <img src="img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{ width: 100, height: 100 }} alt />
                        <div className>
                          <p className="mb-2" style={{ fontSize: 14 }}>April 12, 2024</p>
                          <div className="d-flex justify-content-between">
                            <h5>Jason Smith</h5>
                            <div className="d-flex mb-3">
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic
                            words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <img src="img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{ width: 100, height: 100 }} alt />
                        <div className>
                          <p className="mb-2" style={{ fontSize: 14 }}>April 12, 2024</p>
                          <div className="d-flex justify-content-between">
                            <h5>Sam Peters</h5>
                            <div className="d-flex mb-3">
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star text-secondary" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <p className="text-dark">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic
                            words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                        </div>
                      </div> */}
                    </div>
                    <div className="tab-pane" id="nav-vision" role="tabpanel">
                        <p className="text-dark">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                            amet diam et eos labore. 3</p>
                        <p className="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
                            Clita erat ipsum et lorem et sit</p>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <h4 className="mb-5 fw-bold">Leave a Reply</h4>
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="border-bottom rounded">
                            <TextField
                                type="text"
                                id="name"
                                name="name"
                                className="form-control border-0 me-4"
                                placeholder="Yur Name *"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.name && touched.name ? true : false}
                                helperText={errors.name && touched.name ? errors.name : ''}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="border-bottom rounded">
                            <TextField
                                type="email"
                                id="email"
                                name="email"
                                className="form-control border-0 me-4"
                                placeholder="Yur email *"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.email && touched.email ? true : false}
                                helperText={errors.email && touched.email ? errors.email : ''}
                            />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="border-bottom rounded my-4">
                            <TextField
                                type="text"
                                id="review"
                                name="review"
                                className="form-control border-0"
                                cols={30} rows={8}
                                placeholder="Your Review *"
                                spellCheck="false"
                                defaultValue={""}
                                value={values.review}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.review && touched.review ? true : false}
                                helperText={errors.review && touched.review ? errors.review : ''}
                            />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="d-flex justify-content-between py-3 mb-5">
                            <div className="d-flex align-items-center">
                                <p className="mb-0 me-3">Please rate:</p>
                                <div className="d-flex align-items-center" style={{ fontSize: 12 }}>
                                    <Stack spacing={1}>
                                        <Rating
                                            defaultValue={0}
                                            precision={0.5}
                                            id="rating"
                                            name="rating"
                                            value={values.rating}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={errors.rating && touched.rating ? true : false}
                                            helperText={errors.rating && touched.rating ? errors.rating : ''}
                                        />
                                    </Stack>
                                </div>
                            </div>
                            {/* <a href="#"  type='submit' className="btn border border-secondary text-primary rounded-pill px-4 py-3"> Post Comment</a> */}
                            <Button className="btn border border-secondary text-primary rounded-pill px-4 py-3" type="submit">Post Comment</Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Review;