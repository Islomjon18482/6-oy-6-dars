import styles from "./index.module.css"
import { useRef } from 'react'

export default function Form(props) {
    const nameRef = useRef()
    const descRef = useRef()
    const priceRef = useRef()

    function validate(name, desc, price) {
        if (!name || !desc || !price) {
            alert("Ma'lumot kiritilishi shart")
            return false
        }
        if (!name.trim() || !desc.trim() || !price.trim()) {
            alert("Malut probellardan iborat bo'lishi mumkin emas")
            return false
        }
        if (!Number(price)) {
            alert("Narx sonda kiritilishi kerak")
            return false
        }
        return true
    }

    function hendleClick(e) {
        e.preventDefault()
        if (validate(nameRef.current.value, descRef.current.value, priceRef.current.value)) {
            let data = {
                name: `${nameRef.current.value}`,
                description: `${descRef.current.value}`,
                status: `active`,
                price: priceRef.current.value,
                category_id: "2"
            }
            fetch("https://auth-rg69.onrender.com/api/products", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        }
        nameRef.current.value = ''
        priceRef.current.value = ''
        descRef.current.value = ''
        props.setRefresh(1)
    }
    return (
        <>
            <form onSubmit={hendleClick} className={styles.form}>
                <label>
                    <p className={styles.label}>Enter name***</p>
                    <input ref={nameRef} className={styles.name} type="text" placeholder='Enter phone name...' />
                </label>
                <label>
                    <p className={styles.label}>Enter price***</p>
                    <input ref={priceRef} className={styles.name} type="number" placeholder='Enter phone price...' />
                </label>
                <label>
                    <p className={styles.label}>Enter description***</p>
                    <textarea ref={descRef} className={styles.name} cols="30" rows="10" placeholder='Enter phone description...'></textarea>
                </label>
                <button className={styles.btn}>Submit</button>
            </form>
        </>
    )
}
