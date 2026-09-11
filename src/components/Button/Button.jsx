import styles from './Button.module.css';

const Button = ({
  as = 'button',
  variant = 'primary',
  className = '',
  children,
  ...rest
}) => {
  const Element = as;
  return (
    <Element
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...(as === 'button' ? { type: rest.type ?? 'button' } : {})}
      {...rest}
    >
      {children}
    </Element>
  );
};

export default Button;
