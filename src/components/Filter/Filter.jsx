import styles from './Filter.module.css';
import SearchBox from '../SearchBox/SearchBox';

export default function Filter() {
  return (
    <div className={styles.wrapper}>
      {/* Filter acts as a thin wrapper around the SearchBox component */}
      <SearchBox />
    </div>
  );
}
