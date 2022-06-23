import React from 'react';

import './home.scss'

const Home = () => {


    return (
        <>
        <div className="home-container">
            <div className='home-container-foto'></div>
            <div className='home-container-text'>
                <h1>Witaj na mojej stronie!</h1>
                <p>Nazywam się Paweł Pazderski i poszukuję pracy jako Junior Frontend Developer.</p>
                <p>Od niemal 5 lat pracuję jako grafik-projektant w Studio Graficznym, zajmując się zarówno obsługą klientów indywidualnych, jak też dużej drukarni, przy której mieści się studio. Zajmuję się projektami folderów, katalogów, opakowań i wielu innych materiałów do druku i nie tylko. Mam również przyjemność być grafikiem prowadzącym ostatnich siedmiu wydań magazynu Osobowości i Sukcesy.</p>
                <p>Wcześniej wiele lat byłem związany z branżą gastronomiczną, prowadząc własną działalność. Specyfika rynku, trudności jakich w branży nie brakuje a także, może przede wszystkim fakt pojawienia się w moim życiu moich cudownych synków skłoniły mnie do poszukiwań nowej drogi zawodowej. Przemieniłem wówczas swoje hobby, jakim 
                była grafika komputerowa w pracę zawodową, kończąc dwuletnią Szkołę Sztuk Pięknych jako plastyk - specjalność techniki graficzne.</p>

                <p>W ostatnim czasie w poszukiwaniu nowych wyzwań i zaspokojenia chęci rozwoju zdecydowałem się na kurs Frontend Developer - React. Efekty tego kursu można zobaczyć na tej stronie, jak też w kilku projektach w dziale portfolio. Przede mną jeszcze z pewnością sporo nauki, ale tej się nie boję. Wiem, że to moja droga na przyszłość.</p>

                <p className='strong-text'>Zapraszam serdecznie do obejrzenia moich prac i kontaktu.</p>
            </div>
        </div>
        </>
    )
}


export default Home;