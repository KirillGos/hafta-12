import { useEffect, useState } from "react"
import useLS from "./yardimcilar/UsLS"

function Sayac() {
    const [suankiDeger, degeriGuncelle] = useLS("sayac", 0)
    const [kullanicilar, kullanicilarGuncelle] = useLS("kullanicilar", [{id: 1, ad: 'Ahmet'}])

    return (
        <>
            <div>Sayaç: {suankiDeger}</div>
            <hr />
            <button onClick={()=>{ degeriGuncelle(suankiDeger+5) }}>Sayaç Arttır (+5)</button>

            <hr />

            <div>
                <h3>Kullanıcılar</h3>
                <ul>
                    {kullanicilar.map( kullanici=> {
                        return <li key={kullanici.id} > {kullanici.ad} </li>
                    } )}
                </ul>
            </div>
        </>
    )
}

export default Sayac