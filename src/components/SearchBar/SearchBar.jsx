import { Formik, Field, Form } from "formik";

const SearchBar = ({ handleChangeQuery }) => {
  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    handleChangeQuery(values.query);
    setSubmitting(false);
  };

  const initialValues = {
    query: "",
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Field name="query" />
            <button type="submit" disabled={isSubmitting}>
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchBar;
