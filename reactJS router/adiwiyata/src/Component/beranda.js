import React from 'react'
import './beranda.css'
class beranda extends React.Component {
    render() {
        return (
            <div>
                <div className="titel">
                    <h1>Adiwiyata</h1>
                    <div className="line"></div>
                </div>
                <div className="box">
                    <div className="gambar">
                        <img src="/images/Adiwiyata.png" />
                    </div>
                    <div className="jelas">
                        <p>Adiwiyata adalah upaya membangun program atau wadah yang baik dan ideal untuk mendapatkan
                        ilmu pengetahuan dan berbagai norma serta etika yang dapat menjadi dasar manusia menuju
                        terciptanya kesejahteraan hidup untuk Cita-cita pembangunan berkelanjutan. Adiwiyata [1]
                            merupakan nama program pendidikan lingkungan hidup.</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default beranda;