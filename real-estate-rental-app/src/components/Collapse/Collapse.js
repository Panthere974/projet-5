import React, { useState } from 'react';
import styles from './Collapse.module.scss';

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.collapse}>
            <div className={styles.collapseHeader} onClick={toggleCollapse}>
                <h1>{title}</h1>
                <i className={isOpen ? 'fa-solid fa-chevron-down fa-2xl' : 'fa-solid fa-chevron-up fa-2xl'}></i>
            </div>
            <div className={styles.collapseContent} 
                style={{ maxHeight: isOpen ? '500px' : '0', paddingTop: isOpen ? '10px' : '0', paddingBottom: isOpen ? '10px' : '0' }}
            >
                {children}
            </div>
        </div>
    );
};

export default Collapse;
