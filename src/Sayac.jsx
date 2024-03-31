import { useEffect, useState } from "react";
import useLS from "./yardimcilar/UsLS";

function Sayac() {
    const [suankiDeger, degeriGuncelle] = useLS("sayac", 0);

    return (
        <>
            <div>Sayac: {suankiDeger}</div>
            <hr />
            <button onClick={() => degeriGuncelle(suankiDeger + 5)}>Sayac Arttir (+5)</button>
        </>
    )
}

export default Sayac;