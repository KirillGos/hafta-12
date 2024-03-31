import useResize from "./yardimcilar/useResize"

function Ekran() {
    const ekranBilgi = useResize()

    if(ekranBilgi[0] < 500) 
        return <p style={{color: "red"}}>Hata</p>
    return (

        <>
            <div>
                <strong>Genişlik:</strong> {ekranBilgi[0]} <br />
                <strong>Yükseklik:</strong> {ekranBilgi[1]} <br />
            </div>
        </>
    )
}

export default Ekran