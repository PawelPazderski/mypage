import React from 'react';

import './home.scss'

const Home = () => {


    return (
        <>
        <div className="home-container">
            
            <div className='home-container-foto'></div>
            <div className='home-container-text'>
                <h1>Witaj na mojej stronie!</h1>
                <p>Pracuję jako Projektant graficzny od ponad 6 lat, zajmując się zarówno obsługą klientów indywidualnych, jak też zadaniami dużej drukarni. Zajmuję się brandingiem, projektami folderów, katalogów, opakowań i wielu innych materiałów do druku i nie tylko. Mam również przyjemność być grafikiem prowadzącym ostatnich ośmiu wydań magazynu <a href="https://osobowosciisukcesy.pl/aktualny-numer-online/" target="blank">Osobowości i Sukcesy</a>.</p>

                {/* <p>Wcześniej wiele lat byłem związany z branżą gastronomiczną, prowadząc własną działalność. Specyfika rynku, trudności jakich w branży nie brakuje a także, może przede wszystkim fakt pojawienia się w moim życiu moich cudownych synków skłoniły mnie do poszukiwań nowej drogi zawodowej. Przemieniłem wówczas swoje hobby, jakim 
                była grafika komputerowa w pracę zawodową, kończąc dwuletnią Szkołę Sztuk Pięknych jako plastyk - specjalność techniki graficzne.</p> */}

                <p>Od dłuższego czasu interesuje mnie też IT - szukam nowych wyzwań i przede wszystkim możliwości rozwoju zawodowego. Pierwsze kroki stawiałem na kursie Frontend Developer - React w CodersLab. Udział w ogólnopolskim projekcie Intive Patronage 2023 dał mi możliwość spróbowania swoich sił w zespole frontendowym dużego projektu i poznania nowych technologii. </p>

                <a href="./portfolio" className='strong-text'>Zapraszam serdecznie do obejrzenia moich prac i kontaktu.</a>
            </div>
        </div>
        </>
    )
}


export default Home;
