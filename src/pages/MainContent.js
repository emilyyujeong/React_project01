import { Inner } from "./common";
import styles from '../css/MainContent.module.scss'

const MainContent = ({ DEFAULT_CONTENTS, DEFAULT_PRODUCT }) => {
    return (
        <section className={styles.MainContent}>
            <h2>{DEFAULT_CONTENTS[1].title}</h2>
            <p>{DEFAULT_CONTENTS[1].description}</p>
            <Inner className={styles.inner}>
                {
                    DEFAULT_PRODUCT.slice(0, 2).map((product, index) => {
                        return (
                            <div className="itm">
                                <figure>
                                    <img src={process.env.PUBLIC_URL + `/assets/content0${index + 4}.avif`} alt="" />
                                </figure>
                                {product.title}
                            </div>
                        )
                    })
                }
            </Inner>
        </section>
    )
}

export default MainContent;