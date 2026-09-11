import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import styles from './BookingForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, 'Name is too short')
    .required('Please enter your name.'),
  email: Yup.string()
    .trim()
    .email('Please enter a valid email.')
    .required('Please enter your email.'),
});

const fields = [
  { name: 'name', type: 'text', label: 'Name', placeholder: 'Name*' },
  { name: 'email', type: 'email', label: 'Email', placeholder: 'Email*' },
];

const BookingForm = ({ camperName }) => {
  const formik = useFormik({
    initialValues: { name: '', email: '' },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      toast.success(
        `Thanks, ${values.name}! Your booking request for ${camperName} has been sent.`
      );
      resetForm();
    },
  });

  return (
    <div className={styles.panel}>
      <h2 className={styles.heading}>Book your campervan now</h2>
      <p className={styles.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={styles.form} onSubmit={formik.handleSubmit} noValidate>
        {fields.map(({ name, type, label, placeholder }) => {
          const invalid = formik.touched[name] && Boolean(formik.errors[name]);
          const inputId = `booking-${name}`;
          const errorId = `${inputId}-error`;
          return (
            <div key={name} className={styles.field}>
              <label htmlFor={inputId} className="visually-hidden">
                {label}
              </label>
              <div className={`${styles.inputWrap} ${invalid ? styles.invalid : ''}`}>
                {invalid && <span className={styles.floatLabel}>{placeholder}</span>}
                <input
                  id={inputId}
                  className={styles.input}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={formik.values[name]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  aria-invalid={invalid}
                  aria-describedby={invalid ? errorId : undefined}
                />
                {invalid && (
                  <Icon name="alert" size={20} className={styles.alertIcon} />
                )}
              </div>
              {invalid && (
                <p id={errorId} className={styles.error}>
                  {formik.errors[name]}
                </p>
              )}
            </div>
          );
        })}

        <Button type="submit" className={styles.submit}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
