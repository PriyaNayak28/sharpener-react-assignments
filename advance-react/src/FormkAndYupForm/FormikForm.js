import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {  
    const initialValues = {
        title: "",
        amount: "",
        date: ""
    };
    
    const validationSchema = Yup.object({
        title: Yup.string()
        .required("Title is required")
        .min(3, "Title must be at least 3 characters"),
        amount: Yup.number()
        .required("Amount is required")
        .positive("Amount must be a positive number")
        .min(0.01, "Amount must be at least 0.01"),
        date: Yup.date()
        .required("Date is required")
        .max(new Date(), "Date cannot be in the future")
    });
    
    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm();
    };
    
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >
        <Form>
            <div>
            <label htmlFor="title">Title</label>
            <Field type="text" id="title" name="title" />
            <ErrorMessage name="title" component="div" />
            </div>
            <div>
            <label htmlFor="amount">Amount</label>
            <Field type="number" id="amount" name="amount" />
            <ErrorMessage name="amount" component="div" />
            </div>
            <div>
            <label htmlFor="date">Date</label>
            <Field type="date" id="date" name="date" />
            <ErrorMessage name="date" component="div" />
            </div>
            <button type="submit">Add Expense</button>
        </Form>
        </Formik>
    );
}

export default FormikForm;
