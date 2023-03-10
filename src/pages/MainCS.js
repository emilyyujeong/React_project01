import { Inner } from "./common";
import styles from '../css/MainCS.module.scss'

const MainCS = ({ DEFAULT_CONTENTS, DEFAULT_CUSTOMER_SERVICE }) => {
    return (
        <section className={styles.MainCS}>
            <h2>{DEFAULT_CONTENTS[0].title}</h2>
            <p>{DEFAULT_CONTENTS[0].description}</p>
            <Inner className={styles.inner}>
                {
                    DEFAULT_CUSTOMER_SERVICE.slice(0, 3).map((product, index) => {
                        return (
                            <div className="itm">
                                <figure>
                                    <img src={process.env.PUBLIC_URL + `/assets/banner0${index + 1}.avif`} alt="" />
                                </figure>
                                <p className="text_title">{product.title}</p>
                                <p>{product.description}</p>
                            </div>
                        )
                    })
                }
            </Inner>
        </section>
    )
}

export default MainCS;