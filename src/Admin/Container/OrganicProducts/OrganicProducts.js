import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { object, string, number, date, InferType } from 'yup';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { addOrganic, deleteOrganic, editOrganic, getOrganic } from '../../../Redux/Action/organic.action';

function OrganicProducts(props) {

    const [open, setOpen] = useState(false);
    const [update, setUpdate] = useState(false);

    const dispatch = useDispatch();

    const producat = useSelector(state => state.OrganicProducts)
    console.log(producat);

    

    useEffect(() => {
        dispatch(getOrganic());
        // getdata();
    }, [])


    const columns = [
        { field: 'name', headerName: 'Name', width: 150, editable: true, },
        { field: 'description', headerName: 'description', width: 300, editable: true, },
        { field: 'price', headerName: 'price', width: 150, editable: true, },
        {
            field: 'Action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) =>
                <div>
                    <EditIcon onClick={() => handleEdit(params.row)} />
                    <DeleteIcon onClick={() => handleDelete(params.row.id)} />
                </div>,
            editable: false,
        }
    ];

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        formik.resetForm();
        setUpdate(false);
    };

    const handleEdit = (raw) => {

        handleClickOpen();
        formik.setValues(raw);
        setUpdate(true);
        // getdata();
    }

    const handleDelete = (id) => {
        dispatch(deleteOrganic(id));
    }


    let organicSchema = object({
        name: string().required(),
        description: string().required(),
        price: number().required().positive()
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: ''

        },
        validationSchema: organicSchema,
        onSubmit: (values, { resetForm }) => {
            if (update) {
                dispatch(editOrganic(values));
            } else {
                const id = Math.floor(Math.random() * 1000)
                dispatch(addOrganic({ ...values, id }))
               
            }
            resetForm();
            setOpen(false);
        }
    });

    const { handleSubmit, handleBlur, handleChange, errors, values, touched } = formik;
    return (
        <>
            {

                (<div>
                    <Button variant="outlined" onClick={handleClickOpen}>
                        Add Organic Products
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}

                    >
                        <form onSubmit={handleSubmit}>
                            <DialogTitle>Organic Products</DialogTitle>
                            <DialogContent>
                                <TextField
                                    margin="dense"
                                    id="name"
                                    name="name"
                                    label="Add Organic Products"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    value={values.name}
                                    onChange={handleChange}

                                    onBlur={handleBlur}
                                    error={errors.name && touched.name ? true : false}
                                    helperText={errors.name && touched.name ? errors.name : ''}
                                />
                                <TextField
                                    margin="dense"
                                    id="description"
                                    name="description"
                                    label="Add description"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    value={values.description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.description && touched.description ? true : false}
                                    helperText={errors.description && touched.description ? errors.description : ''}
                                />
                                <TextField
                                    margin="dense"
                                    id="price"
                                    name="price"
                                    label="Add price"
                                    type="number"
                                    fullWidth
                                    variant="standard"
                                    value={values.price}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.price && touched.price ? true : false}
                                    helperText={errors.price && touched.price ? errors.price : ''}
                                />
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button type="submit">{update ? 'Update' : 'Add'}</Button>
                                </DialogActions>
                            </DialogContent>

                        </form>
                    </Dialog>
                    <br></br>
                    <Box sx={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={producat.Organic}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 5,
                                    },
                                },
                            }}
                            pageSizeOptions={[5]}
                            checkboxSelection
                            disableRowSelectionOnClick
                        />
                    </Box>
                </div>)
            }
        </>
    );
}

export default OrganicProducts