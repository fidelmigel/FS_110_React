import clsx from 'clsx';
import styles from './User.module.css';
const User = ({ name, email, bio = 'This user hide own bio', isOpenToWork }) => {
  console.log(styles);

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{name}</h3>
      <p>{email}</p>
      <p>{bio}</p>
      {/* <p className={`${styles.status} ${isOpenToWork ? styles.green : styles.red}`}>{isOpenToWork ? 'хоче працювати' : 'не шукає роботу'}</p> */}
      <p className={clsx(styles.status, 'hello', 'world', ['style1', null, undefined, 0, false, 'style2'], isOpenToWork ? styles.green : styles.red)}>
        {isOpenToWork ? 'хоче працювати' : 'не шукає роботу'}
      </p>

      <button>Delete</button>
    </div>
  );
};
export default User;
