import React from 'react'
import "./gallery.css"
class gallery extends React.Component {
    render() {
        return (
            <div>
                <div className="wadah">
                    <div className="titel">
                        <h1>Galeri</h1>
                        <div className="line"></div>
                    </div>
                    <div className="inner">
                        <div className="galeri">
                            <img src="/images/503733.jpg"></img>
                            <img src="/images/DSCN8388.jpg"></img>
                            <img src="/images/hidroponik.jfif"></img>
                            <img src="/images/Hidroponik-1.png"></img>
                            <img src="/images/COVERRRRR.jpg"></img>
                            <img src="/images/DSCN2372.JPG"></img>
                            <img src="/images/Foto0430.jpg"></img>
                            <img src="/images/sekolah-adiwiyata-madiun.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default gallery;