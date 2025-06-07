import classes from '../modules/Error.module.scss'
import {Link} from "react-router";
import {useEffect} from "react";


const Error = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#111111';

        return () => {
            document.body.style.backgroundColor = '';
        };
    }, []);





    return (
        <>

            <div className={classes['main-wrapper']}>
                <div className={classes['inside-content']}>
                    <h1>404 Not Found</h1>
                    <p>Your visited page not found. You may go home page.</p>
                </div>

                <div className={classes['btn-wrapper']}>
                    <Link to='/'>
                        <button>
                            Back to Home Page
                        </button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Error